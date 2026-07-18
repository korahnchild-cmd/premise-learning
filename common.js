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

  function seed() {
    return {
      streak: 15,
      lastActive: today(),
      // 코스의 '완료' 노드와 일치 (입문 전체 + 기본 1)
      completed: ["in-1", "in-2", "in-3", "in-4", "ba-1"],
      badges: ["🎯", "🔍", "🕵️", "🧩", "🐢"],
      plan: "basic", // "basic" | "premium" — 데모용 플랜 시뮬레이션
      exams: [], // PBS 캘린더: { id, name, date(YYYY-MM-DD), subject }
      user: { loggedIn: false, name: "", email: "", provider: "" }, // provider: "google" | "kakao" | "naver"
      subscription: {
        status: "none", // "none" | "trial" | "active" | "canceled"
        plan: "basic", // "basic" | "premium"
        cycle: "m6", // "m6" | "m1"
        method: "", // "naverpay" | "kakaopay" | "card"
        trialEndsAt: "", // YYYY-MM-DD
        nextBillingAt: "" // YYYY-MM-DD
      },
      premises: [
        { subject: "수학", note: "속도 대신 깊이로 전환", badge: "🐢", badgeName: "깊이파트너", date: "오늘" },
        { subject: "일상", note: "'수 = 행복' 전제를 흔듦", badge: "🧩", badgeName: "행간파트너", date: "어제" },
        { subject: "언어", note: "'조차'가 심은 전제를 포착", badge: "🕵️", badgeName: "문장파트너", date: "2일 전" },
        { subject: "상식", note: "'배웠으니 안다'는 전제를 의심", badge: "🔍", badgeName: "구조파트너", date: "3일 전" },
        { subject: "일상", note: "'열심히=성과' 전제를 알아차림", badge: "🎯", badgeName: "알아차림파트너", date: "4일 전" }
      ],
      // 아이가 데일리 미션에서 직접 남긴 질문 로그 (report.html before/after 소스)
      questionLog: []
    };
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
      return parsed;
    } catch (e) { return seed(); }
  }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }

  let s = load(); save(s);

  window.PremiseStore = {
    get: () => s,
    reset: () => { try { localStorage.removeItem(KEY); } catch (e) {} s = seed(); save(s); return s; },
    isDone: (id) => s.completed.includes(id),
    /* 데일리 미션 완료 시 호출 */
    completeCase: (c) => {
      if (c.missionId && !s.completed.includes(c.missionId)) s.completed.push(c.missionId);
      if (c.badge && !s.badges.includes(c.badge)) s.badges.push(c.badge);
      s.premises.unshift({ subject: c.subject, note: c.note, badge: c.badge, badgeName: c.badgeName, date: "방금" });
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
    login: (provider, name) => {
      if (!s.user) s.user = {};
      s.user.loggedIn = true;
      s.user.provider = provider || "google";
      s.user.name = name || (provider === "kakao" ? "카카오 파트너" : provider === "naver" ? "네이버 파트너" : "구글 파트너");
      s.user.email = s.user.email || (s.user.name.replace(/\s/g, "").toLowerCase() + "@example.com");
      save(s);
      return s.user;
    },
    logout: () => {
      s.user = { loggedIn: false, name: "", email: "", provider: "" };
      save(s);
      return s.user;
    },
    getSubscription: () => s.subscription || { status: "none", plan: "basic", cycle: "m6", method: "", trialEndsAt: "", nextBillingAt: "" },
    /* 카드 없이 7일 무료체험 시작 — 로그인 필요 */
    startTrial: (plan, cycle) => {
      if (!s.user || !s.user.loggedIn) return { ok: false, reason: "login_required" };
      if (!s.subscription) s.subscription = {};
      const end = new Date(); end.setDate(end.getDate() + 7);
      s.subscription.status = "trial";
      s.subscription.plan = plan === "premium" ? "premium" : "basic";
      s.subscription.cycle = cycle === "m1" ? "m1" : "m6";
      s.subscription.trialEndsAt = end.toISOString().slice(0, 10);
      s.subscription.nextBillingAt = end.toISOString().slice(0, 10);
      s.plan = s.subscription.plan;
      save(s);
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
})();
