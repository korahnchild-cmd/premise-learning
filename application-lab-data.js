/* PBS 학습법 — 실전 적용 랩 문항 뱅크
   국어(15) + 수학(15) + 역사(15) = 총 45문항
   finalSparkEligible: 각 과목당 5문항 이상
   스키마: 작업 지시서 5장 준수
*/

var APPLICATION_LAB_ITEMS = [
  {
    "id": "al-kor-001",
    "subject": "국어",
    "domain": "비문학",
    "track": "고등",
    "stage": "심화",
    "difficulty": 4,
    "finalSparkEligible": true,
    "stem": "다음 글을 읽고 물음에 답하시오.\n\n지난달 실시된 설문조사 결과, 매일 아침 식사를 하는 학생의 평균 성적이 그렇지 않은 학생보다 0.5점 더 높게 나타났다. 이에 따라 한 교육 전문가는 '아침 식사가 학업 성취도를 향상시킨다'는 결론을 내리고, 모든 학교에서 아침 식사를 의무화할 것을 제안했다.\n\n위 글에서 전문가의 결론이 성립하기 위해 반드시 전제되어야 하는 것은?",
    "passage": "",
    "choices": [
      {
        "label": "①",
        "text": "아침 식사를 하는 학생 수가 그렇지 않은 학생 수보다 많다.",
        "correct": false,
        "trapNote": "학생 수의 비교는 결론의 인과관계와 무관함"
      },
      {
        "label": "②",
        "text": "아침 식사와 성적 사이에 상관관계가 있으면 인과관계도 성립한다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "성적이 높은 학생일수록 아침 식사를 선호한다.",
        "correct": false,
        "trapNote": "역인과 가능성을 지적하지만, 전문가가 전제하는 것은 아님"
      },
      {
        "label": "④",
        "text": "설문조사에 참여한 학생 수가 통계적으로 의미 있는 규모다.",
        "correct": false,
        "trapNote": "'표본 크기'라는 익숙한 통계 지식을 자동 적용해 ④를 고르는 학생이 가장 많음 — 이 글의 진짜 결함(상관→인과 비약)을 놓침"
      },
      {
        "label": "⑤",
        "text": "아침 식사의 종류에 따라 성적 향상 효과가 다르다.",
        "correct": false,
        "trapNote": "식사 종류는 글에서 다루지 않는 정보"
      }
    ],
    "hiddenPremise": "'함께 일어나는 두 현상(상관관계)은 한쪽이 다른 쪽의 원인(인과관계)이다'라는 잘못된 전제",
    "commonMistake": "④를 고르는 학생이 압도적으로 많음. 통계 문제라면 반사적으로 '표본 크기'를 의심하는 습관 때문에, 글의 진짜 논리적 결함인 '상관→인과 비약'을 보지 못함.",
    "lukaExplain": "표본 크기 얘기가 나오면 반사적으로 ④를 고르고 싶어지지? 그런데 이 글은 '몇 명을 조사했는지'가 문제가 아니야. '같이 일어난 일'을 '한쪽이 다른 쪽을 만들었다'고 착각한 게 진짜 구멍이야. 아침 식사와 성적은 함께 나타났을 뿐, 식사가 성적을 '올렸다'는 증거는 이 글 어디에도 없어.",
    "reframe": "이 문제가 진짜로 묻는 건 통계 지식이 아니라, '상관관계는 인과관계를 보장하지 않는다'는 논리 구조를 알아채는 것."
  },
  {
    "id": "al-kor-002",
    "subject": "국어",
    "domain": "비문학",
    "track": "중등",
    "stage": "기본",
    "difficulty": 3,
    "finalSparkEligible": true,
    "stem": "다음은 과학 기사의 일부다.\n\n'본 실험에서 새로운 약물 X를 투여한 환자군의 회복 속도가 기존 약물보다 20% 빨랐다. 따라서 약물 X는 기존 약물보다 우수하다.'\n\n이 글의 추론이 타당하지 않은 이유로 가장 적절한 것은?",
    "choices": [
      {
        "label": "①",
        "text": "약물 X의 가격이 비싸서 환자가 부담할 수 없다.",
        "correct": false,
        "trapNote": "가격은 글의 논리와 무관"
      },
      {
        "label": "②",
        "text": "회복 속도만으로 약물의 우수성을 단정할 수 없다. 부작용, 안전성 등 다른 기준이 고려되지 않았다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "환자군의 수가 너무 적어 통계적 의미가 없다.",
        "correct": false,
        "trapNote": "표본 크기를 의심하는 반사적 습관으로 ③을 고름"
      },
      {
        "label": "④",
        "text": "기존 약물의 회복 속도를 잘못 측정했을 수 있다.",
        "correct": false,
        "trapNote": "측정 오류 가능성은 제기할 수 있으나 가장 핵심적인 논리 결함이 아님"
      },
      {
        "label": "⑤",
        "text": "약물 X의 특허가 아직 등록되지 않았다.",
        "correct": false,
        "trapNote": "특허는 논리와 무관"
      }
    ],
    "hiddenPremise": "'회복 속도가 빠르다 = 약물이 우수하다'라는 전제. 우수성의 기준이 오직 회복 속도 하나라고 단정.",
    "commonMistake": "③(표본 크기)을 고르는 학생 다수. 통계 문제 → 표본 크기라는 반사 작용이 작동. 하지만 이 글의 결함은 '회복 속도 = 우수성'이라는 단일 기준 비약에 있음.",
    "lukaExplain": "표본 크기? 그것도 중요하지. 근데 이 글이 진짜로 문제인 건, '회복이 빨랐다'는 것 하나만 보고 '무조건 우수하다'고 결론 내렸다는 거야. 부작용은? 안전성은? 우수하다는 건 한 가지 기준으로 판단할 수 없어.",
    "reframe": "'A가 B보다 한 가지 면에서 낫다'가 'A가 B보다 우수하다'로 이어지는 논리적 비약을 잡아내는 훈련."
  },
  {
    "id": "al-kor-003",
    "subject": "국어",
    "domain": "비문학",
    "track": "고등",
    "stage": "기본",
    "difficulty": 3,
    "finalSparkEligible": false,
    "stem": "다음 설명문을 읽고 물음에 답하시오.\n\n'독도는 지질학적으로 화산 활동에 의해 형성된 섬이다. 약 460만 년 전 해저 화산의 분출로 만들어졌으며, 그 후 오랜 풍화 작용을 거쳐 오늘의 모습이 되었다.'\n\n윗글에 대한 설명으로 가장 적절한 것은?",
    "choices": [
      {
        "label": "①",
        "text": "필자의 주관적 의견이 강하게 드러난 글이다.",
        "correct": false,
        "trapNote": "설명문=객관적이라는 반대 전제로 오답"
      },
      {
        "label": "②",
        "text": "사실을 전달하는 데 목적이 있는 객관적인 설명문이다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "감정을 표현하는 것을 주 목적으로 한다.",
        "correct": false,
        "trapNote": "설명문과 감정 표현을 혼동"
      },
      {
        "label": "④",
        "text": "독도에 대한 개인의 느낌을 중심으로 서술되었다.",
        "correct": false,
        "trapNote": "설명문의 특성을 모름"
      },
      {
        "label": "⑤",
        "text": "독자를 설득하기 위해 논리를 펴고 있다.",
        "correct": false,
        "trapNote": "설명문과 논설문을 혼동 — '객관적'이라는 표현에 속아 설득이 목적이라 오해"
      }
    ],
    "hiddenPremise": "'객관적이다'는 표현이 나오면 반사적으로 신뢰하는 전제. 하지만 '객관적'이라는 단어 자체가 필자의 선택(판단)임을 놓침.",
    "commonMistake": "⑤를 고르는 학생 — '객관적'이라는 수식어에 속아 '논리로 설득한다'고 해석. 설명문의 본질(사실 전달)과 논설문(설득)을 구분하지 못함.",
    "lukaExplain": "'객관적'이란 말에 속지 마. 이 글은 사실을 '전달'하지, 무언가를 '설득'하지 않아. 설명문은 알려주는 게 목적이고, 논설문은 설득하는 게 목적이야.",
    "reframe": "글의 목적(사실 전달 vs 설득)을 장르로 판별하는 기본 능력. '객관적'이라는 수식어에 휘둘리지 않기."
  },
  {
    "id": "al-kor-004",
    "subject": "국어",
    "domain": "비문학",
    "track": "중등",
    "stage": "입문",
    "difficulty": 2,
    "finalSparkEligible": false,
    "stem": "다음 문장에서 '조차'가 숨기고 있는 전제를 고르시오.\n\n'너**조차** 이걸 몰랐어?'",
    "choices": [
      {
        "label": "①",
        "text": "너는 똑똑하다.",
        "correct": false,
        "trapNote": "'조차'의 전제를 잘못 해석"
      },
      {
        "label": "②",
        "text": "다른 사람들은 다 알고, 너도 당연히 알 거라고 여겼다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "이 문제는 너무 어렵다.",
        "correct": false,
        "trapNote": "난이도와 무관"
      },
      {
        "label": "④",
        "text": "너는 거짓말을 하고 있다.",
        "correct": false,
        "trapNote": "의도를 잘못 해석"
      },
      {
        "label": "⑤",
        "text": "모르는 게 죄는 아니다.",
        "correct": false,
        "trapNote": "문장 밖의 도덕적 판단"
      }
    ],
    "hiddenPremise": "'조차'는 '기본적으로 알아야 할 것도 모른다'는 부정적 전제를 심음.",
    "commonMistake": "①을 고르는 학생 — '조차'가 칭찬이라고 오해. 실제로는 '다 아는데 너만 몰랐다'는 깎아내림.",
    "lukaExplain": "'조차'는 강조가 아니야. '다른 사람들은 다 아는데, 너는 당연히 알 거라고 생각했는데 몰랐구나' — 이게 이 단어가 심은 전제야. 사실 하나(너는 몰랐다)에 전제 둘(다들 안다, 너도 알 거라 여겼다)이 섞여 있어.",
    "reframe": "단어 하나가 문장 전체를 지배하는 전제를 심는다는 걸 아는 것. '조차' = 부정적 전제의 신호."
  },
  {
    "id": "al-kor-005",
    "subject": "국어",
    "domain": "비문학",
    "track": "고등",
    "stage": "심화",
    "difficulty": 5,
    "finalSparkEligible": true,
    "stem": "다음 글을 읽고 물음에 답하시오.\n\n'전통 시장의 매출이 감소함에 따라, 정부는 활성화 정책을 추진하였다. 그 결과 시설 개선 사업이 이루어졌고, 일부 시장의 방문객 수가 증가했다. 전문가들은 이를 근거로 정부의 정책이 성공적이라고 평가했다.'\n\n이 글의 논리적 약점으로 가장 적절한 것은?",
    "choices": [
      {
        "label": "①",
        "text": "전통 시장의 수가 너무 많아 일반화할 수 없다.",
        "correct": false,
        "trapNote": "수의 문제로 회피"
      },
      {
        "label": "②",
        "text": "방문객 수 증가가 정책 때문인지, 다른 요인(계절, 이벤트 등) 때문인지 확인되지 않았다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "전통 시장의 매출 감소 원인이 밝혀지지 않았다.",
        "correct": false,
        "trapNote": "원인 파악은 중요하지만 글의 핵심 결함(정책 효과 인과)과 직접 무관"
      },
      {
        "label": "④",
        "text": "정부 정책의 예산 규모가 공개되지 않았다.",
        "correct": false,
        "trapNote": "예산은 글의 논리와 무관"
      },
      {
        "label": "⑤",
        "text": "일부 시장만 대상으로 했으므로 전체를 대변할 수 없다.",
        "correct": false,
        "trapNote": "표본의 대표성을 의심하는 습관으로 ⑤를 고름 — 인과 비약이라는 진짜 결함을 놓침"
      }
    ],
    "hiddenPremise": "'A 이후 B가 증가했다'는 'A가 B의 원인이다'라는 전제. 시간적 선후관계를 인과관계로 해석하는 오류.",
    "commonMistake": "⑤를 고르는 학생 다수. '일부 시장'이라는 표현에 반응해 표본의 대표성을 의심. 하지만 진짜 결함은 '방문객 증가 = 정책 효과'라는 인과 비약.",
    "lukaExplain": "'일부 시장'이라는 말에 꽂혀서 ⑤를 골랐어? 그것도 중요하지만, 이 글의 진짜 구멍은 다른 데 있어. 정책 한 뒤에 방문객이 늘었다 → 정책 때문이다? 계절 탓일 수도, 이벤트 탓일 수도 있어. '이후에 일어났다'와 '때문에 일어났다'는 완전히 다른 말이야.",
    "reframe": "시간적 선후관계(A 후 B 발생)를 인과관계(A가 B를 유발)로 비약하는 오류를 잡는 훈련."
  },
  {
    "id": "al-kor-006",
    "subject": "국어",
    "domain": "문학",
    "track": "중등",
    "stage": "기본",
    "difficulty": 3,
    "finalSparkEligible": false,
    "stem": "다음 시 구절의 화자의 태도로 가장 적절한 것은?\n\n'겨울 나무가 / 봄을 기다리듯 / 나도 너를 기다린다'",
    "choices": [
      {
        "label": "①",
        "text": "절망적이고 체념한 태도",
        "correct": false,
        "trapNote": "'기다린다'를 부정적으로 해석"
      },
      {
        "label": "②",
        "text": "희망을 가지고 인내하는 태도",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "분노와 원망의 태도",
        "correct": false,
        "trapNote": "감정을 과잉 해석"
      },
      {
        "label": "④",
        "text": "무관심하고 냉담한 태도",
        "correct": false,
        "trapNote": "'기다린다'의 의미를 놓침"
      },
      {
        "label": "⑤",
        "text": "두려움과 불안한 태도",
        "correct": false,
        "trapNote": "불안 마케팅적 해석 — 감정을 부정적으로 과잉 투사"
      }
    ],
    "hiddenPremise": "'기다림'을 '고통'으로 해석하면 ①이나 ⑤를 고르게 됨. 하지만 '겨울 나무 → 봄'이라는 비유는 '반드시 올 것을 믿으며 기다림'이라는 전제를 담음.",
    "commonMistake": "①이나 ⑤를 고르는 학생 — '기다린다'를 고통이나 불안으로 읽는 전제. 하지만 '봄이 온다'는 확신이 있으니까 기다림은 고통이 아니라 희망.",
    "lukaExplain": "'기다린다'가 슬퍼 보여? 그런데 겨울 나무는 봄이 '반드시' 온다는 걸 알아. 그러니까 이 기다림은 불안이 아니라, 확신이 있는 인내야. 감정을 부정적으로만 읽으면 시의 진짜 톤을 놓쳐.",
    "reframe": "문학에서 감정어(기다린다)를 맥락(겨울→봄 비유)에서 읽어내는 능력. 단어 자체가 아니라, 비유가 만드는 전체 분위기를 읽기."
  },
  {
    "id": "al-kor-007",
    "subject": "국어",
    "domain": "비문학",
    "track": "초등",
    "stage": "입문",
    "difficulty": 1,
    "finalSparkEligible": false,
    "stem": "다음 문장을 읽고, '사실'과 '의견'을 구분하시오.\n\n'이 교과서는 2024년에 만들어졌다. 참 알차고 좋은 책이다.'",
    "choices": [
      {
        "label": "①",
        "text": "두 문장 모두 사실이다.",
        "correct": false,
        "trapNote": "'좋은 책이다'는 의견임을 놓침"
      },
      {
        "label": "②",
        "text": "첫째 문장은 사실, 둘째 문장은 의견이다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "두 문장 모두 의견이다.",
        "correct": false,
        "trapNote": "객관적 정보를 부정"
      },
      {
        "label": "④",
        "text": "첫째 문장은 의견, 둘째 문장은 사실이다.",
        "correct": false,
        "trapNote": "사실과 의견을 완전히 반대로"
      },
      {
        "label": "⑤",
        "text": "구분할 수 없다.",
        "correct": false,
        "trapNote": "회피"
      }
    ],
    "hiddenPremise": "'좋다'는 주관적 평가이지만, '만들어졌다'는 객관적 정보. 이 둘을 구분하지 못하면 모든 문장을 같은 수준으로 받아들임.",
    "commonMistake": "①을 고르는 학생 — '좋은 책이다'를 사실로 받아들임. 가치 평가(좋다/나쁘다)는 항상 의견이라는 걸 모름.",
    "lukaExplain": "'만들어졌다'는 확인할 수 있지? 연도를 보면 돼. 그런데 '좋다'는 누가 정해? 사람마다 다를 수 있어. 확인 가능한 건 사실, 사람마다 다를 수 있는 건 의견이야.",
    "reframe": "사실(검증 가능)과 의견(주관적 평가)의 경계를 긋는 가장 기본적인 읽기 능력."
  },
  {
    "id": "al-kor-008",
    "subject": "국어",
    "domain": "비문학",
    "track": "고등",
    "stage": "심화",
    "difficulty": 5,
    "finalSparkEligible": true,
    "stem": "다음은 한 연구의 요약이다.\n\n'장시간 스마트폰을 사용하는 청소년 그룹의 수면의 질이, 사용 시간이 짧은 그룹보다 낮은 것으로 나타났다. 연구진은 이를 근거로 스마트폰이 수면의 질을 저하시킨다고 결론지었다.'\n\n이 결론에 대한 비판으로 가장 타당한 것은?",
    "choices": [
      {
        "label": "①",
        "text": "수면의 질을 정확히 측정하지 않았을 수 있다.",
        "correct": false,
        "trapNote": "측정 방법의 문제 — 중요하지만 핵심 결함(인과 비약)이 아님"
      },
      {
        "label": "②",
        "text": "수면의 질이 낮은 학생이 스마트폰을 더 사용했을 가능성(역인과)을 배제하지 못했다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "스마트폰 사용 시간의 기준이 불분명하다.",
        "correct": false,
        "trapNote": "기준 문제 — 논점 이탈"
      },
      {
        "label": "④",
        "text": "청소년이 아닌 다른 연령대에는 적용할 수 없다.",
        "correct": false,
        "trapNote": "일반화의 한계 — 맞는 말이지만 이 결론의 핵심 결함이 아님"
      },
      {
        "label": "⑤",
        "text": "연구 대상 수가 너무 적다.",
        "correct": false,
        "trapNote": "표본 크기 반사 — 이 글의 진짜 결함(역인과 가능성)을 놓침"
      }
    ],
    "hiddenPremise": "'스마트폰 사용 → 수면 질 저하'라는 방향을 전제. 하지만 '수면 질 저하 → 스마트폰 더 사용'이라는 역방향 가능성을 배제함.",
    "commonMistake": "⑤를 고르는 학생. 통계 문제 → 표본 크기 반사. 하지만 진짜 결함은 인과의 방향이 확정되지 않았다는 것.",
    "lukaExplain": "⑤를 고르고 싶지? 표본 크기. 근데 이 결론의 진짜 문제는 방향이야. 스마트폰 때문에 잠을 못 자는 걸까, 아니면 잠을 못 자서 스마트폰을 더 보는 걸까? 방향이 정해지지 않았는데 '스마트폰이 수면을 저하시킨다'고 결론 내렸어.",
    "reframe": "역인과(원인과 결과의 방향이 뒤바뀔 가능성)를 잡아내는 심화 추론 능력."
  },
  {
    "id": "al-kor-009",
    "subject": "국어",
    "domain": "비문학",
    "track": "중등",
    "stage": "기본",
    "difficulty": 3,
    "finalSparkEligible": true,
    "stem": "다음 기사를 읽고 물음에 답하시오.\n\n'시의회는 도심 공원 내 반려견 출입을 전면 금지하는 조례를 통과시켰다. 조례를 발의한 A 의원은 '공원은 모든 시민이 안전하게 이용해야 하는 공간'이라며 '반려견 사고를 예방하기 위한 최소한의 조치'라고 밝혔다.'\n\nA 의원의 주장이 성립하기 위해 전제하는 것은?",
    "choices": [
      {
        "label": "①",
        "text": "반려견 출입 금지가 유일한 안전 확보 방법이다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "모든 시민이 공원을 이용한다.",
        "correct": false,
        "trapNote": "이용 여부는 주장과 무관"
      },
      {
        "label": "③",
        "text": "반려견의 수가 매년 증가하고 있다.",
        "correct": false,
        "trapNote": "증가 추세는 전제와 무관"
      },
      {
        "label": "④",
        "text": "공원 면적이 너무 좁다.",
        "correct": false,
        "trapNote": "면적과 무관"
      },
      {
        "label": "⑤",
        "text": "다른 도시에서도 같은 조례를 시행했다.",
        "correct": false,
        "trapNote": "타 도시 사례와 무관"
      }
    ],
    "hiddenPremise": "'전면 금지'가 안전 확보의 유일한/최선의 방법이라는 전제. 목줄 의무화 등 다른 대안이 배제됨.",
    "commonMistake": "④를 고르는 학생 — '공원이 좁으니까 금지한다'는 식의 상식적 추론을 끼워넣음. 하지만 글에 없는 정보로 전제를 만들면 안 됨.",
    "lukaExplain": "A 의원이 '최소한의 조치'라고 했어. 그 말은, 전면 금지 말고는 안전을 지킬 방법이 없다고 전제한 거야. 목줄만 하면 안 되나? 구역을 나누면 안 되나? '유일한 방법 = 전면 금지'라는 전제가 깔려 있어.",
    "reframe": "'극단적 조치(전면 금지)'가 정당화되려면 '그것만이 유일한 해결책'이라는 전제가 필요하다는 걸 아는 것."
  },
  {
    "id": "al-kor-010",
    "subject": "국어",
    "domain": "문학",
    "track": "고등",
    "stage": "심화",
    "difficulty": 4,
    "finalSparkEligible": false,
    "stem": "다음 소설 발췌를 읽고, 서술자의 태도를 고르시오.\n\n'그는 창밖을 보았다. 비가 내리고 있었다. 우산을 쓰고 가는 사람들, 차에 타는 사람들. 모두 어디론가 가고 있었다. 자신만, 이 자리에 멈춰 있었다.'",
    "choices": [
      {
        "label": "①",
        "text": "비판적이고 냉소적인 태도",
        "correct": false,
        "trapNote": "외로움을 냉소로 오해"
      },
      {
        "label": "②",
        "text": "고립감과 자신의 정체성에 대한 성찰",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "비에 대한 단순한 불쾌감",
        "correct": false,
        "trapNote": "표면적 감각만 읽음"
      },
      {
        "label": "④",
        "text": "타인에 대한 적대감",
        "correct": false,
        "trapNote": "고립을 적대로 해석 — 감정 과잉"
      },
      {
        "label": "⑤",
        "text": "무감각한 상태",
        "correct": false,
        "trapNote": "성찰이 없다고 읽음 — '멈춰 있었다'의 의미를 놓침"
      }
    ],
    "hiddenPremise": "'모두 가고 있다 vs 나만 멈춰 있다'는 대비가 만드는 전제 — '움직임이 곧 삶의 흐름'이라는 암묵적 기준.",
    "commonMistake": "④를 고르는 학생 — '타인들이 가는 데'를 적대적으로 읽음. 하지만 서술자는 타인을 원망하는 게 아니라, 자신의 멈춰 있음을 관찰하고 있음.",
    "lukaExplain": "'모두 가고 있었다, 자신만 멈춰 있었다' — 이 대비가 핵심이야. 타인을 미워하는 게 아니라, 움직이는 세상 속에서 자신만 정지해 있다는 걸 조용히 보고 있어. 그건 분노가 아니라, 고립에 대한 조용한 성찰이야.",
    "reframe": "문학에서 감정을 단정(냉소/적대)하지 않고, 서술의 구조(대비)에서 태도를 읽어내는 능력."
  },
  {
    "id": "al-kor-011",
    "subject": "국어",
    "domain": "비문학",
    "track": "중등",
    "stage": "입문",
    "difficulty": 2,
    "finalSparkEligible": false,
    "stem": "다음 광고 문구를 읽고, '사실'만 포함된 문장을 고르시오.\n\n'이 영양제는 12가지 비타민을 함유하고 있습니다. 대한영양학회 추천 제품입니다. 아이들에게 최고의 선물입니다.'",
    "choices": [
      {
        "label": "①",
        "text": "이 영양제는 12가지 비타민을 함유하고 있다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "대한영양학회 추천 제품이다.",
        "correct": false,
        "trapNote": "추천은 확인 가능해 보이지만, 맥락에 따라 광고적 표현일 수 있음"
      },
      {
        "label": "③",
        "text": "아이들에게 최고의 선물이다.",
        "correct": false,
        "trapNote": "'최고'는 주관적 평가 — 의견"
      },
      {
        "label": "④",
        "text": "①과 ② 둘 다 사실이다.",
        "correct": false,
        "trapNote": "②의 '추천'이 광고적 표현일 수 있음을 놓침"
      },
      {
        "label": "⑤",
        "text": "세 문장 모두 의견이다.",
        "correct": false,
        "trapNote": "①은 명백한 사실"
      }
    ],
    "hiddenPremise": "광고에서 '추천'이라는 표현은 객관적 사실처럼 보이지만, 판매를 위한 신뢰 부여 수단일 수 있음. '최고'는 명백한 주관.",
    "commonMistake": "④를 고르는 학생 — ②의 '추천'을 사실로 간주. 광고 맥락에서 '추천'은 검증 가능한 사실인지 확인이 필요.",
    "lukaExplain": "①은 확인할 수 있어 — 성분표를 보면 돼. 하지만 ②의 '추천'은 광고에서 자주 쓰는 신뢰 부여 표현이야. 진짜 추천받았는지 확인해야 알 수 있지. ③의 '최고'는 누가 정해? 의견이지.",
    "reframe": "광고 맥락에서 '객관적'처럼 보이는 표현(추천, 인증 등)의 전제를 의심하는 능력."
  },
  {
    "id": "al-kor-012",
    "subject": "국어",
    "domain": "비문학",
    "track": "고등",
    "stage": "기본",
    "difficulty": 3,
    "finalSparkEligible": true,
    "stem": "다음 칼럼을 읽고 물음에 답하시오.\n\n'요즘 학생들이 책을 읽지 않는다고 한다. 스마트폰 탓이라는 지적이 많다. 하지만 스마트폰이 없던 시절에도 책을 읽는 학생은 소수였다. 책 읽기 감소의 원인을 스마트폰 하나에 돌리는 것은, 복잡한 현상을 단순화하는 것이다.'\n\n필자의 주장의 핵심은?",
    "choices": [
      {
        "label": "①",
        "text": "스마트폰은 책 읽기 감소와 무관하다.",
        "correct": false,
        "trapNote": "무관하다고 단정 — 필자는 '단순화'를 비판한 것"
      },
      {
        "label": "②",
        "text": "책 읽기 감소의 원인을 단일 요인으로 설명하는 것은 타당하지 않다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "스마트폰 사용을 제한해야 한다.",
        "correct": false,
        "trapNote": "해결책 제시로 오해"
      },
      {
        "label": "④",
        "text": "과거에는 학생들이 책을 많이 읽었다.",
        "correct": false,
        "trapNote": "과거에도 소수였다고 했음 — 반대"
      },
      {
        "label": "⑤",
        "text": "책 읽기 감소는 심각한 문제가 아니다.",
        "correct": false,
        "trapNote": "심각성을 부정하는 것은 글에서 언급 안 됨"
      }
    ],
    "hiddenPremise": "'책 읽기 감소 = 스마트폰 탓'이라는 일반적 전제를, 필자가 비판. 복잡한 현상을 단일 원인으로 환원하는 것의 위험.",
    "commonMistake": "①을 고르는 학생 — '스마트폰 탓이 아니다'로 단정. 하지만 필자는 '무관하다'가 아니라 '단일 원인으로 설명하면 안 된다'고 함.",
    "lukaExplain": "필자가 '스마트폰 탓이 아니다'라고 한 적 없어. '단순화하는 것이다'라고 했지. 관련이 없는 게 아니라, 관련은 있지만 그것만으로 설명하면 안 된다는 거야. 'A는 아니다'와 'A만으로는 설명할 수 없다'는 완전히 다른 말이야.",
    "reframe": "'A가 아니다'와 'A만으로는 부족하다'의 차이를 읽어내는 정밀 독해 능력."
  },
  {
    "id": "al-kor-013",
    "subject": "국어",
    "domain": "비문학",
    "track": "초등",
    "stage": "입문",
    "difficulty": 1,
    "finalSparkEligible": false,
    "stem": "다음 문장에서 필자의 의견을 고르시오.\n\n'우리 학교 운동장에는 나무가 3그루 있다. 운동장에 나무가 더 많으면 좋겠다. 나무가 그늘을 만들어주기 때문이다.'",
    "choices": [
      {
        "label": "①",
        "text": "운동장에 나무가 3그루 있다.",
        "correct": false,
        "trapNote": "사실"
      },
      {
        "label": "②",
        "text": "나무가 더 많으면 좋겠다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "나무가 그늘을 만든다.",
        "correct": false,
        "trapNote": "사실에 가까움"
      },
      {
        "label": "④",
        "text": "①과 ③",
        "correct": false,
        "trapNote": "둘 다 사실"
      },
      {
        "label": "⑤",
        "text": "세 문장 모두 의견이다.",
        "correct": false,
        "trapNote": "①은 사실"
      }
    ],
    "hiddenPremise": "'좋겠다'는 희망/의견. '있다'와 '만든다'는 확인 가능한 사실. 이 구분이 안 되면 글을 비판적으로 읽을 수 없음.",
    "commonMistake": "③을 고르는 학생 — '그늘을 만든다'를 의견으로 분류. 사실에 가까운 정보와 주관적 바람을 구분하지 못함.",
    "lukaExplain": "'3그루 있다'는 세면 돼 — 사실. '그늘을 만든다'도 확인 가능해 — 사실. 하지만 '더 많으면 좋겠다'는 누가 정해? 바라는 거야. 의견이지.",
    "reframe": "의견(~면 좋겠다, ~해야 한다)과 사실(있다, 만든다)을 구분하는 기초 능력."
  },
  {
    "id": "al-kor-014",
    "subject": "국어",
    "domain": "비문학",
    "track": "고등",
    "stage": "심화",
    "difficulty": 5,
    "finalSparkEligible": true,
    "stem": "다음 글을 읽고 물음에 답하시오.\n\n'A국의 교육 예산은 GDP의 5%로, OECD 평균(4.5%)보다 높다. 그럼에도 A국 학생의 학업 성취도는 OECD 중위권이다. 일부 전문가는 이를 근거로 교육 예산 증액이 성과로 이어지지 않는다고 주장한다.'\n\n위 전문가의 주장의 논리적 약점은?",
    "choices": [
      {
        "label": "①",
        "text": "GDP와 학업 성취도는 비교할 수 없는 항목이다.",
        "correct": false,
        "trapNote": "비교 가능성을 부정"
      },
      {
        "label": "②",
        "text": "예산의 '규모'만 고려했지, 예산의 '사용 방식(어떤 항목에 썼는지)'을 고려하지 않았다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "OECD 중위권은 낮은 수준이 아니다.",
        "correct": false,
        "trapNote": "성취도 수준 평가로 논점 이탈"
      },
      {
        "label": "④",
        "text": "학업 성취도 측정 방식이 공정하지 않다.",
        "correct": false,
        "trapNote": "측정 공정성 — 중요하지만 핵심 결함 아님"
      },
      {
        "label": "⑤",
        "text": "다른 OECD 국가와 비교하는 것 자체가 무의미하다.",
        "correct": false,
        "trapNote": "비교 자체를 부정 — 극단적 부정"
      }
    ],
    "hiddenPremise": "'예산의 양이 같으면 결과도 같다'라는 전제. 하지만 같은 예산이라도 어떻게 쓰느냐에 따라 결과가 다름.",
    "commonMistake": "③이나 ④를 고르는 학생 — 성취도 수준이나 측정 방식으로 논점을 돌림. 진짜 결함은 '예산의 양 = 효과'라는 단순 등식.",
    "lukaExplain": "돈이 많다고 결과가 좋은 건 아니야. 100원을 어디에 쓰느냐에 따라 결과가 완전히 달라지잖아. 이 전문가는 '얼마나 썼는지'만 보고 '어디에 썼는지'는 안 봤어. 예산의 규모와 사용 방식은 완전히 다른 차원이야.",
    "reframe": "'투입량(예산) = 산출량(성과)'이라는 단순 등식의 전제를 깨고, 투입의 '방식'을 묻는 능력."
  },
  {
    "id": "al-kor-015",
    "subject": "국어",
    "domain": "비문학",
    "track": "중등",
    "stage": "심화",
    "difficulty": 4,
    "finalSparkEligible": false,
    "stem": "다음은 학생의 독후감 일부다.\n\n'이 책의 주인공은 끝까지 포기하지 않았다. 그래서 나도 포기하지 않아야겠다고 생각했다. 성공한 사람은 모두 포기하지 않는 사람이다.'\n\n마지막 문장의 논리적 문제는?",
    "choices": [
      {
        "label": "①",
        "text": "주인공에 대한 묘사가 부족하다.",
        "correct": false,
        "trapNote": "독후감의 질로 논점 이탈"
      },
      {
        "label": "②",
        "text": "'성공한 사람 모두' 포기하지 않는다는 일반화의 근거가 주인공 한 사례뿐이다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "포기하지 않는 것이 항상 좋은 것은 아니다.",
        "correct": false,
        "trapNote": "가치 평가 — 논점 이탈"
      },
      {
        "label": "④",
        "text": "성공의 기준이 불분명하다.",
        "correct": false,
        "trapNote": "기준 문제 — 핵심 결함(성급한 일반화)이 아님"
      },
      {
        "label": "⑤",
        "text": "독후감이 너무 짧다.",
        "correct": false,
        "trapNote": "분량 평가 — 무관"
      }
    ],
    "hiddenPremise": "한 가지 사례(주인공)로 '모든 성공한 사람'을 일반화하는 오류. 성급한 일반화(hasty generalization).",
    "commonMistake": "③을 고르는 학생 — 포기의 가치를 논하며 논점 이탈. 문제는 일반화의 근거가 부족하다는 논리적 결함.",
    "lukaExplain": "주인공 한 명 안 포기해서 성공했다고 해서, '모든' 성공한 사람이 다 그런 건 아니야. 한 사례로 전체를 단정하는 건 '성급한 일반화'라는 논리 오류야. '모두'라는 말이 나오면 항상 의심해 봐.",
    "reframe": "단일 사례 → 전체 일반화의 오류(성급한 일반화)를 잡아내는 능력. '모두'라는 단어에 반사적으로 의심을 거는 습관."
  },
  {
    "id": "al-math-001",
    "subject": "수학",
    "domain": "대수",
    "track": "중등",
    "stage": "기본",
    "difficulty": 3,
    "finalSparkEligible": true,
    "stem": "부등식 2x − 6 < 0의 해를 구하는 과정에서, 다음 학생 A의 풀이에서 틀린 부분은?\n\n① 2x − 6 < 0\n② 2x < 6\n③ x < 3 (여기까지는 맞음)\n④ 양변에 −1을 곱하면: −x > −3\n⑤ 따라서 x > 3",
    "passage": "",
    "choices": [
      {
        "label": "①",
        "text": "첫 번째 줄에서 이항 계산이 틀렸다.",
        "correct": false,
        "trapNote": "이항은 맞음"
      },
      {
        "label": "②",
        "text": "양변에 음수를 곱했는데 부등호 방향을 바꾸지 않았다.",
        "correct": false,
        "trapNote": "방향은 바꿨음(④ 줄) — 함정"
      },
      {
        "label": "③",
        "text": "③까지는 맞았지만, 이미 해(x < 3)를 구한 상태에서 굳이 −1을 곱할 필요가 없었다.",
        "correct": false,
        "trapNote": "필요성의 문제가 아니라 계산 오류를 찾는 문제"
      },
      {
        "label": "④",
        "text": "④에서 부등호 방향은 바르게 바꿨지만, ⑤에서 다시 원래 방향(x > 3)으로 잘못 결론지었다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "⑤",
        "text": "x < 3과 x > 3은 같은 의미이므로 틀린 곳이 없다.",
        "correct": false,
        "trapNote": "'숫자 3은 같으니 방향은 안 중요하다'는 안일한 전제로 ⑤를 고르는 학생 다수"
      }
    ],
    "hiddenPremise": "'부등식도 등식처럼 다뤄도 결과가 같다'는 전제 — 음수를 곱할 때 부등호 방향이 바뀐다는 규칙을 '사소한 디테일'로 취급.",
    "commonMistake": "⑤를 고르는 학생 다수 — '3이라는 숫자는 같으니 방향은 안 중요하다'. 또는 ②를 고르는 학생 — '음수 곱하기 → 방향 안 바꿈'이라는 반사 오답(실제로는 ④에서 방향을 바꿨으나 ⑤에서 다시 틀림).",
    "lukaExplain": "3이라는 숫자는 안 틀렸어. 근데 방향이 문제야. −x > −3에서 양변에 −1을 곱하면 x < 3이 되어야 해. 그런데 학생은 x > 3이라고 했지. 음수를 곱하는 순간, 부등식의 세계는 방향이 뒤집힌다는 걸 몸으로 기억해야 해.",
    "reframe": "계산 실수가 아니라 '규칙을 아는가'와 '규칙을 적용할 때 놓치지 않는가'는 다른 능력이라는 걸 확인하는 문제."
  },
  {
    "id": "al-math-002",
    "subject": "수학",
    "domain": "함수",
    "track": "고등",
    "stage": "기본",
    "difficulty": 3,
    "finalSparkEligible": false,
    "stem": "함수 f(x) = x² − 4x + 3이 있을 때, f(x) = 0의 해를 구하시오.",
    "choices": [
      {
        "label": "①",
        "text": "x = 1, x = 3",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "x = −1, x = 3",
        "correct": false,
        "trapNote": "(x−1)(x−3)을 (x+1)(x−3)으로 잘못 인수분해 — 부호 하나를 놓침"
      },
      {
        "label": "③",
        "text": "x = −1, x = −3",
        "correct": false,
        "trapNote": "부호 실수"
      },
      {
        "label": "④",
        "text": "x = 1만 존재",
        "correct": false,
        "trapNote": "중근으로 착각 — 실제로는 서로 다른 두 근"
      },
      {
        "label": "⑤",
        "text": "실수해가 없다",
        "correct": false,
        "trapNote": "판별식 계산 안 하고 '해 없음'으로 찍음"
      }
    ],
    "hiddenPremise": "x² − 4x + 3 = (x−1)(x−3) = 0. '해가 하나뿐'이라는 전제로 ④를 고르거나, 부호를 반대로 해서 ③.",
    "commonMistake": "④를 고르는 학생 — 인수분해 없이 바로 답을 '하나'로 가정. 방정식은 해가 하나라는 전제.",
    "lukaExplain": "이차방정식은 해가 하나가 아니야. 인수분해해 봐 — (x−1)(x−3) = 0, 그러니까 x = 1 또는 x = 3. 두 개 나와. 이차방정식은 해가 최대 두 개야.",
    "reframe": "이차방정식의 해의 개수(판별식)를 판별하는 기본 능력. '방정식 = 해 하나'라는 전제 깨기."
  },
  {
    "id": "al-math-003",
    "subject": "수학",
    "domain": "대수",
    "track": "중등",
    "stage": "심화",
    "difficulty": 4,
    "finalSparkEligible": true,
    "stem": "다음 방정식의 해의 개수를 구하시오.\n\n2x + 4 = 2(x + 2)",
    "choices": [
      {
        "label": "①",
        "text": "해가 없다.",
        "correct": false,
        "trapNote": "0=0이 되면 '해 없음'으로 찍는 오답"
      },
      {
        "label": "②",
        "text": "해가 정확히 한 개이다.",
        "correct": false,
        "trapNote": "방정식 = 해 하나 전제"
      },
      {
        "label": "③",
        "text": "해가 무수히 많다. (모든 실수 x에 대해 성립)",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "④",
        "text": "해는 존재하지만 개수를 알 수 없다.",
        "correct": false,
        "trapNote": "회피"
      },
      {
        "label": "⑤",
        "text": "x = 0만 해이다.",
        "correct": false,
        "trapNote": "0=0에 0을 대입해 보고 '정답 0'으로 단정"
      }
    ],
    "hiddenPremise": "'방정식을 풀면 답이 하나 나온다'는 전제. 풀면 0=0이 되는 경우(항등식)의 해석을 모름.",
    "commonMistake": "①을 고르는 학생 다수 — 0=0을 보고 '모순(해 없음)'으로 해석. 하지만 0=0은 항상 참이므로 모든 x가 해.",
    "lukaExplain": "풀어보면 0=0이 되지? '이게 정답이야?'라고 당황한 거, 기억나? 0=0은 틀린 게 아니라 '항상 맞다'는 뜻이야. 모든 x를 넣어도 성립해. 그러니까 해가 무한 개야.",
    "reframe": "방정식의 해가 '0개, 1개, 무한 개' 세 가지가 될 수 있다는 걸 아는 것. '방정식 = 해 하나'라는 전제를 깨는 심화 문제."
  },
  {
    "id": "al-math-004",
    "subject": "수학",
    "domain": "기하",
    "track": "초등",
    "stage": "입문",
    "difficulty": 1,
    "finalSparkEligible": false,
    "stem": "다음 도형에서 색칠된 부분의 넓이를 구하시오. (가로 8cm, 세로 5cm인 직사각형 안에 대각선이 그어져 있다. 색칠된 부분은 반쪽 삼각형이다.)",
    "choices": [
      {
        "label": "①",
        "text": "40 cm²",
        "correct": false,
        "trapNote": "직사각형 전체 넓이를 답으로"
      },
      {
        "label": "②",
        "text": "20 cm²",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "13 cm²",
        "correct": false,
        "trapNote": "가로+세로로 더함"
      },
      {
        "label": "④",
        "text": "10 cm²",
        "correct": false,
        "trapNote": "반으로 나눈 뒤 또 반으로 나눔"
      },
      {
        "label": "⑤",
        "text": "구할 수 없다",
        "correct": false,
        "trapNote": "'대각선으로 나뉘면 넓이를 모른다'는 전제로 회피"
      }
    ],
    "hiddenPremise": "대각선이 직사각형을 정확히 반으로 나눈다는 것을 모르면, '정확한 넓이를 모른다'고 회피(⑤). 또는 전체 넓이를 답으로(①).",
    "commonMistake": "①을 고르는 학생 — 삼각형(반)이 아니라 직사각형(전체) 넓이를 구함. 또는 ⑤를 고르는 학생 — '대각선으로 정확히 반인지 모른다'고 전제.",
    "lukaExplain": "대각선은 직사각형을 딱 반으로 나눠. 그러니까 삼각형 하나의 넓이는 전체의 절반. 8×5=40, 반은 20이야.",
    "reframe": "도형을 쪼개서 아는 도형의 넓이로 환산하는 기초 능력. '공식이 없으면 못 구한다'는 전제 깨기."
  },
  {
    "id": "al-math-005",
    "subject": "수학",
    "domain": "함수",
    "track": "고등",
    "stage": "심화",
    "difficulty": 5,
    "finalSparkEligible": true,
    "stem": "함수 f(x) = |x − 2| + |x − 5| 의 최솟값을 구하시오.",
    "choices": [
      {
        "label": "①",
        "text": "3",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "5",
        "correct": false,
        "trapNote": "x=0 대입값으로 단정 — x=0이 최소라는 전제"
      },
      {
        "label": "③",
        "text": "7",
        "correct": false,
        "trapNote": "x=2 또는 5 대입값으로 단정 — 한 점만 보고 '이게 최소'로 착각"
      },
      {
        "label": "④",
        "text": "0",
        "correct": false,
        "trapNote": "절대값이 0이 될 수 있다고 전제"
      },
      {
        "label": "⑤",
        "text": "최솟값이 존재하지 않는다",
        "correct": false,
        "trapNote": "'절대값 함수는 최소가 없다'는 전제"
      }
    ],
    "hiddenPremise": "'한 점(보통 x=0이나 x=2)을 대입한 값'이 최솟값이라는 전제. 절대값 함수는 구간에 따라 식이 달라지므로, 모든 구간을 검토해야 함.",
    "commonMistake": "②나 ③을 고르는 학생 — 한 점의 대입값을 보고 '이게 최소'로 단정. 2 ≤ x ≤ 5 구간에서 f(x) = 3(상수)이라는 걸 놓침.",
    "lukaExplain": "한 점만 대입해 보고 '이게 최소야'라고 하면 안 돼. 절대값은 부호가 바뀌는 점을 경계로 식 자체가 달라져. x가 2와 5 사이일 때를 확인해 봐 — 그 구간에서 f(x)는 무조건 3이야. 그게 최소.",
    "reframe": "절대값 함수는 구간별로 식이 달라진다는 걸 이해하고, 모든 구간을 검토하는 습관. '한 점 = 전체'라는 전제 깨기."
  },
  {
    "id": "al-math-006",
    "subject": "수학",
    "domain": "대수",
    "track": "중등",
    "stage": "입문",
    "difficulty": 2,
    "finalSparkEligible": false,
    "stem": "방정식 3x − 7 = 2x + 5를 푸시오.",
    "choices": [
      {
        "label": "①",
        "text": "x = 12",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "x = 2",
        "correct": false,
        "trapNote": "이항 부호 실수 — 7과 5를 같은 쪽으로"
      },
      {
        "label": "③",
        "text": "x = −2",
        "correct": false,
        "trapNote": "부호 반대로"
      },
      {
        "label": "④",
        "text": "x = −12",
        "correct": false,
        "trapNote": "이항 후 부호 반대"
      },
      {
        "label": "⑤",
        "text": "x = 1",
        "correct": false,
        "trapNote": "계수로 나누지 않음"
      }
    ],
    "hiddenPremise": "이항 시 부호를 바꾸는 규칙(+)을 당연히 안다는 전제. 부호를 안 바꾸면 ②.",
    "commonMistake": "②를 고르는 학생 — 이항할 때 부호를 안 바꿈. '옮기면 그대로'라는 잘못된 전제.",
    "lukaExplain": "이항할 때 부호 바꾸는 거, 잊었지? 3x − 7 = 2x + 5에서 2x를 왼쪽으로 옮기면 −2x, −7을 오른쪽으로 옮기면 +7. 부호가 바뀌어야 해.",
    "reframe": "이항 규칙(부호 전환)을 정확히 적용하는 기본 능력. '옮기면 그대로'라는 잘못된 전제 깨기."
  },
  {
    "id": "al-math-007",
    "subject": "수학",
    "domain": "확률",
    "track": "고등",
    "stage": "심화",
    "difficulty": 4,
    "finalSparkEligible": true,
    "stem": "주사위 2개를 동시에 던질 때, 두 눈의 합이 7이 될 확률은?",
    "choices": [
      {
        "label": "①",
        "text": "1/6",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "1/12",
        "correct": false,
        "trapNote": "경우의 수를 3개로 잘못 셈"
      },
      {
        "label": "③",
        "text": "1/36",
        "correct": false,
        "trapNote": "'특정 조합 하나'의 확률로 착각 — (1,6)만 계산"
      },
      {
        "label": "④",
        "text": "7/36",
        "correct": false,
        "trapNote": "합이 7인 경우를 7개로 셈 — 중복/누락"
      },
      {
        "label": "⑤",
        "text": "1/2",
        "correct": false,
        "trapNote": "'대충 절반'이라는 직관"
      }
    ],
    "hiddenPremise": "합이 7인 경우를 하나(예: 1+6)만 생각하는 전제. 실제로는 (1,6)(2,5)(3,4)(4,3)(5,2)(6,1)로 6개.",
    "commonMistake": "③을 고르는 학생 — 한 가지 조합만 생각. '합 7 = 1+6'이라는 전제.",
    "lukaExplain": "합이 7인 조합이 하나가 아니야. (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) — 6개나 돼. 전체 경우 36개, 6/36 = 1/6이야.",
    "reframe": "경우의 수를 빠짐없이 세는 능력. '한 가지만 보고 전체를 판단'하는 전제 깨기."
  },
  {
    "id": "al-math-008",
    "subject": "수학",
    "domain": "기하",
    "track": "중등",
    "stage": "기본",
    "difficulty": 3,
    "finalSparkEligible": false,
    "stem": "한 변의 길이가 6인 정삼각형의 넓이를 구하시오. (√3 ≈ 1.73)",
    "choices": [
      {
        "label": "①",
        "text": "9√3",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "18",
        "correct": false,
        "trapNote": "밑변×높이를 6×6으로 계산 — 높이를 변의 길이로 착각"
      },
      {
        "label": "③",
        "text": "36",
        "correct": false,
        "trapNote": "정삼각형을 정사각형으로 착각"
      },
      {
        "label": "④",
        "text": "15.6",
        "correct": false,
        "trapNote": "높이를 6×√3/2로 안 구하고 근사치 오답"
      },
      {
        "label": "⑤",
        "text": "구할 수 없다",
        "correct": false,
        "trapNote": "'높이를 모른다'는 전제로 회피"
      }
    ],
    "hiddenPremise": "정삼각형의 높이를 구하는 방법(피타고라스 또는 공식)을 모르면, ⑤로 회피하거나 높이를 변의 길이와 혼동(②).",
    "commonMistake": "②를 고르는 학생 — 높이를 6으로 착각. 정삼각형의 높이는 6×√3/2 = 3√3.",
    "lukaExplain": "정삼각형 높이는 한 변의 길이가 아니야. 6×√3/2 = 3√3. 그러니까 넓이는 6 × 3√3 ÷ 2 = 9√3. 높이를 구하는 단계를 건너뛰면 안 돼.",
    "reframe": "정삼각형의 높이를 공식에 의존하지 않고 유도할 수 있는 능력. '높이 = 한 변'이라는 전제 깨기."
  },
  {
    "id": "al-math-009",
    "subject": "수학",
    "domain": "함수",
    "track": "중등",
    "stage": "심화",
    "difficulty": 4,
    "finalSparkEligible": true,
    "stem": "일차함수 y = ax + b의 그래프가 점 (2, 5)와 (4, 9)를 지난다. a와 b를 구하시오.",
    "choices": [
      {
        "label": "①",
        "text": "a = 2, b = 1",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "a = 1, b = 3",
        "correct": false,
        "trapNote": "기울기를 잘못 계산 — y값 차이만 봄"
      },
      {
        "label": "③",
        "text": "a = 2, b = 0",
        "correct": false,
        "trapNote": "y절편을 0으로 가정"
      },
      {
        "label": "④",
        "text": "a = 4, b = −3",
        "correct": false,
        "trapNote": "x와 y를 바꿔 계산"
      },
      {
        "label": "⑤",
        "text": "구할 수 없다",
        "correct": false,
        "trapNote": "'두 점만으로는 불가능'이라는 전제로 회피"
      }
    ],
    "hiddenPremise": "두 점을 지나는 일차함수는 유일하다는 것을 모르면, ⑤로 회피. 또는 기울기를 y값만으로 계산(②).",
    "commonMistake": "②를 고르는 학생 — 기울기를 (9−5)/(4−2)가 아니라 9−5=4로만 계산. x값 변화로 나누는 걸 잊음.",
    "lukaExplain": "기울기 a는 y의 변화량 ÷ x의 변화량이야. (9−5)/(4−2) = 4/2 = 2. 그 다음 한 점에 대입해서 b를 구해. 5 = 2×2 + b → b = 1.",
    "reframe": "기울기 = 변화량의 비율이라는 개념을 정확히 적용하는 능력. '숫자만 보고 계산'하는 전제 깨기."
  },
  {
    "id": "al-math-010",
    "subject": "수학",
    "domain": "대수",
    "track": "초등",
    "stage": "입문",
    "difficulty": 1,
    "finalSparkEligible": false,
    "stem": "다음 문장제를 풀고 답을 고르시오.\n\n'사과가 바구니에 있다. 영희가 3개를 먹고, 철수가 2개를 먹었다. 남은 사과는 5개다. 처음 사과는 몇 개였을까?'",
    "choices": [
      {
        "label": "①",
        "text": "8개",
        "correct": false,
        "trapNote": "3+5만 더함 — 철수가 먹은 2개를 빼먹음"
      },
      {
        "label": "②",
        "text": "10개",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "7개",
        "correct": false,
        "trapNote": "5+2만 더함 — 영희가 먹은 3개를 빼먹음"
      },
      {
        "label": "④",
        "text": "5개",
        "correct": false,
        "trapNote": "남은 개수를 처음 개수로 착각"
      },
      {
        "label": "⑤",
        "text": "구할 수 없다",
        "correct": false,
        "trapNote": "'처음 수를 모른다'는 전제로 회피"
      }
    ],
    "hiddenPremise": "문장제의 모든 정보(영희 3개 + 철수 2개 + 남은 5개)를 조건으로 사용해야 한다는 것. 일부만 쓰면 ①이나 ③.",
    "commonMistake": "①을 고르는 학생 — 철수가 먹은 2개를 빼먹고 3+5=8로 계산. 문장에서 정보를 누락.",
    "lukaExplain": "문장에 세 가지 정보가 있어 — 영희 3개, 철수 2개, 남은 5개. 세 개 다 써야 해. 5 + 3 + 2 = 10. 하나라도 빼먹으면 틀려.",
    "reframe": "문장제에서 모든 조건을 누락 없이 사용하는 능력. '보이는 숫자만 계산'하는 전제 깨기."
  },
  {
    "id": "al-math-011",
    "subject": "수학",
    "domain": "함수",
    "track": "고등",
    "stage": "기본",
    "difficulty": 3,
    "finalSparkEligible": false,
    "stem": "이차함수 f(x) = x² − 6x + 8의 그래프의 x절편을 모두 구하시오.",
    "choices": [
      {
        "label": "①",
        "text": "x = 2, x = 4",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "x = −2, x = −4",
        "correct": false,
        "trapNote": "부호 실수"
      },
      {
        "label": "③",
        "text": "x = 2만 존재",
        "correct": false,
        "trapNote": "중근으로 착각"
      },
      {
        "label": "④",
        "text": "x절편이 없다",
        "correct": false,
        "trapNote": "'판별식이 음수'로 가정"
      },
      {
        "label": "⑤",
        "text": "x = 0",
        "correct": false,
        "trapNote": "y절편과 혼동"
      }
    ],
    "hiddenPremise": "x절편은 f(x)=0의 해와 같다는 것을 모르면, y절편(8)과 혼동(⑤). 또는 인수분해 없이 해를 하나로 단정(③).",
    "commonMistake": "⑤를 고르는 학생 — x절편과 y절편을 혼동. f(0)=8은 y절편.",
    "lukaExplain": "x절편은 그래프가 x축과 만나는 점, 즉 f(x)=0일 때의 x야. x²−6x+8=0을 풀면 (x−2)(x−4)=0, x=2 또는 4. y절편(f(0)=8)이랑 헷갈리지 마.",
    "reframe": "x절편 = f(x)=0의 해라는 개념을 정확히 아는 능력. '절편'이라는 단어에 속아 y절편으로 가는 전제 깨기."
  },
  {
    "id": "al-math-012",
    "subject": "수학",
    "domain": "대수",
    "track": "중등",
    "stage": "기본",
    "difficulty": 2,
    "finalSparkEligible": true,
    "stem": "연립방정식을 푸시오.\n\nx + y = 7\n2x − y = 8",
    "choices": [
      {
        "label": "①",
        "text": "x = 5, y = 2",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "x = 3, y = 4",
        "correct": false,
        "trapNote": "첫 식만 만족, 둘째 식 불만족"
      },
      {
        "label": "③",
        "text": "x = 4, y = 3",
        "correct": false,
        "trapNote": "대입 오류"
      },
      {
        "label": "④",
        "text": "x = 7, y = 0",
        "correct": false,
        "trapNote": "y=0으로 가정"
      },
      {
        "label": "⑤",
        "text": "해가 없다",
        "correct": false,
        "trapNote": "'두 식이 모순'이라는 전제로 회피"
      }
    ],
    "hiddenPremise": "두 식을 동시에 만족하는 해가 존재한다는 것을 모르면, ⑤로 회피. 또는 한 식만 풀고 다른 식은 확인 안 함(②).",
    "commonMistake": "②를 고르는 학생 — 첫째 식(x+y=7)은 만족하지만 둘째 식(2×3−4=2≠8)은 만족하지 않음. 두 식 모두 확인해야 함.",
    "lukaExplain": "두 식을 모두 만족해야 해. ③과 ④는 첫째 식은 맞는데 둘째 식을 확인 안 한 거야. x=5, y=2를 넣어 봐 — 5+2=7, 2×5−2=8. 둘 다 맞지?",
    "reframe": "연립방정식은 두 식을 동시에 만족하는 해를 찾는 것. 한 식만 풀고 끝내는 전제 깨기."
  },
  {
    "id": "al-math-013",
    "subject": "수학",
    "domain": "확률",
    "track": "고등",
    "stage": "심화",
    "difficulty": 5,
    "finalSparkEligible": true,
    "stem": "5명이 일렬로 서는 방법의 수를 구하시오.",
    "choices": [
      {
        "label": "①",
        "text": "120가지",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "25가지",
        "correct": false,
        "trapNote": "5×5로 계산 — 중복 순열로 착각"
      },
      {
        "label": "③",
        "text": "10가지",
        "correct": false,
        "trapNote": "조합 5C2로 계산 — 순서를 무시"
      },
      {
        "label": "④",
        "text": "3125가지",
        "correct": false,
        "trapNote": "5⁵로 계산 — 중복을 허용하는 것으로 착각"
      },
      {
        "label": "⑤",
        "text": "무한대",
        "correct": false,
        "trapNote": "'경우의 수를 셀 수 없다'는 전제로 회피"
      }
    ],
    "hiddenPremise": "순열(순서가 중요)과 조합(순서 무시)의 차이를 모르면, ②나 ③으로. '순서가 같으면 같은 경우'라는 전제.",
    "commonMistake": "③을 고르는 학생 — 순서를 무시하고 조합으로 계산. 일렬로 서는 것은 순서가 중요(순열).",
    "lukaExplain": "일렬로 서는 건 순서가 달라지면 다른 경우야. A-B-C-D-E와 E-D-C-B-A는 다른 배열. 그러니까 순열이야. 5! = 120.",
    "reframe": "순열(순서 O)과 조합(순서 X)을 구분하는 능력. '순서는 안 중요하다'는 전제 깨기."
  },
  {
    "id": "al-math-014",
    "subject": "수학",
    "domain": "기하",
    "track": "초등",
    "stage": "기본",
    "difficulty": 2,
    "finalSparkEligible": false,
    "stem": "가로가 7cm, 세로가 4cm인 직사각형의 둘레를 구하시오.",
    "choices": [
      {
        "label": "①",
        "text": "22cm",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "28cm",
        "correct": false,
        "trapNote": "둘레를 7×4=28로 계산 — 넓이 공식을 둘레로 착각"
      },
      {
        "label": "③",
        "text": "11cm",
        "correct": false,
        "trapNote": "가로+세로만 계산 — (7+4)×2를 안 함"
      },
      {
        "label": "④",
        "text": "14cm",
        "correct": false,
        "trapNote": "가로×2만 계산"
      },
      {
        "label": "⑤",
        "text": "구할 수 없다",
        "correct": false,
        "trapNote": "'공식을 모른다'는 전제로 회피"
      }
    ],
    "hiddenPremise": "둘레 공식((가로+세로)×2)을 아는 것. 넓이(가로×세로)와 혼동하면 ②.",
    "commonMistake": "②를 고르는 학생 — 넓이 공식(7×4=28)을 둘레로 착각. 둘레는 (7+4)×2=22.",
    "lukaExplain": "넓이가 아니라 둘레야. 둘레는 테두리의 길이 — (가로+세로)×2. (7+4)×2 = 22. 넓이(7×4=28)랑 헷갈리지 마.",
    "reframe": "둘레와 넓이의 공식을 구분하는 기초 능력. '곱하기 = 정답'이라는 반사적 전제 깨기."
  },
  {
    "id": "al-math-015",
    "subject": "수학",
    "domain": "함수",
    "track": "중등",
    "stage": "심화",
    "difficulty": 4,
    "finalSparkEligible": false,
    "stem": "함수 y = 2x + 3에서 x가 1 증가할 때 y는 얼마나 증가하는가?",
    "choices": [
      {
        "label": "①",
        "text": "2 증가",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "3 증가",
        "correct": false,
        "trapNote": "y절편(b=3)을 증가량으로 착각"
      },
      {
        "label": "③",
        "text": "5 증가",
        "correct": false,
        "trapNote": "x=1일 때 y값(5)을 증가량으로 착각"
      },
      {
        "label": "④",
        "text": "1 증가",
        "correct": false,
        "trapNote": "'x 1 증가 = y 1 증가'라는 전제"
      },
      {
        "label": "⑤",
        "text": "증가하지 않는다",
        "correct": false,
        "trapNote": "기울기가 양수인 것을 놓침"
      }
    ],
    "hiddenPremise": "일차함수 y = ax + b에서 기울기 a가 'x 1 증가당 y 증가량'이라는 것을 모르면, y절편(②)이나 특정 점의 y값(③)으로 착각.",
    "commonMistake": "②를 고르는 학생 — y절편 3을 증가량으로 오해. 또는 ③을 고르는 학생 — x=1일 때 y=5를 증가량으로.",
    "lukaExplain": "기울기가 2라는 건, x가 1 오르면 y가 2 올린다는 뜻이야. y절편(3)이나 x=1일 때 y값(5)을 증가량으로 헷갈리면 안 돼.",
    "reframe": "기울기의 의미(변화율)를 이해하는 능력. '숫자 = 정답'이라는 반사적 전제를 깨고, 각 숫자의 의미를 구분하기."
  },
  {
    "id": "al-hist-001",
    "subject": "역사",
    "domain": "근현대사",
    "track": "고등",
    "stage": "기본",
    "difficulty": 3,
    "finalSparkEligible": true,
    "stem": "다음 사료를 읽고 물음에 답하시오.\n\n'○○년, 정부는 재정 위기를 타개하고자 화폐 개혁을 단행하였다. 그러나 이 조치는 오히려 물가를 급등시켰고, 이듬해 대규모 민란이 일어나는 결과를 낳았다.'\n\n위 자료에 대한 해석으로 가장 적절한 것은?",
    "passage": "",
    "choices": [
      {
        "label": "①",
        "text": "화폐 개혁이 민란의 유일한 원인이었다.",
        "correct": false,
        "trapNote": "인과관계처럼 서술되면 '유일한 원인'으로 성급히 단정하는 전제"
      },
      {
        "label": "②",
        "text": "화폐 개혁과 민란 사이에는 시간적 선후 관계만 있을 뿐 인과관계는 전혀 없다.",
        "correct": false,
        "trapNote": "'시간 순서 ≠ 인과'를 과도하게 적용해 가능성까지 부정"
      },
      {
        "label": "③",
        "text": "화폐 개혁이 물가 급등의 한 요인이 되었을 가능성을 자료에서 확인할 수 있으나, 민란의 유일한 원인이라 단정할 근거는 자료만으로 부족하다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "④",
        "text": "정부의 재정 위기와 민란은 무관한 별개의 사건이다.",
        "correct": false,
        "trapNote": "관계를 완전히 부정"
      },
      {
        "label": "⑤",
        "text": "자료만으로는 화폐 개혁의 구체적 내용을 알 수 없으므로 이 사건 전체를 판단할 수 없다.",
        "correct": false,
        "trapNote": "구체적 내용 부족을 이유로 전체 판단 포기 — 극단적 부정"
      }
    ],
    "hiddenPremise": "'역사 자료는 서술된 그대로 100% 확정된 인과관계다'(①) 혹은 반대로 '시간 순서로 서술된 건 다 인과 오류다'(②) — 두 극단적 전제 중 하나.",
    "commonMistake": "①을 고르는 학생이 가장 많음 — 인과관계처럼 서술되면 '그게 유일한 원인'으로 단정. 반대로 ②를 고르는 학생은 '시간 순서 ≠ 인과'를 과도하게 적용.",
    "lukaExplain": "역사 자료 읽기는 '전부 믿기'도 '전부 의심하기'도 아니야. 이 자료가 보여주는 건 '가능성'이지 '유일한 원인'이 아니라는 걸, 딱 그 온도로만 받아들이는 연습이 필요해.",
    "reframe": "사료 해석은 '사실 확인'이 아니라 '자료가 뒷받침하는 범위가 어디까지인가'를 판단하는 훈련."
  },
  {
    "id": "al-hist-002",
    "subject": "역사",
    "domain": "근현대사",
    "track": "고등",
    "stage": "심화",
    "difficulty": 4,
    "finalSparkEligible": true,
    "stem": "다음은 한 역사 교과서의 서술이다.\n\n'갑오개혁은 근대화를 위한 필수적인 조치였다.'\n\n이 서술에 내재된 필자의 전제를 고르시오.",
    "choices": [
      {
        "label": "①",
        "text": "갑오개혁 이전 조선은 근대화가 필요 없었다.",
        "correct": false,
        "trapNote": "반대 의미"
      },
      {
        "label": "②",
        "text": "근대화는 무조건 긍정적인 방향이다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "갑오개혁은 실패한 정책이다.",
        "correct": false,
        "trapNote": "글과 반대"
      },
      {
        "label": "④",
        "text": "조선은 근대화를 이미 완료했다.",
        "correct": false,
        "trapNote": "사실과 다름"
      },
      {
        "label": "⑤",
        "text": "근대화는 외부 세력에 의해서만 가능하다.",
        "correct": false,
        "trapNote": "외부 세력을 전제로 하지만 글에서 직접 드러나지 않음"
      }
    ],
    "hiddenPremise": "'근대화'를 긍정적 가치로 전제. '근대화 = 좋은 것'이라는 가치 판단이 서술 밑에 깔려 있음.",
    "commonMistake": "④나 ⑤를 고르는 학생 — 사실 판단(④)이나 외부 요인(⑤)으로 논점을 돌림. 핵심은 '근대화 = 긍정'이라는 가치 전제.",
    "lukaExplain": "'필수적'이라는 단어에 주목해. 근대화를 '반드시 해야 하는 것'으로 전제하고 있어. 근데 '근대화가 왜 좋은 건가?'를 묻지 않아. '근대화 = 긍정'이라는 가치 판단이 이 서술의 밑바닥에 깔려 있어.",
    "reframe": "역사 서술에서 '가치 판단 단어(필수, 필연, 진보)'가 나오면, 그것을 '사실'이 아니라 '전제'로 읽는 능력."
  },
  {
    "id": "al-hist-003",
    "subject": "역사",
    "domain": "고대사",
    "track": "중등",
    "stage": "기본",
    "difficulty": 2,
    "finalSparkEligible": false,
    "stem": "다음 중 시대 순서가 올바른 것은?",
    "choices": [
      {
        "label": "①",
        "text": "고구려 → 백제 → 신라 건국",
        "correct": false,
        "trapNote": "백제와 신라의 건국 순서를 바꿈"
      },
      {
        "label": "②",
        "text": "고구려 → 신라 → 백제 건국",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "신라 → 고구려 → 백제 건국",
        "correct": false,
        "trapNote": "건국 순서를 전부 뒤바꿈"
      },
      {
        "label": "④",
        "text": "백제 → 고구려 → 신라 건국",
        "correct": false,
        "trapNote": "고구려를 중간으로"
      },
      {
        "label": "⑤",
        "text": "세 나라가 같은 시기에 건국되었다.",
        "correct": false,
        "trapNote": "'동시 건국'이라는 전제로 회피"
      }
    ],
    "hiddenPremise": "삼국 건국 순서를 정확히 아는 것. 순서를 모르면 '비슷한 시기'로 회피(⑤).",
    "commonMistake": "①을 고르는 학생 — 백제와 신라의 순서를 바꿈. 백제 건국(BC 18)이 신라(BC 57)보다 늦다는 것을 놓침.",
    "lukaExplain": "신라(BC 57)가 백제(BC 18)보다 먼저 세워졌어. 순서: 고구려(BC 37) → 신라 → 백제. 비슷한 시기 같아도 정확한 순서가 있어.",
    "reframe": "역사적 사건의 시간적 순서를 정확히 파악하는 능력. '비슷한 시기 = 동시'라는 전제 깨기."
  },
  {
    "id": "al-hist-004",
    "subject": "역사",
    "domain": "근현대사",
    "track": "고등",
    "stage": "심화",
    "difficulty": 5,
    "finalSparkEligible": true,
    "stem": "다음 두 사료를 비교하여 공통점을 고르시오.\n\n사료 A (일제강점기): '조선인은 교육을 받을 권리가 제한되었다.'\n사료 B (독립 후): '모든 국민은 교육을 받을 권리를 가진다.'\n\n두 사료의 공통점은?",
    "choices": [
      {
        "label": "①",
        "text": "교육의 내용이 같았다.",
        "correct": false,
        "trapNote": "내용 비교가 아닌 권리 비교"
      },
      {
        "label": "②",
        "text": "교육을 받을 권리의 존재를 인정하고 있다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "두 시기 모두 교육 기회가 평등했다.",
        "correct": false,
        "trapNote": "사료 A는 제한적이었다고 명시"
      },
      {
        "label": "④",
        "text": "교육 대상이 같았다.",
        "correct": false,
        "trapNote": "대상이 다름(제한 vs 전체)"
      },
      {
        "label": "⑤",
        "text": "공통점이 없다.",
        "correct": false,
        "trapNote": "'시대가 다르니 공통점이 없다'는 전제로 극단적 부정"
      }
    ],
    "hiddenPremise": "두 사료 모두 '교육을 받을 권리'라는 개념 자체를 다루고 있다는 공통점. 차이(제한 vs 보장)에 집중하면 공통점을 놓침.",
    "commonMistake": "⑤를 고르는 학생 — '시대가 다르니까 공통점이 없다'는 전제. 하지만 두 사료 모두 '교육권'을 다룬다는 공통점이 있음.",
    "lukaExplain": "차이만 보면 공통점이 안 보여. 두 사료 모두 '교육을 받을 권리'를 다루고 있어 — 제한했든 보장했든, 권리 자체를 언급한다는 게 공통점이야.",
    "reframe": "사료 비교에서 차이점에만 집중하지 않고, 공통 개념을 추출하는 능력. '다르면 공통점이 없다'는 전제 깨기."
  },
  {
    "id": "al-hist-005",
    "subject": "역사",
    "domain": "중세사",
    "track": "중등",
    "stage": "입문",
    "difficulty": 1,
    "finalSparkEligible": false,
    "stem": "고려 시대에 만들어진 문화 유산이 아닌 것을 고르시오.",
    "choices": [
      {
        "label": "①",
        "text": "고려청자",
        "correct": false,
        "trapNote": "고려 유산"
      },
      {
        "label": "②",
        "text": "팔만대장경",
        "correct": false,
        "trapNote": "고려 유산"
      },
      {
        "label": "③",
        "text": "금속활자",
        "correct": false,
        "trapNote": "고려 유산"
      },
      {
        "label": "④",
        "text": "경복궁",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "⑤",
        "text": "③과 ④ 둘 다 아니다",
        "correct": false,
        "trapNote": "금속활자는 고려 유산임을 모름"
      }
    ],
    "hiddenPremise": "각 문화 유산이 어느 시대에 만들어졌는지 아는 것. 경복궁은 조선(1395년 건립)이지 고려가 아님.",
    "commonMistake": "⑤를 고르는 학생 — 금속활자가 고려 유산(1234년)인지 모름. 직전(고려) 유산을 조선으로 착각.",
    "lukaExplain": "경복궁은 조선 시대에 지어졌어. 고려 유산은 청자, 팔만대장경, 금속활자. 시대별로 만들어진 걸 구분하는 게 역사의 기본이야.",
    "reframe": "문화 유산이 어느 시대에 속하는지 정확히 아는 기초 지식. '옛날 것 = 다 같은 시대'라는 전제 깨기."
  },
  {
    "id": "al-hist-006",
    "subject": "역사",
    "domain": "근현대사",
    "track": "고등",
    "stage": "기본",
    "difficulty": 3,
    "finalSparkEligible": true,
    "stem": "다음은 한 역사가의 서술이다.\n\n'일제강점기는 조선인에게 수탈과 억압의 시기였다.'\n\n이 서술의 한계를 가장 잘 지적한 것은?",
    "choices": [
      {
        "label": "①",
        "text": "일제강점기의 긍정적 측면(산업화 등)이 배제되었다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "수탈과 억압은 실제로 일어나지 않았다.",
        "correct": false,
        "trapNote": "사실 부정"
      },
      {
        "label": "③",
        "text": "조선인이 아닌 다른 민족의 경험은 무의미하다.",
        "correct": false,
        "trapNote": "논점 이탈"
      },
      {
        "label": "④",
        "text": "일제강점기는 너무 짧아 평가할 수 없다.",
        "correct": false,
        "trapNote": "기간 평가로 회피"
      },
      {
        "label": "⑤",
        "text": "역사가의 개인적 의견이므로 무시해야 한다.",
        "correct": false,
        "trapNote": "서술 자체를 부정 — 극단"
      }
    ],
    "hiddenPremise": "'한 시대를 하나의 측면(수탈/억압)만으로 규정할 수 있다'는 전제. 복잡한 역사적 현상을 단일 관점으로 환원.",
    "commonMistake": "②를 고르는 학생 — '수탈/억압이 없었다'로 사실을 부정. 하지만 한계 지적은 '다른 측면이 배제되었다'여야 함.",
    "lukaExplain": "수탈과 억압은 사실이야. 하지만 그게 전부는 아니라는 게 이 서술의 한계지. 일제강점기에 산업화도, 도시화도 일어났어. 한 측면만으로 시대를 '통째로 규정'하면, 복잡한 현상이 단순해져.",
    "reframe": "역사적 시대를 단일 관점으로 환원하는 것의 한계를 지적하는 능력. '한 측면 = 전체'라는 전제 깨기."
  },
  {
    "id": "al-hist-007",
    "subject": "역사",
    "domain": "근현대사",
    "track": "중등",
    "stage": "심화",
    "difficulty": 4,
    "finalSparkEligible": true,
    "stem": "다음 사료의 저자가 가질 가능성이 높은 입장은?\n\n'식민지 지배는 야만적인 사회에 문명을 전파하는 사명을 띤다.'\n\n(※ 이 사료는 식민 지배를 정당화하는 논리를 담고 있다.)",
    "choices": [
      {
        "label": "①",
        "text": "피지배국의 독립을 지지하는 입장",
        "correct": false,
        "trapNote": "반대 의미"
      },
      {
        "label": "②",
        "text": "식민 지배국(지배자)의 입장을 정당화하는 입장",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "중립적인 제3자의 입장",
        "correct": false,
        "trapNote": "'문명 전파'는 가치 판단 — 중립 아님"
      },
      {
        "label": "④",
        "text": "식민지 백성의 입장",
        "correct": false,
        "trapNote": "피지배자가 이런 말을 할 리 없음"
      },
      {
        "label": "⑤",
        "text": "판단할 수 없다",
        "correct": false,
        "trapNote": "'사료의 입장을 알 수 없다'는 전제로 회피"
      }
    ],
    "hiddenPremise": "'문명 전파'라는 표현이 가치 중립적인 것처럼 보이지만, 실은 '지배국이 우월하다'는 전제를 담고 있음.",
    "commonMistake": "③을 고르는 학생 — '문명 전파'를 객관적 사실로 읽음. 하지만 이건 가치 판단이 담긴 정당화 논리.",
    "lukaExplain": "'문명 전파'라는 말이 객관적으로 들리지? 근데 그 밑에 '지배국이 더 문명적이고, 피지배국은 야만적이다'라는 전제가 깔려 있어. 이건 중립이 아니라 지배를 정당화하는 논리야.",
    "reframe": "사료의 언어(문명, 야만 등)가 가치 중립이 아니라 특정 입장의 전제를 담고 있음을 읽어내는 능력."
  },
  {
    "id": "al-hist-008",
    "subject": "역사",
    "domain": "고대사",
    "track": "초등",
    "stage": "입문",
    "difficulty": 1,
    "finalSparkEligible": false,
    "stem": "세종대왕이 만든 것 중 하나를 고르시오.",
    "choices": [
      {
        "label": "①",
        "text": "한글",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "온돌",
        "correct": false,
        "trapNote": "온돌은 세종 이전부터 있던 전통 난방 방식 — 세종의 발명품이 아님"
      },
      {
        "label": "③",
        "text": "금속활자",
        "correct": false,
        "trapNote": "고려 시대"
      },
      {
        "label": "④",
        "text": "경복궁",
        "correct": false,
        "trapNote": "태조 때 창건"
      },
      {
        "label": "⑤",
        "text": "모름",
        "correct": false,
        "trapNote": "회피"
      }
    ],
    "hiddenPremise": "세종대왕의 업적(한글 창제)을 아는 것. 시대를 혼동하면 ③(고려)이나 ④(조선 건국).",
    "commonMistake": "④를 고르는 학생 — 경복궁을 세종 때 지은 것으로 착각. 경복궁은 태조(1395).",
    "lukaExplain": "세종대왕이 만든 건 한글이야. 경복궁은 태조 이성계가 지었고, 금속활자는 고려 때야. 왕과 업적을 정확히 연결하는 게 중요해.",
    "reframe": "역사적 인물과 업적을 정확히 연결하는 기초 지식. '조선 왕 = 다 같은 시기'라는 전제 깨기."
  },
  {
    "id": "al-hist-009",
    "subject": "역사",
    "domain": "근현대사",
    "track": "고등",
    "stage": "심화",
    "difficulty": 4,
    "finalSparkEligible": false,
    "stem": "다음은 두 역사가의 서술이다.\n\n역사가 A: '경제 성장을 위해 박정희 시대의 개발 독재는 불가피했다.'\n역사가 B: '민주주의의 후퇴라는 대가가 너무 컸다.'\n\n두 서술의 근본적 차이는?",
    "choices": [
      {
        "label": "①",
        "text": "사실에 대한 인식이 다르다.",
        "correct": false,
        "trapNote": "둘 다 같은 사실(개발 독재)을 전제"
      },
      {
        "label": "②",
        "text": "가치 판단의 기준(경제 성장 vs 민주주의)이 다르다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "다루는 시대가 다르다.",
        "correct": false,
        "trapNote": "같은 시대"
      },
      {
        "label": "④",
        "text": "사료의 종류가 다르다.",
        "correct": false,
        "trapNote": "사료 종류와 무관"
      },
      {
        "label": "⑤",
        "text": "둘 다 틀렸다.",
        "correct": false,
        "trapNote": "양쪽 부정 — 극단"
      }
    ],
    "hiddenPremise": "두 역사가는 같은 사실(박정희 시대 개발 독재)을 다루지만, 평가 기준(경제 vs 민주주의)이 다름. 사실이 아니라 가치가 다름.",
    "commonMistake": "①을 고르는 학생 — '사실 인식이 다르다'고 오해. 하지만 둘 다 같은 사실을 전제함. 다른 건 가치 우선순위.",
    "lukaExplain": "두 사람이 보는 사실은 같아 — 개발 독재가 있었다는 것. 다른 건 '뭐를 더 중요하게 보느냐'야. A는 경제 성장, B는 민주주의. 사실이 다른 게 아니라 가치 판단이 다른 거야.",
    "reframe": "역사 해석의 차이가 '사실'이 아니라 '가치 판단'에서 올 수 있다는 걸 이해하는 능력."
  },
  {
    "id": "al-hist-010",
    "subject": "역사",
    "domain": "중세사",
    "track": "중등",
    "stage": "기본",
    "difficulty": 2,
    "finalSparkEligible": false,
    "stem": "고려 후기에 몽골의 침입이 있었다. 이 시기 고려의 대응으로 올바른 것은?",
    "choices": [
      {
        "label": "①",
        "text": "강화도로 천도하여 장기전을 폈다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "즉시 항복하고 몽골에 완전히 병합되었다.",
        "correct": false,
        "trapNote": "항복으로 단정 — 실제는 저항"
      },
      {
        "label": "③",
        "text": "몽골보다 먼저 선제 공격을 했다.",
        "correct": false,
        "trapNote": "선제 공격 기록 없음"
      },
      {
        "label": "④",
        "text": "아무 대응도 하지 않았다.",
        "correct": false,
        "trapNote": "'저항 안 했다'는 전제로 회피"
      },
      {
        "label": "⑤",
        "text": "조선의 도움을 받아 물리쳤다.",
        "correct": false,
        "trapNote": "조선은 이 시기 존재하지 않음"
      }
    ],
    "hiddenPremise": "고려 후기 몽골 침입 시 강화도 천도라는 핵심 대응을 아는 것. 모르면 '항복'(②)이나 '무대응'(④)으로 회피.",
    "commonMistake": "②를 고르는 학생 — '힘차이가 크니까 바로 항복했을 것'이라는 상식적 추론으로 단정.",
    "lukaExplain": "고려는 바로 항복하지 않았어. 강화도로 천도해서 30년 가까이 저항했어. 상식적으로 '힘이 딸리니까 항복'이라고 단정하면 역사의 실제 전개를 놓쳐.",
    "reframe": "역사적 사실을 상식적 추측이 아니라 실제 기록에 기반해 파악하는 능력."
  },
  {
    "id": "al-hist-011",
    "subject": "역사",
    "domain": "근현대사",
    "track": "고등",
    "stage": "심화",
    "difficulty": 5,
    "finalSparkEligible": true,
    "stem": "다음은 한 사료의 발췌다.\n\n'독립 이후, 정부는 농지 개혁을 단행하였다. 이는 지주의 토지를 유상으로 매수하여 농민에게 분배하는 것이었다.'\n\n이 사료에서 추론할 수 있는 것을 고르시오.",
    "choices": [
      {
        "label": "①",
        "text": "지주가 모든 토지를 무상으로 빼앗겼다.",
        "correct": false,
        "trapNote": "'무상 매수'로 오독 — 사료엔 '유상'으로 명시"
      },
      {
        "label": "②",
        "text": "정부가 지주에게 보상을 지급하는 형태(유상 매수)로 토지를 재분배했다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "농민이 토지를 아무 대가 없이 받았다.",
        "correct": false,
        "trapNote": "농민도 유상으로 분배받음 — 완전 무상 아님"
      },
      {
        "label": "④",
        "text": "지주가 개혁에 찬성했다.",
        "correct": false,
        "trapNote": "사료에 지주의 반응 없음 — 추론 불가"
      },
      {
        "label": "⑤",
        "text": "사료만으로 판단할 수 없다.",
        "correct": false,
        "trapNote": "'사료가 불충분하다'는 전제로 회피 — ②는 직접 추론 가능"
      }
    ],
    "hiddenPremise": "'유상 매수'라는 단어의 정확한 의미를 모르면, '무상 몰수'(①)나 '농민 무상 수령'(③)으로 오독.",
    "commonMistake": "①을 고르는 학생 — '개혁 = 몰수'라는 전제로 '무상'으로 오독. 사료는 '유상'이라고 명시.",
    "lukaExplain": "'유상 매수'가 핵심이야. 정부가 지주에게 돈을 주고(유상) 토지를 사서(매수), 농민에게 나눠준 거야. 무조건 빼앗은 게 아니라 대가를 지불했어. 단어 하나의 정확한 의미가 전체 해석을 바꿔.",
    "reframe": "사료의 핵심 용어(유상, 매수 등)를 정확히 해석하고, 추론의 범위를 사료가 지원하는 만큼만 하는 능력."
  },
  {
    "id": "al-hist-012",
    "subject": "역사",
    "domain": "근현대사",
    "track": "중등",
    "stage": "기본",
    "difficulty": 3,
    "finalSparkEligible": true,
    "stem": "다음 중 대한민국 임시 정부의 활동이 아닌 것을 고르시오.",
    "choices": [
      {
        "label": "①",
        "text": "독립 선언 및 외교 활동",
        "correct": false,
        "trapNote": "임시정부 활동"
      },
      {
        "label": "②",
        "text": "광복군 조직 및 무장 투쟁",
        "correct": false,
        "trapNote": "임시정부 활동"
      },
      {
        "label": "③",
        "text": "한일 병합 조약 체결",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "④",
        "text": "독립운동 자금 모금",
        "correct": false,
        "trapNote": "임시정부 활동"
      },
      {
        "label": "⑤",
        "text": "건국 강령 발표",
        "correct": false,
        "trapNote": "임시정부 활동"
      }
    ],
    "hiddenPremise": "임시정부의 활동 내용을 아는 것. 한일 병합 조약(1910)은 일제가 강제 체결한 것이지 임시정부와 무관.",
    "commonMistake": "①을 고르는 학생 — '독립 선언'을 임시정부가 아닌 것으로 오해. 또는 ④를 오답으로.",
    "lukaExplain": "한일 병합 조약은 일제가 조선을 강제로 병합한 거야. 임시정부는 그걸 무효라고 하면서 싸운 단체지. 임시정부가 병합 조약을 체결할 리가 없잖아.",
    "reframe": "역사적 주체와 행위를 정확히 연결하는 능력. '비슷한 시기 = 같은 주체'라는 전제 깨기."
  },
  {
    "id": "al-hist-013",
    "subject": "역사",
    "domain": "근현대사",
    "track": "고등",
    "stage": "기본",
    "difficulty": 3,
    "finalSparkEligible": false,
    "stem": "다음은 한 학생의 역사 노트 일부다.\n\n'조선 후기 실학자들은 서양 문물을 적극 수용해야 한다고 주장했다.'\n\n이 서술의 문제점은?",
    "choices": [
      {
        "label": "①",
        "text": "서양 문물의 종류가 구체적이지 않다.",
        "correct": false,
        "trapNote": "구체성 부족 — 논점 이탈"
      },
      {
        "label": "②",
        "text": "'모든 실학자'가 동일한 주장을 했다고 일반화했다. 실학자들 사이에도 입장 차이가 있었다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "서양 문물은 조선에 영향을 미치지 않았다.",
        "correct": false,
        "trapNote": "사실 부정"
      },
      {
        "label": "④",
        "text": "실학은 조선 후기에 존재하지 않았다.",
        "correct": false,
        "trapNote": "사실 부정"
      },
      {
        "label": "⑤",
        "text": "실학자들의 이름이 없다.",
        "correct": false,
        "trapNote": "이름 유무 — 논점 이탈"
      }
    ],
    "hiddenPremise": "'실학자들'이라는 복수 표현이 '모든 실학자가 같은 주장을 했다'는 일반화로 작동. 실제로 실학자들 사이에는 청·서양 문물 수용 태도에 차이가 있었음.",
    "commonMistake": "①을 고르는 학생 — '구체적이지 않다'는 표면적 문제를 지적. 하지만 핵심은 성급한 일반화.",
    "lukaExplain": "'실학자들'이라고 하면 '모두 다 같은 생각이었다'는 뜻이 돼. 근데 실학자들 사이에서도 의견이 달랐어 — 북학파는 청 문물 적극 수용, 다른 실학자는 신중했어. '모두'라는 말이 나오면 항상 의심해 봐.",
    "reframe": "역사 서술에서 복수 주체의 내부 다양성을 무시하는 일반화 오류를 잡아내는 능력."
  },
  {
    "id": "al-hist-014",
    "subject": "역사",
    "domain": "근현대사",
    "track": "중등",
    "stage": "심화",
    "difficulty": 4,
    "finalSparkEligible": false,
    "stem": "다음은 한 역사 다큐멘터리의 나레이션이다.\n\n'이 전쟁으로 인해 수백만 명이 희생되었다. 그러나 이 희생 덕분에 국가는 산업화의 발판을 마련할 수 있었다.'\n\n이 나레이션의 논리적 문제는?",
    "choices": [
      {
        "label": "①",
        "text": "희생자 수가 정확하지 않다.",
        "correct": false,
        "trapNote": "수의 정확성 — 논점 이탈"
      },
      {
        "label": "②",
        "text": "'희생 덕분에'라는 표현이 인과관계를 단정하고 있다. 전쟁과 산업화 사이의 인과관계가 단순하지 않음.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "산업화는 일어나지 않았다.",
        "correct": false,
        "trapNote": "사실 부정"
      },
      {
        "label": "④",
        "text": "전쟁은 일어나지 않았다.",
        "correct": false,
        "trapNote": "사실 부정"
      },
      {
        "label": "⑤",
        "text": "나레이션은 객관적이므로 문제가 없다.",
        "correct": false,
        "trapNote": "'다큐 = 객관'이라는 전제로 비판 회피"
      }
    ],
    "hiddenPremise": "'희생'과 '산업화' 사이에 직접적 인과관계가 있다는 전제. 하지만 전쟁 후 산업화는 여러 요인(정책, 국제 정세 등)의 결과.",
    "commonMistake": "⑤를 고르는 학생 — '다큐멘터리 = 객관'이라는 전제로 비판을 회피. 하지만 다큐의 나레이션도 가치 판단을 담을 수 있음.",
    "lukaExplain": "'덕분에'라는 한 단어가 인과관계를 만들어버려. 전쟁 후에 산업화가 일어났다고 해서, 전쟁이 '원인'인 건 아니야. 다큐라고 무조건 객관적인 건 아니니까, 나레이션의 표현도 의심해 봐야 해.",
    "reframe": "매체(다큐)의 권위에 휘둘리지 않고, 언어('덕분에')가 만드는 인과 단정을 읽어내는 능력."
  },
  {
    "id": "al-hist-015",
    "subject": "역사",
    "domain": "근현대사",
    "track": "초등",
    "stage": "입문",
    "difficulty": 1,
    "finalSparkEligible": false,
    "stem": "다음 중 대한민국 정부 수립 연도를 고르시오.",
    "choices": [
      {
        "label": "①",
        "text": "1945년",
        "correct": false,
        "trapNote": "광복 연도로 착각"
      },
      {
        "label": "②",
        "text": "1948년",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "③",
        "text": "1950년",
        "correct": false,
        "trapNote": "한국전쟁 발발 연도로 착각"
      },
      {
        "label": "④",
        "text": "1960년",
        "correct": false,
        "trapNote": "4·19 혁명 연도로 착각"
      },
      {
        "label": "⑤",
        "text": "모름",
        "correct": false,
        "trapNote": "회피"
      }
    ],
    "hiddenPremise": "주요 역사 연도(광복 1945, 정부 수립 1948, 전쟁 1950)를 구분하는 것. 1945(광복)와 1948(정부 수립)를 혼동.",
    "commonMistake": "①을 고르는 학생 — 광복(1945)과 정부 수립(1948)을 같은 사건으로 혼동.",
    "lukaExplain": "1945년은 광복(해방), 1948년은 정부 수립이야. 3년 차이가 있어. 광복 후 미군정을 거쳐 1948년에 대한민국 정부가 세워졌어.",
    "reframe": "주요 역사 연도를 정확히 구분하는 기초 지식. '해방 = 바로 정부 수립'이라는 전제 깨기."
  },

  /* ===================== 국어 초등 추가 (kor-016 ~ kor-033) ===================== */
  {
    "id": "al-kor-016", "subject": "국어", "domain": "어휘", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "다음 문장에서 밑줄 친 '길'과 같은 뜻으로 쓰인 것을 고르시오.\n\n'학교 가는 길에 친구를 만났다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "이 문제를 푸는 길은 하나뿐이다.", "correct": false, "trapNote": "'방법'이라는 뜻" },
      { "label": "②", "text": "집으로 가는 길이 막혔다.", "correct": true, "trapNote": "" },
      { "label": "③", "text": "그는 학자의 길을 걸었다.", "correct": false, "trapNote": "'인생 방향'이라는 뜻" },
      { "label": "④", "text": "요리에 길이 든 솜씨다.", "correct": false, "trapNote": "'익숙함'이라는 뜻" },
      { "label": "⑤", "text": "예의의 길을 지켜라.", "correct": false, "trapNote": "'도리'라는 뜻" }
    ],
    "hiddenPremise": "글자가 같으면 뜻도 같다는 전제. 문맥에 따라 여러 뜻이 있음.",
    "commonMistake": "①을 고르는 학생 — 글자가 같으니 뜻도 같다고 봄. ①의 '길'은 '방법'.",
    "lukaExplain": "같은 글자라도 뜻이 다를 수 있어. 예문의 '길'은 진짜 걸어다니는 길이야. ②도 막힌 '길'이지? 나머지는 방법·인생·습관 같은 다른 뜻이야. 문장 전체를 보고 같이 짚어보자.",
    "reframe": "다의어를 문맥으로 구분하는 능력."
  },
  {
    "id": "al-kor-017", "subject": "국어", "domain": "문법", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "다음 문장에서 '움직임'을 나타내는 낱말(동사)을 고르시오.\n\n'예쁜 새가 하늘을 높이 날았다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "예쁜", "correct": false, "trapNote": "상태를 나타내는 말(형용사)" },
      { "label": "②", "text": "새", "correct": false, "trapNote": "사물의 이름(명사)" },
      { "label": "③", "text": "하늘", "correct": false, "trapNote": "사물의 이름(명사)" },
      { "label": "④", "text": "높이", "correct": false, "trapNote": "'어떻게'를 꾸미는 말" },
      { "label": "⑤", "text": "날았다", "correct": true, "trapNote": "" }
    ],
    "hiddenPremise": "움직임을 꾸미는 말을 움직임 자체로 착각하는 전제.",
    "commonMistake": "④를 고르는 학생 — '높이'가 나는 모습과 관련 있어 착각.",
    "lukaExplain": "움직임을 나타내는 말은 '무엇을 한다'로 끝나는 경우가 많아. '날았다'가 새가 한 행동이지. '높이'는 어떻게 날았는지 꾸며주는 말일 뿐이야. 같이 짚어보자.",
    "reframe": "동사와 그것을 꾸미는 부사를 구분하는 능력."
  },
  {
    "id": "al-kor-018", "subject": "국어", "domain": "비문학", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "다음 글에서 중심 문장을 고르시오.\n\n'운동은 몸에 좋다. 달리기를 하면 심장이 튼튼해진다. 수영을 하면 근육이 발달한다. 줄넘기는 키 크는 데 도움이 된다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "운동은 몸에 좋다.", "correct": true, "trapNote": "" },
      { "label": "②", "text": "달리기를 하면 심장이 튼튼해진다.", "correct": false, "trapNote": "뒷받침 예시" },
      { "label": "③", "text": "수영을 하면 근육이 발달한다.", "correct": false, "trapNote": "뒷받침 예시" },
      { "label": "④", "text": "줄넘기는 키 크는 데 도움이 된다.", "correct": false, "trapNote": "뒷받침 예시" },
      { "label": "⑤", "text": "중심 문장이 없다.", "correct": false, "trapNote": "'예시만 있다'는 전제로 회피" }
    ],
    "hiddenPremise": "구체적인 문장이 중심 문장이라는 전제. 중심 문장은 나머지를 아우름.",
    "commonMistake": "②·③을 고르는 학생 — 구체적 예시를 중심 문장으로 착각.",
    "lukaExplain": "중심 문장은 나머지를 다 감싸는 큰 우산 같은 거야. 달리기·수영·줄넘기는 모두 '운동은 몸에 좋다'를 뒷받침하지. 예시가 향하는 문장을 같이 찾아보자.",
    "reframe": "중심 문장(포괄)과 뒷받침 문장(예시)을 구분하는 능력."
  },
  {
    "id": "al-kor-019", "subject": "국어", "domain": "비문학", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "다음 이어주는 말로 알맞은 것을 고르시오.\n\n'비가 많이 왔다. ( ) 소풍이 취소되었다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "그러나", "correct": false, "trapNote": "반대 관계 — 안 맞음" },
      { "label": "②", "text": "그래서", "correct": true, "trapNote": "" },
      { "label": "③", "text": "그런데", "correct": false, "trapNote": "화제 전환" },
      { "label": "④", "text": "예를 들면", "correct": false, "trapNote": "예시 관계" },
      { "label": "⑤", "text": "왜냐하면", "correct": false, "trapNote": "뒤에 이유가 와야 함 — 순서 반대" }
    ],
    "hiddenPremise": "앞뒤 관계를 살피지 않고 익숙한 접속어를 넣는 전제.",
    "commonMistake": "⑤를 고르는 학생 — '왜냐하면'을 넣지만, 뒤에 이유가 와야 함.",
    "lukaExplain": "앞은 원인(비가 왔다), 뒤는 결과(소풍 취소)야. 원인 다음 결과면 '그래서'가 딱이야. '왜냐하면'은 결과 먼저, 이유 나중일 때 쓰지. 방향을 같이 확인하자.",
    "reframe": "문장 사이의 원인-결과 관계로 접속어를 고르는 능력."
  },
  {
    "id": "al-kor-020", "subject": "국어", "domain": "문학", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다음 표현에 쓰인 방법을 고르시오.\n\n'솜사탕 같은 구름'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "'~같은'을 써서 두 사물을 견주는 표현(직유)", "correct": true, "trapNote": "" },
      { "label": "②", "text": "사람이 아닌 것을 사람처럼 표현(의인)", "correct": false, "trapNote": "의인화 아님" },
      { "label": "③", "text": "소리를 흉내 낸 표현", "correct": false, "trapNote": "흉내말 없음" },
      { "label": "④", "text": "모양을 흉내 낸 표현", "correct": false, "trapNote": "흉내말 없음" },
      { "label": "⑤", "text": "표현 방법이 없다.", "correct": false, "trapNote": "비유가 있음" }
    ],
    "hiddenPremise": "'~같은'이 직유 신호임을 모르는 전제.",
    "commonMistake": "⑤를 고르는 학생 — 평범해 보여 표현이 없다고 판단.",
    "lukaExplain": "'같은'이 보이면 두 가지를 견주는 신호야. 구름을 솜사탕에 빗댄 거지. '~같은/~처럼'으로 견주면 직유야. 신호 단어부터 같이 찾자.",
    "reframe": "'~같은' 신호로 직유를 알아보는 능력."
  },
  {
    "id": "al-kor-021", "subject": "국어", "domain": "비문학", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "다음 글에서 의견에 해당하는 문장을 고르시오.\n\n'우리 반은 25명이다. 오늘 급식은 카레였다. 카레는 정말 최고의 메뉴다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "우리 반은 25명이다.", "correct": false, "trapNote": "확인 가능 — 사실" },
      { "label": "②", "text": "오늘 급식은 카레였다.", "correct": false, "trapNote": "확인 가능 — 사실" },
      { "label": "③", "text": "카레는 정말 최고의 메뉴다.", "correct": true, "trapNote": "" },
      { "label": "④", "text": "①과 ②", "correct": false, "trapNote": "둘 다 사실" },
      { "label": "⑤", "text": "세 문장 모두 의견이다.", "correct": false, "trapNote": "①②는 사실" }
    ],
    "hiddenPremise": "'최고'처럼 사람마다 다른 평가를 사실로 받아들이는 전제.",
    "commonMistake": "④를 고르는 학생 — 확인 가능한 인원·메뉴를 의견으로 묶음.",
    "lukaExplain": "'25명', '카레였다'는 세어보면 되니 사실이야. 그런데 '최고'는 누가 정해? 사람마다 다르잖아. 사람마다 다르면 의견이지. 하나씩 같이 확인하자.",
    "reframe": "사실과 주관적 평가를 구분하는 능력."
  },
  {
    "id": "al-kor-022", "subject": "국어", "domain": "어휘", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "다음 낱말과 뜻이 반대인 것을 고르시오.\n\n'무겁다'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "가볍다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "두껍다", "correct": false, "trapNote": "두께 관련" },
      { "label": "③", "text": "크다", "correct": false, "trapNote": "크기 관련" },
      { "label": "④", "text": "단단하다", "correct": false, "trapNote": "굳기 관련" },
      { "label": "⑤", "text": "많다", "correct": false, "trapNote": "양 관련" }
    ],
    "hiddenPremise": "'무거운 건 두껍다/크다'는 연상으로 반대말을 고르는 전제.",
    "commonMistake": "②를 고르는 학생 — 무거움과 두꺼움을 연결.",
    "lukaExplain": "반대말은 '같은 기준에서 정반대'여야 해. '무겁다'는 무게 얘기니 반대도 무게로 가야지. 가벼운 게 정답이야. 두껍다·크다는 다른 기준이라 헷갈리기 쉬워.",
    "reframe": "반대말은 같은 속성의 정반대라는 기준을 지키는 능력."
  },
  {
    "id": "al-kor-023", "subject": "국어", "domain": "비문학", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다음 글의 짜임으로 알맞은 것을 고르시오.\n\n'첫째, 손을 자주 씻어야 한다. 둘째, 마스크를 써야 한다. 셋째, 사람 많은 곳을 피해야 한다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "시간의 순서대로 늘어놓았다.", "correct": false, "trapNote": "시간 순서 아님" },
      { "label": "②", "text": "여러 가지를 나란히 늘어놓았다(나열).", "correct": true, "trapNote": "" },
      { "label": "③", "text": "원인과 결과로 이었다.", "correct": false, "trapNote": "인과 아님" },
      { "label": "④", "text": "둘을 견주어 비교했다.", "correct": false, "trapNote": "비교 아님" },
      { "label": "⑤", "text": "문제와 해결로 이었다.", "correct": false, "trapNote": "문제 제시 없음" }
    ],
    "hiddenPremise": "'첫째·둘째'를 시간 순서로 착각하는 전제.",
    "commonMistake": "①을 고르는 학생 — 순서 표시를 시간으로 오해.",
    "lukaExplain": "'첫째·둘째'는 시간이 아니라 항목 번호야. 손 씻기·마스크·거리두기는 어느 걸 먼저 해도 되잖아? 나란히 드니까 나열이야. 순서 표시에 속지 말자.",
    "reframe": "글의 짜임을 신호가 아닌 실제 관계로 판별하는 능력."
  },
  {
    "id": "al-kor-024", "subject": "국어", "domain": "문학", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "다음 시에서 반복되는 말을 고르시오.\n\n'봄이 왔다 / 꽃이 왔다 / 나비가 왔다'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "봄", "correct": false, "trapNote": "한 번만 나옴" },
      { "label": "②", "text": "꽃", "correct": false, "trapNote": "한 번만 나옴" },
      { "label": "③", "text": "왔다", "correct": true, "trapNote": "" },
      { "label": "④", "text": "나비", "correct": false, "trapNote": "한 번만 나옴" },
      { "label": "⑤", "text": "반복되는 말이 없다.", "correct": false, "trapNote": "'왔다' 반복을 놓침" }
    ],
    "hiddenPremise": "앞 낱말에만 눈이 가서 뒤의 반복을 놓치는 전제.",
    "commonMistake": "①을 고르는 학생 — 첫 낱말에 눈이 감.",
    "lukaExplain": "줄마다 앞은 다르지만 끝을 봐봐. '왔다'가 세 번 나오지? 반복은 시에서 자주 쓰는 방법이야. 줄 끝까지 같이 읽자.",
    "reframe": "시의 반복 표현을 줄 전체를 훑어 찾는 능력."
  },
  {
    "id": "al-kor-025", "subject": "국어", "domain": "어휘", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다음 흉내 내는 말이 나타내는 것을 고르시오.\n\n'아기가 방긋방긋 웃는다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "소리를 흉내 낸 말", "correct": false, "trapNote": "소리가 아니라 모양" },
      { "label": "②", "text": "모양을 흉내 낸 말", "correct": true, "trapNote": "" },
      { "label": "③", "text": "냄새를 흉내 낸 말", "correct": false, "trapNote": "무관" },
      { "label": "④", "text": "맛을 흉내 낸 말", "correct": false, "trapNote": "무관" },
      { "label": "⑤", "text": "흉내 내는 말이 아니다.", "correct": false, "trapNote": "'방긋방긋'이 흉내말임" }
    ],
    "hiddenPremise": "흉내말은 무조건 소리라고 여기는 전제.",
    "commonMistake": "①을 고르는 학생 — 흉내말이면 다 소리라고 생각.",
    "lukaExplain": "흉내말에는 소리 흉내(멍멍)도 있고 모양 흉내(방긋방긋, 반짝반짝)도 있어. '방긋방긋'은 웃는 모습이 그려지지? 소리가 아니라 모양이야.",
    "reframe": "흉내말을 소리흉내와 모양흉내로 구분하는 능력."
  },
  {
    "id": "al-kor-026", "subject": "국어", "domain": "비문학", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다음 글을 쓴 목적으로 알맞은 것을 고르시오.\n\n'도서관에서는 조용히 해야 합니다. 다른 사람 독서에 방해가 되기 때문입니다. 규칙을 잘 지킵시다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "재미있는 이야기를 들려주려고", "correct": false, "trapNote": "이야기 아님" },
      { "label": "②", "text": "지식이나 정보를 그냥 알려주려고", "correct": false, "trapNote": "권유가 핵심" },
      { "label": "③", "text": "규칙을 지키자고 부탁·설득하려고", "correct": true, "trapNote": "" },
      { "label": "④", "text": "슬픈 감정을 표현하려고", "correct": false, "trapNote": "감정 표현 아님" },
      { "label": "⑤", "text": "물건을 팔려고", "correct": false, "trapNote": "광고 아님" }
    ],
    "hiddenPremise": "설명 문장이 섞이면 목적도 정보 전달이라고 보는 전제.",
    "commonMistake": "②를 고르는 학생 — 이유 설명이 있어 정보 전달로 봄.",
    "lukaExplain": "글 끝을 봐봐. '지킵시다'로 끝나지? 읽는 사람에게 행동을 권하는 거야. 이유 설명은 설득의 근거일 뿐이지. 글의 목적은 마무리에서 잘 드러나.",
    "reframe": "글의 목적을 마무리 문장과 전체 흐름으로 판별하는 능력."
  },
  {
    "id": "al-kor-027", "subject": "국어", "domain": "문법", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "다음 문장에서 높임 표현이 <잘못> 쓰인 것을 고르시오.",
    "passage": "",
    "choices": [
      { "label": "①", "text": "할머니께서 진지를 드신다.", "correct": false, "trapNote": "올바른 높임" },
      { "label": "②", "text": "선생님께서 교실에 계신다.", "correct": false, "trapNote": "올바른 높임" },
      { "label": "③", "text": "할아버지의 귀가 밝으시다.", "correct": false, "trapNote": "올바른 간접 높임" },
      { "label": "④", "text": "우리 강아지가 밥을 잡수신다.", "correct": true, "trapNote": "" },
      { "label": "⑤", "text": "아버지께 선물을 드렸다.", "correct": false, "trapNote": "올바른 높임" }
    ],
    "hiddenPremise": "아끼는 대상이면 높임말을 쓸 수 있다는 전제. 높임말은 웃어른(사람)에게만.",
    "commonMistake": "④를 못 알아채는 학생 — 강아지를 아껴 '잡수신다'를 자연스럽게 여김.",
    "lukaExplain": "높임말은 웃어른한테 쓰는 거야. 강아지가 예뻐도 '잡수신다'는 안 맞아. '먹는다'가 맞지. 아끼는 마음과 높임 표현은 다른 문제야. 같이 짚어보자.",
    "reframe": "높임 표현의 대상(사람 웃어른)을 구분하는 능력."
  },
  {
    "id": "al-kor-028", "subject": "국어", "domain": "비문학", "track": "초등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 대화에서 민수의 말에 숨은 생각을 고르시오.\n\n'엄마: 방 청소했니?\n민수: 오늘 숙제가 진짜 많았어.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "청소를 이미 다 끝냈다.", "correct": false, "trapNote": "끝냈다는 뜻 아님" },
      { "label": "②", "text": "숙제가 많아 청소를 못 했다는 뜻을 돌려 말한 것", "correct": true, "trapNote": "" },
      { "label": "③", "text": "숙제를 도와달라는 뜻", "correct": false, "trapNote": "도움 요청 아님" },
      { "label": "④", "text": "엄마 질문을 못 들었다.", "correct": false, "trapNote": "대답을 하고 있음" },
      { "label": "⑤", "text": "청소가 하기 싫어 화를 낸 것", "correct": false, "trapNote": "화가 아니라 변명" }
    ],
    "hiddenPremise": "묻는 말에 예/아니요로 답 안 하면 무관한 말이라 보는 전제.",
    "commonMistake": "①을 고르는 학생 — 대답을 안 했으니 '했다'로 넘겨짚음.",
    "lukaExplain": "민수는 '안 했어'라고 직접 말하진 않았지? 대신 '숙제가 많았어'로 '그래서 못 했어'를 돌려 말한 거야. 사람은 답을 에둘러 말할 때가 많아. 숨은 뜻을 같이 읽자.",
    "reframe": "직접 답하지 않은 말 속 숨은 의도(간접 표현)를 읽는 능력."
  },
  {
    "id": "al-kor-029", "subject": "국어", "domain": "어휘", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다음 빈칸에 알맞은 낱말을 고르시오.\n\n'그는 약속을 잘 지켜서 매우 ( ) 사람이다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "게으른", "correct": false, "trapNote": "약속 지킴과 반대 성격" },
      { "label": "②", "text": "믿음직한", "correct": true, "trapNote": "" },
      { "label": "③", "text": "무서운", "correct": false, "trapNote": "문맥 안 맞음" },
      { "label": "④", "text": "가난한", "correct": false, "trapNote": "무관한 형편" },
      { "label": "⑤", "text": "시끄러운", "correct": false, "trapNote": "문맥 안 맞음" }
    ],
    "hiddenPremise": "빈칸 앞뒤 뜻을 살피지 않고 아무 성격어나 넣는 전제.",
    "commonMistake": "문맥 연결을 안 하는 학생 — '약속을 잘 지킨다'와 어울리는 성격을 못 찾음.",
    "lukaExplain": "앞 문장을 근거로 삼자. '약속을 잘 지킨다' → 그런 사람을 뭐라 할까? 믿을 수 있는 사람이지. 그래서 '믿음직한'이 딱이야. 앞 내용이 힌트니 꼭 이어 읽자.",
    "reframe": "앞 문장의 근거와 어울리는 낱말을 문맥으로 고르는 능력."
  },
  {
    "id": "al-kor-030", "subject": "국어", "domain": "문학", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다음 이야기에서 인물의 마음으로 알맞은 것을 고르시오.\n\n'지호는 열심히 그린 그림이 상을 받자, 입이 귀에 걸렸다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "슬프다", "correct": false, "trapNote": "관용어를 반대로 해석" },
      { "label": "②", "text": "매우 기쁘다", "correct": true, "trapNote": "" },
      { "label": "③", "text": "화가 난다", "correct": false, "trapNote": "부정 감정 오해" },
      { "label": "④", "text": "무섭다", "correct": false, "trapNote": "문맥 안 맞음" },
      { "label": "⑤", "text": "지루하다", "correct": false, "trapNote": "문맥 안 맞음" }
    ],
    "hiddenPremise": "관용 표현의 뜻을 모르면 엉뚱하게 해석하는 전제.",
    "commonMistake": "①을 고르는 학생 — 관용어 뜻을 몰라 아무렇게나 해석.",
    "lukaExplain": "'입이 귀에 걸렸다'는 입꼬리가 귀까지 올라갈 만큼 활짝 웃는 모습이야. 상을 받았으니 기쁘겠지? 관용 표현은 통째로 뜻을 외워두면 이야기가 잘 읽혀.",
    "reframe": "관용 표현과 상황을 연결해 인물의 마음을 읽는 능력."
  },
  {
    "id": "al-kor-031", "subject": "국어", "domain": "비문학", "track": "초등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 광고에서 <과장된> 표현을 고르시오.\n\n'이 우유를 마시면 키가 쑥쑥! 세상에서 가장 맛있는 우유! 몸에 좋은 칼슘이 들어 있습니다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "우유에 칼슘이 들어 있다.", "correct": false, "trapNote": "확인 가능한 사실" },
      { "label": "②", "text": "세상에서 가장 맛있는 우유다.", "correct": true, "trapNote": "" },
      { "label": "③", "text": "우유를 마실 수 있다.", "correct": false, "trapNote": "과장 아님" },
      { "label": "④", "text": "우유는 마시는 것이다.", "correct": false, "trapNote": "과장 아님" },
      { "label": "⑤", "text": "과장된 표현이 없다.", "correct": false, "trapNote": "'가장'이 과장임을 놓침" }
    ],
    "hiddenPremise": "광고에 좋은 말이 많으면 다 사실이라 믿는 전제.",
    "commonMistake": "⑤를 고르는 학생 — 광고 표현을 그대로 믿음.",
    "lukaExplain": "'세상에서 가장 맛있는'을 어떻게 증명할까? 온 세상 우유를 다 먹어볼 수도 없잖아. '가장·최고'는 광고가 자주 쓰는 과장이야. 확인할 수 있는지 같이 따져보자.",
    "reframe": "광고 속 확인 불가능한 최상급을 과장으로 알아채는 능력."
  },
  {
    "id": "al-kor-032", "subject": "국어", "domain": "문법", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "다음 중 문장이 자연스러운 것을 고르시오.",
    "passage": "",
    "choices": [
      { "label": "①", "text": "나는 어제 학교에 간다.", "correct": false, "trapNote": "'어제'와 '간다' 시제 안 맞음" },
      { "label": "②", "text": "나는 어제 학교에 갔다.", "correct": true, "trapNote": "" },
      { "label": "③", "text": "나는 내일 학교에 갔다.", "correct": false, "trapNote": "'내일'과 '갔다' 안 맞음" },
      { "label": "④", "text": "나를 어제 학교에 갔다.", "correct": false, "trapNote": "'나를'이 어색" },
      { "label": "⑤", "text": "나는 어제 학교를 갔다에.", "correct": false, "trapNote": "말 순서 틀림" }
    ],
    "hiddenPremise": "시간 표현과 문장 끝이 짝을 이뤄야 함을 놓치는 전제.",
    "commonMistake": "①을 고르는 학생 — '어제'인데 '간다' 시제 불일치를 못 알아챔.",
    "lukaExplain": "'어제'는 지나간 일이니 끝도 '갔다'가 맞아. '어제 ~ 간다'는 시간이 안 맞지. 시간 표시와 문장 끝이 같은 때를 가리키는지 같이 맞춰보자.",
    "reframe": "시간 표현과 서술어의 시제를 일치시키는 능력."
  },
  {
    "id": "al-kor-033", "subject": "국어", "domain": "비문학", "track": "초등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "다음 글에서 원인에 해당하는 부분을 고르시오.\n\n'늦잠을 잤다. 그래서 학교에 지각했다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "늦잠을 잤다.", "correct": true, "trapNote": "" },
      { "label": "②", "text": "학교에 지각했다.", "correct": false, "trapNote": "결과에 해당" },
      { "label": "③", "text": "그래서", "correct": false, "trapNote": "이어주는 말일 뿐" },
      { "label": "④", "text": "학교", "correct": false, "trapNote": "낱말 하나" },
      { "label": "⑤", "text": "원인이 없다.", "correct": false, "trapNote": "'늦잠'이 원인임" }
    ],
    "hiddenPremise": "뒤에 나온 일(지각)을 원인으로 착각하는 전제.",
    "commonMistake": "②를 고르는 학생 — 지각이 더 큰 일 같아 원인으로 고름.",
    "lukaExplain": "'그래서'를 기준으로 보자. 앞은 원인, 뒤는 결과야. 늦잠 → 그래서 → 지각. 늦잠 때문에 지각한 거지? 원인은 '그래서' 앞이라는 걸 기억하면 쉬워.",
    "reframe": "'그래서'를 기준으로 원인과 결과를 나누는 능력."
  }
];

