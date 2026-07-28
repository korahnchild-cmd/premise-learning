#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PBS 학습법 · 자동 검증기
────────────────────────────────────────────────────────────
사람이 1,600개를 다 못 읽으므로, 기계가 전수 검사한다.
지금까지 실제로 터졌던 사고를 전부 검사 항목으로 만들었다.

사용법:
    python tools/validate.py            # 전체 검사
    python tools/validate.py --quiet    # 실패만 출력
    python tools/validate.py --json     # 기계 판독용 출력

종료 코드: 0 = 통과, 1 = FAIL 존재
"""
import os
import re
import sys
import json
import glob
import subprocess
from collections import Counter, defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(HERE)
ROOT = os.path.dirname(SITE)

QUIET = "--quiet" in sys.argv
AS_JSON = "--json" in sys.argv

results = []  # (level, group, message)  level: FAIL | WARN | OK


def fail(group, msg):
    results.append(("FAIL", group, msg))


def warn(group, msg):
    results.append(("WARN", group, msg))


def ok(group, msg):
    results.append(("OK", group, msg))


def read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


# ══════════════════════════════════════════════════════════
# 1. 파일 구조 — 잘림 / 태그 균형 / JS 문법
# ══════════════════════════════════════════════════════════
def check_structure():
    G = "구조"
    pages = sorted(glob.glob(os.path.join(SITE, "*.html")) +
                   glob.glob(os.path.join(SITE, "magazine", "*.html")) +
                   glob.glob(os.path.join(SITE, "magazine", "articles", "*.html")))
    bad = 0
    for p in pages:
        name = os.path.relpath(p, SITE)
        if name.startswith("google"):   # 소유권 확인 파일은 평문
            continue
        s = read(p)
        if not s.rstrip().endswith("</html>"):
            fail(G, f"{name} — 파일이 잘렸다 (</html>로 끝나지 않음)"); bad += 1
        for tag in ("div", "section", "table"):
            if len(re.findall(r"<" + tag + r"\b", s)) != s.count(f"</{tag}>"):
                fail(G, f"{name} — <{tag}> 태그 불균형"); bad += 1
        if len(re.findall(r"<p\b", s)) != s.count("</p>"):
            fail(G, f"{name} — <p> 태그 불균형"); bad += 1
        for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', s, re.S):
            try:
                json.loads(m.group(1))
            except Exception:
                fail(G, f"{name} — JSON-LD 파싱 실패 (작은따옴표 금지)"); bad += 1
    if not bad:
        ok(G, f"{len(pages)}개 페이지 · 잘림/태그/JSON-LD 이상 없음")


def check_js_syntax():
    G = "JS문법"
    if subprocess.run(["node", "--version"], capture_output=True).returncode != 0:
        warn(G, "node가 없어 JS 문법 검사를 건너뜀"); return
    bad = 0
    for p in sorted(glob.glob(os.path.join(SITE, "*.js"))):
        if subprocess.run(["node", "--check", p], capture_output=True).returncode:
            fail(G, f"{os.path.basename(p)} — 문법 오류"); bad += 1
    import tempfile
    tmp = os.path.join(tempfile.gettempdir(), "_pbs_chk.js")
    n = 0
    for p in sorted(glob.glob(os.path.join(SITE, "*.html")) +
                    glob.glob(os.path.join(SITE, "magazine", "*.html"))):
        s = read(p)
        for i, m in enumerate(re.finditer(
                r'<script(?![^>]*\bsrc=)(?![^>]*ld\+json)[^>]*>(.*?)</script>', s, re.S)):
            code = m.group(1).strip()
            if not code:
                continue
            n += 1
            with open(tmp, "w", encoding="utf-8") as f:
                f.write(code)
            if subprocess.run(["node", "--check", tmp], capture_output=True).returncode:
                fail(G, f"{os.path.basename(p)} 인라인 스크립트 #{i} — 문법 오류"); bad += 1
    try:
        if os.path.exists(tmp):
            os.remove(tmp)
    except OSError:
        pass
    if not bad:
        ok(G, f"외부 JS + 인라인 {n}개 · 문법 이상 없음")


# ══════════════════════════════════════════════════════════
# 2. DOM 참조 — 없는 id를 만지거나, 있는데 안 채우거나
# ══════════════════════════════════════════════════════════
RUNTIME_IDS = {"blastBtn", "fb", "opts", "hintBtn", "hintBox", "qInput",
               "cblast", "cfb", "copts", "proofBlast", "topnav"}


def check_dom_refs():
    G = "DOM참조"
    bad = 0
    for name in ("notebook.html", "report.html", "dashboard.html", "daily.html",
                 "admin.html", "calendar.html", "mypage.html"):
        p = os.path.join(SITE, name)
        if not os.path.exists(p):
            continue
        s = read(p)
        html = re.sub(r'<script(?![^>]*ld\+json)[^>]*>.*?</script>', "", s, flags=re.S)
        ids = set(re.findall(r'id="([A-Za-z0-9_\-]+)"', html))
        used = set(re.findall(r'\$\("([A-Za-z0-9_\-]+)"\)', s)) | \
               set(re.findall(r'getElementById\("([A-Za-z0-9_\-]+)"\)', s))
        missing = (used - ids) - RUNTIME_IDS
        if missing:
            fail(G, f"{name} — 없는 id를 참조한다: {sorted(missing)} (스크립트가 여기서 멈춘다)")
            bad += 1
        script = "\n".join(re.findall(
            r'<script(?![^>]*ld\+json)[^>]*>(.*?)</script>', s, re.S))
        unfilled = sorted(i for i in (ids - used) - RUNTIME_IDS
                          if f'"{i}"' not in script and f"'{i}'" not in script)
        if unfilled:
            warn(G, f"{name} — HTML에 있으나 스크립트가 전혀 다루지 않는다: {unfilled[:6]}")
    if not bad:
        ok(G, "없는 id 참조 없음")


# ══════════════════════════════════════════════════════════
# 3. 사건 데이터 — daily.html의 LESSON_SETS
# ══════════════════════════════════════════════════════════
def parse_lessons():
    s = read(os.path.join(SITE, "daily.html"))
    tracks = {}
    for m in re.finditer(r'LESSON_SETS\["([^"]+)"\]\s*=\s*\[', s):
        name = m.group(1)
        i = m.end(); depth = 1
        while depth > 0 and i < len(s):
            if s[i] == "[":
                depth += 1
            elif s[i] == "]":
                depth -= 1
            i += 1
        body = s[m.end():i - 1]
        blocks = []
        for bm in re.finditer(r'\{\s*missionId:"([^"]+)"(.*?)(?=\{\s*missionId:"|\Z)', body, re.S):
            blocks.append((bm.group(1), bm.group(2)))
        tracks[name] = blocks
    return s, tracks


REQUIRED_STEPS = ["intro", "choice", "reveal", "choice", "blast", "insight", "wrap"]


def check_lessons():
    G = "사건데이터"
    src, tracks = parse_lessons()
    if not tracks:
        fail(G, "LESSON_SETS를 찾지 못했다"); return
    all_ids, all_cats = [], []
    cat_by_track = defaultdict(list)
    problems = 0

    for track, blocks in tracks.items():
        for mid, body in blocks:
            all_ids.append(mid)
            tag = f"[{track}/{mid}]"

            for field in ("subject", "stage", "badge", "badgeName", "note", "material"):
                if f"{field}:" not in body:
                    fail(G, f"{tag} 필수 필드 누락: {field}"); problems += 1

            cat = re.search(r'cat:"([^"]+)"', body)
            if cat:
                all_cats.append(cat.group(1))
                cat_by_track[track].append(cat.group(1))
            else:
                warn(G, f"{tag} cat(카테고리 ID) 없음 — 중복 추적 불가")

            if 'class="trig"' not in body:
                warn(G, f"{tag} material에 강조 대상(trig) 없음")

            steps = re.findall(r't:"(intro|choice|reveal|blast|insight|wrap)"', body)
            if steps != REQUIRED_STEPS:
                fail(G, f"{tag} 단계 구성 오류: {steps}"); problems += 1

            # choice 검사
            for ci, om in enumerate(re.finditer(r'opts:\[(.*?)\n\s*\]', body, re.S)):
                seg = om.group(1)
                oks = re.findall(r"ok:(true|false)", seg)
                labels = re.findall(r'label:"([^"]*)"', seg)
                fbs = re.findall(r'fb:"([^"]*)"', seg)
                if len(labels) != 3:
                    fail(G, f"{tag} 선택지 {len(labels)}개 (3개여야 함)"); problems += 1
                if oks.count("true") != 1:
                    fail(G, f"{tag} 정답이 {oks.count('true')}개 (정확히 1개여야 함)"); problems += 1
                if len(fbs) != len(labels):
                    fail(G, f"{tag} 피드백 누락 ({len(fbs)}/{len(labels)})"); problems += 1
                # 정답이 항상 가장 긴 선택지면 길이만 보고 찍을 수 있다
                if labels and oks.count("true") == 1:
                    ai = oks.index("true")
                    if len(labels[ai]) == max(len(x) for x in labels) and \
                       len(labels[ai]) > min(len(x) for x in labels) * 1.8:
                        warn(G, f"{tag} 정답 선택지가 유독 길다 — 길이로 찍힐 수 있음")

            for f in ("hint",):
                if body.count(f + ':"') < 2:
                    warn(G, f"{tag} 힌트가 {body.count(f + chr(58) + chr(34))}개 (선택지 단계마다 1개 권장)")
            for f in ("why", "example", "premise"):
                if f + ':"' not in body:
                    fail(G, f"{tag} reveal 단계 필드 누락: {f}"); problems += 1
            for f in ("reframe", "more", "apply"):
                if f + ':"' not in body:
                    fail(G, f"{tag} insight 단계 필드 누락: {f}"); problems += 1

    dup_ids = [k for k, v in Counter(all_ids).items() if v > 1]
    if dup_ids:
        fail(G, f"missionId 중복: {dup_ids}"); problems += 1
    for track, cats in cat_by_track.items():
        over = [k for k, v in Counter(cats).items() if v > 4]
        if over:
            fail(G, f"{track} — 카테고리당 4개 초과: {over}"); problems += 1
    dup_cat = [k for k, v in Counter(all_cats).items() if v > 1]
    if dup_cat:
        warn(G, f"트랙 간 동일 카테고리 재사용: {dup_cat} (의도된 것이면 무시)")

    if not problems:
        ok(G, f"사건 {len(all_ids)}개 · 필수 필드/단계/선택지 이상 없음")
    counts = {t: len(b) for t, b in tracks.items()}
    ok(G, f"트랙별 사건 수: {counts}")
    for t, c in counts.items():
        if c < 7:
            fail(G, f"{t} 트랙 {c}개 — 1주(7일)도 못 채운다")
        elif c < 10:
            warn(G, f"{t} 트랙 {c}개 — 여유가 없다 (10개 권장)")


# ══════════════════════════════════════════════════════════
# 4. 정답 위치 분포 (셔플 후 실제 노출 순서)
# ══════════════════════════════════════════════════════════
def check_answer_balance():
    G = "정답분포"
    src, tracks = parse_lessons()
    shuffled = "_shuffled" in src
    pos = []
    for track, blocks in tracks.items():
        for mid, body in blocks:
            si = 0
            for sm in re.finditer(r't:"(intro|choice|reveal|blast|insight|wrap)"', body):
                if sm.group(1) != "choice":
                    si += 1; continue
                seg = body[sm.start():]
                om = re.search(r'opts:\[(.*?)\n\s*\]', seg, re.S)
                if not om:
                    si += 1; continue
                oks = re.findall(r"ok:(true|false)", om.group(1))
                n = len(oks)
                if "true" not in oks or n == 0:
                    si += 1; continue
                idx = oks.index("true")
                if shuffled:
                    seed = mid + "#" + str(si)
                    h = 2166136261
                    for ch in seed:
                        h = ((h ^ ord(ch)) * 16777619) & 0xFFFFFFFF
                    def nx():
                        nonlocal h
                        h ^= (h << 13) & 0xFFFFFFFF; h &= 0xFFFFFFFF
                        h ^= h >> 17
                        h ^= (h << 5) & 0xFFFFFFFF; h &= 0xFFFFFFFF
                        return h
                    arr = list(range(n))
                    for k in range(n - 1, 0, -1):
                        j = nx() % (k + 1)
                        arr[k], arr[j] = arr[j], arr[k]
                    idx = arr.index(idx)
                pos.append(idx + 1)
                si += 1
    if not pos:
        warn(G, "선택지를 찾지 못함"); return
    c = Counter(pos); total = len(pos)
    worst = max(c.values()) / total
    dist = dict(sorted(c.items()))
    if worst > 0.5:
        fail(G, f"정답이 한쪽에 쏠렸다 {dist} — 최다 {worst*100:.0f}% (아이가 패턴을 외운다)")
    elif worst > 0.42:
        warn(G, f"정답 분포가 다소 치우침 {dist} — 최다 {worst*100:.0f}%")
    else:
        ok(G, f"정답 위치 균형 양호 {dist} (셔플 {'적용' if shuffled else '미적용'})")


# ══════════════════════════════════════════════════════════
# 5. 배지 정합 — 데일리가 주는 배지가 노트에 존재하는가
# ══════════════════════════════════════════════════════════
def check_badges():
    G = "배지"
    d = read(os.path.join(SITE, "daily.html"))
    n = read(os.path.join(SITE, "notebook.html"))
    canon = dict(re.findall(r'\{e:"([^"]+)",n:"([^"]+)"\}', n))
    if not canon:
        fail(G, "파트너 노트에서 배지 목록을 찾지 못했다 (렌더 코드 유실 의심)"); return
    rows = re.findall(r'badge:"([^"]+)", badgeName:"([^"]+)"', d)
    missing = sorted({b for b, _ in rows if b not in canon})
    mism = [(b, bn) for b, bn in rows if b in canon and bn.replace(" 획득!", "") != canon[b]]
    if missing:
        fail(G, f"노트에 없는 배지 {missing} — 획득해도 영원히 안 켜진다")
    if mism:
        fail(G, f"배지 이름 불일치 {mism[:4]}")
    if not missing and not mism:
        ok(G, f"배지 {len(set(b for b, _ in rows))}종 · 노트 목록 {len(canon)}종과 정합")


# ══════════════════════════════════════════════════════════
# 6. 언어 품질 — 톤 / 초등 난이도 / 문자열 안전성
# ══════════════════════════════════════════════════════════
BANNED = ["반드시 해야", "무조건", "100% 보장", "확실히 오릅니다", "실패자", "멍청", "바보"]
HARD_WORDS = ["귀납", "연역", "명제", "표본오차", "상관계수", "유의수준", "패러다임",
              "인식론", "존재론", "메타인지", "휴리스틱", "편향성", "정합성"]


def check_language():
    G = "언어품질"
    src, tracks = parse_lessons()
    bad = 0
    for track, blocks in tracks.items():
        for mid, body in blocks:
            tag = f"[{track}/{mid}]"
            text = " ".join(re.findall(r'"([^"]{4,})"', body))
            for w in BANNED:
                if w in text:
                    fail(G, f"{tag} 금지 표현 '{w}'"); bad += 1
            if track == "초등":
                hits = [w for w in HARD_WORDS if w in text]
                if hits:
                    fail(G, f"{tag} 초등 트랙에 어려운 용어 {hits}"); bad += 1
            for f in ("why", "example", "more", "apply"):
                for v in re.findall(f + r':"([^"]*)"', body):
                    if len(v) < 25:
                        warn(G, f"{tag} {f} 너무 짧다 ({len(v)}자)")
                    if len(v) > 260:
                        warn(G, f"{tag} {f} 너무 길다 ({len(v)}자)")
    # 문자열 안에 ASCII 큰따옴표가 들어가면 JS가 깨진다
    for m in re.finditer(r'(why|example|more|apply|hint|premise|reframe):"([^"]*)"', src):
        pass  # 정규식이 이미 "로 끊기므로, 깨졌다면 JS 문법 검사에서 잡힌다
    if not bad:
        ok(G, "금지 표현 없음 · 초등 어휘 난이도 이상 없음")


# ══════════════════════════════════════════════════════════
# 7. 사이트 전역 — 가짜 데이터 / 데모 잔재 / 깨진 링크
# ══════════════════════════════════════════════════════════
FAKE = ["지난주 2개", "지난주 7회", "3개월 전만 해도", "TOTAL_PREMISE", "NB_DEMO_Q"]
ALLOW_JIHO = {"pricing.html", "onboarding.html"}   # 미리보기·입력 예시라 허용


def check_site():
    G = "사이트전역"
    bad = 0
    for p in sorted(glob.glob(os.path.join(SITE, "*.html"))):
        name = os.path.basename(p)
        s = read(p)
        for f in FAKE:
            if f in s:
                fail(G, f"{name} — 가짜 데이터 '{f}'"); bad += 1
        if "지호" in s and name not in ALLOW_JIHO:
            fail(G, f"{name} — 예시 이름 '지호' 노출"); bad += 1
        if 'onclick="PremiseStore.reset()' in s:
            fail(G, f"{name} — 초기화 버튼이 일반 사용자에게 노출"); bad += 1
    cj = read(os.path.join(SITE, "common.js"))
    if "PremiseAdmin" not in cj or "PremiseAdmin.is())) return" not in cj:
        fail(G, "common.js — QA 스위처가 관리자 전용으로 잠기지 않았다"); bad += 1
    # 결제 키
    ck = os.path.join(SITE, "checkout.html")
    if os.path.exists(ck):
        s = read(ck)
        if "live_ck_" in s:
            warn(G, "checkout.html — 라이브 결제 키 사용 중 (베타 중이면 실결제 발생)")
        elif "test_ck_" in s:
            ok(G, "checkout.html — 테스트 결제 키 (실결제 없음)")
    if not bad:
        ok(G, "가짜 데이터/데모 잔재 없음")


def check_links():
    G = "링크"
    bad = 0
    pages = sorted(glob.glob(os.path.join(SITE, "*.html")) +
                   glob.glob(os.path.join(SITE, "magazine", "*.html")) +
                   glob.glob(os.path.join(SITE, "magazine", "articles", "*.html")))
    for p in pages:
        base = os.path.dirname(p)
        for m in re.finditer(r'href="([^"]+)"', read(p)):
            h = m.group(1)
            if h.startswith(("http", "mailto", "tel", "#", "javascript:")) or "${" in h or "' +" in h:
                continue
            t = h.split("#")[0].split("?")[0]
            if not t:
                continue
            if not os.path.exists(os.path.normpath(os.path.join(base, t))):
                fail(G, f"{os.path.relpath(p, SITE)} → 깨진 링크 {h}"); bad += 1
    if not bad:
        ok(G, f"{len(pages)}개 페이지 · 내부 링크 이상 없음")


# ══════════════════════════════════════════════════════════
# 8. 카테고리 소진 현황
# ══════════════════════════════════════════════════════════
def check_category_coverage():
    G = "카테고리"
    cat_file = os.path.join(ROOT, "PBS_전제카테고리_130.json")
    if not os.path.exists(cat_file):
        warn(G, "PBS_전제카테고리_130.json 없음 — 소진 현황 계산 생략"); return
    cats = json.load(open(cat_file, encoding="utf-8"))["categories"]
    valid = {c["id"] for c in cats}
    src, tracks = parse_lessons()
    used = set()
    for _, blocks in tracks.items():
        for mid, body in blocks:
            m = re.search(r'cat:"([^"]+)"', body)
            if m:
                if m.group(1) not in valid:
                    fail(G, f"{mid} — 마스터에 없는 카테고리 ID '{m.group(1)}'")
                used.add(m.group(1))
    tier = Counter(c["tier"] for c in cats if c["id"] in used)
    ok(G, f"카테고리 소진 {len(used)}/{len(valid)} · 남은 {len(valid)-len(used)}개 "
          f"(최대 {(len(valid)-len(used))*3*4}사건 생성 가능)")
    if tier:
        ok(G, f"사용된 티어 분포: {dict(tier)}")


# ══════════════════════════════════════════════════════════
def main():
    check_structure()
    check_js_syntax()
    check_dom_refs()
    check_lessons()
    check_answer_balance()
    check_badges()
    check_language()
    check_site()
    check_links()
    check_category_coverage()

    fails = [r for r in results if r[0] == "FAIL"]
    warns = [r for r in results if r[0] == "WARN"]

    if AS_JSON:
        print(json.dumps({"fail": len(fails), "warn": len(warns),
                          "results": [{"level": l, "group": g, "message": m} for l, g, m in results]},
                         ensure_ascii=False, indent=1))
        sys.exit(1 if fails else 0)

    icon = {"FAIL": "❌", "WARN": "⚠️ ", "OK": "✅"}
    cur = None
    for lvl, grp, msg in results:
        if QUIET and lvl == "OK":
            continue
        if grp != cur:
            print(f"\n── {grp}")
            cur = grp
        print(f"  {icon[lvl]} {msg}")

    print("\n" + "═" * 56)
    if fails:
        print(f"  ❌ FAIL {len(fails)}건 · ⚠️  WARN {len(warns)}건 — 배포 전 수정 필요")
    elif warns:
        print(f"  ✅ FAIL 0건 · ⚠️  WARN {len(warns)}건 — 배포 가능, 경고 확인 권장")
    else:
        print("  ✅ 전 항목 통과")
    print("═" * 56)
    sys.exit(1 if fails else 0)


if __name__ == "__main__":
    main()
