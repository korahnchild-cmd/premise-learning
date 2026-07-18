/* ===== PBS 학습법 · Google Analytics 4 =====
   설치: 아래 GA_ID 한 줄에 GA4 측정 ID(G-로 시작)를 넣고 배포하면 끝.
   ID 미설정(G-XXXXXXXXXX) 상태면 아무 것도 로드하지 않음(배포해도 안전).
*/
(function () {
  var GA_ID = "G-NTED8TQD50"; // GA4 측정 ID (2026-07-18)
  if (!GA_ID || GA_ID === "G-XXXXXXXXXX") return;

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", GA_ID);

  /* 전환 이벤트 헬퍼 — 진단 완료/체험 시작 지점에서 호출용(2단계)
     예) PBSGA('diagnosis_complete');  PBSGA('trial_start'); */
  window.PBSGA = function (name, params) { if (window.gtag) gtag("event", name, params || {}); };
})();
