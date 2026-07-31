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
const { onSchedule } = require("firebase-functions/v2/scheduler");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const crypto = require("crypto");

admin.initializeApp();

const NAVER_CLIENT_ID = defineSecret("NAVER_CLIENT_ID");
const NAVER_CLIENT_SECRET = defineSecret("NAVER_CLIENT_SECRET");
const KAKAO_CLIENT_SECRET = defineSecret("KAKAO_CLIENT_SECRET"); // 카카오 콘솔 "보안"에서 활성화된 앱만 해당
const TOSS_SECRET_KEY = defineSecret("TOSS_SECRET_KEY"); // 토스페이먼츠 시크릿키(서버 전용) — 상단 선언(cancelSubscription 등에서 참조)

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
exports.kakaoLogin = onCall({ region: REGION, secrets: [KAKAO_CLIENT_SECRET] }, async (request) => {
  const code = request.data && request.data.code;
  if (!code) throw new HttpsError("invalid-argument", "code가 필요해");

  const tokenUrl = new URL("https://kauth.kakao.com/oauth/token");
  tokenUrl.searchParams.set("grant_type", "authorization_code");
  tokenUrl.searchParams.set("client_id", KAKAO_REST_API_KEY);
  tokenUrl.searchParams.set("redirect_uri", REDIRECT_URI);
  tokenUrl.searchParams.set("code", code);
  tokenUrl.searchParams.set("client_secret", KAKAO_CLIENT_SECRET.value());

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
      throw new HttpsError("unauthenticated", "네이버 토큰 교환 실패: " + JSON.stringify(tokenBody));
    }

    const meRes = await fetch("https://openapi.naver.com/v1/nid/me", {
      headers: { Authorization: `Bearer ${tokenBody.access_token}` }
    });
    const meBody = await meRes.json();
    if (meBody.resultcode !== "00") throw new HttpsError("unauthenticated", "네이버 프로필 조회 실패: " + JSON.stringify(meBody));
    const profile = meBody.response;

    const uid = `naver:${profile.id}`;
    const name = profile.name || profile.nickname || "네이버 파트너";
    await ensureAuthUser(uid, name, profile.email || null);

    const token = await admin.auth().createCustomToken(uid, { provider: "naver" });
    return { token, name };
  }
);

/* ===== 구독/체험 (P5 · Model A: 카드 없이 체험 → 수동전환) =====
   진실원천은 Firestore users/{uid}/subscription/current. 클라이언트는 read만 가능하고
   (firestore.rules에서 write:false), 이 함수들이 Admin SDK로만 쓴다.
   ── 중요: 무료체험은 '카드 없이' 시작한다. 만료돼도 자동청구 없음(수단이 없으므로).
      만료 시 접근 차단 + '결제하고 계속' 안내가 정책. 자동전환/빌링키/사전고지 없음.
      유료 결제·빌링키·정기청구는 Phase 3~4(토스페이먼츠)에서 추가한다. */

// 서버 시계 기준 KST(UTC+9) 날짜 문자열. 클라 시계를 신뢰하지 않는다.
function kstDate(offsetDays) {
  const t = new Date(Date.now() + 9 * 3600 * 1000);
  if (offsetDays) t.setUTCDate(t.getUTCDate() + offsetDays);
  return t.toISOString().slice(0, 10);
}
function subDocRef(uid) {
  return admin.firestore().doc(`users/${uid}/subscription/current`);
}
function requireUid(request) {
  const uid = request.auth && request.auth.uid;
  if (!uid) throw new HttpsError("unauthenticated", "로그인이 필요해");
  return uid;
}

