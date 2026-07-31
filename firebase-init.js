/* ===== Firebase 초기화 (P5 결제/계정 연동 · 구글/카카오/네이버 로그인) =====
   firebaseConfig는 비밀키가 아니라 "이 앱이 어느 Firebase 프로젝트에 연결되는지" 알려주는
   공개 식별자다. 실제 접근 통제는 Firestore 보안규칙 + Firebase Auth가 담당한다.
   배포 전 필수: Firebase 콘솔 → Authentication → Settings → Authorized domains에
   pbslearning.co.kr 추가돼 있어야 signInWithPopup이 동작함(안 하면 auth/unauthorized-domain).
   로컬 테스트도 file://로는 안 되고 http 서버로 열어야 함(예: python -m http.server).

   카카오/네이버는 Firebase가 네이티브 지원하지 않는 provider라, login.html에서 각 플랫폼
   인증 화면으로 리다이렉트시켰다가 받아온 authorization code를 Cloud Functions
   (kakaoLogin/naverLogin, asia-northeast3)로 보내 Custom Token을 발급받아 로그인한다. */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithCustomToken,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import {
  getFunctions,
  httpsCallable
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-functions.js";
import {
  getFirestore,
  doc,
  getDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxjIgGWwDEg4guQsidmZWbtEze80TaQf4",
  authDomain: "pbs-learning-74fb2.firebaseapp.com",
  projectId: "pbs-learning-74fb2",
  storageBucket: "pbs-learning-74fb2.firebasestorage.app",
  messagingSenderId: "600184588273",
  appId: "1:600184588273:web:9b6c5cfcad9659673c6650"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const functions = getFunctions(app, "asia-northeast3"); // Cloud Functions 배포 리전과 반드시 일치해야 함
const db = getFirestore(app);

async function bridgeLogin(fnName, payload) {
  const call = httpsCallable(functions, fnName);
  const res = await call(payload);
  const cred = await signInWithCustomToken(auth, res.data.token);
  return { user: cred.user, name: res.data.name };
}

function callFn(name, payload) {
  return httpsCallable(functions, name)(payload || {}).then((r) => r.data);
}

window.PremiseAuth = {
  auth,
  signInWithGoogle: () => signInWithPopup(auth, googleProvider),
  signInWithKakaoCode: (code) => bridgeLogin("kakaoLogin", { code }),
  signInWithNaverCode: (code, state) => bridgeLogin("naverLogin", { code, state }),
  signOutFirebase: () => signOut(auth).catch(() => {}),
  onChange: (cb) => onAuthStateChanged(auth, cb)
};

/* ===== 구독/결제 브릿지 (P5 · 서버 진실원천) =====
   Cloud Function을 호출해 Firestore subscription/current 를 갱신하고,
   onSnapshot 으로 그 문서를 실시간 구독해 PremiseStore 에 미러링한다.
   결제 실연동(subscribe)은 Phase 3(토스페이먼츠)에서 추가. */
window.PremiseBilling = {
  startTrial: (plan, cycle) => callFn("startTrial", { plan, cycle }),
  cancelSubscription: () => callFn("cancelSubscription", {}),
  pauseSubscription: () => callFn("pauseSubscription", {}),
  resumeSubscription: () => callFn("resumeSubscription", {}),
  // Phase 3 · 유료 결제(토스페이먼츠)
  createOrder: (plan, cycle) => callFn("createOrder", { plan, cycle }),
  createFinalSparkOrder: (examId, examName) => callFn("createOrder", { item: "final-spark", examId, examName }),
  confirmPayment: (paymentKey, orderId, amount) => callFn("confirmPayment", { paymentKey, orderId, amount }),
  issueBillingKey: (authKey, customerKey, orderId) => callFn("issueBillingKey", { authKey, customerKey, orderId }),
  chargeMyBillingNow: () => callFn("chargeMyBillingNow", {}), // 테스트: 본인 월 빌링 즉시 1회 청구
  /* 관리자 전용 — 서버에서 호출자 권한을 다시 검증한다(클라 판정은 메뉴 노출용일 뿐). */
  adminFindUser: (query) => callFn("adminFindUser", { query }),
  adminListUsers: (limit) => callFn("adminListUsers", { limit: limit || 50 }),
  adminGrantPlan: (query, plan, days, note) => callFn("adminGrantPlan", { query, plan, days, note }),
  adminRevokePlan: (query) => callFn("adminRevokePlan", { query }),
  adminGrantBulk: (targets, plan, days, note) => callFn("adminGrantBulk", { targets, plan, days, note }),
  // 파이널 스파크 엔타이틀먼트 1회 조회 (없으면 null)
  getEntitlement: (entId) => {
    const u = auth.currentUser;
    if (!u) return Promise.resolve(null);
    return getDoc(doc(db, "users", u.uid, "entitlements", String(entId)))
      .then((s) => (s.exists() ? s.data() : null)).catch(() => null);
  },
  // 구독문서 실시간 감시. cb(subOrNull) 호출. 해제 함수 반환.
  watch: (uid, cb) =>
    onSnapshot(
      doc(db, "users", uid, "subscription", "current"),
      (snap) => cb(snap.exists() ? snap.data() : null),
      (err) => console.warn("[PremiseBilling] subscription watch error:", err)
    )
};

/* 로그인/로그아웃에 따라 구독문서 감시를 붙였다 뗀다. 값이 오면 PremiseStore에 반영. */
let _subUnsub = null;
onAuthStateChanged(auth, (user) => {
  if (_subUnsub) { _subUnsub(); _subUnsub = null; }
  /* 로컬 user를 서버 계정 정보로 동기화 — 예전 로그인에서 저장된 가짜 이메일을 복구한다.
     관리자 판정이 이메일에 의존하므로 이 동기화가 선행돼야 한다. */
  try {
    if (user && window.PremiseStore && typeof PremiseStore.syncAuthUser === "function") {
      PremiseStore.syncAuthUser({ uid: user.uid, email: user.email || "", name: user.displayName || "" });
    } else if (!user && window.PremiseStore && typeof PremiseStore.logout === "function") {
      /* Firebase 세션이 없다 = 로그아웃 상태다. 로컬 user.loggedIn도 반드시 같이 내린다.
         예전에는 여기서 그냥 넘어가서, 로컬 플래그가 true로 남으면 아무도 내려주지
         않았다(syncAuthUser는 true로 올리기만 한다). 그 결과 로그아웃 뒤에도 로컬이
         '로그인됨'으로 남아, '무료 체험'을 누르면 로그인 화면을 건너뛰고 그대로
         들어가지는 증상이 생겼다. 서버 세션을 진실원천으로 삼아 동기화한다.
         단, 관리자 QA 스위처는 Firebase 로그인 없이 회원 상태를 흉내 내므로 예외. */
      var _isAdminQA = false;
      try { _isAdminQA = !!(window.PremiseAdmin && PremiseAdmin.is()); } catch (e2) {}
      if (!_isAdminQA && PremiseStore.isLoggedIn && PremiseStore.isLoggedIn()) {
        PremiseStore.logout();
      }
    }
  } catch (e) { console.warn("[auth] syncAuthUser:", e && e.message); }
  /* 인증 상태 확정 알림 — common.js가 관리자 판정/네비게이션을 다시 그린다. */
  try { document.dispatchEvent(new CustomEvent("premise:auth", { detail: { uid: user ? user.uid : null } })); } catch (e) {}
  if (!user) return;
  _subUnsub = window.PremiseBilling.watch(user.uid, (sub) => {
    try {
      if (window.PremiseStore && typeof PremiseStore.applyServerSubscription === "function") {
        PremiseStore.applyServerSubscription(sub);
      }
    } catch (e) { console.warn("[PremiseBilling] applyServerSubscription failed:", e); }
  });
});