/* ===================== 국어 중등 추가 (kor-034 ~ kor-052, 19문항) ===================== */
var APPLICATION_LAB_ITEMS_KOR_MID = [
  {
    "id": "al-kor-034", "subject": "국어", "domain": "비문학", "track": "중등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 글을 읽고 물음에 답하시오.\n\n'우리 반에서 안경을 쓴 학생은 모두 성적이 상위권이다. 따라서 안경을 쓰면 성적이 오른다.'\n\n이 추론의 문제점은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "안경 쓴 학생 수가 적어서 통계적으로 의미가 없다.", "correct": false, "trapNote": "표본 크기 반사 — 진짜 결함(상관→인과 비약)을 놓침" },
      { "label": "②", "text": "안경과 성적 사이의 상관관계를 인과관계로 단정했다.", "correct": true, "trapNote": "" },
      { "label": "③", "text": "안경을 쓰지 않은 학생은 성적이 낮다는 뜻이 숨어 있다.", "correct": false, "trapNote": "글에 없는 내용을 추가로 상정" },
      { "label": "④", "text": "안경의 종류에 따라 효과가 다르다는 것을 언급하지 않았다.", "correct": false, "trapNote": "논점 이탈" },
      { "label": "⑤", "text": "성적이 오른다는 것 자체가 증명되지 않았다.", "correct": false, "trapNote": "핵심은 증명 부족이 아니라 인과 비약" }
    ],
    "hiddenPremise": "'함께 나타난 두 특징(안경, 성적)은 한쪽이 다른 쪽의 원인'이라는 전제.",
    "commonMistake": "①을 고르는 학생 다수 — 통계 문제엔 반사적으로 표본 크기를 의심. 진짜 문제는 인과 비약.",
    "lukaExplain": "안경 쓴 애들이 공부를 열심히 해서 안경도 쓰고 성적도 좋은 걸 수도 있잖아. 안경이 성적을 '올린' 게 아니라, 둘 다 다른 이유(예: 독서량)에서 나왔을 수도 있어. 같이 봐서 좋다는 것과 그것 때문에 좋아진다는 건 달라.",
    "reframe": "상관관계를 인과관계로 비약하는 오류를 잡아내는 능력."
  },
  {
    "id": "al-kor-035", "subject": "국어", "domain": "문학", "track": "중등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "다음 소설의 시점을 고르시오.\n\n'나는 그날 밤, 형이 몰래 우는 소리를 들었다. 형의 마음속이 어땠는지는 알 수 없었지만, 나는 괜히 눈물이 났다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "1인칭 주인공 시점", "correct": true, "trapNote": "" },
      { "label": "②", "text": "1인칭 관찰자 시점", "correct": false, "trapNote": "'나'가 사건의 중심 감정을 직접 서술 — 관찰자를 넘어섬" },
      { "label": "③", "text": "전지적 작가 시점", "correct": false, "trapNote": "형의 마음을 '알 수 없다'고 명시 — 전지적 아님" },
      { "label": "④", "text": "작가 관찰자 시점", "correct": false, "trapNote": "'나'라는 인물 시점이 있음 — 3인칭 아님" },
      { "label": "⑤", "text": "시점을 알 수 없다.", "correct": false, "trapNote": "'나'가 뚜렷이 존재함" }
    ],
    "hiddenPremise": "'나'가 등장하면 무조건 1인칭 주인공 시점이라 착각하거나, 반대로 다른 인물의 감정 언급이 나오면 전지적이라 착각하는 전제.",
    "commonMistake": "③을 고르는 학생 — 형의 감정이 언급되니 전지적이라 오해. 하지만 '알 수 없었지만'이라는 표현이 오히려 1인칭의 한계를 보여줌.",
    "lukaExplain": "전지적 작가 시점이면 형의 마음까지 다 알려줘야 해. 근데 이 글은 '알 수 없었지만'이라고 하지? 이건 '나'가 자기가 아는 것만 말하는 1인칭이야. 주인공인 '나'의 감정이 중심이니 주인공 시점이고.",
    "reframe": "서술자가 아는 정보의 한계로 시점을 정확히 판별하는 능력."
  },
  {
    "id": "al-kor-036", "subject": "국어", "domain": "어휘", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다음 밑줄 친 한자어의 뜻으로 알맞은 것은?\n\n'그 계획은 이미 <실효성>을 잃었다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "실제로 효과를 나타내는 성질", "correct": true, "trapNote": "" },
      { "label": "②", "text": "실수할 가능성", "correct": false, "trapNote": "'실'을 '실수'로 오해" },
      { "label": "③", "text": "효도하는 마음", "correct": false, "trapNote": "'효'를 '효도'로 오해" },
      { "label": "④", "text": "실제 있었던 일", "correct": false, "trapNote": "'실'을 '사실'로 오해" },
      { "label": "⑤", "text": "성공할 확률", "correct": false, "trapNote": "무관한 확대 해석" }
    ],
    "hiddenPremise": "한자어를 구성 글자 하나하나의 익숙한 뜻으로 짜맞추는 전제. 실제로는 '실(實)+효(效)+성(性)' = 실제 효과를 내는 성질.",
    "commonMistake": "②를 고르는 학생 — '실'을 '실수'와 연결.",
    "lukaExplain": "한자어는 글자 뜻을 아무렇게나 짜맞추면 안 돼. '실효성'은 '실제로(實) 효과가(效) 있는 성질(性)'이야. 문맥도 봐봐 — '계획이 실효성을 잃었다'는 '더 이상 효과가 없다'는 뜻이지.",
    "reframe": "한자어를 구성 원리와 문맥으로 함께 해석하는 능력."
  },
  {
    "id": "al-kor-037", "subject": "국어", "domain": "비문학", "track": "중등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": true,
    "stem": "다음 글을 읽고 물음에 답하시오.\n\n'한 조사에 따르면 SNS를 많이 쓰는 청소년일수록 우울감을 더 많이 느낀다고 한다. 이는 SNS 사용을 제한해야 한다는 강력한 근거다.'\n\n이 주장에 대한 비판으로 가장 타당한 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "우울한 청소년이 SNS를 더 많이 사용했을 가능성(역인과)을 배제하지 못했다.", "correct": true, "trapNote": "" },
      { "label": "②", "text": "SNS의 종류를 구분하지 않았다.", "correct": false, "trapNote": "세부 분류 부족 — 핵심 결함 아님" },
      { "label": "③", "text": "우울감을 정확히 측정할 수 없다.", "correct": false, "trapNote": "측정 방법 문제 — 논점에서 벗어남" },
      { "label": "④", "text": "청소년의 정의가 명확하지 않다.", "correct": false, "trapNote": "정의 문제 — 핵심 무관" },
      { "label": "⑤", "text": "조사에 참여한 인원이 공개되지 않았다.", "correct": false, "trapNote": "표본 크기 반사 — 진짜 결함은 역인과" }
    ],
    "hiddenPremise": "'SNS 사용 → 우울감'이라는 방향을 전제. 반대 방향(우울한 사람이 SNS를 더 씀)일 가능성을 배제하지 못함.",
    "commonMistake": "⑤를 고르는 학생 다수 — 통계 문제엔 반사적으로 표본 크기를 의심. 진짜 결함은 인과 방향이 불명확하다는 것.",
    "lukaExplain": "SNS가 우울하게 만드는 걸까, 우울한 애들이 SNS로 도피하는 걸까? 이 조사만으로는 방향을 알 수 없어. 방향이 안 정해졌는데 '제한해야 한다'고 결론 내리는 건 성급해.",
    "reframe": "역인과 가능성을 배제하지 못한 논증의 허점을 잡아내는 능력."
  },
  {
    "id": "al-kor-038", "subject": "국어", "domain": "문법", "track": "중등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 중 피동 표현이 <잘못> 쓰인 문장을 고르시오.",
    "passage": "",
    "choices": [
      { "label": "①", "text": "문이 열렸다.", "correct": false, "trapNote": "올바른 피동" },
      { "label": "②", "text": "그 소식이 모두에게 알려졌다.", "correct": false, "trapNote": "올바른 피동" },
      { "label": "③", "text": "다리가 만들어졌다.", "correct": false, "trapNote": "올바른 피동" },
      { "label": "④", "text": "그 문제가 다시 재고려되어졌다.", "correct": true, "trapNote": "" },
      { "label": "⑤", "text": "범인이 경찰에게 잡혔다.", "correct": false, "trapNote": "올바른 피동" }
    ],
    "hiddenPremise": "피동 표현을 한 번만 만들면 된다는 규칙을 모르면, 이중 피동(재고려되어졌다 = '되다'+'어지다')을 자연스럽게 여김.",
    "commonMistake": "④를 못 알아채는 학생 — 뉴스나 글에서 흔히 봐서 자연스럽다고 느낌. '재고려되다'만으로 이미 피동인데 '어지다'를 또 붙임.",
    "lukaExplain": "'되다'도 피동이고 '~어지다'도 피동이야. 둘을 같이 쓰면 피동을 두 번 겹쳐 쓰는 거지. '재고려되었다'면 충분해. 이중 피동은 뉴스에서도 자주 틀리는 실수니까 조심해야 해.",
    "reframe": "이중 피동이라는 흔한 오류를 알아채는 문법 감각."
  },
  {
    "id": "al-kor-039", "subject": "국어", "domain": "비문학", "track": "중등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "다음 글의 서술 방식으로 알맞은 것은?\n\n'인간의 기억은 컴퓨터의 저장 장치와 비슷하다. 둘 다 정보를 저장하고, 필요할 때 꺼내 쓴다. 하지만 컴퓨터와 달리 인간의 기억은 시간이 지나면 왜곡될 수 있다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "정의 — 개념의 뜻을 밝힘", "correct": false, "trapNote": "뜻풀이가 중심이 아님" },
      { "label": "②", "text": "비교와 대조 — 공통점과 차이점을 함께 다룸", "correct": true, "trapNote": "" },
      { "label": "③", "text": "분류 — 여러 항목을 기준에 따라 나눔", "correct": false, "trapNote": "나누기가 아님" },
      { "label": "④", "text": "인과 — 원인과 결과를 밝힘", "correct": false, "trapNote": "원인-결과 구조 아님" },
      { "label": "⑤", "text": "예시 — 구체적 사례를 듦", "correct": false, "trapNote": "사례 나열이 아님" }
    ],
    "hiddenPremise": "'비슷하다'는 말만 보고 비교라고 단정하거나, 차이점 언급을 놓치는 전제. 실제로는 공통점(비교)과 차이점(대조)이 모두 있음.",
    "commonMistake": "비교만 보고 대조(차이점) 부분을 놓치는 학생 — '하지만' 이후의 차이점을 빠뜨림.",
    "lukaExplain": "앞부분은 '둘 다 비슷하다'는 공통점(비교)이고, '하지만' 뒤는 다른 점(대조)이야. 둘이 같이 있으면 '비교와 대조'라고 불러. 접속어 '하지만'을 놓치지 말고 같이 짚어보자.",
    "reframe": "글에 비교와 대조가 함께 쓰였는지 접속어로 판별하는 능력."
  },
  {
    "id": "al-kor-040", "subject": "국어", "domain": "문학", "track": "중등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": true,
    "stem": "다음 시 구절의 상징적 의미로 가장 적절한 것은?\n\n'겨울 벌판에 홀로 선 나무 한 그루 / 잎은 다 졌어도 뿌리는 깊었다'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "나무가 죽어가고 있음을 나타낸다.", "correct": false, "trapNote": "잎이 진 것을 죽음으로 단순 해석" },
      { "label": "②", "text": "시련 속에서도 흔들리지 않는 내면의 힘을 나타낸다.", "correct": true, "trapNote": "" },
      { "label": "③", "text": "겨울이라는 계절의 아름다움을 나타낸다.", "correct": false, "trapNote": "계절 묘사로만 축소" },
      { "label": "④", "text": "나무를 의인화하여 웃음을 유발한다.", "correct": false, "trapNote": "유머와 무관한 진지한 어조" },
      { "label": "⑤", "text": "자연 보호의 필요성을 주장한다.", "correct": false, "trapNote": "환경 메시지는 글에 없음" }
    ],
    "hiddenPremise": "'잎이 졌다'는 표면적 묘사만 보고 부정적으로 해석하는 전제. '뿌리는 깊었다'는 반전이 상징의 핵심.",
    "commonMistake": "①을 고르는 학생 — '잎이 졌다'만 보고 쇠약·죽음으로 해석. 뒤에 이어지는 '뿌리는 깊었다'를 놓침.",
    "lukaExplain": "잎이 진 건 겉모습이 힘들어 보이는 거야. 근데 '뿌리는 깊었다'가 핵심이지. 겉은 힘들어도 속은 단단하다는 뜻이야. 시는 이렇게 겉과 속을 대비시켜서 진짜 의미를 숨겨놔.",
    "reframe": "표면 이미지와 반전 표현을 함께 읽어 상징을 해석하는 능력."
  },
  {
    "id": "al-kor-041", "subject": "국어", "domain": "어휘", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다음 관용 표현의 뜻으로 알맞은 것은?\n\n'발이 넓다'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "발 크기가 크다.", "correct": false, "trapNote": "글자 그대로 해석 — 관용구가 아닌 축자 해석" },
      { "label": "②", "text": "아는 사람이 많다.", "correct": true, "trapNote": "" },
      { "label": "③", "text": "걸음이 빠르다.", "correct": false, "trapNote": "무관한 추측" },
      { "label": "④", "text": "발이 아프다.", "correct": false, "trapNote": "무관" },
      { "label": "⑤", "text": "신발이 낡았다.", "correct": false, "trapNote": "무관" }
    ],
    "hiddenPremise": "관용구를 글자 그대로 해석하는 전제. 관용구는 글자 뜻과 다른 굳어진 의미를 가짐.",
    "commonMistake": "①을 고르는 학생 — 관용구를 처음 접하면 글자 그대로 해석하려 함.",
    "lukaExplain": "'발이 넓다'를 진짜 발 크기로 읽으면 안 돼. 관용구는 통째로 외워야 하는 표현이야. 여기서는 '여러 사람을 안다'는 뜻으로 굳어졌어.",
    "reframe": "관용구를 축자적으로 풀지 않고 통째로 익히는 능력."
  },
  {
    "id": "al-kor-042", "subject": "국어", "domain": "비문학", "track": "중등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "다음 글에서 필자가 반박하려는 대상(주장)은?\n\n'일부에서는 게임이 청소년의 폭력성을 키운다고 말한다. 그러나 여러 연구에서 게임과 폭력성 사이의 명확한 인과관계는 밝혀지지 않았다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "게임은 청소년에게 유익하다.", "correct": false, "trapNote": "글에 없는 반대 주장" },
      { "label": "②", "text": "게임이 청소년의 폭력성을 키운다는 주장", "correct": true, "trapNote": "" },
      { "label": "③", "text": "청소년은 게임을 많이 한다.", "correct": false, "trapNote": "필자의 주장이 아닌 사실 서술" },
      { "label": "④", "text": "연구는 항상 정확하다.", "correct": false, "trapNote": "글에서 언급 안 됨" },
      { "label": "⑤", "text": "폭력성은 타고나는 것이다.", "correct": false, "trapNote": "무관한 주장" }
    ],
    "hiddenPremise": "'그러나'로 시작하는 문장만 보고 필자의 주장으로 착각하는 전제. 실제로 필자가 반박하는 건 '그러나' 앞의 통념.",
    "commonMistake": "③을 고르는 학생 — 문장 순서만 보고 반박 대상을 헷갈림.",
    "lukaExplain": "'일부에서는 ~라고 말한다'가 필자가 반박하려는 통념이야. '그러나' 뒤는 필자 자신의 반박이지. 누구 주장을 누가 반박하는지, 순서를 같이 정리해보자.",
    "reframe": "통념 제시와 필자의 반박을 구조적으로 구분하는 능력."
  },
  {
    "id": "al-kor-043", "subject": "국어", "domain": "문법", "track": "중등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": true,
    "stem": "다음 문장의 중의성(두 가지로 해석되는 것)을 해소한 문장으로 알맞은 것은?\n\n원문: '나는 웃으면서 걸어오는 친구를 보았다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "웃으면서, 나는 걸어오는 친구를 보았다.", "correct": true, "trapNote": "" },
      { "label": "②", "text": "나는 웃으면서 걸어오는 친구를 보았다.", "correct": false, "trapNote": "원문 그대로 — 중의성 그대로 남음" },
      { "label": "③", "text": "나는 친구를 웃으면서 걸어오는 것을 보았다.", "correct": false, "trapNote": "여전히 두 가지로 해석 가능" },
      { "label": "④", "text": "친구가 웃으면서 나는 걸어오는 것을 보았다.", "correct": false, "trapNote": "문장이 비문법적" },
      { "label": "⑤", "text": "웃으면서 걸어오는 나는 친구를 보았다.", "correct": false, "trapNote": "의미가 아예 바뀜" }
    ],
    "hiddenPremise": "'웃으면서'가 '나'를 꾸미는지 '친구'를 꾸미는지 애매한 것을 모르면, 중의성이 없다고 착각.",
    "commonMistake": "②를 고르는 학생 — 원문 자체가 이미 중의적이라는 걸 못 알아챔. 원문은 '내가 웃으며 봤다'와 '친구가 웃으며 왔다' 둘 다 가능.",
    "lukaExplain": "'웃으면서'가 누구 얘기인지 애매하지? 나일 수도, 친구일 수도 있어. 쉼표를 넣어서 '웃으면서, 나는'으로 끊으면 웃는 사람이 '나'라는 게 분명해져. 문장 부호 하나로 뜻이 달라질 수 있어.",
    "reframe": "수식어의 범위가 애매한 중의적 문장을 알아채고 고치는 능력."
  },
  {
    "id": "al-kor-044", "subject": "국어", "domain": "비문학", "track": "중등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "다음 글을 읽고 물음에 답하시오.\n\n'유명 운동선수가 특정 영양제를 먹고 좋은 성적을 냈다고 홍보하는 광고가 있다. 이 광고를 본 사람들은 그 영양제를 사고 싶어 한다.'\n\n이 광고 전략에 담긴 논리적 문제는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "운동선수가 실제로 영양제를 먹었는지 확인할 수 없다.", "correct": false, "trapNote": "사실 확인 문제 — 논리 구조의 핵심 아님" },
      { "label": "②", "text": "권위 있는 인물의 사례 하나로 제품의 효과를 일반화했다.", "correct": true, "trapNote": "" },
      { "label": "③", "text": "영양제 가격이 비싸다.", "correct": false, "trapNote": "가격은 무관" },
      { "label": "④", "text": "운동선수가 광고에 출연하면 안 된다.", "correct": false, "trapNote": "가치 판단 — 논점 이탈" },
      { "label": "⑤", "text": "영양제는 몸에 나쁘다.", "correct": false, "trapNote": "근거 없는 단정" }
    ],
    "hiddenPremise": "'유명한 사람이 효과를 봤다 = 나도 효과를 본다'는 전제. 개인의 성공에는 재능·훈련 등 다른 요인이 더 크게 작용할 수 있음.",
    "commonMistake": "①을 고르는 학생 — 사실 여부를 문제 삼지만, 이 광고의 진짜 문제는 '한 사람의 사례로 전체를 일반화'한 논리 구조.",
    "lukaExplain": "그 선수가 잘한 건 영양제 때문일까, 원래 재능과 훈련량 때문일까? 광고는 그 선수 '한 명'의 성공을 '모든 사람'에게 적용될 것처럼 보여줘. 유명인의 사례 하나로 일반화하는 게 이 광고의 함정이야.",
    "reframe": "유명인의 개별 사례를 일반적 효과로 확대하는 광고 논리의 오류를 잡는 능력."
  },
  {
    "id": "al-kor-045", "subject": "국어", "domain": "문학", "track": "중등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "다음 글의 갈등 유형으로 알맞은 것은?\n\n'그는 부모님의 기대에 부응해 의사가 되고 싶었지만, 마음속으로는 음악을 하고 싶었다. 매일 밤 그 갈림길에서 잠을 이루지 못했다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "인물과 인물 사이의 갈등", "correct": false, "trapNote": "다른 인물이 등장하지 않음" },
      { "label": "②", "text": "인물 내면의 갈등(자아 갈등)", "correct": true, "trapNote": "" },
      { "label": "③", "text": "인물과 사회의 갈등", "correct": false, "trapNote": "사회 제도와의 충돌이 아님" },
      { "label": "④", "text": "인물과 자연의 갈등", "correct": false, "trapNote": "자연 요소 없음" },
      { "label": "⑤", "text": "갈등이 없다.", "correct": false, "trapNote": "갈림길에서 잠 못 이루는 것이 갈등의 증거" }
    ],
    "hiddenPremise": "갈등은 반드시 다른 사람과 부딪혀야 한다는 전제. 한 사람 마음속에서도 갈등이 일어날 수 있음(내적 갈등).",
    "commonMistake": "①을 고르는 학생 — '부모님'이 언급되니 인물 간 갈등으로 오해. 하지만 부모님은 직접 등장하지 않고, 갈등은 이 인물 마음속에서 일어남.",
    "lukaExplain": "부모님이 직접 나와서 싸우는 장면이 있어? 없지. 이 인물 혼자 '의사냐 음악이냐'로 고민하는 거야. 이렇게 한 사람 마음속에서 일어나는 갈등을 내적 갈등이라고 해.",
    "reframe": "외적 갈등(인물 vs 인물)과 내적 갈등(인물 내면)을 구분하는 능력."
  },
  {
    "id": "al-kor-046", "subject": "국어", "domain": "어휘", "track": "중등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 밑줄 친 낱말의 의미가 나머지 넷과 <다른> 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "그는 회의에서 손을 들었다.", "correct": false, "trapNote": "신체 부위 그대로" },
      { "label": "②", "text": "이 일에서 손을 떼기로 했다.", "correct": true, "trapNote": "" },
      { "label": "③", "text": "손이 많이 가는 요리다.", "correct": false, "trapNote": "'노력·수고'라는 관용 의미" },
      { "label": "④", "text": "그 일은 그의 손에 달렸다.", "correct": false, "trapNote": "'책임·역할'이라는 관용 의미" },
      { "label": "⑤", "text": "손을 써서 문제를 해결했다.", "correct": false, "trapNote": "'수단·방법'이라는 관용 의미" }
    ],
    "hiddenPremise": "'손'이 나오면 다 같은 뜻(신체 부위)이라고 여기는 전제. 실제로는 관용구마다 다른 뜻으로 쓰임.",
    "commonMistake": "①을 정답으로 못 고르는 학생 — ①만 진짜 신체 부위(손을 드는 동작)이고 나머지는 모두 관용적 의미(그만두다·수고·책임·방법)라는 걸 못 구분.",
    "lukaExplain": "①은 진짜 손을 드는 동작이야. 나머지 넷은 '손'이 들어가지만 실제 손이 아니라 '그만두다', '수고', '책임', '방법'이라는 다른 뜻으로 쓰였어. 같은 글자라도 관용구인지 아닌지 구별해야 해.",
    "reframe": "같은 낱말이 축자적 의미와 관용적 의미로 나뉘어 쓰이는 것을 구분하는 능력."
  },
  {
    "id": "al-kor-047", "subject": "국어", "domain": "비문학", "track": "중등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 글의 주장에 대한 근거로 <적절하지 않은> 것은?\n\n주장: '학교에 도서관 이용 시간을 늘려야 한다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "독서량이 많은 학생일수록 어휘력이 풍부하다는 연구 결과가 있다.", "correct": false, "trapNote": "타당한 근거" },
      { "label": "②", "text": "도서관 이용 시간이 늘면 학생들의 독서 기회가 많아진다.", "correct": false, "trapNote": "타당한 근거" },
      { "label": "③", "text": "우리 학교 도서관은 최근에 새로 지어졌다.", "correct": true, "trapNote": "" },
      { "label": "④", "text": "다른 학교에서도 도서관 시간 확대 후 독서율이 올랐다.", "correct": false, "trapNote": "타당한 근거" },
      { "label": "⑤", "text": "독서는 사고력 발달에 도움이 된다는 전문가 의견이 있다.", "correct": false, "trapNote": "타당한 근거" }
    ],
    "hiddenPremise": "주장과 관련 있어 보이는 사실이면 다 근거가 된다는 전제. 실제로는 '주장을 직접 뒷받침하는가'가 기준.",
    "commonMistake": "③을 근거로 오인하는 학생 — 도서관 얘기가 나와서 관련 있어 보이지만, '새로 지어졌다'는 사실은 '시간을 늘려야 한다'는 주장과 직접 연결되지 않음.",
    "lukaExplain": "③은 도서관 얘기이긴 한데, '새로 지어졌다'는 게 '시간을 늘려야 한다'는 주장을 뒷받침해줘? 안 해주지. 관련된 소재라고 다 근거가 되는 건 아니야. 주장과 직접 연결되는지 하나씩 확인해보자.",
    "reframe": "소재의 관련성과 논리적 뒷받침 여부를 구분하는 능력."
  },
  {
    "id": "al-kor-048", "subject": "국어", "domain": "문법", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다음 밑줄 친 낱말의 품사가 <다른> 것을 고르시오.",
    "passage": "",
    "choices": [
      { "label": "①", "text": "그는 <빠르게> 달렸다.", "correct": false, "trapNote": "부사" },
      { "label": "②", "text": "날씨가 <춥게> 느껴진다.", "correct": false, "trapNote": "부사형" },
      { "label": "③", "text": "그는 <성실한> 학생이다.", "correct": true, "trapNote": "" },
      { "label": "④", "text": "아이가 <조용히> 걸었다.", "correct": false, "trapNote": "부사" },
      { "label": "⑤", "text": "차가 <천천히> 움직였다.", "correct": false, "trapNote": "부사" }
    ],
    "hiddenPremise": "꾸며주는 말은 다 같은 품사(부사)라고 여기는 전제. '성실한'은 명사를 꾸미는 관형어(형용사의 활용형)로 부사와 다름.",
    "commonMistake": "③을 부사로 착각하는 학생 — 다른 선택지들과 비슷한 자리에 있어 같은 품사로 오해.",
    "lukaExplain": "①②④⑤는 동사나 형용사를 꾸미는 부사야('빠르게 달렸다'). 근데 ③의 '성실한'은 뒤에 있는 명사 '학생'을 꾸미지? 명사를 꾸미면 관형어야. 무엇을 꾸미는지 보면 품사가 갈려.",
    "reframe": "꾸미는 대상(용언 vs 체언)으로 품사를 구분하는 능력."
  },
  {
    "id": "al-kor-049", "subject": "국어", "domain": "비문학", "track": "중등", "stage": "입문",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다음 글의 설명 방법으로 알맞은 것은?\n\n'동물은 크게 척추동물과 무척추동물로 나뉜다. 척추동물은 다시 어류, 양서류, 파충류, 조류, 포유류로 나뉜다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "분류 — 일정한 기준으로 나눔", "correct": true, "trapNote": "" },
      { "label": "②", "text": "비교 — 공통점을 밝힘", "correct": false, "trapNote": "비교 대상이 나열되지 않음" },
      { "label": "③", "text": "인과 — 원인과 결과를 밝힘", "correct": false, "trapNote": "원인-결과 구조 없음" },
      { "label": "④", "text": "묘사 — 모습을 그림처럼 표현", "correct": false, "trapNote": "감각적 묘사 없음" },
      { "label": "⑤", "text": "예시 — 구체적 사례를 듦", "correct": false, "trapNote": "사례 나열이 아니라 기준에 따른 구분" }
    ],
    "hiddenPremise": "여러 항목이 나오면 다 예시나 나열이라고 여기는 전제. 기준을 세워 나누면 '분류'라는 것을 놓침.",
    "commonMistake": "⑤를 고르는 학생 — 여러 동물 이름이 나오니 예시로 오해.",
    "lukaExplain": "그냥 동물들을 나열한 게 아니라, '척추가 있는가'라는 기준으로 딱 나눴지? 이렇게 기준을 세워 무리를 나누는 게 분류야. 예시는 기준 없이 사례만 드는 거고.",
    "reframe": "기준에 따라 나누는 분류와 단순 나열·예시를 구분하는 능력."
  },
  {
    "id": "al-kor-050", "subject": "국어", "domain": "문학", "track": "중등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "다음 시조의 주제로 알맞은 것은?\n\n'까마귀 검다 하고 백로야 웃지 마라 / 겉이 검은들 속조차 검을쏘냐 / 겉 희고 속 검은 것은 너뿐인가 하노라'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "까마귀와 백로의 생김새 비교", "correct": false, "trapNote": "표면적 소재만 봄" },
      { "label": "②", "text": "겉모습으로 판단하지 말고 본질을 보라는 교훈", "correct": true, "trapNote": "" },
      { "label": "③", "text": "새들의 다툼을 관찰한 기록", "correct": false, "trapNote": "사실적 관찰로 축소" },
      { "label": "④", "text": "자연의 아름다움에 대한 예찬", "correct": false, "trapNote": "예찬 아님 — 풍자적 어조" },
      { "label": "⑤", "text": "겨울 풍경 묘사", "correct": false, "trapNote": "계절 언급 없음" }
    ],
    "hiddenPremise": "까마귀·백로라는 표면 소재에만 머무는 전제. 실제로는 '겉과 속이 다른 사람'을 비판하는 우의적 표현.",
    "commonMistake": "①을 고르는 학생 — 새 이야기로만 읽고 그 안에 담긴 인간 세태 풍자를 놓침.",
    "lukaExplain": "이 시조는 새 얘기가 아니야. '겉 희고 속 검은 것은 너뿐'이라는 말은, 겉으로만 깨끗한 척하는 사람을 비꼬는 거야. 까마귀와 백로는 비유일 뿐, 진짜 주제는 겉과 속이 다른 사람에 대한 비판이야.",
    "reframe": "표면 소재(동식물)에 담긴 인간사에 대한 우의적 주제를 읽어내는 능력."
  },
  {
    "id": "al-kor-051", "subject": "국어", "domain": "비문학", "track": "중등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "다음 글을 읽고 물음에 답하시오.\n\n'한 회사가 신제품 만족도 조사를 했다. 조사는 그 회사 홈페이지에 접속한 사람들만을 대상으로 했고, 결과는 '만족도 95%'로 발표되었다.'\n\n이 조사 결과를 그대로 믿기 어려운 이유는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "95%라는 숫자가 너무 높아서 믿기 어렵다.", "correct": false, "trapNote": "숫자 크기 자체는 근거가 아님" },
      { "label": "②", "text": "홈페이지에 접속한 사람은 이미 제품에 관심 있거나 만족한 사람일 가능성이 높아, 표본이 한쪽으로 치우쳤다.", "correct": true, "trapNote": "" },
      { "label": "③", "text": "회사는 항상 거짓말을 한다.", "correct": false, "trapNote": "근거 없는 일반화" },
      { "label": "④", "text": "만족도 조사는 원래 의미가 없다.", "correct": false, "trapNote": "극단적 부정" },
      { "label": "⑤", "text": "제품에 문제가 있다는 증거다.", "correct": false, "trapNote": "성급한 결론" }
    ],
    "hiddenPremise": "조사 대상이 누구인지 상관없이 숫자만 믿는 전제. 실제로는 표본이 한쪽으로 치우치면(선택 편향) 전체를 대표할 수 없음.",
    "commonMistake": "①을 고르는 학생 — 숫자가 크다는 것 자체를 의심 근거로 삼음. 진짜 문제는 표본이 누구인지.",
    "lukaExplain": "홈페이지에 일부러 들어와서 설문에 응한 사람들이 누굴까? 이미 제품에 관심 있거나 만족한 사람일 확률이 높아. 불만족한 사람은 애초에 홈페이지에 잘 안 들어가겠지. 그러니까 이 95%는 전체 고객이 아니라 '관심 있는 일부'의 의견일 뿐이야.",
    "reframe": "표본이 특정 집단으로 치우친 선택 편향을 알아채는 능력."
  },
  {
    "id": "al-kor-052", "subject": "국어", "domain": "어휘", "track": "중등", "stage": "입문",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다음 밑줄 친 낱말과 바꿔 쓸 수 없는 것은?\n\n'그의 설명은 매우 <간결했다>.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "간단했다", "correct": false, "trapNote": "유의어" },
      { "label": "②", "text": "짧고 명료했다", "correct": false, "trapNote": "유의 표현" },
      { "label": "③", "text": "장황했다", "correct": true, "trapNote": "" },
      { "label": "④", "text": "군더더기가 없었다", "correct": false, "trapNote": "유의 표현" },
      { "label": "⑤", "text": "핵심만 담았다", "correct": false, "trapNote": "유의 표현" }
    ],
    "hiddenPremise": "낱말이 비슷한 느낌이면 다 바꿔 쓸 수 있다는 전제. '장황하다'는 오히려 '간결하다'의 반대말.",
    "commonMistake": "뜻을 정확히 모르는 학생 — '장황했다'를 비슷한 긍정적 표현으로 착각.",
    "lukaExplain": "'장황하다'는 말이 길고 복잡하다는 뜻이야. '간결하다(짧고 명확함)'와는 정반대지. 나머지 넷은 다 '간결하다'와 비슷한 뜻이고. 뜻을 정확히 알아야 바꿔 쓸 수 있는지 판단할 수 있어.",
    "reframe": "유의어와 반의어를 정확히 구분해 바꿔 쓸 수 있는지 판단하는 능력."
  }
];
APPLICATION_LAB_ITEMS = APPLICATION_LAB_ITEMS.concat(APPLICATION_LAB_ITEMS_KOR_MID);