/* 카드 없이 7일 무료체험 시작 — 계정당 1회. 이미 이용 중이거나 체험 이력이 있으면 거부. */
exports.startTrial = onCall({ region: REGION }, async (request) => {
  const uid = requireUid(request);
  const plan = (request.data && request.data.plan) === "premium" ? "premium" : "basic";
  const cycle = (request.data && request.data.cycle) === "m1" ? "m1" : "m6";

  const ref = subDocRef(uid);
  const snap = await ref.get();
  const cur = snap.exists ? snap.data() : null;
  if (cur && (cur.status === "trial" || cur.status === "active" || cur.status === "paused")) {
    throw new HttpsError("failed-precondition", "이미 이용 중인 구독이 있어");
  }
  if (cur && cur.trialUsed) {
    throw new HttpsError("failed-precondition", "무료체험은 계정당 한 번만 가능해");
  }

  const data = {
    status: "trial",
    plan,
    cycle,
    method: "",              // 체험은 결제수단 없음
    hasBillingKey: false,
    trialStartedAt: kstDate(0),
    trialEndsAt: kstDate(7),
    accessUntil: kstDate(7), // 게이팅 기준: 이 날짜까지 접근 허용
    trialUsed: true,
    nextBillingAt: "",       // 자동청구 없음
    currentPeriodEnd: "",
    amount: 0,
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  };
  await ref.set(data, { merge: true });
  return { ok: true, subscription: { ...data, updatedAt: null } };
});

/* 해지 — 정기청구만 중단하고 접근은 기간 말(accessUntil)까지 유지. */
exports.cancelSubscription = onCall({ region: REGION, secrets: [TOSS_SECRET_KEY] }, async (request) => {
  const uid = requireUid(request);
  const ref = subDocRef(uid);
  const snap = await ref.get();
  if (!snap.exists) throw new HttpsError("failed-precondition", "구독 정보가 없어");
  const sub = snap.data();
  const now = admin.firestore.FieldValue.serverTimestamp();

  // 6개월 선불 중도해지 → 잔여기간 일할환급(방문판매법 계속거래). 접근은 즉시 종료.
  if (sub.status === "active" && sub.cycle === "m6" && sub.lastPaymentKey && sub.paidAt && sub.currentPeriodEnd) {
    const total = daysBetween(sub.paidAt, sub.currentPeriodEnd);      // 총 이용기간(일)
    const remaining = daysBetween(kstDate(0), sub.currentPeriodEnd);  // 잔여(일)
    let refund = 0;
    if (total > 0 && remaining > 0) {
      refund = Math.floor((sub.amount || 0) * Math.min(remaining, total) / total);
    }
    let refunded = 0;
    if (refund > 0) {
      const cancel = await tossPost(`/v1/payments/${sub.lastPaymentKey}/cancel`, {
        cancelReason: "구매자 중도 해지(잔여기간 일할환급)",
        cancelAmount: refund
      }, "cancel-" + sub.lastPaymentKey);
      if (!cancel.ok) throw new HttpsError("internal", "환급 실패: " + JSON.stringify(cancel.data));
      refunded = refund;
    }
    await ref.set({
      status: "canceled", canceledAt: kstDate(0),
      accessUntil: kstDate(0), currentPeriodEnd: kstDate(0),
      nextBillingAt: "", refundedAmount: refunded, updatedAt: now
    }, { merge: true });
    return { ok: true, refunded };
  }

  // 월 구독/체험/기타 → 정기청구만 중단, 접근은 기간 말(accessUntil)까지 유지, 환급 없음.
  await ref.set({
    status: "canceled", canceledAt: kstDate(0), nextBillingAt: "", updatedAt: now
  }, { merge: true });
  return { ok: true, refunded: 0 };
});

