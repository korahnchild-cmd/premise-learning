/* ==========================================================================
   PBS 학습법 v2 — 공통 모듈
   - PremiseStore: localStorage 상태 (진행도/배지/전제 기록)
   - PremiseNav: 서브페이지 공통 네비 주입
   - PremiseFx: 공통 인터랙션 (reveal, counter, magnetic, kw underline)
   ========================================================================== */
(function () {
  "use strict";

  /* ===== PremiseStore — localStorage 상태 관리 ===== */
  var KEY = "premise_state_v2";
  function today() { return new Date().toISOString().slice(0, 10); }

  function seed() {
    return {
      streak: 15,
      lastActive: today(),
      completed: ["in-1", "in-2", "in-3", "in-4", "ba-1"],
      badges: ["🎯", "🔍", "🕵️", "🧩", "🐢"],
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
    try { var raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) : seed(); }
    catch (e) { return seed(); }
  }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }

  var s = load(); save(s);

  window.PremiseStore = {
    get: function () { return s; },
    reset: function () { try { localStorage.removeItem(KEY); } catch (e) {} s = seed(); save(s); return s; },
    isDone: function (id) { return s.completed.indexOf(id) !== -1; },
    completeCase: function (c) {
      if (c.missionId && s.completed.indexOf(c.missionId) === -1) s.completed.push(c.missionId);
      if (c.badge && s.badges.indexOf(c.badge) === -1) s.badges.push(c.badge);
      s.premises.unshift({ subject: c.subject, note: c.note, badge: c.badge, badgeName: c.badgeName, date: "방금" });
      if (s.lastActive !== today()) { s.streak += 1; s.lastActive = today(); }
      save(s);
      return s;
    }
  };

  /* ===== 루카(Kozy) SVG 주입 ===== */
  function kozySVG() {
    return '<div class="k-wrap"><svg viewBox="0 0 100 100" aria-label="루카">'
      + '<g class="k-turn">'
      + '<g class="cube">'
      + '<polygon class="k-face top" points="50,10 85,28 50,46 15,28"/>'
      + '<polygon class="k-face right" points="50,46 85,28 85,68 50,86"/>'
      + '<polygon class="k-face" points="50,46 15,28 15,68 50,86"/>'
      + '<polygon class="k-edge" points="50,10 85,28 50,46 15,28"/>'
      + '<polygon class="k-edge" points="50,46 85,28 85,68 50,86"/>'
      + '<polygon class="k-edge" points="50,46 15,28 15,68 50,86"/>'
      + '</g>'
      + '<g class="octa">'
      + '<polygon class="k-face top" points="50,8 82,30 50,50 18,30"/>'
      + '<polygon class="k-face right" points="50,50 82,30 50,92"/>'
      + '<polygon class="k-face" points="50,50 18,30 50,92"/>'
      + '<polygon class="k-edge" points="50,8 82,30 50,50 18,30"/>'
      + '<polygon class="k-edge" points="50,50 82,30 50,92"/>'
      + '<polygon class="k-edge" points="50,50 18,30 50,92"/>'
      + '</g>'
      + '<circle class="k-ring" cx="50" cy="50" r="30" fill="none" stroke="#0A66FF" stroke-width="2"/>'
      + '<circle class="k-core" cx="50" cy="48" r="4.5"/>'
      + '</g></svg></div>';
  }
  document.querySelectorAll(".kozy").forEach(function (el) { el.innerHTML = kozySVG(); });

  /* ===== PremiseNav — 서브페이지 공통 네비 ===== */
  window.PremiseNav = {
    render: function (active) {
      var el = document.getElementById("topnav");
      if (!el) return;
      var items = [
        ["coz", "course.html", "코스"],
        ["daily", "daily.html", "오늘의 사건"],
        ["note", "notebook.html", "파트너 노트"]
      ];
      var links = items.map(function (it) {
        return '<a href="' + it[1] + '" class="pn-link' + (active === it[0] ? " pn-active" : "") + '">' + it[2] + '</a>';
      }).join("");
      el.innerHTML =
        '<style>'
        + '#pn-bar{position:sticky;top:0;z-index:40;background:rgba(255,255,255,.85);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid #ECEEF1}'
        + '#pn-in{max-width:56rem;margin:0 auto;padding:0 1.25rem;height:64px;display:flex;align-items:center;justify-content:space-between}'
        + '.pn-logo{display:flex;align-items:center;gap:.6rem;font-weight:700;font-size:15px;color:#0A0E17;text-decoration:none}'
        + '.pn-mark{width:32px;height:32px;border-radius:11px;background:#0A66FF;transform:rotate(45deg);display:inline-flex;align-items:center;justify-content:center}'
        + '.pn-nav{display:flex;align-items:center;gap:2px}'
        + '.pn-link{padding:8px 14px;border-radius:9999px;font-size:13px;font-weight:600;color:#525A69;text-decoration:none;transition:background .2s,color .2s;white-space:nowrap}'
        + '.pn-link:hover{color:#0A0E17;background:#F2F4F1}'
        + '.pn-active{background:#0A0E17;color:#fff}'
        + '.pn-active:hover{background:#0A0E17;color:#fff}'
        + '.pn-reset{margin-left:2px;padding:8px 10px;border-radius:9999px;font-size:13px;color:#9AA4B2;background:none;border:none;cursor:pointer}'
        + '.pn-reset:hover{color:#0A0E17}'
        + '@media(max-width:520px){.pn-link{padding:7px 10px;font-size:12px}}'
        + '</style>'
        + '<header id="pn-bar"><div id="pn-in">'
        + '<a class="pn-logo" href="index.html">'
        + '<span class="pn-mark"><svg style="transform:rotate(-45deg)" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.2"/><path d="M15.5 15.5L20 20"/></svg></span>'
        + 'PBS 학습법'
        + '</a>'
        + '<nav class="pn-nav">' + links + '<button class="pn-reset" title="데모 초기화" onclick="PremiseStore.reset();location.reload()">↻</button></nav>'
        + '</div></header>';
    }
  };

  /* ===== PremiseFx — 공통 인터랙션 ===== */
  window.PremiseFx = {
    init: function () {
      var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      /* 진행 바 + 네비 배경 */
      var bar = document.getElementById("bar");
      var nav = document.getElementById("nav");
      function onScroll() {
        var h = document.documentElement;
        if (bar) bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
        if (nav) {
          if (window.scrollY > 40) { nav.style.background = "rgba(255,255,255,.92)"; nav.classList.add("pn-scrolled"); }
          else { nav.style.background = "rgba(255,255,255,.80)"; nav.classList.remove("pn-scrolled"); }
        }
      }
      document.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      /* reveal on scroll */
      var reveals = document.querySelectorAll(".reveal");
      if ("IntersectionObserver" in window && !reduced) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
          });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
        reveals.forEach(function (el) { io.observe(el); });
      } else {
        reveals.forEach(function (el) { el.classList.add("in"); });
      }

      /* 키워드 밑줄 */
      window.addEventListener("load", function () {
        var kw = document.getElementById("kw");
        if (kw) setTimeout(function () { kw.classList.add("draw"); }, 500);
      });

      /* 카운터 count-up */
      var counters = document.querySelectorAll("[data-count]");
      if (counters.length) {
        var cio = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (!en.isIntersecting) return;
            var el = en.target, target = parseFloat(el.getAttribute("data-count")) || 0;
            var dec = parseInt(el.getAttribute("data-decimals") || "0", 10);
            if (reduced) { el.textContent = target.toFixed(dec); cio.unobserve(el); return; }
            var start = null, dur = 1200;
            (function step(ts) {
              if (!start) start = ts;
              var p = Math.min((ts - start) / dur, 1);
              el.textContent = (p * target).toFixed(dec);
              if (p < 1) requestAnimationFrame(step); else el.textContent = target.toFixed(dec);
            })();
            cio.unobserve(el);
          });
        }, { threshold: 0.4 });
        counters.forEach(function (el) { cio.observe(el); });
      }

      /* magnetic 버튼 (포인터 fine만) */
      if (!reduced && window.matchMedia("(pointer:fine)").matches) {
        document.querySelectorAll(".btn-magnetic").forEach(function (btn) {
          btn.addEventListener("mousemove", function (e) {
            var r = btn.getBoundingClientRect();
            var x = (e.clientX - r.left - r.width / 2) * 0.2;
            var y = (e.clientY - r.top - r.height / 2) * 0.3;
            btn.style.transform = "translate(" + x + "px," + y + "px)";
          });
          btn.addEventListener("mouseleave", function () { btn.style.transform = "translate(0,0)"; });
        });
      }

      /* cursor spotlight (다크 섹션) */
      if (!reduced && window.matchMedia("(pointer:fine)").matches) {
        document.querySelectorAll(".spotlight").forEach(function (el) {
          el.addEventListener("mousemove", function (e) {
            var r = el.getBoundingClientRect();
            el.style.setProperty("--mx", (e.clientX - r.left) + "px");
            el.style.setProperty("--my", (e.clientY - r.top) + "px");
          });
        });
      }
    }
  };

  /* DOM 준비되면 자동 init */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.PremiseFx.init);
  } else {
    window.PremiseFx.init();
  }
})();
