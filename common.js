/* ===== PBS 학습법 공통 모듈 (P5 통합) =====
   - PremiseStore: 화면 간 공유 상태 (localStorage 기반, 로컬 파일에서 유지됨)
   - PremiseNav: 공통 상단 네비게이션 주입
   미션 id 규칙: 국어 k-m1..k-m9 (순서대로), 수학 m-ma1..m-ma8 (순서대로)
*/
(function () {
  /* GA4 로더(analytics.js) 주입 — common.js 로드하는 모든 페이지 커버 */
  if (!document.querySelector('script[data-ga]')) { var _ga = document.createElement('script'); _ga.src = 'analytics.js'; _ga.setAttribute('data-ga', '1'); document.head.appendChild(_ga); }

  /* ===== 베타 기간 전역 스위치 =====
     ★ 베타를 끝낼 때 이 파일의 이 한 줄만 false로 바꾸면 전 페이지가 동시에 정상 모드가 된다.

     왜 전역이어야 하나 — 2026-08-06 실측 사고:
       BETA_MODE가 onboarding.html 안의 지역 상수였다. 온보딩 퍼널만 막았고, course.html은
       이 값의 존재조차 몰라서 '부여 대기' 테스터가 잠긴 사건을 누르면 곧장 checkout.html로
       갔다(잠긴 사건 9행 + '구독하기' 2개 + mypage 1 + pricing 3). beta.html에는
       "결제창도 뜨지 않습니다"라고 적어놨으므로 신뢰 문제로 직결된다.
       페이지마다 플래그를 심으면 종료할 때 또 빠뜨리므로, 진실원천을 여기 한 곳으로 모은다.

     ── 베타 종료 순서(순서 지킬 것) ──
       1) admin.html에서 명단 전체 회수(adminRevokePlan)
       2) 이 값을 false로 바꾸고 배포
       뒤집으면 회수 전 만료 계정이 결제 화면으로 밀린다. */
  window.PBS_BETA_MODE = true;

  const KEY = "premise_state_v2";
  /* 로컬 날짜(KST) 기준. 구버전은 toISOString()이라 UTC였고, 한국 오전 0~9시가 '어제'로 기록됐다.
     같은 한국 날짜의 오전 8시와 10시가 서로 다른 날로 잡혀 streak·활동일수·pbs_since_dN이
     부풀던 문제. 베타 숫자를 오염시키므로 2026-07-31 수정. */
  const today = () => { const d = new Date(); return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10); };

  /* ===== 관리자 판정 =====
     운영자 본인 계정에서만 QA 스위처/관리자 페이지가 열린다.
     주의: 클라이언트 판정이므로 '기능 노출 제어'일 뿐 보안 경계가 아니다.
     실제 보안 경계는 Firestore 규칙(subscription write 전면 차단)이 담당한다. */
  const ADMIN_EMAILS = ["korahnchild@gmail.com"];
  /* 카카오·네이버는 Custom Token 로그인이라 Firebase 계정에 이메일이 없다.
     그런 계정을 관리자로 쓰려면 UID를 여기에 넣는다. (admin.html 잠금화면에서 UID 확인 가능) */
  const ADMIN_UIDS = [];
  function isLocalhost() {
    try {
      const h = location.hostname;
      return h === "localhost" || h === "127.0.0.1" || location.protocol === "file:";
    } catch (e) { return false; }
  }
  window.PremiseAdmin = {
    emails: ADMIN_EMAILS,
    uids: ADMIN_UIDS,
    /* 현재 Firebase 로그인 사용자 (없으면 null) */
    currentUser: function () {
      try { return (window.PremiseAuth && PremiseAuth.auth && PremiseAuth.auth.currentUser) || null; }
      catch (e) { return null; }
    },
    /* Firebase 계정의 이메일 또는 UID가 화이트리스트에 있거나, 로컬 개발 환경이면 true */
    is: function () {
      if (isLocalhost()) return true;
      const u = this.currentUser();
      if (u) {
        if (u.email && ADMIN_EMAILS.indexOf(String(u.email).toLowerCase()) >= 0) return true;
        if (u.uid && ADMIN_UIDS.indexOf(String(u.uid)) >= 0) return true;
        // Firebase에 로그인돼 있는데 허용 대상이 아니면, 로컬 값으로 통과시키지 않는다.
        return false;
      }
      // Firebase 미로그인 상태에서만 로컬 저장값을 참고 (오프라인·스크립트 실패 대비)
      try {
        const st = JSON.parse(localStorage.getItem(KEY) || "null");
        const em = st && st.user && st.user.email;
        if (em && ADMIN_EMAILS.indexOf(String(em).toLowerCase()) >= 0) return true;
      } catch (e) {}
      return false;
    }
  };

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
      questionLog: [],
      // 실제 활동한 날짜(YYYY-MM-DD) 집합. 히트맵·주차 계산의 유일한 근거.
      activeDates: [],
      firstActiveAt: "",
      // 오늘 푼 사건 — daily.html이 '하루 1사건'을 유지하는 근거
      lastCaseId: "",
      lastCaseAt: ""
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
      /* 활동일 기록이 없던 기존 사용자 마이그레이션 — 있는 근거만으로 최소 복원.
         없는 날짜를 지어내지 않는다(가짜 이력 방지). */
      if (!Array.isArray(parsed.activeDates)) {
        const seen = {};
        (parsed.questionLog || []).forEach((e) => { if (e && /^\d{4}-\d{2}-\d{2}$/.test(e.date)) seen[e.date] = 1; });
        (parsed.premises || []).forEach((p) => { if (p && /^\d{4}-\d{2}-\d{2}$/.test(p.at)) seen[p.at] = 1; });
        if (parsed.lastActive) seen[parsed.lastActive] = 1;
        parsed.activeDates = Object.keys(seen).sort();
      }
      if (!parsed.firstActiveAt) parsed.firstActiveAt = parsed.activeDates.length ? parsed.activeDates[0] : "";
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

  /* ===== 베타 계측 (GA4) — 2026-07-28 =====
     학습 기록(activeDates·completed·streak)은 localStorage에만 있어서 서버에서 진척을 볼 수 없다.
     베타 리텐션을 재려고 사건 완료 시점에 GA4 이벤트를 쏜다.

       pbs_since_dN  — 첫 활동일로부터 N일차에 사건을 완료함  → '생존'(며칠째까지 돌아왔나)
       pbs_active_dN — 누적 활동일이 N일이 됨                → '성실도'(총 며칠 했나)
       pbs_activation — 생애 첫 사건 완료
       case_complete — 위 숫자를 파라미터로 담은 원본 이벤트

     N을 이벤트 '이름'에 박아둔 이유: GA4에서 맞춤 측정기준을 등록하지 않아도
     이벤트 보고서에서 이름별 사용자 수가 바로 읽힌다. 표본 20~30명이면 이게 제일 빠르다.
     같은 날 두 사건을 풀어도 일자 이벤트는 하루 한 번만 나간다(isFirstToday). */
  function _gaCaseComplete(st, c, isFirstToday) {
    if (typeof window.PBSGA !== "function") return;
    const dates = Array.isArray(st.activeDates) ? st.activeDates : [];
    const activeDays = dates.length;
    const first = st.firstActiveAt || (dates.length ? dates[0] : "");
    const t0 = first ? Date.parse(first) : 0;
    const since = t0 ? Math.floor((Date.now() - t0) / 864e5) + 1 : 1;
    const totalCases = (st.completed || []).length;

    PBSGA("case_complete", {
      case_id: (c && c.missionId) || "",
      subject: (c && c.subject) || "",
      since_day: since,
      active_days: activeDays,
      streak: st.streak || 0,
      total_cases: totalCases
    });
    if (totalCases === 1) PBSGA("pbs_activation");
    if (!isFirstToday) return;
    if (since >= 1 && since <= 14) PBSGA("pbs_since_d" + since);
    if (activeDays >= 1 && activeDays <= 14) PBSGA("pbs_active_d" + activeDays);
  }

  window.PremiseStore = {
    get: () => s,
    reset: () => { try { localStorage.removeItem(KEY); } catch (e) {} s = seed(); save(s); return s; },
    isDone: (id) => s.completed.includes(id),
    /* 데일리 미션 완료 시 호출 */
    completeCase: (c) => {
      // 재플레이(이미 완료한 미션 다시 하기)는 '발견한 전제'에 중복 기록하지 않음
      const isNew = !(c.missionId && s.completed.includes(c.missionId));
      const isFirstToday = s.lastActive !== today(); // GA 일자별 이벤트 중복 방지용(mutate 전에 잡아둔다)
      if (c.missionId && !s.completed.includes(c.missionId)) s.completed.push(c.missionId);
      if (c.badge && !s.badges.includes(c.badge)) s.badges.push(c.badge);
      if (isNew) s.premises.unshift({ subject: c.subject, note: c.note, badge: c.badge, badgeName: c.badgeName, date: "방금", at: today() });
      if (s.lastActive !== today()) { s.streak += 1; s.lastActive = today(); }
      if (!Array.isArray(s.activeDates)) s.activeDates = [];
      if (s.activeDates.indexOf(today()) < 0) { s.activeDates.push(today()); s.activeDates.sort(); }
      if (!s.firstActiveAt) s.firstActiveAt = today();
      /* 오늘 어떤 사건을 풀었는지 남긴다. daily.html의 pickDailySet이 이걸 보고
         '완료 직후 새로고침하면 다음 사건이 바로 열리는' 상태를 막는다. */
      if (c && c.missionId) { s.lastCaseId = c.missionId; s.lastCaseAt = today(); }
      save(s);
      try { _gaCaseComplete(s, c, isFirstToday); } catch (e) {}
      return s;
    },
    /* 데일리 미션에서 아이가 남긴 질문 한 줄 기록 (report.html before/after 소스) */
    logQuestion: (subject, q, premise) => {
      const text = (q || "").trim();
      if (!text) return s;
      if (!s.questionLog) s.questionLog = [];
      s.questionLog.push({ subject: subject || "", q: text, premise: premise || "", date: today() });
      if (s.questionLog.length > 60) s.questionLog = s.questionLog.slice(-60);
      if (!Array.isArray(s.activeDates)) s.activeDates = [];
      if (s.activeDates.indexOf(today()) < 0) { s.activeDates.push(today()); s.activeDates.sort(); }
      if (!s.firstActiveAt) s.firstActiveAt = today();
      save(s);
      return s;
    },

    /* ===== 파생 통계 — 화면이 상수를 들고 있지 않게 하는 유일한 출처 =====
       없는 데이터는 0/빈값으로 준다. 절대 추정치를 만들어내지 않는다. */
    stats: () => {
      const dates = Array.isArray(s.activeDates) ? s.activeDates.slice().sort() : [];
      const first = s.firstActiveAt || (dates.length ? dates[0] : "");
      const dayMs = 864e5;
      const t0 = first ? Date.parse(first) : 0;
      const daysSinceStart = t0 ? Math.floor((Date.now() - t0) / dayMs) + 1 : 0;
      const weeksTracked = t0 ? Math.floor(daysSinceStart / 7) : 0;

      const inRange = (iso, fromDaysAgo, toDaysAgo) => {
        const t = Date.parse(iso);
        if (isNaN(t)) return false;
        const d = Math.floor((Date.now() - t) / dayMs);
        return d >= toDaysAgo && d < fromDaysAgo;
      };
      const premisesDated = (s.premises || []).filter(p => p && /^\d{4}-\d{2}-\d{2}$/.test(p.at));
      const qlog = s.questionLog || [];

      const countIn = (arr, key, from, to) => arr.filter(x => inRange(x[key], from, to)).length;

      return {
        firstActiveAt: first,
        activeDates: dates,
        activeDayCount: dates.length,
        daysSinceStart,
        weeksTracked,
        streak: s.streak || 0,
        totalPremise: (s.premises || []).length,
        completedCount: (s.completed || []).length,
        badgeCount: (s.badges || []).length,
        questionCount: qlog.length,
        thisWeekPremise: countIn(premisesDated, "at", 7, 0),
        lastWeekPremise: countIn(premisesDated, "at", 14, 7),
        thisWeekQuestion: countIn(qlog, "date", 7, 0),
        lastWeekQuestion: countIn(qlog, "date", 14, 7),
        // 화면 분기용 — 근거가 충분할 때만 true
        hasAnyActivity: dates.length > 0 || (s.premises || []).length > 0,
        canCompareWeeks: daysSinceStart >= 14,
        canShowWeeklyReport: daysSinceStart >= 7,
        canShowGrowthCurve: weeksTracked >= 8
      };
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
    /* Firebase 인증이 확정되면 로컬 user를 서버 계정 정보로 맞춘다.
       (예전 로그인에서 이메일이 비어 placeholder가 저장된 계정을 자가 복구) */
    syncAuthUser: (u) => {
      if (!s.user) s.user = {};
      if (!u) return s.user;
      s.user.loggedIn = true;
      if (u.email) s.user.email = u.email;
      if (u.name) s.user.name = u.name;
      if (u.uid) s.user.uid = u.uid;
      save(s);
      return s.user;
    },
    logout: () => {
      s.user = { loggedIn: false, name: "", email: "", provider: "" };
      save(s);
      return s.user;
    },
    /* ===== 관리자 전용: 회원 상태 강제 설정 (테스트용, 로컬 상태만 변경) =====
       서버 구독문서는 건드리지 않는다. Firestore 규칙이 클라이언트 write를 막고 있고,
       실제 권한 부여는 Cloud Function만 가능하다. */
    __setMembership: (kind) => {
      if (!(window.PremiseAdmin && PremiseAdmin.is())) {
        console.warn("[PBS] __setMembership: 관리자 계정에서만 사용할 수 있습니다.");
        return s;
      }
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
      // QA 상태에도 accessUntil을 넣어야 accessLevel/hasAccess(Phase2)가 접근을 인정함(안 넣으면 프리미엄인데도 게이트·대시보드 차단).
      var _qaUntil = new Date(Date.now() + 30 * 864e5).toISOString().slice(0, 10);
      if (kind === "free"){ s.subscription.status = "none"; s.subscription.accessUntil = ""; s.subscription.trialUsed = false; s.plan = "basic"; }
      else if (kind === "basic"){ s.subscription.status = "active"; s.subscription.plan = "basic"; s.subscription.cycle = "m6"; s.subscription.accessUntil = _qaUntil; s.subscription.trialEndsAt = _qaUntil; s.plan = "basic"; }
      else if (kind === "premium"){ s.subscription.status = "active"; s.subscription.plan = "premium"; s.subscription.cycle = "m6"; s.subscription.accessUntil = _qaUntil; s.subscription.trialEndsAt = _qaUntil; s.plan = "premium"; }
      save(s); return s;
    },
    getSubscription: () => s.subscription || { status: "none", plan: "basic", cycle: "m6", method: "", trialEndsAt: "", nextBillingAt: "" },

    /* ===== 접근 판정 (Phase 2 · 만료 반영) — 모든 게이트는 이걸로 통일 =====
       진실원천은 서버(applyServerSubscription로 미러). 만료(accessUntil<오늘)면 접근 없음. */
    accessLevel: () => {                    // "none" | "basic" | "premium"
      const sub = s.subscription || {};
      const live = (sub.status === "trial" || sub.status === "active");
      const until = sub.accessUntil || sub.trialEndsAt || "";
      if (!live || !until || until < today()) return "none";
      return sub.plan === "premium" ? "premium" : "basic";
    },
    hasAccess: () => (window.PremiseStore ? PremiseStore.accessLevel() !== "none" : false),
    // 이탈방어: 해지/일시정지라도 잔여기간(accessUntil) 내엔 '동결된 지도' 열람 허용.
    canViewFrozen: () => {
      const sub = s.subscription || {};
      if (sub.status !== "paused" && sub.status !== "canceled") return false;
      const until = sub.accessUntil || sub.trialEndsAt || "";
      return !!until && until >= today();
    },

    /* ===== 중앙 사용자 상태 (4종) — 상태별 CTA/라벨은 전부 이걸로 분기 =====
       "guest"(비로그인) | "free"(로그인·무접근) | "trial"(체험중) | "basic" | "premium" */
    userState: () => {
      if (!(s.user && s.user.loggedIn)) return "guest";
      const sub = s.subscription || {};
      const lvl = PremiseStore.accessLevel();
      if (lvl === "none") return "free";
      if (sub.status === "trial") return "trial";
      return lvl === "premium" ? "premium" : "basic";
    },
    // 체험을 이미 소진했는지(계정당 1회). '카드없이 7일 무료체험' 문구 노출 판단용.
    trialUsed: () => !!(s.subscription && s.subscription.trialUsed),
    // 유료·체험 접근 보유 여부(무료체험/요금제 CTA 숨김 판단용).
    isMember: () => (PremiseStore.accessLevel() !== "none"),

    /* 서버(Firestore) 구독문서를 로컬 상태에 미러링 — firebase-init의 onSnapshot이 호출.
       서버가 진실원천이므로, 로그인 유저는 이 값이 화면 표시의 근거가 된다. */
    applyServerSubscription: (sub) => {
      if (!sub) {
        /* 서버에 구독문서가 없다 = 이 계정은 아무 권한이 없다.
           로그인 상태인데 로컬에만 유료 상태가 남아 있으면 위조이므로 초기화한다.
           (관리자 테스트 중에는 유지 — 상태 시뮬레이션이 매번 되돌려지면 테스트가 불가능하다) */
        const isAdmin = !!(window.PremiseAdmin && PremiseAdmin.is());
        if (!isAdmin && s.user && s.user.loggedIn && s.subscription && s.subscription.status !== "none") {
          s.subscription = { status: "none", plan: "basic", cycle: "m6", method: "", trialEndsAt: "", accessUntil: "", nextBillingAt: "", trialUsed: !!s.subscription.trialUsed };
          s.plan = "basic";
          save(s);
          try { document.dispatchEvent(new CustomEvent("premise:subscription")); } catch (e) {}
        }
        return s;
      }
      s.subscription = {
        status: sub.status || "none",
        plan: sub.plan || "basic",
        cycle: sub.cycle || "m6",
        method: sub.method || "",
        trialEndsAt: sub.trialEndsAt || "",
        accessUntil: sub.accessUntil || sub.trialEndsAt || "", // 게이팅 기준일(만료 판정)
        nextBillingAt: sub.nextBillingAt || "",
        trialUsed: !!sub.trialUsed // 체험 소진 여부(카드없이 문구 상태분기용)
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
    examLimit: () => (PremiseStore.accessLevel() === "premium" ? Infinity : 3),
    addExam: (exam) => {
      if (!s.exams) s.exams = [];
      const limit = PremiseStore.accessLevel() === "premium" ? Infinity : 3;
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

  /* ===== 공통 네비게이션 =====
     2026-07-28 전면 개편. 이전 구조의 문제:
       1) 링크가 학습 5종으로 고정이라, 비로그인 방문자가 faq/pricing에 들어가도
          상단에 학습 메뉴만 떴다. 요금·FAQ로 갈 길이 없었다.
       2) 모바일에서 접히지 않아 390px 화면에서 474px로 삐져나왔다(가로 스크롤).
     해결:
       - 로그인 여부에 따라 상단 링크를 학습/안내로 교체
       - 좁은 화면(≤700px)에서는 상단 링크를 접고 햄버거 드로어로. 드로어에는 학습·안내 전부
       - 로그인 사용자에게만 하단 탭바 4종(매일 쓰는 동선은 1탭 유지)
     이 파일 한 곳이 21개 페이지의 네비를 만든다. 수정 시 전 페이지 영향. */
  const NAV_LEARN = [
    ["daily", "daily.html", "오늘의 사건"],
    ["coz", "course.html", "코스"],
    ["cal", "calendar.html", "PBS 캘린더"],
    ["lab", "application-lab.html", "실전 적용 랩"],
    ["note", "notebook.html", "파트너 노트"],
    ["dash", "dashboard.html", "내 기록"]
  ];
  const NAV_INFO = [
    ["what", "index.html#what-pbs", "PBS 원리"],
    ["coz", "course.html", "코스"],
    ["price", "pricing.html", "요금 안내"],
    ["faq", "faq.html", "자주 묻는 질문"],
    ["about", "about.html", "회사 소개"],
    ["mission", "mission.html", "우리의 미션"],
    ["mag", "magazine/index.html", "PBS 매거진"]
  ];
  /* 하단 탭바 — 매일 쓰는 4개만. 캘린더·실전 랩은 드로어에서 간다. */
  const NAV_TABS = [
    ["daily", "daily.html", "오늘의 사건",
      '<path d="M12 3l2.4 5.3L20 9l-4 4 1 6-5-2.8L7 19l1-6-4-4 5.6-.7z"/>'],
    ["coz", "course.html", "코스",
      '<path d="M4 5.5A2.5 2.5 0 016.5 3H19v15H6.5A2.5 2.5 0 004 20.5z"/><path d="M9 7h6"/>'],
    ["note", "notebook.html", "파트너 노트",
      '<path d="M5 4h11l3 3v13H5z"/><path d="M8.5 10h7M8.5 14h5"/>'],
    ["dash", "dashboard.html", "내 기록",
      '<path d="M4 19V11M10 19V5M16 19v-6M21 19H3"/>']
  ];

  function _navIcon(path) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + path + '</svg>';
  }
  function _navDrop(id) { const n = document.getElementById(id); if (n && n.parentNode) n.parentNode.removeChild(n); }
  /* ===== 공통 로그아웃 =====
     signOut()은 비동기다(Firebase가 IndexedDB에 저장된 세션을 지운다). 예전에는 이걸
     기다리지 않고 곧바로 location.href로 페이지를 갈아치웠는데, 모바일 인앱 브라우저
     (특히 카카오톡 WebView)는 이동 시점에 진행 중이던 IndexedDB 쓰기를 끊어버린다.
     그러면 Firebase 세션이 살아남고, 다음 페이지에서 onAuthStateChanged가 그 계정을
     복원해 '로그아웃했는데 다시 로그인되는' 증상이 된다.
     → 반드시 signOut 완료를 기다린 뒤 이동한다. 응답이 없을 때를 대비해 워치독을 둔다.
     또한 뒤로가기로 로그인된 것처럼 보이는 화면에 돌아가지 않도록 replace를 쓴다. */
  function _doLogout(dest) {
    var target = dest || "index.html";
    var fired = false;
    function go() { if (fired) return; fired = true; try { location.replace(target); } catch (e) { location.href = target; } }
    try { if (window.PremiseStore) PremiseStore.logout(); } catch (e) {}
    try {
      if (window.PremiseAuth && PremiseAuth.signOutFirebase) {
        var p = PremiseAuth.signOutFirebase();
        if (p && typeof p.then === "function") {
          p.then(go, go);
          setTimeout(go, 2500); // signOut이 응답 없이 매달리면 사용자를 가두지 않는다
          return;
        }
      }
    } catch (e) {}
    go();
  }
  window.PremiseLogout = _doLogout;
  function _navLogout() { _doLogout("index.html"); }
  function _navCloseDrawer() {
    const d = document.getElementById("pnDrawer"), b = document.getElementById("pnBurger");
    if (d) { d.classList.remove("open"); d.setAttribute("aria-hidden", "true"); }
    if (b) { b.setAttribute("aria-expanded", "false"); b.classList.remove("on"); }
    document.documentElement.classList.remove("pn-lock");
  }

  /* ===== 베타 기간 결제 진입 차단 (전 페이지 공통) =====
     beta.html이 "카드번호는 묻지 않고, 결제창도 뜨지 않습니다"라고 약속했다.
     그 약속을 페이지마다 지키게 하는 대신, 여기서 한 번에 지킨다.

     방식: document 캡처 단계에서 클릭을 가로챈다. 캡처 단계라 course.html처럼
     JS로 나중에 그려지는 링크도 자동으로 커버된다(각 페이지 수정 불필요).
     프로그램 이동(location.href="checkout.html")만 각 페이지에서 blockCheckout()을 부른다.

     예외가 필요하면 링크에 data-beta-allow 속성을 달면 통과한다.

     운영자가 결제 흐름을 점검할 때: 주소 끝에 ?beta=off 를 붙인다. 단 관리자 계정에서만 먹는다.
     (콘솔에서 PBS_BETA_MODE=false 를 넣는 방법은 안 통한다 — 새로고침하면 이 파일이 다시
      true로 덮어쓴다. 2026-08-06 실측으로 확인하고 이 우회로를 만들었다) */
  window.PremiseBeta = {
    on: function () {
      if (window.PBS_BETA_MODE === false) return false;
      try {
        if (/[?&]beta=off(&|$)/.test(location.search) &&
            window.PremiseAdmin && PremiseAdmin.is()) return false;   // 관리자 점검용
      } catch (e) {}
      return true;
    },

    /* 결제 시도를 막는다. 막았으면 true를 반환하므로 호출측은 즉시 return 할 것. */
    blockCheckout: function (msg) {
      if (!this.on()) return false;
      this.notice(msg);
      return true;
    },

    notice: function (msg) {
      var id = "pbsBetaNotice";
      if (document.getElementById(id)) return;           // 연타로 여러 장 쌓이지 않게
      var wrap = document.createElement("div");
      wrap.id = id;
      wrap.setAttribute("role", "dialog");
      wrap.setAttribute("aria-modal", "true");
      wrap.style.cssText =
        "position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;" +
        "padding:20px;background:rgba(10,14,23,.45);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)";
      wrap.innerHTML =
        '<div style="max-width:23rem;width:100%;background:#fff;border-radius:20px;padding:24px 22px;box-shadow:0 18px 50px rgba(10,14,23,.28)">' +
          '<p style="margin:0;font-size:15px;font-weight:800;color:#0A0E17">베타 기간에는 결제를 받지 않습니다</p>' +
          '<p style="margin:10px 0 0;font-size:13.5px;line-height:1.7;color:#525A69;word-break:keep-all">' +
            (msg || '카드 등록도, 결제창도 없습니다. 운영자에게 <b style="color:#0A0E17">“가입했어요”</b> 한 마디만 남겨주시면 이 계정에 <b style="color:#0A0E17">7일 프리미엄</b>을 열어드립니다.') +
          '</p>' +
          '<p style="margin:10px 0 0;font-size:13px;line-height:1.7;color:#525A69">기다리시는 동안 <b style="color:#0A0E17">오늘의 사건</b>은 지금 바로 하실 수 있어요.</p>' +
          '<div style="margin-top:18px;display:flex;gap:8px;flex-wrap:wrap">' +
            '<a href="daily.html" style="flex:1;min-width:9rem;text-align:center;text-decoration:none;background:#0A66FF;color:#fff;border-radius:9999px;padding:12px 16px;font-size:13.5px;font-weight:700">오늘의 사건 하러 가기</a>' +
            '<button type="button" data-close style="flex:0 0 auto;cursor:pointer;background:#F2F4F1;color:#0A0E17;border:none;border-radius:9999px;padding:12px 18px;font-size:13.5px;font-weight:700">닫기</button>' +
          '</div>' +
          '<p style="margin:12px 0 0;font-size:12px;color:#7A8499">문의: <a href="mailto:korahnchild@gmail.com" style="color:#7A8499;font-weight:700">korahnchild@gmail.com</a></p>' +
        '</div>';
      function close() { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); document.removeEventListener("keydown", onKey); }
      function onKey(e) { if (e.key === "Escape") close(); }
      wrap.addEventListener("click", function (e) {
        if (e.target === wrap || (e.target.getAttribute && e.target.hasAttribute("data-close"))) close();
      });
      document.addEventListener("keydown", onKey);
      document.body.appendChild(wrap);
      var btn = wrap.querySelector("[data-close]");
      if (btn) { try { btn.focus(); } catch (e) {} }
    }
  };

  /* checkout으로 향하는 모든 클릭을 캡처 단계에서 가로챈다. */
  document.addEventListener("click", function (e) {
    if (!window.PremiseBeta || !PremiseBeta.on()) return;
    var n = e.target;
    while (n && n !== document) {
      if (n.tagName === "A" && n.getAttribute) {
        var href = n.getAttribute("href") || "";
        if (href.indexOf("checkout") !== -1 && !n.hasAttribute("data-beta-allow")) {
          e.preventDefault();
          e.stopPropagation();
          PremiseBeta.notice();
        }
        return;                                   // 가장 가까운 a 하나만 판정
      }
      n = n.parentNode;
    }
  }, true);

  window.PremiseNav = {
    close: _navCloseDrawer,
    render: function (active) {
      const el = document.getElementById("topnav");
      if (!el) return;
      try { el.dataset.active = active || ""; } catch (e) {}

      const isAdmin = !!(window.PremiseAdmin && PremiseAdmin.is());
      let logged = false;
      try { logged = !!(window.PremiseStore && PremiseStore.isLoggedIn()); } catch (e) {}

      /* 넓은 화면 상단 링크 — 로그인 여부로 갈린다. 4~5개를 넘기지 않는다. */
      /* 상단은 5개까지만. 6개를 넘기면 좁은 데스크톱(700~800px)에서 계정 아이콘이 삐져나온다.
         '내 기록'은 반드시 포함 — 빼면 넓은 화면에서 대시보드로 갈 길이
         파트너 노트 안의 링크뿐이 된다(드로어는 데스크톱에서 숨겨진다).
         대신 '실전 적용 랩'을 뺀다. 입문·기본·심화를 마친 뒤 열리는 마지막 단계라
         초기 사용자에게는 거의 쓰이지 않고, 드로어에는 그대로 있다. */
      const top = logged
        ? [NAV_LEARN[0], NAV_LEARN[1], NAV_LEARN[2], NAV_LEARN[4], NAV_LEARN[5]]
        : [NAV_INFO[0], NAV_INFO[1], NAV_INFO[2], NAV_INFO[3]];
      const link = ([k, href, label]) =>
        `<a href="${href}" class="pn-link${active === k ? " pn-active" : ""}">${label}</a>`;
      const links = top.map(link).join("");

      const accountLink = logged
        ? `<a href="mypage.html" class="pn-account${active === "mypage" ? " pn-active" : ""}" aria-label="마이페이지" title="마이페이지">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21a8 8 0 10-16 0"/><circle cx="12" cy="8" r="4.5"/></svg>
          </a>`
        : `<a href="login.html" class="pn-login">로그인</a>`;
      const ctaLink = logged ? "" : `<a href="onboarding.html" class="pn-cta">무료 체험</a>`;

      const drawerSection = (title, items) =>
        `<p class="pn-dsec">${title}</p>` + items.map(([k, href, label]) =>
          `<a href="${href}" class="pn-ditem${active === k ? " on" : ""}">${label}</a>`).join("");

      el.innerHTML =
        `<style>
          .pn-bar{position:sticky;top:0;z-index:60;background:rgba(255,255,255,.9);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);border-bottom:1px solid #ECEEF1}
          .pn-in{max-width:56rem;margin:0 auto;padding:0 1rem;height:60px;display:flex;align-items:center;justify-content:space-between;gap:8px}
          .pn-logo{display:flex;align-items:center;gap:.55rem;font-weight:700;font-size:15px;color:#0A0E17;text-decoration:none;white-space:nowrap;flex-shrink:0}
          .pn-mark{width:30px;height:30px;border-radius:10px;background:#0A66FF;transform:rotate(45deg);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}
          .pn-right{display:flex;align-items:center;gap:6px;min-width:0}
          .pn-nav{display:flex;align-items:center;gap:2px}
          .pn-link{padding:8px 12px;border-radius:9999px;font-size:13px;font-weight:600;color:#525A69;text-decoration:none;transition:background .2s,color .2s;white-space:nowrap}
          .pn-link:hover{color:#0A0E17;background:#F2F4F1}
          .pn-active{background:#0A0E17;color:#fff}
          .pn-active:hover{background:#0A0E17;color:#fff}
          .pn-login{padding:8px 10px;font-size:13px;font-weight:600;color:#525A69;text-decoration:none;white-space:nowrap}
          .pn-login:hover{color:#0A0E17}
          .pn-cta{padding:9px 16px;border-radius:9999px;background:#0A66FF;color:#fff;font-size:13px;font-weight:700;text-decoration:none;white-space:nowrap;box-shadow:0 4px 12px rgba(10,102,255,.24)}
          .pn-cta:hover{background:#0B3ACC}
          .pn-account{width:34px;height:34px;border-radius:9999px;display:inline-flex;align-items:center;justify-content:center;color:#525A69;background:#F2F4F1;text-decoration:none;flex-shrink:0}
          .pn-account:hover{color:#0A0E17;background:#E4E8EC}
          .pn-account.pn-active{background:#0A0E17;color:#fff}

          /* 햄버거 — 좁은 화면에서만 */
          .pn-burger{display:none;width:38px;height:38px;border-radius:11px;border:1px solid #E4E8F0;background:#fff;cursor:pointer;align-items:center;justify-content:center;flex-shrink:0;padding:0}
          .pn-burger span{display:block;width:17px;height:2px;background:#0A0E17;border-radius:2px;position:relative;transition:transform .22s,opacity .22s}
          .pn-burger span::before,.pn-burger span::after{content:"";position:absolute;left:0;width:17px;height:2px;background:#0A0E17;border-radius:2px;transition:transform .22s,top .22s}
          .pn-burger span::before{top:-5.5px}.pn-burger span::after{top:5.5px}
          .pn-burger.on span{background:transparent}
          .pn-burger.on span::before{top:0;transform:rotate(45deg)}
          .pn-burger.on span::after{top:0;transform:rotate(-45deg)}

          /* 드로어 */
          .pn-drawer{position:fixed;inset:0;z-index:80;visibility:hidden;pointer-events:none}
          .pn-drawer.open{visibility:visible;pointer-events:auto}
          .pn-scrim{position:absolute;inset:0;background:rgba(10,14,23,.42);opacity:0;transition:opacity .24s}
          .pn-drawer.open .pn-scrim{opacity:1}
          .pn-panel{position:absolute;top:0;right:0;height:100%;width:min(86vw,330px);background:#fff;
            box-shadow:-14px 0 40px rgba(10,14,23,.18);transform:translateX(100%);transition:transform .26s cubic-bezier(.22,1,.36,1);
            display:flex;flex-direction:column;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:18px 18px calc(28px + env(safe-area-inset-bottom))}
          .pn-drawer.open .pn-panel{transform:translateX(0)}
          .pn-dhead{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
          .pn-dtitle{font-size:14px;font-weight:800;color:#0A0E17}
          .pn-dclose{width:34px;height:34px;border-radius:10px;border:1px solid #E4E8F0;background:#fff;color:#525A69;font-size:17px;line-height:1;cursor:pointer}
          .pn-dsec{font-size:11px;font-weight:800;letter-spacing:.08em;color:#9AA4B2;margin:12px 0 4px;padding:0 4px}
          .pn-dsec:first-of-type{margin-top:4px}
          .pn-ditem{display:block;padding:10px 14px;border-radius:11px;font-size:14.5px;font-weight:600;color:#2A3151;text-decoration:none}
          .pn-ditem:hover{background:#F4F6FC}
          .pn-ditem.on{background:#0A0E17;color:#fff}
          .pn-dcta{display:block;text-align:center;margin-top:18px;padding:14px;border-radius:13px;background:#0A66FF;color:#fff;font-size:15px;font-weight:800;text-decoration:none}
          .pn-dsub{display:block;text-align:center;margin-top:10px;font-size:13px;font-weight:600;color:#7A879E;text-decoration:none}
          .pn-dout{display:block;width:100%;margin-top:6px;padding:11px 14px;border-radius:12px;
            border:1px solid #E4E8F0;background:#fff;color:#7A879E;font-size:14px;font-weight:700;cursor:pointer;
            font-family:inherit}
          .pn-dout:hover{color:#0A0E17;border-color:#CBD3E0}
          html.pn-lock,html.pn-lock body{overflow:hidden}

          /* 하단 탭바 — 로그인 + 좁은 화면에서만 */
          .pn-tabbar{display:none;position:fixed;left:0;right:0;bottom:0;z-index:70;
            background:rgba(255,255,255,.94);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);
            border-top:1px solid #ECEEF1;padding-bottom:env(safe-area-inset-bottom)}
          .pn-tabs{display:flex;max-width:560px;margin:0 auto}
          .pn-tab{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;
            padding:8px 2px 7px;text-decoration:none;color:#8B95A7;font-size:10.5px;font-weight:700;line-height:1.2}
          .pn-tab svg{width:22px;height:22px}
          .pn-tab.on{color:#0A66FF}

          /* 좁은 데스크톱(701~820px) 안전 마진. Pretendard 로드 여부로 글자 폭이 달라져도
             계정 아이콘이 밀려 나가지 않게 링크 패딩을 줄인다. */
          @media (min-width:701px) and (max-width:860px){ .pn-link{padding:8px 9px;font-size:12.5px} }
          @media (max-width:700px){
            .pn-nav{display:none}
            .pn-login{display:none}
            .pn-burger{display:inline-flex}
            .pn-in{height:56px}
            .pn-cta{padding:8px 13px;font-size:12.5px}
            .pn-logo{font-size:14px}
            body.pn-has-tabbar .pn-tabbar{display:block}
            body.pn-has-tabbar{padding-bottom:64px}   /* 데스크톱에선 탭바가 없으니 여백도 없어야 한다 */
          }
          @media (max-width:340px){ .pn-cta{display:none} }
        </style>
        <header class="pn-bar"><div class="pn-in">
          <a class="pn-logo" href="index.html">
            <span class="pn-mark"><svg style="transform:rotate(-45deg)" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.2"/><path d="M15.5 15.5L20 20"/></svg></span>
            PBS 학습법
          </a>
          <div class="pn-right">
            <nav class="pn-nav" aria-label="주요 메뉴">${links}${isAdmin ? `<a class="pn-link" href="admin.html" title="관리자">⚙</a>` : ""}</nav>
            ${ctaLink}${accountLink}
            <button class="pn-burger" id="pnBurger" type="button" aria-label="메뉴 열기" aria-expanded="false" aria-controls="pnDrawer"><span></span></button>
          </div>
        </div></header>`;

      /* --- 드로어 (body 직속. 재렌더 시 기존 것을 지우고 다시 만든다) --- */
      _navDrop("pnDrawer");
      const drawer = document.createElement("div");
      drawer.id = "pnDrawer";
      drawer.className = "pn-drawer";
      drawer.setAttribute("aria-hidden", "true");
      drawer.innerHTML =
        `<div class="pn-scrim" data-pn-close></div>
         <aside class="pn-panel" role="dialog" aria-modal="true" aria-label="전체 메뉴">
           <div class="pn-dhead">
             <span class="pn-dtitle">전체 메뉴</span>
             <button class="pn-dclose" type="button" aria-label="메뉴 닫기" data-pn-close>✕</button>
           </div>
           ${logged ? drawerSection("학습", NAV_LEARN) : ""}
           ${drawerSection("서비스 안내", logged ? NAV_INFO.filter(function(x){return x[0] !== "coz";}) : NAV_INFO)}
           ${isAdmin ? drawerSection("관리", [["admin", "admin.html", "관리자 콘솔"]]) : ""}
           ${logged
             ? `<a class="pn-ditem" style="margin-top:14px" href="mypage.html">마이페이지 · 구독 관리</a>
                <button class="pn-dout" type="button" data-pn-logout>로그아웃</button>`
             : `<a class="pn-dcta" href="onboarding.html">7일 무료로 시작하기</a>
                <a class="pn-dsub" href="login.html">이미 계정이 있어요 · 로그인</a>`}
         </aside>`;
      document.body.appendChild(drawer);

      const burger = document.getElementById("pnBurger");
      if (burger) burger.addEventListener("click", function () {
        const open = drawer.classList.contains("open");
        if (open) { _navCloseDrawer(); return; }
        drawer.classList.add("open");
        drawer.setAttribute("aria-hidden", "false");
        burger.setAttribute("aria-expanded", "true");
        burger.classList.add("on");
        document.documentElement.classList.add("pn-lock");
        const first = drawer.querySelector(".pn-ditem, .pn-dcta");
        if (first) setTimeout(function () { try { first.focus(); } catch (e) {} }, 60);
      });
      drawer.addEventListener("click", function (e) {
        if (e.target.closest && e.target.closest("[data-pn-logout]")) { e.preventDefault(); _navLogout(); return; }
        if (e.target.hasAttribute && e.target.hasAttribute("data-pn-close")) { _navCloseDrawer(); return; }
        if (e.target.closest && e.target.closest("a")) _navCloseDrawer(); // 링크 이동 시 잠금 해제
      });

      /* --- 하단 탭바 --- */
      _navDrop("pnTabbar");
      document.body.classList.remove("pn-has-tabbar");
      if (logged) {
        const bar = document.createElement("nav");
        bar.id = "pnTabbar";
        bar.className = "pn-tabbar";
        bar.setAttribute("aria-label", "빠른 이동");
        bar.innerHTML = `<div class="pn-tabs">` + NAV_TABS.map(([k, href, label, path]) =>
          `<a class="pn-tab${active === k ? " on" : ""}" href="${href}"${active === k ? ' aria-current="page"' : ""}>${_navIcon(path)}<span>${label}</span></a>`
        ).join("") + `</div>`;
        document.body.appendChild(bar);
        document.body.classList.add("pn-has-tabbar");
      }
    }
  };
  /* ESC로 드로어 닫기 — 리스너는 한 번만 건다 */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") _navCloseDrawer();
  });

  /* ===== 상태별 표시 자동화 (선언식) =====
     요소에 data-show-state="guest,free" → 해당 상태에서만 표시
             data-hide-state="basic,premium" → 해당 상태에서 숨김
     상태: guest|free|trial|basic|premium. 로드 시 + 서버동기화(premise:subscription) 시 재적용. */
  window.PremiseState = {
    get: function(){ try { return PremiseStore.userState(); } catch(e){ return "guest"; } },
    apply: function(){
      var st = this.get();
      try {
        document.querySelectorAll("[data-show-state]").forEach(function(el){
          var arr = (el.getAttribute("data-show-state")||"").split(",").map(function(x){return x.trim();});
          el.style.display = arr.indexOf(st) >= 0 ? "" : "none";
        });
        document.querySelectorAll("[data-hide-state]").forEach(function(el){
          var arr = (el.getAttribute("data-hide-state")||"").split(",").map(function(x){return x.trim();});
          el.style.display = (arr.indexOf(st) >= 0) ? "none" : ""; // 매칭 안 되면 리셋(상태 변경 대비)
        });
        // data-trialused-text: 체험 소진 시 이 텍스트로 교체(원문은 data-fresh-text에 백업)
        document.querySelectorAll("[data-trialused-text]").forEach(function(el){
          var used = false; try { used = PremiseStore.trialUsed(); } catch(e){}
          if (!el.getAttribute("data-fresh-text")) el.setAttribute("data-fresh-text", el.textContent);
          el.textContent = used ? el.getAttribute("data-trialused-text") : el.getAttribute("data-fresh-text");
        });
      } catch(e){}
    }
  };
  function _applyState(){ window.PremiseState.apply(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", _applyState);
  else _applyState();
  document.addEventListener("premise:subscription", _applyState); // 서버 동기화 도착 시 재적용

  /* ===== 관리자 전용 회원상태 스위처 (운영자 계정에서만 노출) ===== */
  /* 전 페이지 노출이 의도된 동작이다. 실사용 화면에서 바로 상태를 바꿔가며 확인해야 하므로
     admin.html 전용으로 제한하지 말 것(2026-07-28에 한 번 제한했다가 되돌림). */
  function mountQaBar(){
    if (!document.body || document.getElementById("qaBar")) return;
    if (!(window.PremiseAdmin && PremiseAdmin.is())) return; // 일반 사용자에게는 렌더하지 않음
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
    bar.style.cssText = "position:fixed;top:74px;right:10px;z-index:75;display:flex;gap:3px;align-items:center;background:rgba(10,14,23,.92);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.16);border-radius:9999px;padding:4px 6px;box-shadow:0 6px 18px rgba(0,0,0,.28);font-family:Pretendard,Inter,sans-serif";
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
  /* Firebase 로그인은 비동기라 첫 렌더 시점엔 currentUser가 없을 수 있다.
     인증 상태가 확정된 뒤 한 번 더 시도하고, 네비게이션도 다시 그린다. */
  document.addEventListener("premise:auth", function(){
    mountQaBar();
    try {
      var el = document.getElementById("topnav");
      if (el && el.dataset && el.dataset.active) PremiseNav.render(el.dataset.active);
    } catch(e){}
  });
})();