/* 이탈방어: 해지 대신 일시정지 — 정기청구는 스킵하되 상태/지도는 보존. */
exports.pauseSubscription = onCall({ region: REGION }, async (request) => {
  const uid = requireUid(request);
  const ref = subDocRef(uid);
  const snap = await ref.get();
  if (!snap.exists) throw new HttpsError("failed-precondition", "구독 정보가 없어");
  await ref.set({
    status: "paused",
    pausedAt: kstDate(0),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  return { ok: true };
});

exports.resumeSubscription = onCall({ region: REGION }, async (request) => {
  const uid = requireUid(request);
  const ref = subDocRef(uid);
  const snap = await ref.get();
  if (!snap.exists) throw new HttpsError("failed-precondition", "구독 정보가 없어");
  const cur = snap.data();
  if (cur.status !== "paused") throw new HttpsError("failed-precondition", "일시정지 상태가 아니야");
  const patch = {
    status: "active",
    pausedAt: admin.firestore.FieldValue.delete(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  };
  // 월 빌링은 재개 시 다음 결제일을 앞으로 재설정(소급 청구 방지).
  if (cur.cycle === "m1" && cur.hasBillingKey) {
    const next = kstAddMonths(1);
    patch.nextBillingAt = next; patch.accessUntil = next; patch.currentPeriodEnd = next;
  }
  await ref.set(patch, { merge: true });
  return { ok: true };
});

/* ===== 유료 결제 (P5 Phase 3 · 토스페이먼츠 v2) =====
   - 6개월 선불 = 일반결제(결제창) → confirmPayment (일회성, 자동갱신 없음)
   - 월 구독 = 자동결제(빌링) → issueBillingKey(빌링키 발급 + 첫 청구), 정기청구는 스케줄러(Phase4)
   보안: 시크릿키는 TOSS_SECRET_KEY(서버 전용). 금액은 서버 PRICE로만 산정·검증(클라 금액 불신, Critical 2.2).
   빌링은 카드만 지원 → 월 구독은 CARD 고정. */
const TOSS_API = "https://api.tosspayments.com";

// 서버 권위 가격표(실제 청구 총액). 화면 표기와 일치해야 함.
const PRICE = {
  basic:   { m6: 234000, m1: 49000 },
  premium: { m6: 354000, m1: 74000 }
};
const FINAL_SPARK = 19900; // 파이널 스파크 건별(베이직 · 시험당)
function planCycleAmount(plan, cycle) {
  const p = PRICE[plan === "premium" ? "premium" : "basic"];
  return cycle === "m1" ? p.m1 : p.m6;
}
function orderNameFor(plan, cycle) {
  return `PBS ${plan === "premium" ? "프리미엄" : "베이직"} ${cycle === "m1" ? "월 구독" : "6개월"}`;
}
function tossAuthHeader() {
  // Basic base64(SECRET:) — 콜론 필수(가장 흔한 실수)
  return "Basic " + Buffer.from(TOSS_SECRET_KEY.value() + ":").toString("base64");
}
async function tossPost(path, body, idempotencyKey) {
  const headers = { Authorization: tossAuthHeader(), "Content-Type": "application/json" };
  if (idempotencyKey) headers["Idempotency-Key"] = idempotencyKey;
  const res = await fetch(TOSS_API + path, { method: "POST", headers, body: JSON.stringify(body) });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}
function kstAddMonths(n) {
  const t = new Date(Date.now() + 9 * 3600 * 1000);
  t.setUTCMonth(t.getUTCMonth() + n);
  return t.toISOString().slice(0, 10);
}
// 특정 날짜(YYYY-MM-DD)에 n개월 더하기 — 정기결제 드리프트 방지(다음결제일 = 이전 결제일 기준).
function addMonthsToDate(ymd, n) {
  const d = new Date(ymd + "T00:00:00Z");
  if (isNaN(d.getTime())) return kstAddMonths(n);
  d.setUTCMonth(d.getUTCMonth() + n);
  return d.toISOString().slice(0, 10);
}
// 날짜 간 일수 차이(b - a).
function daysBetween(aYmd, bYmd) {
  const a = new Date(aYmd + "T00:00:00Z"), b = new Date(bYmd + "T00:00:00Z");
  return Math.round((b - a) / 86400000);
}

/* 주문 생성 — 서버가 금액 산정·저장. 클라는 이 orderId/amount로만 결제 요청(위변조 차단). */
exports.createOrder = onCall({ region: REGION }, async (request) => {
  const uid = requireUid(request);
  const d0 = request.data || {};

  // 파이널 스파크 건별(19,900) — 구독과 무관, 시험별 엔타이틀먼트.
  if (d0.item === "final-spark") {
    const examId = (typeof d0.examId === "string" && d0.examId) ? d0.examId.slice(0, 64) : "generic";
    const examName = (typeof d0.examName === "string") ? d0.examName.slice(0, 40) : "";
    const orderId = "pbs-" + crypto.randomUUID();
    const orderName = "파이널 스파크" + (examName ? (" · " + examName) : "");
    await admin.firestore().doc(`users/${uid}/orders/${orderId}`).set({
      item: "final-spark", examId, examName, amount: FINAL_SPARK, status: "pending",
      orderName, createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    return { ok: true, orderId, amount: FINAL_SPARK, orderName, item: "final-spark", customerKey: null };
  }

  const plan = (request.data && request.data.plan) === "premium" ? "premium" : "basic";
  const cycle = (request.data && request.data.cycle) === "m1" ? "m1" : "m6";
  const amount = planCycleAmount(plan, cycle);
  const orderId = "pbs-" + crypto.randomUUID();
  const db = admin.firestore();

  // 월 구독은 customerKey 필요 — 계정당 1개(예측불가 UUID) 생성·저장·재사용.
  let customerKey = null;
  if (cycle === "m1") {
    const billingRef = db.doc(`users/${uid}/private/billing`);
    const bsnap = await billingRef.get();
    customerKey = (bsnap.exists && bsnap.data().customerKey) ? bsnap.data().customerKey : ("cus-" + crypto.randomUUID());
    if (!bsnap.exists || !bsnap.data().customerKey) {
      await billingRef.set({ customerKey, updatedAt: admin.firestore.FieldValue.serverTimestamp() }, { merge: true });
    }
  }

  await db.doc(`users/${uid}/orders/${orderId}`).set({
    plan, cycle, amount, status: "pending",
    orderName: orderNameFor(plan, cycle),
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  });
  return { ok: true, orderId, amount, orderName: orderNameFor(plan, cycle), customerKey };
});

/* 일반결제(6개월 선불) 승인 — successUrl 값 검증 후 토스 승인. */
exports.confirmPayment = onCall({ region: REGION, secrets: [TOSS_SECRET_KEY] }, async (request) => {
  const uid = requireUid(request);
  const d = request.data || {};
  const paymentKey = d.paymentKey, orderId = d.orderId, amount = d.amount;
  if (!paymentKey || !orderId || amount == null) throw new HttpsError("invalid-argument", "결제 정보가 부족해");
  const db = admin.firestore();
  const orderRef = db.doc(`users/${uid}/orders/${orderId}`);
  const osnap = await orderRef.get();
  if (!osnap.exists) throw new HttpsError("not-found", "주문을 찾을 수 없어");
  const order = osnap.data();
  if (order.status === "done") return { ok: true, already: true };
  // 금액 위변조 방지: 서버 저장 금액과 대조
  if (Number(amount) !== Number(order.amount)) throw new HttpsError("failed-precondition", "결제 금액이 일치하지 않아");

  const confirm = await tossPost("/v1/payments/confirm", { paymentKey, orderId, amount: Number(order.amount) }, orderId);
  if (!confirm.ok) throw new HttpsError("internal", "토스 승인 실패: " + JSON.stringify(confirm.data));

  const now = admin.firestore.FieldValue.serverTimestamp();

  // 파이널 스파크 건별 — 구독 변경 없이 시험별 엔타이틀먼트만 발급.
  if (order.item === "final-spark") {
    const eid = order.examId || "generic";
    await orderRef.set({ status: "done", paidAt: kstDate(0) }, { merge: true });
    await db.doc(`users/${uid}/entitlements/${eid}`).set({
      type: "final-spark", examId: eid, examName: order.examName || "",
      paidAt: kstDate(0), createdAt: now
    }, { merge: true });
    await db.doc(`users/${uid}/payments/${paymentKey}`).set({
      orderId, amount: order.amount, item: "final-spark", examId: eid,
      type: "final-spark", method: confirm.data.method || "",
      approvedAt: confirm.data.approvedAt || "", createdAt: now
    });
    return { ok: true, item: "final-spark" };
  }

  const until = kstAddMonths(order.cycle === "m1" ? 1 : 6);
  await orderRef.set({ status: "done", paidAt: kstDate(0) }, { merge: true });
  await db.doc(`users/${uid}/payments/${paymentKey}`).set({
    orderId, amount: order.amount, plan: order.plan, cycle: order.cycle,
    method: confirm.data.method || "", type: "subscription",
    approvedAt: confirm.data.approvedAt || "", createdAt: now
  });
  await subDocRef(uid).set({
    status: "active", plan: order.plan, cycle: order.cycle,
    method: confirm.data.method || "card",
    accessUntil: until, currentPeriodEnd: until,
    nextBillingAt: "",           // 6개월 선불은 일회성(자동갱신 없음)
    hasBillingKey: false, amount: order.amount,
    lastPaymentKey: paymentKey, paidAt: kstDate(0), // 중도해지 환급 참조용
    updatedAt: now
  }, { merge: true });
  return { ok: true };
});

/* 월 구독 빌링키 발급 + 첫 청구. (successUrl로 authKey·customerKey 수신) */
exports.issueBillingKey = onCall({ region: REGION, secrets: [TOSS_SECRET_KEY] }, async (request) => {
  const uid = requireUid(request);
  const d = request.data || {};
  const authKey = d.authKey, customerKey = d.customerKey, orderId = d.orderId;
  if (!authKey || !customerKey || !orderId) throw new HttpsError("invalid-argument", "빌링 정보가 부족해");
  const db = admin.firestore();

  const billingRef = db.doc(`users/${uid}/private/billing`);
  const bsnap = await billingRef.get();
  if (!bsnap.exists || bsnap.data().customerKey !== customerKey) {
    throw new HttpsError("permission-denied", "customerKey가 일치하지 않아");
  }
  const orderRef = db.doc(`users/${uid}/orders/${orderId}`);
  const osnap = await orderRef.get();
  if (!osnap.exists) throw new HttpsError("not-found", "주문을 찾을 수 없어");
  const order = osnap.data();
  if (order.status === "done") return { ok: true, already: true };

  // 1) 빌링키 발급 (authKey → billingKey)
  const issue = await tossPost("/v1/billing/authorizations/issue", { authKey, customerKey });
  if (!issue.ok || !issue.data.billingKey) throw new HttpsError("internal", "빌링키 발급 실패: " + JSON.stringify(issue.data));
  const billingKey = issue.data.billingKey;
  await billingRef.set({ billingKey, updatedAt: admin.firestore.FieldValue.serverTimestamp() }, { merge: true });

  // 2) 첫 달 청구
  const charge = await tossPost(`/v1/billing/${billingKey}`, {
    customerKey, amount: order.amount, orderId, orderName: order.orderName
  }, orderId);
  if (!charge.ok) throw new HttpsError("internal", "첫 청구 실패: " + JSON.stringify(charge.data));

  const now = admin.firestore.FieldValue.serverTimestamp();
  const until = kstAddMonths(1);
  await orderRef.set({ status: "done", paidAt: kstDate(0) }, { merge: true });
  await db.doc(`users/${uid}/payments/${charge.data.paymentKey || orderId}`).set({
    orderId, amount: order.amount, plan: order.plan, cycle: "m1", method: "card", type: "billing-first",
    approvedAt: charge.data.approvedAt || "", createdAt: now
  });
  await subDocRef(uid).set({
    status: "active", plan: order.plan, cycle: "m1", method: "card",
    accessUntil: until, currentPeriodEnd: until, nextBillingAt: until,
    hasBillingKey: true, amount: order.amount,
    lastPaymentKey: (charge.data.paymentKey || orderId), paidAt: kstDate(0),
    updatedAt: now
  }, { merge: true });
  return { ok: true };
});

/* ===== 정기청구 (P5 Phase 4) =====
   한 유저의 월 빌링 1회 청구 — 스케줄러와 테스트 callable이 공유. */
async function chargeRecurringForUser(uid, sub) {
  const db = admin.firestore();
  const bsnap = await db.doc(`users/${uid}/private/billing`).get();
  if (!bsnap.exists || !bsnap.data().billingKey) return { ok: false, reason: "no-billing-key" };
  const billingKey = bsnap.data().billingKey;
  const customerKey = bsnap.data().customerKey;
  const amount = sub.amount || planCycleAmount(sub.plan, "m1");
  const orderId = "pbs-rec-" + crypto.randomUUID();
  const ref = db.doc(`users/${uid}/subscription/current`);
  const now = admin.firestore.FieldValue.serverTimestamp();

  const charge = await tossPost(`/v1/billing/${billingKey}`, {
    customerKey, amount, orderId, orderName: orderNameFor(sub.plan, "m1")
  }, orderId);
  if (!charge.ok) {
    await ref.set({ status: "past_due", lastChargeError: JSON.stringify(charge.data).slice(0, 300), updatedAt: now }, { merge: true });
    return { ok: false, data: charge.data };
  }
  const next = addMonthsToDate(sub.nextBillingAt || kstDate(0), 1); // 드리프트 방지(이전 결제일 기준)
  await ref.set({
    status: "active", nextBillingAt: next, accessUntil: next, currentPeriodEnd: next,
    lastPaymentKey: (charge.data.paymentKey || orderId), paidAt: kstDate(0), updatedAt: now
  }, { merge: true });
  await db.doc(`users/${uid}/payments/${charge.data.paymentKey || orderId}`).set({
    orderId, amount, plan: sub.plan, cycle: "m1", method: "card", type: "billing-recurring",
    approvedAt: charge.data.approvedAt || "", createdAt: now
  });
  return { ok: true, amount, next };
}

/* 정기청구 스케줄러 — 매일 KST 03:00, nextBillingAt 도래한 월 빌링 구독을 자동청구.
   토스는 자체 스케줄링 미제공 → 직접 구현. collectionGroup 인덱스 필요(firestore.indexes.json). */
exports.chargeDueSubscriptions = onSchedule(
  { schedule: "0 3 * * *", timeZone: "Asia/Seoul", region: REGION, secrets: [TOSS_SECRET_KEY] },
  async () => {
    const db = admin.firestore();
    const today = kstDate(0);
    const snap = await db.collectionGroup("subscription")
      .where("status", "==", "active").where("cycle", "==", "m1").where("nextBillingAt", "<=", today).get();
    let charged = 0, failed = 0;
    for (const docSnap of snap.docs) {
      const sub = docSnap.data();
      if (!sub.hasBillingKey || !sub.nextBillingAt) continue;
      const userRef = docSnap.ref.parent.parent;
      if (!userRef) continue;
      try {
        const r = await chargeRecurringForUser(userRef.id, sub);
        if (r.ok) charged++; else failed++;
      } catch (e) { failed++; console.error("[recurring] error", userRef.id, e && e.message); }
    }
    console.log(`[recurring] charged=${charged} failed=${failed} scanned=${snap.size}`);
    return;
  }
);

/* 테스트용 — 호출자 본인의 월 빌링을 지금 즉시 1회 청구(날짜 무시). 스케줄러와 동일 로직 검증용. */
exports.chargeMyBillingNow = onCall({ region: REGION, secrets: [TOSS_SECRET_KEY] }, async (request) => {
  const uid = requireUid(request);
  const snap = await subDocRef(uid).get();
  if (!snap.exists) throw new HttpsError("failed-precondition", "구독 정보가 없어");
  const sub = snap.data();
  if (sub.cycle !== "m1" || !sub.hasBillingKey) throw new HttpsError("failed-precondition", "월 빌링 구독이 아니야");
  const r = await chargeRecurringForUser(uid, sub);
  if (!r.ok) throw new HttpsError("internal", "청구 실패: " + JSON.stringify(r.data || r.reason));
  return r;
});

/* ============================================================================
   관리자 전용 — 베타 테스터 플랜 부여 (Admin SDK로만 subscription 문서를 쓴다)

   보안: 호출자가 관리자인지 서버에서 검증한다. 클라이언트 화면의 관리자 판정은
   '메뉴 노출' 수준이고, 실제 권한 경계는 여기다. 아래 목록에 없는 계정이 호출하면
   permission-denied로 거부된다.

   부여된 구독은 hasBillingKey:false, nextBillingAt:"" 이므로
   정기청구 스케줄러(chargeDueSubscriptions)가 절대 청구하지 않는다.
   ========================================================================== */
const ADMIN_EMAILS = ["korahnchild@gmail.com"];
const ADMIN_UIDS = ["1owkGOnh2vemk705JfBeJhGXvjf1"];

function requireAdmin(request) {
  const uid = request.auth && request.auth.uid;
  if (!uid) throw new HttpsError("unauthenticated", "로그인이 필요합니다");
  const email = String((request.auth.token && request.auth.token.email) || "").toLowerCase();
  const ok = ADMIN_UIDS.indexOf(uid) >= 0 || (email && ADMIN_EMAILS.indexOf(email) >= 0);
  if (!ok) throw new HttpsError("permission-denied", "관리자만 사용할 수 있습니다");
  return uid;
}

/* 이메일 또는 UID로 계정 1건 조회 + 현재 구독 상태 반환 */
async function lookupUser(query) {
  const q = String(query || "").trim();
  if (!q) throw new HttpsError("invalid-argument", "이메일 또는 UID를 입력하세요");
  let rec = null;
  try {
    rec = q.indexOf("@") >= 0
      ? await admin.auth().getUserByEmail(q)
      : await admin.auth().getUser(q);
  } catch (e) {
    throw new HttpsError("not-found", "해당 계정을 찾을 수 없습니다: " + q);
  }
  const snap = await subDocRef(rec.uid).get();
  return {
    uid: rec.uid,
    email: rec.email || "",
    name: rec.displayName || "",
    provider: (rec.providerData && rec.providerData[0] && rec.providerData[0].providerId) || "custom",
    createdAt: (rec.metadata && rec.metadata.creationTime) || "",
    lastLoginAt: (rec.metadata && rec.metadata.lastSignInTime) || "",
    subscription: snap.exists ? snap.data() : null
  };
}

exports.adminFindUser = onCall({ region: REGION }, async (request) => {
  requireAdmin(request);
  return await lookupUser(request.data && request.data.query);
});

/* 최근 가입 계정 목록 + 구독 상태 (베타 코호트 확인용) */
exports.adminListUsers = onCall({ region: REGION }, async (request) => {
  requireAdmin(request);
  const limit = Math.min(Math.max(Number((request.data && request.data.limit) || 50), 1), 200);
  const res = await admin.auth().listUsers(limit);
  const users = res.users.map((u) => ({
    uid: u.uid,
    email: u.email || "",
    name: u.displayName || "",
    provider: (u.providerData && u.providerData[0] && u.providerData[0].providerId) || "custom",
    createdAt: (u.metadata && u.metadata.creationTime) || "",
    lastLoginAt: (u.metadata && u.metadata.lastSignInTime) || ""
  }));
  // 구독 상태를 병렬로 붙인다 (베타 규모 20~30명 기준으로 충분히 가볍다)
  const subs = await Promise.all(users.map((u) => subDocRef(u.uid).get().catch(() => null)));
  users.forEach((u, i) => {
    const s = subs[i];
    const d = s && s.exists ? s.data() : null;
    u.status = d ? d.status : "none";
    u.plan = d ? d.plan : "";
    u.accessUntil = d ? (d.accessUntil || d.trialEndsAt || "") : "";
    u.grantedByAdmin = !!(d && d.grantedByAdmin);
  });
  users.sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
  return { users, count: users.length };
});

/* 플랜 강제 부여 — 기간(일) 지정. 결제수단 없이 접근만 열어준다. */
exports.adminGrantPlan = onCall({ region: REGION }, async (request) => {
  const adminUid = requireAdmin(request);
  const d = request.data || {};
  const plan = d.plan === "premium" ? "premium" : "basic";
  const days = Math.min(Math.max(Number(d.days || 7), 1), 400);
  const target = await lookupUser(d.uid || d.email || d.query);

  const until = kstDate(days);
  const data = {
    status: "active",
    plan,
    cycle: "m6",
    method: "admin_grant",
    hasBillingKey: false,     // 정기청구 스케줄러가 건너뛰는 조건
    nextBillingAt: "",        // 자동청구 없음
    accessUntil: until,       // 게이팅 기준일
    currentPeriodEnd: until,
    amount: 0,
    /* 관리자 부여는 '선물'이지 무료체험 소진이 아니다. 베타 테스터가 부여 종료 후
       정식 7일 무료체험을 그대로 받을 수 있게 매번 false로 되돌린다.
       (관리자만 호출 가능하므로 체험 무한반복 악용 경로는 없다) */
    trialUsed: false,
    grantedByAdmin: true,
    grantedBy: adminUid,
    grantedAt: kstDate(0),
    grantNote: String(d.note || "").slice(0, 200),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  };
  await subDocRef(target.uid).set(data, { merge: true });
  return { ok: true, uid: target.uid, email: target.email, plan, accessUntil: until };
});

/* 부여 회수 — 접근을 즉시 끊는다. 실제 결제 구독은 이 함수로 건드리지 않는다. */
exports.adminRevokePlan = onCall({ region: REGION }, async (request) => {
  requireAdmin(request);
  const d = request.data || {};
  const target = await lookupUser(d.uid || d.email || d.query);
  const cur = target.subscription;
  if (cur && cur.status === "active" && !cur.grantedByAdmin) {
    throw new HttpsError("failed-precondition", "실제 결제 구독입니다. 관리자 부여 건만 회수할 수 있습니다.");
  }
  await subDocRef(target.uid).set({
    status: "none",
    accessUntil: "",
    currentPeriodEnd: "",
    nextBillingAt: "",
    /* 회수 후에는 정식 무료체험을 받을 수 있는 깨끗한 상태로 되돌린다.
       베타 종료 시 이 함수로 일괄 회수하면 테스터가 checkout으로 밀리지 않고
       onboarding에서 정상적으로 7일 무료체험을 시작하게 된다. */
    trialUsed: false,
    trialEndsAt: "",
    grantedByAdmin: false,
    revokedAt: kstDate(0),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  return { ok: true, uid: target.uid, email: target.email };
});

/* 베타 코호트 일괄 부여 — 이메일/UID 목록을 한 번에 처리 */
exports.adminGrantBulk = onCall({ region: REGION }, async (request) => {
  const adminUid = requireAdmin(request);
  const d = request.data || {};
  const plan = d.plan === "premium" ? "premium" : "basic";
  const days = Math.min(Math.max(Number(d.days || 7), 1), 400);
  const list = Array.isArray(d.targets) ? d.targets.slice(0, 100) : [];
  if (!list.length) throw new HttpsError("invalid-argument", "대상 목록이 비어 있습니다");

  const until = kstDate(days);
  const results = [];
  for (const q of list) {
    try {
      const t = await lookupUser(q);
      await subDocRef(t.uid).set({
        status: "active", plan, cycle: "m6", method: "admin_grant",
        hasBillingKey: false, nextBillingAt: "", accessUntil: until, currentPeriodEnd: until,
        amount: 0, trialUsed: false, // 부여는 무료체험 소진이 아니다(adminGrantPlan과 동일 정책)
        grantedByAdmin: true, grantedBy: adminUid, grantedAt: kstDate(0),
        grantNote: String(d.note || "").slice(0, 200),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      results.push({ query: q, ok: true, uid: t.uid, email: t.email });
    } catch (e) {
      results.push({ query: q, ok: false, error: (e && e.message) || "실패" });
    }
  }
  return { ok: true, plan, accessUntil: until, results };
});