/* ===================== 국어 고등 추가 (kor-053 ~ kor-066, 14문항) ===================== */
var APPLICATION_LAB_ITEMS_KOR_HIGH = [
  {
    "id": "al-kor-053", "subject": "국어", "domain": "비문학", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 글을 읽고 물음에 답하시오.\n\n'최근 5년간 이 지역의 강력 범죄율이 감소했다. 이는 신설된 CCTV 덕분이다.'\n\n이 주장을 뒷받침하기 위해 추가로 확인해야 할 것으로 가장 적절한 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "CCTV 설치 이전과 이후의 범죄율 변화 추이, 그리고 같은 기간 다른 요인(경찰 인력 증원 등)의 변화 여부", "correct": true, "trapNote": "" },
      { "label": "②", "text": "CCTV의 화질이 얼마나 좋은지", "correct": false, "trapNote": "화질은 인과관계와 무관" },
      { "label": "③", "text": "CCTV 설치 비용이 얼마인지", "correct": false, "trapNote": "비용은 논증과 무관" },
      { "label": "④", "text": "다른 지역에도 CCTV가 있는지", "correct": false, "trapNote": "직접 관련 없음" },
      { "label": "⑤", "text": "범죄를 저지른 사람들의 나이대", "correct": false, "trapNote": "인과 검증과 무관" }
    ],
    "hiddenPremise": "'CCTV 설치 후 범죄율이 줄었다'는 시간적 선후 관계만으로 인과관계를 단정하는 전제. 다른 요인(경찰 증원, 경기 변화 등)을 통제하지 않음.",
    "commonMistake": "표면적 상관관계를 그대로 원인으로 받아들이는 학생 — CCTV 외의 다른 변수 가능성을 검토하지 않음.",
    "lukaExplain": "범죄율이 준 게 CCTV 때문인지 확실히 하려면, 같은 시기에 다른 변화(경찰 인력, 가로등 설치, 경기 상황 등)가 없었는지도 봐야 해. 원인 하나만 콕 집어 말하려면, 다른 원인 가능성부터 지워봐야 하는 거야.",
    "reframe": "인과관계를 주장하려면 다른 변수를 통제했는지부터 확인하는 능력."
  },
  {
    "id": "al-kor-054", "subject": "국어", "domain": "문학", "track": "고등", "stage": "심화",
    "difficulty": 5, "finalSparkEligible": true,
    "stem": "다음 소설의 서술자에 대한 설명으로 가장 적절한 것은?\n\n'그는 태연한 척했지만, 손끝이 미세하게 떨리고 있었다. 그러나 정작 그 자신은 자기 손이 떨리고 있다는 사실을 깨닫지 못했다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "서술자가 인물보다 더 많은 것을 아는 전지적 서술자다.", "correct": true, "trapNote": "" },
      { "label": "②", "text": "서술자가 인물 자신이다(1인칭).", "correct": false, "trapNote": "인물이 모르는 것을 서술자가 알고 있음 — 1인칭 불가" },
      { "label": "③", "text": "서술자는 인물의 행동만 관찰할 뿐 내면은 모른다.", "correct": false, "trapNote": "'깨닫지 못했다'는 내면 서술 — 관찰자 시점 아님" },
      { "label": "④", "text": "서술자와 인물은 동일 인물이 아니라고 확정할 수 없다.", "correct": false, "trapNote": "인물이 모르는 사실을 서술자가 알려주므로 동일 인물일 수 없음" },
      { "label": "⑤", "text": "이 글은 시점을 판단할 수 없다.", "correct": false, "trapNote": "단서가 충분히 있음" }
    ],
    "hiddenPremise": "'인물의 내면이 나오면 다 1인칭'이라는 단순한 규칙을 적용하는 전제. 인물조차 모르는 사실(자기 손이 떨리는 걸 인식 못함)을 서술자가 안다는 건, 서술자가 인물보다 우위에 있다는 신호.",
    "commonMistake": "②를 고르는 학생 — 인물의 내면(태연한 척)이 나오니 1인칭으로 오해. 하지만 인물 자신도 모르는 사실을 서술자가 말해주는 건 1인칭으로는 불가능.",
    "lukaExplain": "이 인물은 자기 손이 떨리는 걸 몰라. 그런데 서술자는 그걸 알고 우리한테 알려주지? 자기 자신도 모르는 걸 아는 서술자라면, 그건 인물보다 한 단계 위에서 보는 전지적 서술자야.",
    "reframe": "인물 자신도 모르는 정보를 서술자가 안다는 단서로 전지적 시점을 판별하는 능력."
  },
  {
    "id": "al-kor-055", "subject": "국어", "domain": "비문학", "track": "고등", "stage": "심화",
    "difficulty": 5, "finalSparkEligible": true,
    "stem": "다음 글을 읽고 물음에 답하시오.\n\n'어떤 정책 입안자는 최저임금을 올리면 저소득층의 소득이 늘어난다고 주장한다. 다른 경제학자는 최저임금을 올리면 고용이 줄어 오히려 저소득층에게 해롭다고 주장한다.'\n\n두 주장의 관계에 대한 설명으로 가장 적절한 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "한쪽은 명백히 틀렸고 다른 쪽이 명백히 옳다.", "correct": false, "trapNote": "경제 현상은 단순 이분법으로 판단 불가" },
      { "label": "②", "text": "두 주장은 같은 정책의 서로 다른 효과(소득 증가 vs 고용 감소)에 주목한 것으로, 실제 효과는 조건에 따라 다를 수 있다.", "correct": true, "trapNote": "" },
      { "label": "③", "text": "두 주장 모두 근거가 없는 억측이다.", "correct": false, "trapNote": "둘 다 경제학적 근거가 있는 관점" },
      { "label": "④", "text": "최저임금 정책 자체가 무의미하다는 뜻이다.", "correct": false, "trapNote": "과도한 결론" },
      { "label": "⑤", "text": "정책 입안자의 주장이 항상 더 신뢬성이 높다.", "correct": false, "trapNote": "지위로 신뢰도를 판단하는 오류" }
    ],
    "hiddenPremise": "복잡한 사회 현상에 반드시 하나의 정답이 있다는 전제. 실제로는 같은 정책이 다른 측면(소득 vs 고용)에 다르게 작용할 수 있고, 효과는 실증 조건에 따라 달라짐.",
    "commonMistake": "①을 고르는 학생 — 상반된 주장이 나오면 '누가 맞고 누가 틀렸는지' 가려야 한다고 성급히 판단.",
    "lukaExplain": "두 사람 다 완전히 틀린 게 아니야. 한 명은 '오르면 버는 돈이 늘어난다'는 면을, 다른 한 명은 '오르면 일자리가 줄 수도 있다'는 면을 본 거야. 같은 정책도 어느 쪽을 보느냐, 어떤 상황이냐에 따라 결과가 달라질 수 있어. 복잡한 문제를 흑백으로 나누지 않는 연습이 필요해.",
    "reframe": "복합적 현상을 하나의 정답으로 단순화하지 않고, 다측면성을 이해하는 능력."
  },
  {
    "id": "al-kor-056", "subject": "국어", "domain": "어휘", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "다음 밑줄 친 한자어의 쓰임이 <어색한> 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "그의 주장은 논리적 <타당성>을 갖추고 있다.", "correct": false, "trapNote": "올바른 쓰임" },
      { "label": "②", "text": "이번 실험은 <재현성>이 낮아 신뢰하기 어렵다.", "correct": false, "trapNote": "올바른 쓰임" },
      { "label": "③", "text": "그 정책은 국민들의 <자발적> 참여로 <강제되었다>.", "correct": true, "trapNote": "" },
      { "label": "④", "text": "이 연구는 학계에서 <신빙성>을 인정받았다.", "correct": false, "trapNote": "올바른 쓰임" },
      { "label": "⑤", "text": "그의 설명은 <일관성>이 부족했다.", "correct": false, "trapNote": "올바른 쓰임" }
    ],
    "hiddenPremise": "한자어의 뜻을 정확히 모르면, 서로 모순되는 단어를 함께 써도 못 알아챈다는 전제. '자발적'(스스로 원해서)과 '강제되었다'(억지로 시킴)는 의미가 상충함.",
    "commonMistake": "문장을 훑어보기만 하고 단어 뜻의 충돌을 놓치는 학생.",
    "lukaExplain": "'자발적'은 스스로 원해서 하는 거고, '강제되었다'는 억지로 시킨 거야. 이 둘은 정반대 뜻인데 한 문장에 같이 쓰였어. 한자어는 뜻을 정확히 알아야 이런 모순을 잡아낼 수 있어.",
    "reframe": "한자어의 정확한 뜻을 근거로 문장 내 의미 충돌을 잡아내는 능력."
  },
  {
    "id": "al-kor-057", "subject": "국어", "domain": "문법", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "다음 문장에서 문법적으로 <어색한> 것을 고르시오.",
    "passage": "",
    "choices": [
      { "label": "①", "text": "이 문제의 정답은 셋 중 하나이다.", "correct": false, "trapNote": "정확한 문장" },
      { "label": "②", "text": "그의 취미는 등산과 낚시를 즐긴다.", "correct": true, "trapNote": "" },
      { "label": "③", "text": "우리는 결과를 겸허히 받아들였다.", "correct": false, "trapNote": "정확한 문장" },
      { "label": "④", "text": "그녀는 어려운 상황에서도 침착함을 유지했다.", "correct": false, "trapNote": "정확한 문장" },
      { "label": "⑤", "text": "이 소설은 다양한 인물의 시선으로 서술된다.", "correct": false, "trapNote": "정확한 문장" }
    ],
    "hiddenPremise": "주어와 서술어가 자연스럽게 이어지는지 확인하지 않는 전제. '취미는 ~을 즐긴다'는 주어(취미)와 서술어(즐긴다)가 호응하지 않음 — '취미는 ~이다' 또는 '그는 ~을 즐긴다'여야 함.",
    "commonMistake": "문장이 길지 않아 대충 읽고 넘기는 학생 — 주어와 서술어의 호응 오류를 못 알아챔.",
    "lukaExplain": "'취미는'이 주어인데 '즐긴다'로 끝나면 안 맞아. 취미는 '~이다'로 받거나, 아니면 주어를 '그는'으로 바꿔서 '~을 즐긴다'로 가야 해. 주어와 서술어, 짝이 맞는지 항상 확인하는 습관을 들이자.",
    "reframe": "주어와 서술어의 호응 관계를 확인하는 문장 감각."
  },
  {
    "id": "al-kor-058", "subject": "국어", "domain": "비문학", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 글을 읽고 물음에 답하시오.\n\n'그 학생은 지각을 자주 한다. 그러니 그 학생은 성실하지 않은 사람이다.'\n\n이 추론의 논리적 문제로 가장 적절한 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "지각하는 것은 나쁜 습관이 아니다.", "correct": false, "trapNote": "가치 판단으로 논점 이탈" },
      { "label": "②", "text": "한 가지 행동(지각)만으로 사람의 전체 성품(성실성)을 단정했다.", "correct": true, "trapNote": "" },
      { "label": "③", "text": "지각 횟수가 정확히 제시되지 않았다.", "correct": false, "trapNote": "횟수보다 근본 오류는 성급한 일반화" },
      { "label": "④", "text": "성실하다는 것의 정의가 없다.", "correct": false, "trapNote": "정의 문제 — 핵심 논점 아님" },
      { "label": "⑤", "text": "지각의 이유가 설명되지 않았다.", "correct": false, "trapNote": "이유는 부차적" }
    ],
    "hiddenPremise": "'하나의 부분적 행동 = 전체 인격'이라는 전제. 사람의 성품은 하나의 행동으로 단정할 수 없음.",
    "commonMistake": "④를 고르는 학생 — '성실'의 정의가 없다는 형식적 문제로 논점을 돌림. 핵심은 성급한 일반화.",
    "lukaExplain": "지각을 자주 하는 데는 여러 이유가 있을 수 있어. 그런데 그 한 가지 행동만 보고 '성실하지 않은 사람'이라고 사람 전체를 규정해버렸어. 한 부분으로 전체를 판단하는 건 위험한 비약이야.",
    "reframe": "부분적 행동으로 전체 인격을 단정하는 성급한 일반화를 잡아내는 능력."
  },
  {
    "id": "al-kor-059", "subject": "국어", "domain": "문학", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "다음 수필의 어조로 가장 알맞은 것은?\n\n'나이가 들수록 잃는 것도 있지만, 그만큼 보이는 것도 많아진다. 젊은 날엔 보지 못했던 것들이 이제야 눈에 들어온다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "냉소적이고 비관적인 어조", "correct": false, "trapNote": "'보이는 것도 많아진다'는 긍정적 시선" },
      { "label": "②", "text": "차분하게 관조하는 어조", "correct": true, "trapNote": "" },
      { "label": "③", "text": "격정적이고 흥분된 어조", "correct": false, "trapNote": "감정 과잉 표현 없음" },
      { "label": "④", "text": "풍자적이고 비판적인 어조", "correct": false, "trapNote": "비판 대상이 없음" },
      { "label": "⑤", "text": "유머러스하고 가벼운 어조", "correct": false, "trapNote": "진지한 성찰 톤" }
    ],
    "hiddenPremise": "'잃는 것'이라는 단어만 보고 부정적 어조로 단정하는 전제. 실제로는 잃음과 얻음을 함께 담담히 받아들이는 관조적 태도.",
    "commonMistake": "①을 고르는 학생 — '잃는 것도 있지만'만 보고 비관적으로 해석. 뒤이은 '보이는 것도 많아진다'는 균형을 놓침.",
    "lukaExplain": "'잃는 것도 있지만'에서 멈추면 안 돼. 뒤에 '보이는 것도 많아진다'가 이어지지? 잃음과 얻음을 담담하게 함께 바라보는 태도야. 이런 차분한 시선을 관조적 어조라고 해.",
    "reframe": "문장 전체의 균형(잃음과 얻음)을 함께 읽어 어조를 판단하는 능력."
  },
  {
    "id": "al-kor-060", "subject": "국어", "domain": "비문학", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": true,
    "stem": "다음 글을 읽고 물음에 답하시오.\n\n'한 회사의 신입사원 평가에서, 명문대 출신 지원자들이 평균적으로 높은 점수를 받았다. 이 회사는 이를 근거로 앞으로 명문대 출신만 채용하기로 했다.'\n\n이 결정의 논리적 문제로 가장 적절한 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "평균 점수가 높다는 것이 모든 개별 지원자에게 적용되는 것은 아닌데, 집단의 평균 특성을 개인에게 그대로 적용했다.", "correct": true, "trapNote": "" },
      { "label": "②", "text": "명문대 출신이 실제로 존재하지 않는다.", "correct": false, "trapNote": "사실 부정 — 논점과 무관" },
      { "label": "③", "text": "평가 점수 자체가 조작되었을 것이다.", "correct": false, "trapNote": "근거 없는 의심" },
      { "label": "④", "text": "회사는 원래 차별적이다.", "correct": false, "trapNote": "근거 없는 일반화" },
      { "label": "⑤", "text": "신입사원 평가는 의미가 없다.", "correct": false, "trapNote": "극단적 부정" }
    ],
    "hiddenPremise": "'집단의 평균적 특성'을 '그 집단에 속한 모든 개인'에게 그대로 적용하는 전제(생태학적 오류). 평균이 높다고 모든 개인이 우수한 것은 아님.",
    "commonMistake": "이 정책이 왜 문제인지 막연히 '차별'이라고만 느끼고, 정확한 논리적 결함(집단 평균의 개인 적용 오류)을 짚지 못하는 경우.",
    "lukaExplain": "명문대 출신 '평균'이 높다고 해서, 그 학교 출신 '모두'가 다 뛰어난 건 아니야. 평균에는 낮은 점수를 받은 사람도 섞여 있거든. 집단 전체의 평균 특징을 개인 한 명에게 그대로 씌우면 안 돼.",
    "reframe": "집단의 평균적 특성을 개별 구성원에게 그대로 적용하는 오류(생태학적 오류)를 잡아내는 능력."
  },
  {
    "id": "al-kor-061", "subject": "국어", "domain": "문학", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "다음 소설 속 반어적 표현이 쓰인 부분을 고르시오.\n\n'그는 평생을 남을 위해 살았다. 그 결과 그에게 남은 것은 텅 빈 방과 아무도 찾지 않는 전화기, 그리고 <참 잘 살았다>는 스스로의 위안뿐이었다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "그는 평생을 남을 위해 살았다.", "correct": false, "trapNote": "사실 서술" },
      { "label": "②", "text": "텅 빈 방", "correct": false, "trapNote": "상황 묘사" },
      { "label": "③", "text": "아무도 찾지 않는 전화기", "correct": false, "trapNote": "상황 묘사" },
      { "label": "④", "text": "참 잘 살았다", "correct": true, "trapNote": "" },
      { "label": "⑤", "text": "반어적 표현이 없다.", "correct": false, "trapNote": "'참 잘 살았다'가 반어" }
    ],
    "hiddenPremise": "글자 그대로의 뜻만 보고 진심으로 받아들이는 전제. 앞의 쓸쓸한 상황(빈 방, 안 오는 전화)과 '잘 살았다'는 말이 부딪히면서 반어가 만들어짐.",
    "commonMistake": "④를 긍정적 문장으로만 읽는 학생 — 앞뒤 상황과의 모순을 못 알아챔.",
    "lukaExplain": "텅 빈 방, 아무도 안 찾는 전화기 — 이런 쓸쓸한 상황 다음에 '참 잘 살았다'고 하면, 이게 진짜 만족일까? 오히려 씁쓸함을 반대로 말한 거야. 상황과 반대되는 말을 하는 게 반어법이야.",
    "reframe": "문맥과 모순되는 표현에서 반어법을 잡아내는 능력."
  },
  {
    "id": "al-kor-062", "subject": "국어", "domain": "어휘", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "다음 밑줄 친 낱말과 의미가 가장 가까운 것은?\n\n'그의 발언은 회의 분위기를 <경직>시켰다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "부드럽게", "correct": false, "trapNote": "반대 의미" },
      { "label": "②", "text": "굳고 딱딱하게", "correct": true, "trapNote": "" },
      { "label": "③", "text": "활기차게", "correct": false, "trapNote": "반대 의미" },
      { "label": "④", "text": "즐겁게", "correct": false, "trapNote": "무관" },
      { "label": "⑤", "text": "빠르게", "correct": false, "trapNote": "무관" }
    ],
    "hiddenPremise": "낱말의 뜻을 모르면 문맥의 부정적 뉘앙스만으로 대충 짐작하는 전제.",
    "commonMistake": "뜻을 몰라 무작위로 고르는 학생 — '경직'이 '굳음'과 관련된 한자어임을 놓침.",
    "lukaExplain": "'경직(硬直)'은 '굳을 경, 곧을 직' — 딱딱하게 굳는다는 뜻이야. 회의 분위기가 굳었다는 건 긴장되고 어색해졌다는 뜻이지. 한자의 뜻을 알면 낱말 뜻도 짐작할 수 있어.",
    "reframe": "한자 뜻을 근거로 낯선 어휘의 의미를 추론하는 능력."
  },
  {
    "id": "al-kor-063", "subject": "국어", "domain": "문법", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "다음 문장의 높임법 사용이 <올바른> 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "사장님, 회의 자료 여기 있으십니다.", "correct": false, "trapNote": "사물에 높임 사용 — 잘못된 간접 높임" },
      { "label": "②", "text": "고객님, 주문하신 커피 나오셨습니다.", "correct": false, "trapNote": "사물(커피)에 높임 — 오류" },
      { "label": "③", "text": "사장님, 회의 자료 여기 있습니다.", "correct": true, "trapNote": "" },
      { "label": "④", "text": "고객님, 이 상품은 품절이십니다.", "correct": false, "trapNote": "상품에 높임 — 오류" },
      { "label": "⑤", "text": "선생님, 그 책 좋은 책이세요.", "correct": false, "trapNote": "책에 높임 — 오류" }
    ],
    "hiddenPremise": "높임 대상(사람) 주변의 모든 것에 높임말을 붙이면 예의 바르다는 전제. 실제로는 사물에는 높임을 쓰지 않는 게 원칙(사물 존칭 오류).",
    "commonMistake": "①②④⑤처럼 사물에까지 높임말을 붙이는 실수 — 요즘 서비스업에서 흔히 쓰이지만 문법적으로는 틀림.",
    "lukaExplain": "사장님은 높여야 하지만, '회의 자료'는 사물이야. 사물에 '있으십니다'를 붙이면 틀려. '있습니다'가 맞아. 요즘 가게에서 '품절이세요', '나오셨습니다'처럼 사물에 높임말 쓰는 거, 사실 다 틀린 표현이야.",
    "reframe": "높임의 대상이 사람인지 사물인지 정확히 구분하는 능력."
  },
  {
    "id": "al-kor-064", "subject": "국어", "domain": "비문학", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 글을 읽고 물음에 답하시오.\n\n'전문가 A는 기후 변화의 주범이 화석 연료라고 말한다. 전문가 A는 石油 회사로부터 연구비를 받은 적이 있다. 따라서 A의 주장은 신뢰할 수 없다.'\n\n이 반박의 논리적 문제는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "주장의 내용이 아니라 주장을 한 사람의 배경(연구비 출처)을 공격했다.", "correct": true, "trapNote": "" },
      { "label": "②", "text": "석유 회사가 실제로 연구비를 줬는지 확인되지 않았다.", "correct": false, "trapNote": "사실 확인 문제 — 논리 구조 자체의 결함 아님" },
      { "label": "③", "text": "기후 변화는 존재하지 않는다.", "correct": false, "trapNote": "글에 없는 내용" },
      { "label": "④", "text": "화석 연료가 문제라는 주장 자체가 틀렸다.", "correct": false, "trapNote": "주장의 진위와 무관한 논점" },
      { "label": "⑤", "text": "전문가는 항상 옳다.", "correct": false, "trapNote": "무관한 일반화" }
    ],
    "hiddenPremise": "'화석 연료 회사에서 돈 받은 적 있다'는 사실이 '주장이 틀렸다'를 증명한다는 전제. 실제로는 주장을 한 사람의 배경과 주장 내용의 진위는 별개(인신공격의 오류).",
    "commonMistake": "이 반박이 타당하다고 느끼는 학생 다수 — 연구비 출처가 의심스러우니 주장도 의심하는 게 자연스럽다고 여김. 하지만 이건 주장 '내용'을 검증한 게 아니라 사람의 '배경'만 공격한 것.",
    "lukaExplain": "A가 석유 회사 돈을 받았다는 게, A의 주장이 '틀렸다'는 증거가 될까? 안 돼. 그건 A가 의심스럽다는 느낌만 줄 뿐, 주장 자체의 근거를 반박한 게 아니야. 사람을 공격하는 것과 주장을 반박하는 건 달라.",
    "reframe": "주장의 내용이 아니라 주장한 사람의 배경을 공격하는 인신공격의 오류를 잡아내는 능력."
  },
  {
    "id": "al-kor-065", "subject": "국어", "domain": "문학", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "다음 극문학(희곡)의 지문(무대 지시문)이 하는 역할로 알맞은 것은?\n\n'(무대가 서서히 어두워지며, 창밖으로 비 내리는 소리만 들린다. 그는 창가에 오래 서 있다.)'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "인물의 대사를 대신 전달한다.", "correct": false, "trapNote": "지문은 대사가 아님" },
      { "label": "②", "text": "무대 상황과 분위기, 인물의 심리를 암시한다.", "correct": true, "trapNote": "" },
      { "label": "③", "text": "다음 장면의 줄거리를 요약한다.", "correct": false, "trapNote": "줄거리 요약 아님" },
      { "label": "④", "text": "관객에게 직접 말을 건다.", "correct": false, "trapNote": "방백·독백과 다름" },
      { "label": "⑤", "text": "아무 역할도 하지 않는다.", "correct": false, "trapNote": "분위기·심리 암시라는 중요한 역할이 있음" }
    ],
    "hiddenPremise": "지문을 그냥 무대 배경 설명으로만 가볍게 넘기는 전제. 실제로는 인물의 심리(어두워지는 무대=답답한 심경)를 암시하는 중요한 장치.",
    "commonMistake": "지문을 대사가 아니라며 대충 넘기는 학생 — 지문 속에 담긴 분위기·심리적 암시를 놓침.",
    "lukaExplain": "무대가 어두워지고 빗소리만 들리는 게 그냥 배경 설명일까? 아니야. 이건 이 인물의 답답하고 쓸쓸한 마음을 무대 분위기로 보여주는 거야. 지문도 대사만큼 중요한 정보를 담고 있어.",
    "reframe": "무대 지시문에 담긴 심리적·분위기적 함축을 읽어내는 능력."
  },
  {
    "id": "al-kor-066", "subject": "국어", "domain": "비문학", "track": "고등", "stage": "심화",
    "difficulty": 5, "finalSparkEligible": true,
    "stem": "다음 글을 읽고 물음에 답하시오.\n\n'한 실험에서, 위약(가짜 약)을 먹은 환자 중 30%가 증상이 호전되었다고 보고했다. 이를 근거로 일부는 그 질병이 애초에 심각하지 않았다고 주장한다.'\n\n이 주장의 논리적 결함으로 가장 적절한 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "위약 효과(심리적 요인으로 실제 증상이 완화되는 현상) 가능성을 고려하지 않고, 호전을 '질병이 가벼웠다'는 증거로만 해석했다.", "correct": true, "trapNote": "" },
      { "label": "②", "text": "위약을 먹은 환자 수가 정확하지 않다.", "correct": false, "trapNote": "표본 크기 반사 — 진짜 결함은 해석의 오류" },
      { "label": "③", "text": "위약은 실제로 아무 효과가 없다.", "correct": false, "trapNote": "위약 효과 자체를 부정 — 사실과 다름" },
      { "label": "④", "text": "질병은 항상 심각하다.", "correct": false, "trapNote": "무관한 단정" },
      { "label": "⑤", "text": "실험 자체가 무의미하다.", "correct": false, "trapNote": "극단적 부정" }
    ],
    "hiddenPremise": "'증상이 나아졌다 = 질병이 원래 안 심각했다'는 하나의 설명만 전제. 위약 효과(믿음이 실제 증상을 완화시키는 현상)라는 다른 설명 가능성을 배제함.",
    "commonMistake": "①이 아닌 다른 선택지로 새는 학생들 — 표본 크기나 실험의 유효성 같은 형식적 문제로 논점을 돌리고, 정작 핵심인 '해석의 오류'(다른 설명 가능성 무시)를 놓침.",
    "lukaExplain": "가짜 약을 먹었는데 나았다는 건, 병이 안 심각해서가 아니라 '나을 거야'라는 믿음 자체가 몸에 작용했을 수도 있어(위약 효과). 하나의 결과에 설명이 여러 개 있을 수 있는데, 이 주장은 그중 하나(병이 안 심각했다)만 골라서 결론 내린 거야.",
    "reframe": "하나의 결과를 설명할 수 있는 여러 가능성 중 하나만 골라 단정하는 오류를 잡아내는 능력."
  }
];
APPLICATION_LAB_ITEMS = APPLICATION_LAB_ITEMS.concat(APPLICATION_LAB_ITEMS_KOR_HIGH);

/* 통계: 국어 66문항(완료) / 수학 15문항 / 역사 15문항 = 총 96문항 (200 목표) */
