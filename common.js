/* ===== PBS 학습법 공통 모듈 (P5 통합) =====
   - PremiseStore: 화면 간 공유 상태 (localStorage 기반, 로컬 파일에서 유지됨)
   - PremiseNav: 공통 상단 네비게이션 주입
   미션 id 규칙: 국어 k-m1..k-m9 (순서대로), 수학 m-ma1..m-ma8 (순서대로)
*/
(function () {
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
      premises: [
        { subject: "수학", note: "속도 대신 깊이로 전환", badge: "🐢", badgeName: "깊이파트너", date: "오늘" },
        { subject: "일상", note: "'수 = 행복' 전제를 흔듦", badge: "🧩", badgeName: "행간파트너", date: "어제" },
        { subject: "언어", note: "'조차'가 심은 전제를 포착", badge: "🕵️", badgeName: "문장파트너", date: "2일 전" },
        { subject: "상식", note: "'배웠으니 안다'는 전제를 의심", badge: "🔍", badgeName: "구조파트너", date: "3일 전" },
        { subject: "일상", note: "'열심히=성과' 전제를 알아차림", badge: "🎯", badgeName: "알아차림파트너", date: "4일 전" }
      ]
    };
  }

  function load() {
    try { const raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) : seed(); }
    catch (e) { return seed(); }
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
    /* ===== PBS 캘린더 ===== */
    getPlan: () => s.plan || "basic",
    setPlan: (p) => { s.plan = p === "premium" ? "premium" : "basic"; save(s); return s; },
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
          .pn-reset{margin-left:2px;padding:8px 10px;border-radius:9999px;font-size:13px;color:#9AA4B2;background:none;border:none;cursor:pointer}
          .pn-reset:hover{color:#0A0E17}
          @media (max-width:520px){ .pn-link{padding:7px 10px;font-size:12px} }
        </style>
        <header class="pn-bar"><div class="pn-in">
          <a class="pn-logo" href="index.html">
            <span class="pn-mark"><svg style="transform:rotate(-45deg)" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.2"/><path d="M15.5 15.5L20 20"/></svg></span>
            PBS 학습법
          </a>
          <nav class="pn-nav">${links}<button class="pn-reset" title="데모 초기화" onclick="PremiseStore.reset();location.reload()">↻</button></nav>
        </div></header>`;
    }
  };
})();
