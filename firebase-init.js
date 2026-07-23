/* ===== Firebase 초기화 (P5 결제/계정 연동 1단계 · 구글 로그인) =====
   firebaseConfig는 비밀키가 아니라 "이 앱이 어느 Firebase 프로젝트에 연결되는지" 알려주는
   공개 식별자다. 실제 접근 통제는 Firestore 보안규칙 + Firebase Auth가 담당한다.
   배포 전 필수: Firebase 콘솔 → Authentication → Settings → Authorized domains에
   pbslearning.co.kr 추가돼 있어야 signInWithPopup이 동작함(안 하면 auth/unauthorized-domain).
   로컬 테스트도 file://로는 안 되고 http 서버로 열어야 함(예: python -m http.server).
*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

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

// 카카오/네이버는 Firebase가 네이티브 제공하지 않는 provider라 여기서 다루지 않음.
// 추후 Cloud Functions에서 카카오/네이버 REST API로 토큰 검증 → signInWithCustomToken 흐름으로 별도 구현 예정.

window.PremiseAuth = {
  auth,
  signInWithGoogle: () => signInWithPopup(auth, googleProvider),
  signOutFirebase: () => signOut(auth).catch(() => {}),
  onChange: (cb) => onAuthStateChanged(auth, cb)
};
