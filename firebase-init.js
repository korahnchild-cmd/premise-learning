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

async function bridgeLogin(fnName, payload) {
  const call = httpsCallable(functions, fnName);
  const res = await call(payload);
  const cred = await signInWithCustomToken(auth, res.data.token);
  return { user: cred.user, name: res.data.name };
}

window.PremiseAuth = {
  auth,
  signInWithGoogle: () => signInWithPopup(auth, googleProvider),
  signInWithKakaoCode: (code) => bridgeLogin("kakaoLogin", { code }),
  signInWithNaverCode: (code, state) => bridgeLogin("naverLogin", { code, state }),
  signOutFirebase: () => signOut(auth).catch(() => {}),
  onChange: (cb) => onAuthStateChanged(auth, cb)
};
