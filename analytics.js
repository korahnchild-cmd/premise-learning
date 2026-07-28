/* ===== PBS 학습법 · Google Analytics 4 =====
   설치: 아래 GA_ID 한 줄에 GA4 측정 ID(G-로 시작)를 넣고 배포하면 끝.
   ID 미설정(G-XXXXXXXXXX) 상태면 아무 것도 로드하지 않음(배포해도 안전).

   2026-07-28 베타 계측 추가:
   - 이 파일은 common.js가 전 페이지에 자동으로 끼워넣는다. 중복 로드는 아래 가드로 막는다.
   - 로그인이 확인되면 uid를 GA4 user_id로 물려 기기가 바뀌어도 같은 사람으로 합쳐진다.
     (이메일 같은 개인정보는 절대 보내지 않는다. GA4 정책상 금지)
*/
(function () {
  if (window.__pbsGA) return;            // 중복 로드 가드(index/diagnosis는 직접 로드 중)
  window.__pbsGA = true;

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

  /* 로그인 확정 시점에 uid를 user_id로 묶는다.
     firebase-init.js가 premise:auth 이벤트를 detail.uid와 함께 쏜다. */
  document.addEventListener("premise:auth", function (e) {
    try {
      var uid = e && e.detail && e.detail.uid;
      if (!uid || !window.gtag) return;
      gtag("set", { user_id: String(uid) });
      // 세션당 1회만 로그인 이벤트
      if (!sessionStorage.getItem("pbs_ga_login")) {
        sessionStorage.setItem("pbs_ga_login", "1");
        var prov = "unknown";
        try {
          var u = window.PremiseStore && PremiseStore.getUser();
          if (u && u.provider) prov = u.provider;
        } catch (err) {}
        PBSGA("pbs_login", { provider: prov });
      }
    } catch (err) {}
  });
})();
