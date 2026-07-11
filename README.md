# 전제학습 (PREMISE)

공부의 전제를 바꾸는 근본 사고력 트레이닝. 정적 웹사이트(HTML · Tailwind CDN · 순수 JS) — 검증/QA용 퍼블리싱 빌드.

## 페이지 맵
| 파일 | 화면 |
|---|---|
| `index.html` | 랜딩 |
| `onboarding.html` | 온보딩 (코지와 첫 만남) |
| `course.html` | 코스 — 사고의 전제 경로 (입문·기본·심화) |
| `level-intro.html` / `level-basic.html` / `level-advanced.html` | 단계 상세 |
| `daily.html` | 오늘의 사건 (다단계 레슨) |
| `notebook.html` | 탐정 노트 (대시보드) |
| `pricing.html` | 요금 |
| `faq.html` | 고객센터 |
| `kozy-icons.html` | 코지 상태 아이콘 시스템 (내부 참고) |
| `common.js` | 공통 네비 + 진도 저장소(localStorage) |

## 특징
- 진도(완료 미션·연속일수·배지)는 브라우저 localStorage에 저장되는 **프로토타입 스텁**입니다. 실서비스 전환 시 서버/DB로 교체 예정.
- 백엔드 없음 → GitHub Pages 등 정적 호스팅에 그대로 배포 가능.

© 2025 전제학습 · ™ Trademark & Patent Pending
