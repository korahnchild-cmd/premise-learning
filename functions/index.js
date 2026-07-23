/* PBS 학습법 — 카카오/네이버 로그인 브릿지 Cloud Functions
   ------------------------------------------------------------------
   Firebase Auth는 카카오/네이버를 네이티브 지원하지 않는다. 그래서 둘 다 같은 패턴을 쓴다:
   1) 클라이언트가 카카오/네이버 인증 화면으로 리다이렉트됐다가 authorization code를 받아온다
      (팝업 방식은 브라우저/확장프로그램에 막히는 경우가 많아 리다이렉트로 통일함)
   2) 그 code를 여기로 보내면, 이 함수가 카카오/네이버 서버에 직접 code→토큰 교환 +
      프로필 조회를 요청한다
   3) 검증되면 Firebase Custom Token을 발급해 클라이언트에 돌려준다
      (uid는 "kakao:12345" / "naver:67890" 형태로 고정 — 구글 네이티브 uid와 절대 안 겹침)

   카카오는 REST API 키만으로 code 교환이 가능해서(카카오 콘솔에서 별도 Client Secret을
   켜지 않은 기본 상태) 비밀값 취급이 필요 없다 — client_id는 로그인 URL에도 그대로
   노출되는 공개 식별자라 그냥 상수로 박아둔다. 네이버는 client_secret이 반드시 필요해서
   Firebase Secret Manager(NAVER_CLIENT_ID/NAVER_CLIENT_SECRET)에서 가져온다. */

const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");

admin.initializeApp();

const NAVER_CLIENT_ID = defineSecret("NAVER_CLIENT_ID");
const NAVER_CLIENT_SECRET = defineSecret("NAVER_CLIENT_SECRET");

const KAKAO_REST_API_KEY = "0cb21928fc35c5208313275e61c494a8";
const REDIRECT_URI = "https://pbslearning.co.kr/login.html";
const REGION = "asia-northeast3"; // 서울 리전

async function ensureAuthUser(uid, displayName, email) {
  try {
    await admin.auth().getUser(uid);
  } catch (e) {
    if (e.code !== "auth/user-not-found") throw e;
    await admin.auth().createUser({
      uid,
      displayName: displayName || undefined,
      email: email || undefined
    });
  }
}

/* ===== 카카오 =====
   클라이언트가 받아온 authorization code를 카카오 토큰 엔드포인트에서 access token으로
   교환한 뒤(redirect_uri가 로그인 URL 요청 때와 정확히 같아야 함), /v2/user/me로 프로필을 가져온다. */
exports.kakaoLogin = onCall({ region: REGION }, async (request) => {
  const code = request.data && request.data.code;
  if (!code) throw new HttpsError("invalid-argument", "code가 필요해");

  const tokenUrl = new URL("https://kauth.kakao.com/oauth/token");
  tokenUrl.searchParams.set("grant_type", "authorization_code");
  tokenUrl.searchParams.set("client_id", KAKAO_REST_API_KEY);
  tokenUrl.searchParams.set("redirect_uri", REDIRECT_URI);
  tokenUrl.searchParams.set("code", code);

  const tokenRes = await fetch(tokenUrl.toString(), { method: "POST" });
  const tokenBody = await tokenRes.json();
  if (!tokenRes.ok || !tokenBody.access_token) {
    throw new HttpsError("unauthenticated", "카카오 토큰 교환 실패: " + JSON.stringify(tokenBody));
  }

  const meRes = await fetch("https://kapi.kakao.com/v2/user/me", {
    headers: { Authorization: `Bearer ${tokenBody.access_token}` }
  });
  if (!meRes.ok) throw new HttpsError("unauthenticated", "카카오 프로필 조회 실패");
  const profile = await meRes.json();

  const uid = `kakao:${profile.id}`;
  const nickname =
    (profile.kakao_account && profile.kakao_account.profile && profile.kakao_account.profile.nickname) ||
    "카카오 파트너";
  await ensureAuthUser(uid, nickname, null);

  const token = await admin.auth().createCustomToken(uid, { provider: "kakao" });
  return { token, name: nickname };
});

/* ===== 네이버 =====
   클라이언트는 authorization code + state만 받아서 넘긴다(access token 아님).
   code → access token 교환은 client_secret이 필요해서 반드시 여기(서버)에서만 한다. */
exports.naverLogin = onCall(
  { region: REGION, secrets: [NAVER_CLIENT_ID, NAVER_CLIENT_SECRET] },
  async (request) => {
    const code = request.data && request.data.code;
    const state = request.data && request.data.state;
    if (!code || !state) throw new HttpsError("invalid-argument", "code/state가 필요해");

    const tokenUrl = new URL("https://nid.naver.com/oauth2.0/token");
    tokenUrl.searchParams.set("grant_type", "authorization_code");
    tokenUrl.searchParams.set("client_id", NAVER_CLIENT_ID.value());
    tokenUrl.searchParams.set("client_secret", NAVER_CLIENT_SECRET.value());
    tokenUrl.searchParams.set("code", code);
    tokenUrl.searchParams.set("state", state);

    const tokenRes = await fetch(tokenUrl.toString());
    const tokenBody = await tokenRes.json();
    if (!tokenRes.ok || !tokenBody.access_token) {
      throw new HttpsError("unauthenticated", "네이버 토큰 교환 실패");
    }

    const meRes = await fetch("https://openapi.naver.com/v1/nid/me", {
      headers: { Authorization: `Bearer ${tokenBody.access_token}` }
    });
    const meBody = await meRes.json();
    if (meBody.resultcode !== "00") throw new HttpsError("unauthenticated", "네이버 프로필 조회 실패");
    const profile = meBody.response;

    const uid = `naver:${profile.id}`;
    const name = profile.name || profile.nickname || "네이버 파트너";
    await ensureAuthUser(uid, name, profile.email || null);

    const token = await admin.auth().createCustomToken(uid, { provider: "naver" });
    return { token, name };
  }
);
