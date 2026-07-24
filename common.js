/* ===== PBS 학습법 공통 모듈 (P5 통합) =====
   - PremiseStore: 화면 간 공유 상태 (localStorage 기반, 로컬 파일에서 유지됨)
   - PremiseNav: 공통 상단 네비게이션 주입
   미션 id 규칙: 국어 k-m1..k-m9 (순서대로), 수학 m-ma1..m-ma8 (순서대로)
*/
(function () {
  /* GA4 로더(analytics.js) 주입 — common.js 로드하는 모든 페이지 커버 */
  if (!document.querySelector('script[data-ga]')) { var _ga = document.createElement('script'); _ga.src = 'analytics.js'; _ga.setAttribute('data-ga', '1'); document.head.appendChild(_ga); }

  const KEY = "premise_state_v2";
  const today = () => new Date().toISOString().slice(0, 10);

  /* 사용자 입력(질문 로그 등)을 innerHTML로 렌더할 때 감쌀 이스케이프 유틸.
     리포트 공유 URL이 생기는 순간 저장형 XSS이 되는 경로 차단용. */
  function escapeHTML(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  window.escapeHTML = escapeHTML;

  /* 신규 방문자 기본 상태: 빈 계정. (가짜 학습 이력 노출 방지 — 런칭 신뢰의 뿌리) */
  function emptySeed() {
    return {
      streak: 0,
      lastActive: "",
      completed: [],
      badges: [],
      plan: "basic", // "basic" | "premium" — 데모용 플랜 시뮬레이션
      exams: [], // PBS 캘린더: { id, name, date(YYYY-MM-DD), subject }
      user: { loggedIn: false, name: "", email: "", provider: "" }, // provider: "google" | "kakao" | "naver"
      subscription: {
        status: "none", // "none" | "trial" | "active" | "paused" | "canceled"
        plan: "basic", // "basic" | "premium"
        cycle: "m6", // "m6" | "m1"
        method: "", // "naverpay" | "kakaopay" | "card"
        trialEndsAt: "", // YYYY-MM-DD
        nextBillingAt: "" // YYYY-MM-DD
      },
      premises: [],
      // 아이가 데일리 미션에서 직접 남긴 질문 로그 (report.html before/after 소스)
      questionLog: []
    };
  }

  /* 데모/스크린샷용 채워진 상태. URL에 ?demo=1 을 붙였을 때만 시딩됨 */
  function demoSeed() {
    return {
      streak: 15,
      lastActive: today(),
      // 코스의 '완료' 노드와 일치 (입문 전체 + 기본 1)
      completed: ["in-1", "in-2", "in-3", "in-4", "ba-1"],
      badges: ["🎯", "🔍", "🕵️", "🧩", "🐢"],
      plan: "basic",
      exams: [],
      user: { loggedIn: false, name: "", email: "", provider: "" },
      subscription: { status: "none", plan: "basic", cycle: "m6", method: "", trialEndsAt: "", nextBillingAt: "" },
      premises: [
        { subject: "수학", note: "속도 대신 깊이로 전환", badge: "🐢", badgeName: "깊이파트너", date: "오늘" },
        { subject: "일상", note: "'수 = 행복' 전제를 흔듦", badge: "🧩", badgeName: "행간파트너", date: "어제" },
        { subject: "언어", note: "'조차'가 심은 전제를 포착", badge: "🕵️", badgeName: "문장파트너", date: "2일 전" },
        { subject: "상식", note: "'배웠으니 안다'는 전제를 의심", badge: "🔍", badgeName: "구조파트너", date: "3일 전" },
        { subject: "일상", note: "'열심히=성과' 전제를 알아차림", badge: "🎯", badgeName: "알아차림파트너", date: "4일 전" }
      ],
      questionLog: []
    };
  }

  function seed() {
    try {
      if (typeof location !== "undefined" && /[?&]demo=1(&|$)/.test(location.search)) return demoSeed();
    } catch (e) {}
    return emptySeed();
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return seed();
      const parsed = JSON.parse(raw);
      // 기존 localStorage에 신규 필드(user/subscription)가 없던 사용자를 위한 마이그레이션
      if (!parsed.user) parsed.user = { loggedIn: false, name: "", email: "", provider: "" };
      if (!parsed.subscription) parsed.subscription = { status: "none", plan: parsed.plan || "basic", cycle: "m6", method: "", trialEndsAt: "", nextBillingAt: "" };
      if (!parsed.questionLog) parsed.questionLog = [];
      // 자가치유: 구버전 빌드에서 긴 리프레임 문장이 note로 잘못 저장돼 잘려 보이는 데이터 정리
      if (Array.isArray(parsed.premises)) {
        parsed.premises.forEach(p => {
          if (p && typeof p.note === "string" && p.note.length > 22) {
            let t = p.note.split(/[.!?…·—]/)[0].trim();          // 첫 문장만
            if (t.length > 24) t = t.slice(0, 24).replace(/\s\S*$/, ""); // 마지막 온전한 단어까지
            p.note = t;
          }
        });
      }
      return parsed;
    } catch (e) { return seed(); }
  }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }

  let s = load(); save(s);

  /* Firebase에 실제 로그인된 유저가 있으면 반환(서버 진실원천 기록 조건). 없으면 null. */
  function fbUser() {
    try { return window.PremiseAuth && PremiseAuth.auth && PremiseAuth.auth.currentUser; }
    catch (e) { return null; }
  }

  window.PremiseStore = {
    get: () => s,
    reset: () => { try { localStorage.removeItem(KEY); } catch (e) {} s = seed(); save(s); return s; },
    isDone: (id) => s.completed.includes(id),
    /* 데일리 미션 완료 시 호출 */
    completeCase: (c) => {
      // 재플레이(이미 완료한 미션 다시 하기)는 '발견한 전제'에 중복 기록하지 않음
      const isNew = !(c.missionId && s.completed.includes(c.missionId));
      if (c.missionId && !s.completed.includes(c.missionId)) s.completed.push(c.missionId);
      if (c.badge && !s.badges.includes(c.badge)) s.badges.push(c.badge);
      if (isNew) s.premises.unshift({ subject: c.subject, note: c.note, badge: c.badge, badgeName: c.badgeName, date: "방금" });
      if (s.lastActive !== today()) { s.streak += 1; s.lastActive = today(); }
      save(s);
      return s;
    },
    /* 데일리 미션에서 아이가 남긴 질문 한 줄 기록 (report.html before/after 소스) */
    logQuestion: (subject, q, premise) => {
      const text = (q || "").trim();
      if (!text) return s;
      if (!s.questionLog) s.questionLog = [];
      s.questionLog.push({ subject: subject || "", q: text, premise: premise || "", date: today() });
      if (s.questionLog.length > 60) s.questionLog = s.questionLog.slice(-60);
      save(s);
      return s;
    },
    /* ===== PBS 캘린더 ===== */
    getPlan: () => s.plan || "basic",
    setPlan: (p) => { s.plan = p === "premium" ? "premium" : "basic"; save(s); return s; },

    /* ===== 계정 / 구독 (D단계 · 프론트 데모, 실연동 전) ===== */
    isLoggedIn: () => !!(s.user && s.user.loggedIn),
    getUser: () => s.user || { loggedIn: false, name: "", email: "", provider: "" },
    login: (provider, name, email) => {
      if (!s.user) s.user = {};
      s.user.loggedIn = true;
      s.user.provider = provider || "google";
      s.user.name = name || (provider === "kakao" ? "카카오 파트너" : provider === "naver" ? "네이버 파트너" : "구글 파트너");
      s.user.email = email || s.user.email || (s.user.name.replace(/\s/g, "").toLowerCase() + "@example.com");
      save(s);
      return s.user;
    },
    logout: () => {
      s.user = { loggedIn: false, name: "", email: "", provider: "" };
      save(s);
      return s.user;
    },
    /* ===== 임시 QA: 회원 상태 강제 설정 (런칭 전 · 제거 예정) ===== */
    __setMembership: (kind) => {
      if (kind === "guest"){
        s.user = { loggedIn: false, name: "", email: "", provider: "" };
        s.subscription = { status: "none", plan: "basic", cycle: "m6", method: "", trialEndsAt: "", nextBillingAt: "" };
        save(s); return s;
      }
      if (!s.user) s.user = {};
      s.user.loggedIn = true;
      s.user.provider = s.user.provider || "google";
      s.user.name = s.user.name || "구글 파트너";
      s.user.email = s.user.email || "google@example.com";
      if (!s.subscription) s.subscription = { status:"none", plan:"basic", cycle:"m6", method:"", trialEndsAt:"", nextBillingAt:"" };
      if (kind === "free"){ s.subscription.status = "none"; }
      else if (kind === "basic"){ s.subscription.status = "active"; s.subscription.plan = "basic"; s.plan = "basic"; }
      else if (kind === "premium"){ s.subscription.status = "active"; s.subscription.plan = "premium"; s.plan = "premium"; }
      save(s); return s;
    },
    getSubscription: () => s.subscription || { status: "none", plan: "basic", cycle: "m6", method: "", trialEndsAt: "", nextBillingAt: "" },

    /* 서버(Firestore) 구독문서를 로컬 상태에 미러링 — firebase-init의 onSnapshot이 호출.
       서버가 진실원천이므로, 로그인 유저는 이 값이 화면 표시의 근거가 된다. */
    applyServerSubscription: (sub) => {
      if (!sub) return s; // 서버에 구독문서 없음(신규/비로그인/데모) → 로컬 유지
      s.subscription = {
        status: sub.status || "none",
        plan: sub.plan || "basic",
        cycle: sub.cycle || "m6",
        method: sub.method || "",
        trialEndsAt: sub.trialEndsAt || "",
        nextBillingAt: sub.nextBillingAt || ""
      };
      // 유효 접근: trial/active/paused 이고 accessUntil(없으면 trialEndsAt) 미경과일 때만 플랜 부여
      const until = sub.accessUntil || sub.currentPeriodEnd || sub.trialEndsAt || "";
      const hasAccess = ["trial", "active", "paused"].indexOf(sub.status) >= 0 && (!until || until >= today());
      s.plan = (hasAccess && sub.plan === "premium") ? "premium" : "basic";
      save(s);
      try { document.dispatchEvent(new CustomEvent("premise:subscription")); } catch (e) {}
      return s;
    },

    /* 카드 없이 7일 무료체험 시작 — 로그인 필요. 로컬은 낙관적 갱신, 서버(Firestore)에도 기록. */
    startTrial: (plan, cycle) => {
      if (!s.user || !s.user.loggedIn) return { ok: false, reason: "login_required" };
      if (!s.subscription) s.subscription = {};
      const end = new Date(); end.setDate(end.getDate() + 7);
      s.subscription.status = "trial";
      s.subscription.plan = plan === "premium" ? "premium" : "basic";
      s.subscription.cycle = cycle === "m1" ? "m1" : "m6";
      s.subscription.trialEndsAt = end.toISOString().slice(0, 10);
      s.subscription.nextBillingAt = "";
      s.plan = s.subscription.plan;
      save(s);
      // 서버 진실원천 기록. 성공하면 onSnapshot이 정본으로 재동기화(체험 1회 제한 등 서버가 최종 판정).
      if (fbUser() && window.PremiseBilling) {
        PremiseBilling.startTrial(s.subscription.plan, s.subscription.cycle)
          .catch((e) => console.warn("[startTrial] server:", e && e.message));
      }
      return { ok: true, subscription: s.subscription };
    },
    /* 바로 결제(유료 시작) — 결제수단: naverpay | kakaopay | card */
    subscribe: (plan, cycle, method) => {
      if (!s.user || !s.user.loggedIn) return { ok: false, reason: "login_required" };
      if (!s.subscription) s.subscription = {};
      const next = new Date();
      next.setMonth(next.getMonth() + (cycle === "m1" ? 1 : 6));
      s.subscription.status = "active";
      s.subscription.plan = plan === "premium" ? "premium" : "basic";
      s.subscription.cycle = cycle === "m1" ? "m1" : "m6";
      s.subscription.method = method || "card";
      s.subscription.trialEndsAt = "";
      s.subscription.nextBillingAt = next.toISOString().slice(0, 10);
      s.plan = s.subscription.plan;
      save(s);
      return { ok: true, subscription: s.subscription };
    },
    cancelSubscription: () => {
      if (!s.subscription) s.subscription = {};
      s.subscription.status = "canceled";
      save(s);
      if (fbUser() && window.PremiseBilling) {
        PremiseBilling.cancelSubscription().catch((e) => console.warn("[cancel] server:", e && e.message));
      }
      return s.subscription;
    },
    // 이탈 방어: 해지 대신 일시정지. 결제는 멈추되 '동결된 지도' 열람은 유지(dashboard guard).
    pauseSubscription: () => {
      if (!s.subscription) s.subscription = {};
      s.subscription.status = "paused";
      save(s);
      if (fbUser() && window.PremiseBilling) {
        PremiseBilling.pauseSubscription().catch((e) => console.warn("[pause] server:", e && e.message));
      }
      return s.subscription;
    },
    resumeSubscription: () => {
      if (!s.subscription) s.subscription = {};
      s.subscription.status = "active";
      save(s);
      if (fbUser() && window.PremiseBilling) {
        PremiseBilling.resumeSubscription().catch((e) => console.warn("[resume] server:", e && e.message));
      }
      return s.subscription;
    },
    getExams: () => (s.exams || []).slice().sort((a, b) => a.date < b.date ? -1 : 1),
    examLimit: () => (s.plan === "premium" ? Infinity : 3),
    addExam: (exam) => {
      if (!s.exams) s.exams = [];
      const limit = s.plan === "premium" ? Infinity : 3;
      if (s.exams.length >= limit) return { ok: false, reason: "limit" };
      const id = "ex-" + Date.now();
      s.exams.push({ id, name: exam.name, date: exam.date, subject: exam.subject || "" });
      save(s);
      return { ok: true, id };
    },
    removeExam: (id) => {
      s.exams = (s.exams || []).filter((e) => e.id !== id);
      save(s);
      return s;
    }
  };

  /* ===== 공통 네비게이션 ===== */
  window.PremiseNav = {
    render: function (active) {
      const el = document.getElementById("topnav");
      if (!el) return;
      const items = [
        ["coz", "course.html", "코스"],
        ["daily", "daily.html", "오늘의 사건"],
        ["cal", "calendar.html", "PBS 캘린더"],
        ["lab", "application-lab.html", "실전 적용 랩"],
        ["note", "notebook.html", "파트너 노트"]
      ];
      const links = items.map(([k, href, label]) =>
        `<a href="${href}" class="pn-link${active === k ? " pn-active" : ""}">${label}</a>`
      ).join("");
      const logged = window.PremiseStore && PremiseStore.isLoggedIn();
      const accountLink = logged
        ? `<a href="mypage.html" class="pn-account${active === "mypage" ? " pn-active" : ""}" title="마이페이지">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21a8 8 0 10-16 0"/><circle cx="12" cy="8" r="4.5"/></svg>
          </a>`
        : `<a href="login.html" class="pn-link" title="로그인">로그인</a>`;
      el.innerHTML =
        `<style>
          .pn-bar{position:sticky;top:0;z-index:40;background:rgba(255,255,255,.82);backdrop-filter:blur(14px);border-bottom:1px solid #ECEEF1}
          .pn-in{max-width:56rem;margin:0 auto;padding:0 1.25rem;height:64px;display:flex;align-items:center;justify-content:space-between}
          .pn-logo{display:flex;align-items:center;gap:.6rem;font-weight:700;font-size:15px;color:#0A0E17;text-decoration:none}
          .pn-mark{width:32px;height:32px;border-radius:11px;background:#0A66FF;transform:rotate(45deg);display:inline-flex;align-items:center;justify-content:center}
          .pn-nav{display:flex;align-items:center;gap:2px}
          .pn-link{padding:8px 14px;border-radius:9999px;font-size:13px;font-weight:600;color:#525A69;text-decoration:none;transition:background .2s,color .2s;white-space:nowrap}
          .pn-link:hover{color:#0A0E17;background:#F2F4F1}
          .pn-active{background:#0A0E17;color:#fff}
          .pn-active:hover{background:#0A0E17;color:#fff}
          .pn-account{margin-left:6px;width:34px;height:34px;border-radius:9999px;display:inline-flex;align-items:center;justify-content:center;color:#525A69;background:#F2F4F1;text-decoration:none;transition:background .2s,color .2s}
          .pn-account:hover{color:#0A0E17;background:#E4E8EC}
          .pn-reset{margin-left:2px;padding:8px 10px;border-radius:9999px;font-size:13px;color:#9AA4B2;background:none;border:none;cursor:pointer}
          .pn-reset:hover{color:#0A0E17}
          @media (max-width:520px){ .pn-link{padding:7px 10px;font-size:12px} }
        </style>
        <header class="pn-bar"><div class="pn-in">
          <a class="pn-logo" href="index.html">
            <span class="pn-mark"><svg style="transform:rotate(-45deg)" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.2"/><path d="M15.5 15.5L20 20"/></svg></span>
            PBS 학습법
          </a>
          <nav class="pn-nav">${links}${accountLink}<button class="pn-reset" title="데모 초기화" onclick="PremiseStore.reset();location.reload()">↻</button></nav>
        </div></header>`;
    }
  };

  /* ===== 임시 QA 회원상태 스위처 (런칭 전 · 상단 고정, 제거 예정) ===== */
  function mountQaBar(){
    if (!document.body || document.getElementById("qaBar")) return;
    var cur = "guest";
    try {
      var st = window.PremiseStore && PremiseStore.get();
      if (st && st.user && st.user.loggedIn){
        cur = (st.subscription && st.subscription.status === "active")
          ? (st.subscription.plan === "premium" ? "premium" : "basic")
          : "free";
      }
    } catch(e){}
    var items = [["guest","비로그인"],["free","무료회원"],["basic","베이직"],["premium","프리미엄"]];
    var bar = document.createElement("div");
    bar.id = "qaBar";
    bar.style.cssText = "position:fixed;top:74px;right:10px;z-index:99999;display:flex;gap:3px;align-items:center;background:rgba(10,14,23,.92);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.16);border-radius:9999px;padding:4px 6px;box-shadow:0 6px 18px rgba(0,0,0,.28);font-family:Pretendard,Inter,sans-serif";
    bar.innerHTML = '<span style="color:#9AA4B2;font-size:10px;font-weight:800;letter-spacing:.06em;padding:0 5px">QA</span>' +
      items.map(function(b){
        var on = b[0] === cur;
        return '<button data-k="'+b[0]+'" style="cursor:pointer;border:none;border-radius:9999px;padding:5px 9px;font-size:11px;font-weight:700;color:'+(on?"#0A0E17":"#fff")+';background:'+(on?"#FFB800":"rgba(255,255,255,.12)")+'">'+b[1]+'</button>';
      }).join("");
    document.body.appendChild(bar);
    bar.querySelectorAll("button").forEach(function(btn){
      btn.addEventListener("click", function(){
        try { PremiseStore.__setMembership(btn.getAttribute("data-k")); } catch(e){}
        location.reload();
      });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mountQaBar);
  else mountQaBar();
})();
