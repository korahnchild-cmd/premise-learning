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
        "trapNote": "가장 먼저 세워진 신라(BC 57)를 맨 뒤로 보냄"
      },
      {
        "label": "②",
        "text": "고구려 → 신라 → 백제 건국",
        "correct": false,
        "trapNote": "신라(BC 57)가 고구려(BC 37)보다 먼저인데 중간에 둠"
      },
      {
        "label": "③",
        "text": "신라 → 고구려 → 백제 건국",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "④",
        "text": "백제 → 고구려 → 신라 건국",
        "correct": false,
        "trapNote": "가장 늦게 세워진 백제(BC 18)를 맨 앞으로"
      },
      {
        "label": "⑤",
        "text": "세 나라가 같은 시기에 건국되었다.",
        "correct": false,
        "trapNote": "'동시 건국'이라는 전제로 회피"
      }
    ],
    "hiddenPremise": "삼국사기 기준 건국 순서(신라 BC57 → 고구려 BC37 → 백제 BC18)를 정확히 아는 것. 순서를 모르면 '비슷한 시기'로 회피(⑤).",
    "commonMistake": "②를 고르는 학생 — 신라(BC 57)가 고구려(BC 37)보다 먼저 세워졌다는 것을 놓치고, 고구려를 맨 앞에 둠.",
    "lukaExplain": "삼국사기 기준 건국 순서는 신라(BC 57) → 고구려(BC 37) → 백제(BC 18)야. 신라가 가장 먼저 세워졌어. 비슷한 시기 같아도 정확한 순서가 있어.",
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
    "stem": "다음 주장의 근거에 대해 가장 타당한 지적은?\n\n'조선총독부 통계에 따르면 이 시기 조선의 공장 수와 생산량이 늘었다. 따라서 당시 조선 경제는 발전하고 있었다.'",
    "choices": [
      {
        "label": "①",
        "text": "통계 수치가 늘었더라도, 그 통계를 누가 어떤 목적으로 작성했는지 먼저 따져야 한다.",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "통계는 숫자이므로 언제나 객관적이고, 이 결론은 확실하다.",
        "correct": false,
        "trapNote": "'통계 = 객관적 진실'이라는 전제를 검증 없이 수용"
      },
      {
        "label": "③",
        "text": "공장 수가 늘었다는 사실 자체가 거짓이다.",
        "correct": false,
        "trapNote": "사실 부정 — 사료 비판이 아님"
      },
      {
        "label": "④",
        "text": "통계는 믿을 수 없고 개인의 일기만이 유일하게 믿을 만한 사료다.",
        "correct": false,
        "trapNote": "다른 극단 — 특정 사료만 맹신"
      },
      {
        "label": "⑤",
        "text": "생산량이 늘었으니 모든 조선인의 생활도 그만큼 나아졌다.",
        "correct": false,
        "trapNote": "통계에 잡히지 않은 분배·수탈을 건너뛴 성급한 일반화"
      }
    ],
    "hiddenPremise": "'통계 수치 = 객관적 사실'이라는 전제. 사료를 누가·어떤 의도로·무엇을 포함하거나 배제하며 작성했는지 묻지 않고 결론으로 직행.",
    "commonMistake": "②를 고르는 학생 — '통계'라는 형식만 보고 출처와 작성 주체를 검토하지 않음.",
    "lukaExplain": "통계도 사료야. 누가 만들었는지가 중요해. 통치 기관이 만든 통계는 보여주고 싶은 것과 감추고 싶은 것이 함께 담겨 있을 수 있어. 숫자가 늘었다는 게 곧 '경제 발전'이나 '삶의 향상'을 뜻하진 않아 — 통계에 잡히지 않은 것(분배, 수탈)까지 물어야 진짜 사료 비판이야.",
    "reframe": "사료의 출처·작성 주체·의도를 검증하는 사료 비판 능력. '수치 = 객관적 진실'이라는 전제 깨기."
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
    "domain": "중세사",
    "track": "초등",
    "stage": "입문",
    "difficulty": 1,
    "finalSparkEligible": false,
    "stem": "지우는 '세종대왕은 조선을 세운 첫 번째 왕이니까, 경복궁도 세종대왕이 지었을 거야'라고 말했다. 지우의 말에서 잘못된 전제는?",
    "choices": [
      {
        "label": "①",
        "text": "세종대왕이 조선을 세운 첫 번째 왕이라는 것",
        "correct": true,
        "trapNote": ""
      },
      {
        "label": "②",
        "text": "경복궁이 조선의 궁궐이라는 것",
        "correct": false,
        "trapNote": "맞는 내용 — 틀린 전제를 찾는 문제인데 맞는 내용을 고름"
      },
      {
        "label": "③",
        "text": "세종대왕이 조선의 왕이었다는 것",
        "correct": false,
        "trapNote": "맞는 내용"
      },
      {
        "label": "④",
        "text": "지우가 세종대왕에 대해 말했다는 것",
        "correct": false,
        "trapNote": "논지와 무관한 선택"
      },
      {
        "label": "⑤",
        "text": "지우의 말은 전부 맞다",
        "correct": false,
        "trapNote": "조선을 세우고 경복궁을 지은 사람은 태조 이성계 — 세종대왕이 아님"
      }
    ],
    "hiddenPremise": "'유명하고 훌륭한 왕이니까 나라도 세우고 대표 건축물도 지었을 것'이라는 비약. 업적을 한 사람에게 몰아주는 전제.",
    "commonMistake": "②나 ③을 고르는 학생 — 경복궁·세종대왕에 대한 개별 사실은 맞기 때문에 문장 전체를 사실로 받아들임.",
    "lukaExplain": "지우 말에서 진짜 틀린 지점은 '세종대왕이 조선을 세운 첫 번째 왕'이라는 전제야. 조선을 세우고 경복궁을 지은 사람은 태조 이성계이고, 세종대왕은 그로부터 4번째 왕이야. 세종대왕이 만든 건 한글이지, 나라나 궁궐이 아니야.",
    "reframe": "문장 속에 맞는 사실과 틀린 전제가 섞여 있을 때, 어느 부분이 잘못된 출발점인지 짚어내는 능력."
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

/* ===================== 수학 초등 추가 (math-016 ~ math-032, 17문항) ===================== */
var APPLICATION_LAB_ITEMS_MATH_ELEM = [
  {
    "id": "al-math-016", "subject": "수학", "domain": "대수", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "다음을 계산하시오.\n\n12 + 3 × 4 = ?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "60", "correct": false, "trapNote": "앞에서부터 순서대로 (12+3)×4 계산" },
      { "label": "②", "text": "24", "correct": true, "trapNote": "" },
      { "label": "③", "text": "48", "correct": false, "trapNote": "12×4만 계산" },
      { "label": "④", "text": "19", "correct": false, "trapNote": "12+3+4로 계산" },
      { "label": "⑤", "text": "84", "correct": false, "trapNote": "12×(3+4) 계산" }
    ],
    "hiddenPremise": "계산은 무조건 왼쪽부터 순서대로 한다는 전제. 실제로는 곱셈을 덧셈보다 먼저 계산해야 함.",
    "commonMistake": "①을 고르는 학생 — 왼쪽부터 순서대로 12+3=15, 15×4로 계산.",
    "lukaExplain": "곱셈은 덧셈보다 먼저 계산해야 해. 3×4=12를 먼저 하고, 12+12=24. 순서를 바꾸면 답이 완전히 달라져.",
    "reframe": "사칙연산의 계산 순서(곱셈·나눗셈 우선)를 지키는 기초 능력."
  },
  {
    "id": "al-math-017", "subject": "수학", "domain": "대수", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "다음 문장제를 푸시오.\n\n'한 상자에 12개씩 담긴 사탕이 5상자 있다. 그중 8개를 먹었다면, 남은 사탕은 몇 개인가?'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "52개", "correct": true, "trapNote": "" },
      { "label": "②", "text": "60개", "correct": false, "trapNote": "먹은 8개를 빼지 않음" },
      { "label": "③", "text": "17개", "correct": false, "trapNote": "12×5 대신 12+5로 계산" },
      { "label": "④", "text": "4개", "correct": false, "trapNote": "5상자를 무시하고 12-8만 계산" },
      { "label": "⑤", "text": "48개", "correct": false, "trapNote": "5상자를 4상자로 착각" }
    ],
    "hiddenPremise": "문제의 정보 중 일부만 사용해도 된다는 전제. 전체 개수(12×5)를 구한 뒤 먹은 개수를 빼야 함.",
    "commonMistake": "②를 고르는 학생 — 전체 개수만 구하고 먹은 것을 빼는 걸 잊음.",
    "lukaExplain": "먼저 전체 사탕 수부터 구해야 해. 12개씩 5상자니까 12×5=60개. 그중 8개를 먹었으니 60-8=52개. 두 단계를 다 거쳐야 하는 문제야.",
    "reframe": "여러 단계를 거치는 문장제에서 모든 조건을 순서대로 적용하는 능력."
  },
  {
    "id": "al-math-018", "subject": "수학", "domain": "기하", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "정사각형의 한 변의 길이가 5cm일 때, 둘레를 구하시오.",
    "passage": "",
    "choices": [
      { "label": "①", "text": "10cm", "correct": false, "trapNote": "변 2개만 더함" },
      { "label": "②", "text": "20cm", "correct": true, "trapNote": "" },
      { "label": "③", "text": "25cm", "correct": false, "trapNote": "넓이(5×5) 공식과 혼동" },
      { "label": "④", "text": "15cm", "correct": false, "trapNote": "변 3개만 더함" },
      { "label": "⑤", "text": "5cm", "correct": false, "trapNote": "한 변의 길이를 둘레로 착각" }
    ],
    "hiddenPremise": "정사각형은 변이 4개라는 걸 놓치고 일부 변만 계산하는 전제.",
    "commonMistake": "③을 고르는 학생 — 넓이 공식(5×5)과 둘레 공식을 혼동.",
    "lukaExplain": "정사각형은 네 변이 모두 같은 길이야. 5cm짜리 변이 4개니까 5×4=20cm. 넓이(5×5=25)랑 헷갈리지 마 — 둘레는 테두리 길이야.",
    "reframe": "정사각형의 변의 개수(4개)를 정확히 세어 둘레를 구하는 능력."
  },
  {
    "id": "al-math-019", "subject": "수학", "domain": "대수", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "다음 분수의 크기를 비교하시오.\n\n2/3 과 3/5 중 더 큰 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "2/3", "correct": true, "trapNote": "" },
      { "label": "②", "text": "3/5", "correct": false, "trapNote": "분자가 크면 크다고 착각" },
      { "label": "③", "text": "둘이 같다", "correct": false, "trapNote": "분모·분자 합이 비슷해 보여 착각" },
      { "label": "④", "text": "비교할 수 없다", "correct": false, "trapNote": "'분모가 다르면 비교 불가'라는 잘못된 전제" },
      { "label": "⑤", "text": "3/5가 항상 더 크다", "correct": false, "trapNote": "근거 없는 단정" }
    ],
    "hiddenPremise": "분자가 크면 분수도 크다고 착각하는 전제(3>2이니 3/5가 클 것 같다는 착각). 분모까지 함께 봐야 함.",
    "commonMistake": "②를 고르는 학생 — 분자 3이 2보다 크다는 것만 보고 판단.",
    "lukaExplain": "분모를 통일해서 비교해보자. 2/3 = 10/15, 3/5 = 9/15. 10이 9보다 크니까 2/3이 더 커. 분자만 보면 안 되고, 분모를 맞춰서 비교해야 정확해.",
    "reframe": "분모를 통일하여 분수의 크기를 정확히 비교하는 능력."
  },
  {
    "id": "al-math-020", "subject": "수학", "domain": "대수", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "다음을 계산하시오.\n\n3/4 + 1/2 = ?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "4/6", "correct": false, "trapNote": "분모끼리, 분자끼리 그냥 더함" },
      { "label": "②", "text": "5/4", "correct": true, "trapNote": "" },
      { "label": "③", "text": "4/4", "correct": false, "trapNote": "통분 과정에서 분자 계산 오류" },
      { "label": "④", "text": "1", "correct": false, "trapNote": "어림잡아 반올림" },
      { "label": "⑤", "text": "3/2", "correct": false, "trapNote": "1/2를 2/4가 아닌 다른 값으로 통분" }
    ],
    "hiddenPremise": "분수의 덧셈을 자연수처럼 분모·분자를 각각 더하면 된다는 전제. 실제로는 분모를 통일(통분)한 뒤 분자만 더해야 함.",
    "commonMistake": "①을 고르는 학생 다수 — 분모는 분모끼리, 분자는 분자끼리 그냥 더함(3+1=4, 4+2=6).",
    "lukaExplain": "분수는 분모가 같아야 더할 수 있어. 1/2을 2/4로 바꾸면 3/4 + 2/4 = 5/4가 돼. 분모·분자를 각각 더하면 절대 안 돼 — 통분부터 해야 해.",
    "reframe": "분수 덧셈에서 통분의 필요성을 이해하는 능력."
  },
  {
    "id": "al-math-021", "subject": "수학", "domain": "기하", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다음 중 삼각형이 될 수 있는 세 변의 길이는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "3cm, 4cm, 5cm", "correct": true, "trapNote": "" },
      { "label": "②", "text": "2cm, 3cm, 6cm", "correct": false, "trapNote": "2+3<6, 삼각형 안 됨" },
      { "label": "③", "text": "1cm, 2cm, 3cm", "correct": false, "trapNote": "1+2=3, 삼각형 안 됨(일직선)" },
      { "label": "④", "text": "5cm, 5cm, 15cm", "correct": false, "trapNote": "5+5<15, 삼각형 안 됨" },
      { "label": "⑤", "text": "숫자만 있으면 항상 삼각형이 된다", "correct": false, "trapNote": "삼각형 성립 조건을 무시" }
    ],
    "hiddenPremise": "세 변의 길이만 있으면 무조건 삼각형이 만들어진다는 전제. 실제로는 '두 변의 합이 나머지 한 변보다 커야' 삼각형이 됨.",
    "commonMistake": "②나 ④를 고르는 학생 — 세 숫자만 보고 삼각형이 될 거라 단정, 변의 길이 관계를 확인 안 함.",
    "lukaExplain": "아무 세 길이나 다 삼각형이 되는 게 아니야. 짧은 두 변을 더한 게 가장 긴 변보다 커야 해. 3+4=7>5니까 ①은 삼각형이 돼. 2+3=5는 6보다 작으니까 ②는 안 만들어져 — 선이 이어지지 않거든.",
    "reframe": "삼각형이 성립하는 조건(두 변의 합 > 나머지 한 변)을 확인하는 능력."
  },
  {
    "id": "al-math-022", "subject": "수학", "domain": "대수", "track": "초등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 문장제를 푸시오.\n\n'어떤 수에 7을 더한 다음 3을 곱했더니 30이 되었다. 어떤 수는?'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "3", "correct": true, "trapNote": "" },
      { "label": "②", "text": "9", "correct": false, "trapNote": "30÷3=10에서 7을 더함" },
      { "label": "③", "text": "23", "correct": false, "trapNote": "30에서 7만 뺌, 3 곱하기 처리 안 함" },
      { "label": "④", "text": "13", "correct": false, "trapNote": "순서를 반대로(3을 먼저 더함)" },
      { "label": "⑤", "text": "17", "correct": false, "trapNote": "30÷3에서 잘못된 나눗셈" }
    ],
    "hiddenPremise": "문제에 나온 순서(더하기→곱하기)대로 거꾸로 풀지 않고 아무렇게나 계산하는 전제. 거꾸로 풀 땐 반대 순서(나누기→빼기)로 가야 함.",
    "commonMistake": "③을 고르는 학생 — 곱하기 3을 거꾸로 어떻게 풀어야 할지 몰라 빼기만 함.",
    "lukaExplain": "거꾸로 풀 땐 순서도 거꾸로! 문제는 '+7 그다음 ×3'이었지? 거꾸로 풀 땐 반대로 '÷3 그다음 -7'이야. 30÷3=10, 10-7=3. 어떤 수는 3이야.",
    "reframe": "여러 단계 연산을 거꾸로 풀 때 순서와 역연산을 함께 적용하는 능력."
  },
  {
    "id": "al-math-023", "subject": "수학", "domain": "기하", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "다음 중 원의 지름이 10cm일 때, 반지름은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "20cm", "correct": false, "trapNote": "지름을 2배로 계산" },
      { "label": "②", "text": "5cm", "correct": true, "trapNote": "" },
      { "label": "③", "text": "10cm", "correct": false, "trapNote": "지름과 반지름을 같다고 착각" },
      { "label": "④", "text": "15cm", "correct": false, "trapNote": "지름에 5를 더함" },
      { "label": "⑤", "text": "2.5cm", "correct": false, "trapNote": "지름을 4로 나눔" }
    ],
    "hiddenPremise": "지름과 반지름을 같은 것으로 착각하는 전제. 반지름은 지름의 절반.",
    "commonMistake": "③을 고르는 학생 — 지름과 반지름의 차이를 모름.",
    "lukaExplain": "지름은 원을 완전히 가로지르는 길이고, 반지름은 그 절반, 중심에서 테두리까지 거리야. 지름 10cm의 절반이니 반지름은 5cm.",
    "reframe": "지름과 반지름의 관계(반지름 = 지름 ÷ 2)를 정확히 아는 능력."
  },
  {
    "id": "al-math-024", "subject": "수학", "domain": "대수", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다음 소수를 계산하시오.\n\n2.5 + 1.75 = ?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "4.25", "correct": true, "trapNote": "" },
      { "label": "②", "text": "3.8", "correct": false, "trapNote": "자릿수를 안 맞추고 더함" },
      { "label": "③", "text": "4.0", "correct": false, "trapNote": "소수점 아래 계산 누락" },
      { "label": "④", "text": "3.25", "correct": false, "trapNote": "정수 부분 덧셈 오류" },
      { "label": "⑤", "text": "42.5", "correct": false, "trapNote": "소수점 위치 오류" }
    ],
    "hiddenPremise": "소수점 자리를 맞추지 않고 숫자만 더하면 된다는 전제. 소수 덧셈은 소수점 자리를 맞춰야 함.",
    "commonMistake": "②를 고르는 학생 — 2.5를 2.50으로 맞추지 않고 1.75와 자릿수를 안 맞춰 계산.",
    "lukaExplain": "2.5를 2.50으로 생각하면 자릿수가 맞아. 2.50 + 1.75 = 4.25. 소수는 소수점 자리를 맞춰서 더해야 정확해.",
    "reframe": "소수 덧셈에서 자릿수(소수점)를 맞추는 능력."
  },
  {
    "id": "al-math-025", "subject": "수학", "domain": "확률", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "주머니에 빨간 구슬 3개, 파란 구슬 2개가 있다. 구슬 하나를 꺼낼 때 파란 구슬일 가능성을 분수로 나타내면?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "2/5", "correct": true, "trapNote": "" },
      { "label": "②", "text": "2/3", "correct": false, "trapNote": "전체(5)가 아닌 빨간 구슬 수(3)로 나눔" },
      { "label": "③", "text": "3/5", "correct": false, "trapNote": "빨간 구슬 확률과 혼동" },
      { "label": "④", "text": "1/2", "correct": false, "trapNote": "구슬 색이 2가지니 반반이라 착각" },
      { "label": "⑤", "text": "2/2", "correct": false, "trapNote": "전체 구슬 수를 색깔 수(2)로 착각" }
    ],
    "hiddenPremise": "색이 2가지면 확률도 반반(1/2)이라는 전제. 실제로는 각 색의 '개수'가 중요함.",
    "commonMistake": "④를 고르는 학생 — 색깔이 2종류라서 무조건 반반이라고 생각. 실제로는 구슬 개수가 다름(3개 vs 2개).",
    "lukaExplain": "색이 두 가지라고 확률이 꼭 반반은 아니야. 전체 구슬은 5개(3+2), 그중 파란 구슬은 2개. 그러니까 2/5. 색깔 수가 아니라 실제 개수를 세는 게 중요해.",
    "reframe": "전체 경우의 수 대비 원하는 경우의 수를 정확히 세는 능력."
  },
  {
    "id": "al-math-026", "subject": "수학", "domain": "대수", "track": "초등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 규칙을 보고 빈칸에 알맞은 수를 구하시오.\n\n2, 5, 10, 17, ( ), 37",
    "passage": "",
    "choices": [
      { "label": "①", "text": "24", "correct": false, "trapNote": "일정하게 +7만 더함" },
      { "label": "②", "text": "26", "correct": true, "trapNote": "" },
      { "label": "③", "text": "25", "correct": false, "trapNote": "차이 값을 잘못 계산" },
      { "label": "④", "text": "22", "correct": false, "trapNote": "규칙을 잘못 추정" },
      { "label": "⑤", "text": "30", "correct": false, "trapNote": "규칙 없이 어림잡음" }
    ],
    "hiddenPremise": "규칙은 항상 일정한 수를 더하는 것(등차)이라는 전제. 실제로는 더하는 수가 3,5,7,9로 점점 커지는 규칙(제곱수+1: 1²+1,2²+1,3²+1...).",
    "commonMistake": "①을 고르는 학생 — 17-10=7이니 다음도 +7만 더함. 하지만 차이는 3,5,7,9로 점점 커짐.",
    "lukaExplain": "차이를 살펴보자: 5-2=3, 10-5=5, 17-10=7. 차이가 3,5,7로 2씩 커지고 있어. 다음 차이는 9겠지? 17+9=26. 그다음 26+11=37로 맞아떨어져. 차이의 규칙까지 봐야 해.",
    "reframe": "수열에서 차이가 일정하지 않고 규칙적으로 변하는 패턴을 찾는 능력."
  },
  {
    "id": "al-math-027", "subject": "수학", "domain": "기하", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "직육면체의 면은 모두 몇 개인가?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "4개", "correct": false, "trapNote": "옆면만 셈" },
      { "label": "②", "text": "6개", "correct": true, "trapNote": "" },
      { "label": "③", "text": "8개", "correct": false, "trapNote": "꼭짓점 수와 혼동" },
      { "label": "④", "text": "12개", "correct": false, "trapNote": "모서리 수와 혼동" },
      { "label": "⑤", "text": "5개", "correct": false, "trapNote": "밑면 하나를 빠뜨림" }
    ],
    "hiddenPremise": "눈에 보이는 면(앞·옆)만 세고 위·아래·뒤를 빠뜨리는 전제.",
    "commonMistake": "①을 고르는 학생 — 옆에서 보이는 4면만 세고 위·아래 면을 빠뜨림.",
    "lukaExplain": "직육면체는 상자 모양이야. 위, 아래, 앞, 뒤, 왼쪽, 오른쪽 — 다 세어봐. 6개지? 눈에 안 보이는 뒷면이나 밑면도 잊지 말고 같이 세어보자.",
    "reframe": "입체도형의 보이지 않는 면까지 빠짐없이 세는 능력."
  },
  {
    "id": "al-math-028", "subject": "수학", "domain": "대수", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다음 문장제를 푸시오.\n\n'연필 한 자루는 500원이다. 3000원으로 연필을 최대 몇 자루 살 수 있는가?'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "6자루", "correct": true, "trapNote": "" },
      { "label": "②", "text": "5자루", "correct": false, "trapNote": "500과 3000의 자릿수 계산 실수" },
      { "label": "③", "text": "15자루", "correct": false, "trapNote": "3000÷500 대신 3000÷200으로 계산" },
      { "label": "④", "text": "60자루", "correct": false, "trapNote": "자릿수를 잘못 나눔(3000÷50)" },
      { "label": "⑤", "text": "600자루", "correct": false, "trapNote": "3000÷5로 잘못 계산" }
    ],
    "hiddenPremise": "나눗셈에서 0의 개수를 정확히 맞추지 않는 전제. 3000÷500은 0을 하나씩 지우면 30÷5=6.",
    "commonMistake": "④·⑤처럼 0을 잘못 지워서 자릿수가 틀리는 실수.",
    "lukaExplain": "3000÷500을 계산할 때, 양쪽에서 0을 똑같이 2개씩 지우면 30÷5=6이 돼. 0을 지울 때는 양쪽에서 같은 개수만큼 지워야 해.",
    "reframe": "끝자리 0을 활용해 나눗셈을 간단히 계산하는 능력."
  },
  {
    "id": "al-math-029", "subject": "수학", "domain": "기하", "track": "초등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "가로 6cm, 세로 4cm인 직사각형과 넓이가 같은 정사각형의 한 변의 길이는? (단, 정수가 아니어도 됨)",
    "passage": "",
    "choices": [
      { "label": "①", "text": "약 4.9cm (√24)", "correct": true, "trapNote": "" },
      { "label": "②", "text": "5cm", "correct": false, "trapNote": "(6+4)÷2로 평균을 구함" },
      { "label": "③", "text": "10cm", "correct": false, "trapNote": "6+4를 그대로 변의 길이로 착각" },
      { "label": "④", "text": "24cm", "correct": false, "trapNote": "넓이 값을 변의 길이로 착각" },
      { "label": "⑤", "text": "2cm", "correct": false, "trapNote": "6-4를 변의 길이로 착각" }
    ],
    "hiddenPremise": "직사각형의 가로·세로를 더하거나 평균 내면 정사각형 변이 된다는 잘못된 전제. 실제로는 넓이(24)가 같아지도록 제곱근을 구해야 함.",
    "commonMistake": "②를 고르는 학생 — (6+4)÷2=5로 평균을 냄. 하지만 이건 넓이를 보존하지 않음(5×5=25≠24).",
    "lukaExplain": "직사각형 넓이는 6×4=24야. 정사각형도 넓이가 24가 되려면, 변×변=24인 수를 찾아야 해. 그게 √24(약 4.9)야. 평균을 내면 넓이가 달라져버려.",
    "reframe": "넓이를 보존하는 조건(제곱근)으로 정사각형의 변을 구하는 능력."
  },
  {
    "id": "al-math-030", "subject": "수학", "domain": "대수", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "다음 중 짝수가 아닌 것을 고르시오.",
    "passage": "",
    "choices": [
      { "label": "①", "text": "24", "correct": false, "trapNote": "짝수" },
      { "label": "②", "text": "37", "correct": true, "trapNote": "" },
      { "label": "③", "text": "50", "correct": false, "trapNote": "짝수" },
      { "label": "④", "text": "0", "correct": false, "trapNote": "0도 짝수" },
      { "label": "⑤", "text": "18", "correct": false, "trapNote": "짝수" }
    ],
    "hiddenPremise": "0은 짝수도 홀수도 아니라고 여기는 전제. 실제로 0은 짝수.",
    "commonMistake": "④를 짝수가 아니라고 착각하는 학생 — 0은 특별한 수라 짝수가 아니라고 오해.",
    "lukaExplain": "짝수는 2로 나누어떨어지는 수야. 0÷2=0으로 나누어떨어지니까 0도 짝수야. 37은 2로 안 나누어떨어지니 홀수고. 끝자리 숫자로 봐도 37은 짝수가 아니야.",
    "reframe": "0을 포함한 짝수의 정확한 정의를 아는 능력."
  },
  {
    "id": "al-math-031", "subject": "수학", "domain": "대수", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "다음 문장제를 푸시오.\n\n'어떤 반의 학생 수는 남학생과 여학생의 비가 3:2이고, 전체 학생은 25명이다. 남학생은 몇 명인가?'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "15명", "correct": true, "trapNote": "" },
      { "label": "②", "text": "10명", "correct": false, "trapNote": "3과 2를 반대로 적용" },
      { "label": "③", "text": "12명", "correct": false, "trapNote": "25÷2로 절반 계산" },
      { "label": "④", "text": "3명", "correct": false, "trapNote": "비율 숫자를 그대로 답으로 씀" },
      { "label": "⑤", "text": "20명", "correct": false, "trapNote": "비를 무시하고 임의로 계산" }
    ],
    "hiddenPremise": "비율 숫자(3, 2)를 그대로 인원수로 착각하거나, 전체를 단순히 반으로 나누는 전제. 실제로는 전체를 비의 합(5)으로 나눈 뒤 비율만큼 곱해야 함.",
    "commonMistake": "④를 고르는 학생 — 비율의 숫자 3을 그대로 답이라고 씀.",
    "lukaExplain": "비 3:2는 전체를 5묶음으로 나눈 것 중 남학생이 3묶음이라는 뜻이야. 25명을 5로 나누면 한 묶음은 5명. 남학생은 3묶음이니 5×3=15명.",
    "reframe": "비율을 전체 합으로 나누어 실제 인원을 구하는 능력."
  },
  {
    "id": "al-math-032", "subject": "수학", "domain": "기하", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "다음 중 각의 크기가 90도인 각의 이름은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "예각", "correct": false, "trapNote": "90도보다 작은 각" },
      { "label": "②", "text": "직각", "correct": true, "trapNote": "" },
      { "label": "③", "text": "둔각", "correct": false, "trapNote": "90도보다 크고 180도보다 작은 각" },
      { "label": "④", "text": "평각", "correct": false, "trapNote": "180도인 각" },
      { "label": "⑤", "text": "예각과 둔각 사이의 각은 이름이 없다", "correct": false, "trapNote": "'직각'이라는 이름이 있음" }
    ],
    "hiddenPremise": "정확히 90도인 각에도 특별한 이름이 없을 거라 여기는 전제.",
    "commonMistake": "⑤를 고르는 학생 — 예각과 둔각 사이라 이름이 없을 거라 짐작.",
    "lukaExplain": "정확히 90도는 특별해서 따로 이름이 있어 — 직각이야. 그보다 작으면 예각, 크면(180도 미만) 둔각. 90도라는 딱 떨어지는 각은 직각으로 꼭 기억해두자.",
    "reframe": "각의 크기에 따른 정확한 명칭(예각/직각/둔각/평각)을 아는 능력."
  }
];
APPLICATION_LAB_ITEMS = APPLICATION_LAB_ITEMS.concat(APPLICATION_LAB_ITEMS_MATH_ELEM);

/* ===================== 수학 중등 추가 (math-033 ~ math-049, 17문항) ===================== */
var APPLICATION_LAB_ITEMS_MATH_MID = [
  {
    "id": "al-math-033", "subject": "수학", "domain": "대수", "track": "중등", "stage": "입문",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "다음 일차방정식을 푸시오.\n\n2x − 5 = 3x + 1",
    "passage": "",
    "choices": [
      { "label": "①", "text": "x = −6", "correct": true, "trapNote": "" },
      { "label": "②", "text": "x = 6", "correct": false, "trapNote": "이항할 때 부호를 바꾸지 않음" },
      { "label": "③", "text": "x = −4", "correct": false, "trapNote": "상수항 이항 시 부호 오류" },
      { "label": "④", "text": "x = 4", "correct": false, "trapNote": "양변 부호를 모두 반대로 착각" },
      { "label": "⑤", "text": "x = 1", "correct": false, "trapNote": "계산 중간 항을 누락" }
    ],
    "hiddenPremise": "이항할 때 부호를 바꾸지 않아도 된다는 전제. 항을 반대편으로 옮기면 부호가 반드시 바뀜.",
    "commonMistake": "②를 고르는 학생 — 2x-3x=1+5로 이항하면서 부호를 안 바꿈.",
    "lukaExplain": "이항할 땐 부호가 꼭 바뀌어. 2x-3x = 1+5로 옮기면 -x = 6, 그래서 x = -6. 이항할 때 부호 바꾸는 거 잊지 마 — 이거 진짜 자주 틀리는 실수야.",
    "reframe": "이항 시 부호 변화 규칙을 정확히 적용하는 능력."
  },
  {
    "id": "al-math-034", "subject": "수학", "domain": "대수", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "다음을 전개하시오.\n\n(x + 3)(x − 3) = ?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "x² − 9", "correct": true, "trapNote": "" },
      { "label": "②", "text": "x² + 9", "correct": false, "trapNote": "부호를 잘못 적용" },
      { "label": "③", "text": "x² − 6x − 9", "correct": false, "trapNote": "합차공식 대신 완전제곱식처럼 전개" },
      { "label": "④", "text": "x² − 6x + 9", "correct": false, "trapNote": "(x-3)²과 혼동" },
      { "label": "⑤", "text": "x² + 6x − 9", "correct": false, "trapNote": "중간항 부호 오류" }
    ],
    "hiddenPremise": "합차공식 (a+b)(a-b)=a²-b²을 완전제곱식 공식과 혼동하는 전제.",
    "commonMistake": "③·④를 고르는 학생 — (x+3)(x-3)을 (x-3)²처럼 완전제곱식으로 착각해서 전개.",
    "lukaExplain": "(x+3)(x-3)은 합차공식이야 — a²-b² 꼴로 딱 떨어져. 가운데 항(-6x, +6x)은 서로 상쇄돼서 안 남아. x²-9로 끝. 완전제곱식이랑 헷갈리지 마.",
    "reframe": "곱셈공식(합차공식 vs 완전제곱식)을 구별해서 적용하는 능력."
  },
  {
    "id": "al-math-035", "subject": "수학", "domain": "함수", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "일차함수 y = 2x + 3의 그래프가 지나지 않는 사분면은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "제1사분면", "correct": false, "trapNote": "실제로 지남" },
      { "label": "②", "text": "제2사분면", "correct": false, "trapNote": "실제로 지남" },
      { "label": "③", "text": "제3사분면", "correct": false, "trapNote": "실제로 지남" },
      { "label": "④", "text": "제4사분면", "correct": true, "trapNote": "" },
      { "label": "⑤", "text": "모든 사분면을 지난다", "correct": false, "trapNote": "기울기·절편을 그래프로 그려보지 않고 단정" }
    ],
    "hiddenPremise": "기울기가 양수면 모든 사분면을 지날 거라 어림짐작하는 전제. 실제로는 y절편의 위치까지 함께 봐야 함.",
    "commonMistake": "⑤를 고르는 학생 — 그래프를 직접 그려보지 않고 '기울기가 양수니까 다 지나겠지'라고 짐작.",
    "lukaExplain": "y=2x+3은 기울기 양수, y절편 +3(위쪽에서 시작)이야. x가 커질수록 y도 커지니까 오른쪽 아래(4사분면, x>0·y<0)로는 절대 안 내려가. 그래프를 대략이라도 그려보면 바로 보여.",
    "reframe": "기울기와 절편으로 그래프가 지나는/지나지 않는 사분면을 판단하는 능력."
  },
  {
    "id": "al-math-036", "subject": "수학", "domain": "대수", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "다음 연립방정식을 푸시오.\n\nx + y = 7\nx − y = 1",
    "passage": "",
    "choices": [
      { "label": "①", "text": "x = 4, y = 3", "correct": true, "trapNote": "" },
      { "label": "②", "text": "x = 3, y = 4", "correct": false, "trapNote": "x와 y 값을 서로 바꿈" },
      { "label": "③", "text": "x = 8, y = 6", "correct": false, "trapNote": "두 식을 곱해서 처리하는 오류" },
      { "label": "④", "text": "x = 3.5, y = 3.5", "correct": false, "trapNote": "두 식을 더하지 않고 평균을 냄" },
      { "label": "⑤", "text": "x = 6, y = 1", "correct": false, "trapNote": "뺄셈 과정에서 부호 오류" }
    ],
    "hiddenPremise": "연립방정식은 아무 값이나 대입해서 어림잡아도 된다는 전제. 실제로는 두 식을 더하거나 빼서 문자를 소거해야 함.",
    "commonMistake": "②를 고르는 학생 — 계산은 맞았지만 x, y를 헷갈려서 바꿔 씀.",
    "lukaExplain": "두 식을 더해보자: (x+y)+(x-y)=7+1, 2x=8, x=4. 그다음 x+y=7에 대입하면 y=3. 답 나오면 꼭 원래 식에 다시 넣어서 x, y가 안 바뀌었는지 확인하는 습관 들이자.",
    "reframe": "가감법으로 연립방정식을 정확히 풀고 결과를 검산하는 능력."
  },
  {
    "id": "al-math-037", "subject": "수학", "domain": "기하", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "삼각형의 세 내각의 크기가 각각 x, 2x, 3x일 때, 가장 큰 각의 크기는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "90°", "correct": true, "trapNote": "" },
      { "label": "②", "text": "60°", "correct": false, "trapNote": "x값을 가장 큰 각으로 착각" },
      { "label": "③", "text": "30°", "correct": false, "trapNote": "x값 자체를 답으로 착각" },
      { "label": "④", "text": "120°", "correct": false, "trapNote": "180을 6등분으로 나눠 계산 오류" },
      { "label": "⑤", "text": "180°", "correct": false, "trapNote": "세 각의 합을 가장 큰 각으로 착각" }
    ],
    "hiddenPremise": "삼각형 내각의 합이 180°라는 조건을 쓰지 않고 비율 숫자만으로 답을 정하는 전제.",
    "commonMistake": "③을 고르는 학생 — x+2x+3x=180이라는 방정식을 세우지 않고 x=30을 그냥 답으로 씀(가장 큰 각은 3x).",
    "lukaExplain": "삼각형 내각의 합은 항상 180°야. x+2x+3x=180, 6x=180, x=30. 가장 큰 각은 3x니까 3×30=90°. x값 자체가 아니라 '가장 큰 각'을 물었다는 걸 놓치지 마.",
    "reframe": "삼각형 내각의 합(180°) 조건으로 방정식을 세우고 묻는 대상을 정확히 파악하는 능력."
  },
  {
    "id": "al-math-038", "subject": "수학", "domain": "확률", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "동전을 두 번 던질 때, 두 번 다 앞면이 나올 확률은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "1/4", "correct": true, "trapNote": "" },
      { "label": "②", "text": "1/2", "correct": false, "trapNote": "한 번만 던지는 확률과 혼동" },
      { "label": "③", "text": "2/4", "correct": false, "trapNote": "경우의 수를 잘못 셈" },
      { "label": "④", "text": "1/3", "correct": false, "trapNote": "경우의 수를 3가지로 착각(앞앞/뒤뒤/하나씩)" },
      { "label": "⑤", "text": "1", "correct": false, "trapNote": "반드시 앞면이 나온다고 착각" }
    ],
    "hiddenPremise": "동전을 두 번 던진 경우의 수가 3가지(앞앞/뒤뒤/앞뒤 섞임)뿐이라는 잘못된 전제. 실제로는 앞뒤와 뒤앞을 구분해 4가지.",
    "commonMistake": "④를 고르는 학생 — '둘 다 앞면·둘 다 뒷면·서로 다름' 이렇게 3가지 경우만 있다고 착각.",
    "lukaExplain": "동전 두 개(또는 두 번)를 던지면 경우의 수는 앞앞, 앞뒤, 뒤앞, 뒤뒤 이렇게 4가지야. '앞뒤'와 '뒤앞'은 다른 경우로 세야 해. 그중 앞앞은 1가지니까 확률은 1/4.",
    "reframe": "순서가 있는 독립시행에서 경우의 수를 빠짐없이 세는 능력."
  },
  {
    "id": "al-math-039", "subject": "수학", "domain": "대수", "track": "중등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 이차방정식을 푸시오.\n\nx² − 5x + 6 = 0",
    "passage": "",
    "choices": [
      { "label": "①", "text": "x = 2, x = 3", "correct": true, "trapNote": "" },
      { "label": "②", "text": "x = −2, x = −3", "correct": false, "trapNote": "인수분해 시 부호를 반대로 씀" },
      { "label": "③", "text": "x = 2, x = −3", "correct": false, "trapNote": "부호 하나만 반대로 씀" },
      { "label": "④", "text": "x = 1, x = 6", "correct": false, "trapNote": "곱은 맞지만 합이 틀린 잘못된 인수분해" },
      { "label": "⑤", "text": "x = 5, x = 6", "correct": false, "trapNote": "계수를 그대로 답으로 착각" }
    ],
    "hiddenPremise": "인수분해에서 곱해서 6이 되는 두 수 중 아무거나 골라도 된다는 전제. 실제로는 곱이 6, 합이 -5(즉 두 수가 -2, -3)가 되는 조합이어야 함.",
    "commonMistake": "④를 고르는 학생 — 곱이 6인 조합(1×6)만 확인하고 합(-5)이 맞는지는 확인 안 함.",
    "lukaExplain": "인수분해할 땐 곱과 합을 둘 다 맞춰야 해. 곱해서 6, 더해서 -5가 되는 두 수는 -2와 -3. (x-2)(x-3)=0이니까 x=2 또는 x=3. 부호는 인수분해식과 반대로 나온다는 것도 기억해둬.",
    "reframe": "인수분해 시 곱과 합 조건을 동시에 만족하는 두 수를 찾는 능력."
  },
  {
    "id": "al-math-040", "subject": "수학", "domain": "기하", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "피타고라스 정리를 이용해 직각삼각형의 빗변의 길이를 구하시오. (두 직각변: 6cm, 8cm)",
    "passage": "",
    "choices": [
      { "label": "①", "text": "10cm", "correct": true, "trapNote": "" },
      { "label": "②", "text": "14cm", "correct": false, "trapNote": "두 변을 그냥 더함" },
      { "label": "③", "text": "48cm", "correct": false, "trapNote": "곱을 그대로 답으로 씀" },
      { "label": "④", "text": "100cm", "correct": false, "trapNote": "제곱근을 안 취하고 36+64=100을 그대로 답으로 씀" },
      { "label": "⑤", "text": "7cm", "correct": false, "trapNote": "두 변의 평균을 계산" }
    ],
    "hiddenPremise": "피타고라스 정리에서 제곱합(a²+b²)까지만 계산하고 제곱근 취하는 걸 잊는 전제.",
    "commonMistake": "④를 고르는 학생 — 6²+8²=36+64=100까지 계산하고 √100을 안 취함.",
    "lukaExplain": "피타고라스 정리는 (빗변)²=6²+8²=36+64=100이야. 여기서 끝이 아니라 제곱근을 취해야 해 — √100=10. 마지막에 제곱근 취하는 거 절대 빼먹지 마.",
    "reframe": "피타고라스 정리에서 제곱합 계산 후 제곱근까지 취하는 능력."
  },
  {
    "id": "al-math-041", "subject": "수학", "domain": "대수", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "다음 부등식을 푸시오.\n\n−3x + 6 > 0",
    "passage": "",
    "choices": [
      { "label": "①", "text": "x < 2", "correct": true, "trapNote": "" },
      { "label": "②", "text": "x > 2", "correct": false, "trapNote": "음수로 나눌 때 부등호를 안 바꿈" },
      { "label": "③", "text": "x < −2", "correct": false, "trapNote": "부호 처리 이중 오류" },
      { "label": "④", "text": "x > −2", "correct": false, "trapNote": "이항과 부등호 방향을 모두 잘못 처리" },
      { "label": "⑤", "text": "x = 2", "correct": false, "trapNote": "부등식을 등식으로 착각" }
    ],
    "hiddenPremise": "부등식 양변을 음수로 나눌 때도 부등호 방향이 그대로 유지된다는 전제. 실제로는 음수로 나누면 부등호가 반드시 반대로 바뀜.",
    "commonMistake": "②를 고르는 학생 — -3x>-6까지 이항은 맞게 했지만, -3으로 나눌 때 부등호를 안 바꿈.",
    "lukaExplain": "6을 이항하면 -3x > -6. 여기서 양변을 -3으로 나눠야 하는데, 음수로 나누면 부등호 방향이 뒤집혀! >가 <로 바뀌어서 x < 2. 음수로 나누는 순간 방향 바꾸는 거, 시험에서 진짜 많이 틀리는 포인트야.",
    "reframe": "부등식에서 음수를 곱하거나 나눌 때 부등호 방향이 바뀌는 규칙을 적용하는 능력."
  },
  {
    "id": "al-math-042", "subject": "수학", "domain": "함수", "track": "중등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "두 일차함수 y=2x+1과 y=2x-3의 그래프의 관계로 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "서로 평행하다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "한 점에서 만난다", "correct": false, "trapNote": "기울기가 같으면 만나지 않는다는 걸 모름" },
      { "label": "③", "text": "일치한다", "correct": false, "trapNote": "y절편이 다른데 같다고 착각" },
      { "label": "④", "text": "수직으로 만난다", "correct": false, "trapNote": "기울기의 곱이 -1일 때 조건과 혼동" },
      { "label": "⑤", "text": "원점에서 만난다", "correct": false, "trapNote": "근거 없는 임의의 판단" }
    ],
    "hiddenPremise": "기울기가 같은 두 직선은 어딘가에서 만날 거라 생각하는 전제. 실제로는 기울기가 같고 y절편이 다르면 평행(절대 안 만남).",
    "commonMistake": "②를 고르는 학생 — 직선은 다 어딘가에서 만난다고 막연히 생각.",
    "lukaExplain": "두 직선의 기울기가 똑같이 2야. 기울기가 같다는 건 두 직선이 같은 방향으로 나란히 뻗어간다는 뜻 — 그러니까 절대 안 만나. y절편만 다르니(1과 -3) 평행이야. 일치하려면 절편까지 같아야 해.",
    "reframe": "기울기와 y절편으로 두 직선의 위치 관계(평행/일치/교차)를 판별하는 능력."
  },
  {
    "id": "al-math-043", "subject": "수학", "domain": "대수", "track": "중등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": true,
    "stem": "다음을 계산하시오.\n\n(−3) × (−4) = ?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "12", "correct": true, "trapNote": "" },
      { "label": "②", "text": "−12", "correct": false, "trapNote": "음수×음수를 음수로 착각" },
      { "label": "③", "text": "7", "correct": false, "trapNote": "곱셈을 덧셈으로 착각" },
      { "label": "④", "text": "−7", "correct": false, "trapNote": "곱셈을 뺄셈으로 착각" },
      { "label": "⑤", "text": "1", "correct": false, "trapNote": "부호 계산 오류" }
    ],
    "hiddenPremise": "음수끼리 곱하면 결과도 음수라는 전제. 실제로는 음수×음수=양수.",
    "commonMistake": "②를 고르는 학생 다수 — '음수가 들어가면 결과도 음수'라고 단순하게 기억.",
    "lukaExplain": "부호 규칙: 같은 부호끼리 곱하면 양수, 다른 부호끼리 곱하면 음수야. (-3)×(-4)는 둘 다 음수(같은 부호)니까 결과는 양수 12. 부호 규칙은 시험 직전에 꼭 한 번 더 점검하자.",
    "reframe": "음수의 곱셈에서 부호 규칙(동일 부호→양수)을 정확히 적용하는 능력."
  },
  {
    "id": "al-math-044", "subject": "수학", "domain": "기하", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "원기둥의 밑면 반지름이 3cm, 높이가 5cm일 때 부피는? (π로 표현)",
    "passage": "",
    "choices": [
      { "label": "①", "text": "45π cm³", "correct": true, "trapNote": "" },
      { "label": "②", "text": "15π cm³", "correct": false, "trapNote": "반지름을 제곱하지 않고 그냥 곱함" },
      { "label": "③", "text": "30π cm³", "correct": false, "trapNote": "지름을 반지름으로 착각해서 계산" },
      { "label": "④", "text": "90π cm³", "correct": false, "trapNote": "부피 공식에 2를 추가로 곱함" },
      { "label": "⑤", "text": "8π cm³", "correct": false, "trapNote": "반지름과 높이를 더함" }
    ],
    "hiddenPremise": "원기둥 부피 공식에서 반지름을 제곱하지 않고 그냥 곱해도 된다는 전제. 실제 공식은 π × r² × h.",
    "commonMistake": "②를 고르는 학생 — π×3×5처럼 반지름을 제곱하지 않고 그냥 곱함.",
    "lukaExplain": "원기둥 부피는 밑면(원) 넓이 × 높이야. 밑면 넓이는 π×r²=π×3²=9π. 여기에 높이 5를 곱하면 9π×5=45π. 반지름은 꼭 제곱해야 해 — 이거 자주 놓치는 부분이야.",
    "reframe": "원기둥 부피 공식(πr²h)에서 반지름 제곱을 빠뜨리지 않는 능력."
  },
  {
    "id": "al-math-045", "subject": "수학", "domain": "대수", "track": "중등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "다음 문장제를 푸시오.\n\n'어떤 수의 3배에서 5를 뺀 값이 그 수에 7을 더한 값과 같다. 어떤 수는?'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "6", "correct": true, "trapNote": "" },
      { "label": "②", "text": "1", "correct": false, "trapNote": "식을 3x-5=x+7이 아닌 다른 형태로 잘못 세움" },
      { "label": "③", "text": "12", "correct": false, "trapNote": "부호 처리 과정에서 이항 오류" },
      { "label": "④", "text": "−6", "correct": false, "trapNote": "최종 부호를 반대로 씀" },
      { "label": "⑤", "text": "2", "correct": false, "trapNote": "식을 잘못 세워 다른 값 도출" }
    ],
    "hiddenPremise": "문장을 그대로 순서대로 나열하면 식이 자동으로 세워진다는 전제. 실제로는 '어떤 수'를 x로 놓고 조건을 하나씩 정확히 번역해야 함.",
    "commonMistake": "②·⑤처럼 식을 잘못 세워 엉뚱한 값이 나오는 경우 — '3배에서 5를 뺀 값'과 '그 수에 7을 더한 값'을 정확히 매칭 못함.",
    "lukaExplain": "어떤 수를 x라 하면, '3배에서 5를 뺀 값'은 3x-5, '그 수에 7을 더한 값'은 x+7. 이 둘이 같다니까 3x-5=x+7. 이항하면 2x=12, x=6. 문장을 하나씩 정확히 식으로 옮기는 게 핵심이야.",
    "reframe": "문장을 정확한 대수식으로 번역해 방정식을 세우는 능력."
  },
  {
    "id": "al-math-046", "subject": "수학", "domain": "확률", "track": "중등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "주사위를 한 번 던질 때, 3의 배수 또는 짝수가 나올 확률은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "2/3", "correct": true, "trapNote": "" },
      { "label": "②", "text": "5/6", "correct": false, "trapNote": "겹치는 경우(6)를 중복해서 셈" },
      { "label": "③", "text": "1/2", "correct": false, "trapNote": "짝수만 계산하고 3의 배수 추가를 놓침" },
      { "label": "④", "text": "1/3", "correct": false, "trapNote": "3의 배수만 계산" },
      { "label": "⑤", "text": "1", "correct": false, "trapNote": "모든 수가 해당한다고 착각" }
    ],
    "hiddenPremise": "'또는' 조건에서 겹치는 경우를 두 번 세어도 된다는 전제. 실제로는 중복되는 경우(6)를 한 번만 세야 함.",
    "commonMistake": "②를 고르는 학생 — 3의 배수(3,6) 2개 + 짝수(2,4,6) 3개 = 5개로 단순히 더함, 6이 두 번 겹치는 걸 못 봄.",
    "lukaExplain": "3의 배수는 3,6. 짝수는 2,4,6. 그냥 더하면 6이 두 번 세어져. 겹치는 6은 한 번만 세야 해서, 실제 경우는 2,3,4,6 이렇게 4가지. 4/6을 약분하면 2/3.",
    "reframe": "'또는' 조건에서 중복되는 경우를 한 번만 세는(합집합) 능력."
  },
  {
    "id": "al-math-047", "subject": "수학", "domain": "대수", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "다음 식을 간단히 하시오.\n\n3(x + 2) − 2(x − 1) = ?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "x + 8", "correct": true, "trapNote": "" },
      { "label": "②", "text": "x + 4", "correct": false, "trapNote": "분배법칙에서 두 번째 항 부호 오류" },
      { "label": "③", "text": "5x + 4", "correct": false, "trapNote": "괄호를 풀지 않고 계수를 그냥 더함" },
      { "label": "④", "text": "x − 8", "correct": false, "trapNote": "부호를 전체적으로 반대로 계산" },
      { "label": "⑤", "text": "x + 6", "correct": false, "trapNote": "상수항 계산 실수" }
    ],
    "hiddenPremise": "괄호 앞에 마이너스(-)가 있을 때 괄호 안 모든 항의 부호를 바꾸지 않아도 된다는 전제.",
    "commonMistake": "②를 고르는 학생 — -2(x-1)을 전개할 때 -2×(-1)=+2를 놓치고 -2로 처리.",
    "lukaExplain": "괄호를 하나씩 풀어보자. 3(x+2)=3x+6. -2(x-1)은 -2×x=-2x, -2×(-1)=+2 — 부호 조심! 그래서 -2x+2. 합치면 3x+6-2x+2 = x+8. 괄호 앞 부호가 마이너스일 때 안의 항 부호가 다 바뀌는 거 꼭 확인해.",
    "reframe": "분배법칙에서 음수 부호를 괄호 안 모든 항에 정확히 적용하는 능력."
  },
  {
    "id": "al-math-048", "subject": "수학", "domain": "기하", "track": "중등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "다음 중 이등변삼각형의 성질로 옳지 않은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "두 변의 길이가 같다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "②", "text": "두 밑각의 크기가 같다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "③", "text": "세 변의 길이가 모두 같다", "correct": true, "trapNote": "" },
      { "label": "④", "text": "꼭지각의 이등분선은 밑변을 수직이등분한다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "⑤", "text": "두 개의 직각삼각형으로 나눌 수 있다", "correct": false, "trapNote": "옳은 설명" }
    ],
    "hiddenPremise": "이등변삼각형과 정삼각형을 같은 것으로 혼동하는 전제. 세 변이 모두 같은 건 정삼각형의 성질.",
    "commonMistake": "이등변삼각형이면 당연히 세 변도 같을 거라 생각하는 학생들 — 정삼각형과 혼동.",
    "lukaExplain": "이등변삼각형은 '두' 변만 같으면 돼. 세 변이 다 같은 건 정삼각형이야. 이등변삼각형은 정삼각형보다 더 넓은 개념이고, 정삼각형은 이등변삼각형의 특별한 경우라고 생각하면 헷갈리지 않아.",
    "reframe": "이등변삼각형과 정삼각형의 정의 차이를 정확히 구분하는 능력."
  },
  {
    "id": "al-math-049", "subject": "수학", "domain": "대수", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다음 문장제를 푸시오.\n\n'현재 아버지의 나이는 아들 나이의 3배이다. 5년 후에는 아버지 나이가 아들 나이의 2배가 된다. 현재 아들의 나이는?'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "5세", "correct": true, "trapNote": "" },
      { "label": "②", "text": "10세", "correct": false, "trapNote": "5년 후 조건을 현재 나이에 바로 적용" },
      { "label": "③", "text": "15세", "correct": false, "trapNote": "아버지 나이와 혼동" },
      { "label": "④", "text": "3세", "correct": false, "trapNote": "비율 숫자를 그대로 답으로 씀" },
      { "label": "⑤", "text": "20세", "correct": false, "trapNote": "방정식을 세우지 않고 임의로 추정" }
    ],
    "hiddenPremise": "'5년 후'라는 조건을 양쪽 나이에 똑같이 5를 더하는 걸 빠뜨리는 전제.",
    "commonMistake": "②를 고르는 학생 — 5년 후 조건식을 세울 때 아들 나이에만 5를 더하고 아버지 나이엔 안 더함(또는 그 반대).",
    "lukaExplain": "아들 나이를 x라 하면 아버지는 3x. 5년 후엔 둘 다 5살씩 더 먹으니까 (3x+5)=2(x+5). 풀면 3x+5=2x+10, x=5. '5년 후'는 아버지·아들 나이 둘 다에 5를 더해야 한다는 거 잊지 마.",
    "reframe": "시간 경과 조건에서 두 대상 모두에게 동일하게 시간을 적용해 방정식을 세우는 능력."
  }
];
APPLICATION_LAB_ITEMS = APPLICATION_LAB_ITEMS.concat(APPLICATION_LAB_ITEMS_MATH_MID);

/* ===================== 수학 고등 추가 (math-050 ~ math-066, 17문항) ===================== */
var APPLICATION_LAB_ITEMS_MATH_HIGH = [
  {
    "id": "al-math-050", "subject": "수학", "domain": "함수", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "이차함수 f(x) = (x-2)² + 3의 최솟값은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "3", "correct": true, "trapNote": "" },
      { "label": "②", "text": "2", "correct": false, "trapNote": "x좌표를 최솟값으로 착각" },
      { "label": "③", "text": "-3", "correct": false, "trapNote": "부호를 반대로 씀" },
      { "label": "④", "text": "5", "correct": false, "trapNote": "2와 3을 더함" },
      { "label": "⑤", "text": "-2", "correct": false, "trapNote": "꼭짓점 x좌표의 부호를 착각" }
    ],
    "hiddenPremise": "완전제곱식 (x-2)²+3에서 꼭짓점의 x좌표(2)를 최솟값으로 착각하는 전제. 실제 최솟값은 y좌표(3).",
    "commonMistake": "②를 고르는 학생 — 괄호 안의 2를 최솟값으로 혼동.",
    "lukaExplain": "f(x)=(x-2)²+3 꼴은 꼭짓점이 (2, 3)이야. (x-2)²는 항상 0 이상이니까 최솟값은 x=2일 때 f(x)=0+3=3. 괄호 안 숫자(x좌표)가 아니라 맨 뒤 상수(y좌표)가 최솟값이야.",
    "reframe": "완전제곱식에서 꼭짓점의 x좌표와 최솟값(y좌표)을 구분하는 능력."
  },
  {
    "id": "al-math-051", "subject": "수학", "domain": "대수", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "이차방정식 x² - 4x + k = 0이 중근을 가질 때, k의 값은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "4", "correct": true, "trapNote": "" },
      { "label": "②", "text": "2", "correct": false, "trapNote": "판별식 계산에서 4를 절반만 씀" },
      { "label": "③", "text": "16", "correct": false, "trapNote": "b²만 계산하고 4ac 조건을 잘못 적용" },
      { "label": "④", "text": "0", "correct": false, "trapNote": "중근 조건을 판별식=0이 아니라 k=0으로 착각" },
      { "label": "⑤", "text": "-4", "correct": false, "trapNote": "부호를 반대로 계산" }
    ],
    "hiddenPremise": "중근 조건(판별식=0)을 정확히 계산하지 않고 계수를 어림잡아 대입하는 전제.",
    "commonMistake": "③을 고르는 학생 — 판별식 b²-4ac=0에서 4ac 부분 계산을 실수함.",
    "lukaExplain": "중근이 되려면 판별식 b²-4ac=0이어야 해. 여기선 (-4)²-4×1×k=0, 16-4k=0, k=4. 판별식 공식을 정확히 대입하는 게 핵심이야 — b가 아니라 b² 라는 거 꼭 확인해.",
    "reframe": "이차방정식의 중근 조건(판별식=0)을 정확히 계산하는 능력."
  },
  {
    "id": "al-math-052", "subject": "수학", "domain": "함수", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "함수 f(x) = 2x + 1의 역함수 f⁻¹(x)를 구하시오.",
    "passage": "",
    "choices": [
      { "label": "①", "text": "f⁻¹(x) = (x-1)/2", "correct": true, "trapNote": "" },
      { "label": "②", "text": "f⁻¹(x) = (x+1)/2", "correct": false, "trapNote": "부호를 반대로 이항" },
      { "label": "③", "text": "f⁻¹(x) = 2x - 1", "correct": false, "trapNote": "역함수를 원함수의 역연산 순서 없이 단순 부호만 바꿈" },
      { "label": "④", "text": "f⁻¹(x) = 1/(2x+1)", "correct": false, "trapNote": "역함수를 역수로 착각" },
      { "label": "⑤", "text": "f⁻¹(x) = (1-x)/2", "correct": false, "trapNote": "이항 부호 이중 오류" }
    ],
    "hiddenPremise": "역함수를 구할 때 단순히 역수를 취하면 된다는 전제. 실제로는 y=2x+1에서 x와 y를 바꾼 뒤 x에 대해 다시 풀어야 함.",
    "commonMistake": "④를 고르는 학생 — '역'함수라는 이름 때문에 분수의 역수(1/f(x))로 착각.",
    "lukaExplain": "역함수는 y=2x+1에서 x, y 자리를 바꿔서(x=2y+1) y를 다시 구하는 거야. x=2y+1 → x-1=2y → y=(x-1)/2. '역'이라는 말 때문에 역수랑 헷갈리기 쉬운데, 역함수는 입력·출력을 바꾸는 거지 역수가 아니야.",
    "reframe": "역함수를 구하는 절차(x,y 교환 후 재정리)를 정확히 적용하는 능력."
  },
  {
    "id": "al-math-053", "subject": "수학", "domain": "대수", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "등차수열 {aₙ}에서 a₁ = 3, 공차 d = 4일 때, a₁₀의 값은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "39", "correct": true, "trapNote": "" },
      { "label": "②", "text": "43", "correct": false, "trapNote": "n을 10 그대로 곱함(a₁+10d)" },
      { "label": "③", "text": "40", "correct": false, "trapNote": "(n-1) 대신 n을 곱함" },
      { "label": "④", "text": "33", "correct": false, "trapNote": "공차를 9번이 아니라 8번만 더함" },
      { "label": "⑤", "text": "36", "correct": false, "trapNote": "a₁을 더하지 않고 d만 10배" }
    ],
    "hiddenPremise": "등차수열 일반항 공식에서 (n-1)이 아니라 n을 그대로 곱해도 된다는 전제. 실제 공식은 aₙ=a₁+(n-1)d.",
    "commonMistake": "②를 고르는 학생 — a₁₀=a₁+10d로 계산, (n-1) 대신 n=10을 그대로 씀.",
    "lukaExplain": "등차수열 공식은 aₙ=a₁+(n-1)d야. a₁₀을 구할 땐 (10-1)=9번만 공차를 더해. a₁₀=3+9×4=3+36=39. n번째 항은 처음 항에서 (n-1)번 이동한다는 걸 기억해 — 첫 항 자체는 이미 0번 이동한 상태니까.",
    "reframe": "등차수열 일반항 공식에서 (n-1) 항을 정확히 적용하는 능력."
  },
  {
    "id": "al-math-054", "subject": "수학", "domain": "기하", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "직선 y = 2x + 3에 평행하고 점 (0, 5)를 지나는 직선의 방정식은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "y = 2x + 5", "correct": true, "trapNote": "" },
      { "label": "②", "text": "y = 2x + 3", "correct": false, "trapNote": "새 절편을 구하지 않고 원래 직선 식을 그대로 씀" },
      { "label": "③", "text": "y = -1/2 x + 5", "correct": false, "trapNote": "평행 조건 대신 수직 조건(기울기의 곱=-1)을 적용" },
      { "label": "④", "text": "y = 2x - 5", "correct": false, "trapNote": "절편의 부호를 반대로 씀" },
      { "label": "⑤", "text": "y = 5x + 2", "correct": false, "trapNote": "기울기와 절편 자리를 서로 바꿈" }
    ],
    "hiddenPremise": "평행한 직선을 구할 때 원래 직선의 절편을 그대로 재사용해도 된다는 전제. 실제로는 기울기(2)만 유지하고, 주어진 점을 대입해 절편을 새로 구해야 함.",
    "commonMistake": "②를 고르는 학생 — 기울기만 맞으면 된다고 생각해 절편을 다시 구하지 않고 원래 식을 그대로 답으로 씀.",
    "lukaExplain": "평행하니까 기울기는 그대로 2, 그래서 y=2x+b 꼴이 돼. 여기에 점 (0,5)를 대입하면 5=2×0+b, b=5. 그래서 y=2x+5. 기울기가 같다고 절편까지 같은 건 아니야 — 새 점을 대입해서 절편을 다시 구해야 해.",
    "reframe": "평행선 조건(기울기 동일)에서 주어진 점을 대입해 새로운 절편을 구하는 능력."
  },
  {
    "id": "al-math-055", "subject": "수학", "domain": "대수", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 부등식을 만족하는 정수 x의 개수를 구하시오.\n\n|x - 3| < 2",
    "passage": "",
    "choices": [
      { "label": "①", "text": "3개 (2,3,4)", "correct": true, "trapNote": "" },
      { "label": "②", "text": "5개", "correct": false, "trapNote": "등호를 포함해 범위를 넓게 착각" },
      { "label": "③", "text": "2개", "correct": false, "trapNote": "경계값 하나를 빠뜨림" },
      { "label": "④", "text": "1개", "correct": false, "trapNote": "절댓값 부등식을 잘못 풀어 범위를 과도하게 좁힘" },
      { "label": "⑤", "text": "4개", "correct": false, "trapNote": "부등호 방향을 착각해 경계값 포함" }
    ],
    "hiddenPremise": "절댓값 부등식 |x-3|<2를 x<2 또는 x<3처럼 단순하게 푸는 전제. 실제로는 -2<x-3<2로 풀어야 함.",
    "commonMistake": "②를 고르는 학생 — 부등호를 ≤로 착각해 경계값(1, 5)까지 포함시킴.",
    "lukaExplain": "|x-3|<2는 -2<x-3<2로 풀어. 양변에 3을 더하면 1<x<5. 이 범위 안의 정수는 2,3,4 — 1과 5는 등호가 없어서 제외돼. 부등호가 <인지 ≤인지 꼭 확인하는 습관 들이자.",
    "reframe": "절댓값 부등식을 범위 부등식으로 정확히 전개하고 경계값 포함 여부를 판단하는 능력."
  },
  {
    "id": "al-math-056", "subject": "수학", "domain": "확률", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "서로 다른 5개의 공에서 3개를 뽑아 일렬로 나열하는 경우의 수는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "60", "correct": true, "trapNote": "" },
      { "label": "②", "text": "10", "correct": false, "trapNote": "순열(순서 있음)을 조합(순서 없음)으로 착각" },
      { "label": "③", "text": "125", "correct": false, "trapNote": "5³으로 중복순열처럼 계산" },
      { "label": "④", "text": "15", "correct": false, "trapNote": "5×3으로 잘못 계산" },
      { "label": "⑤", "text": "20", "correct": false, "trapNote": "5×4만 계산하고 마지막 자리 곱을 빠뜨림" }
    ],
    "hiddenPremise": "'뽑아서 나열'하는 문제를 조합(순서 무관)으로 착각하는 전제. '나열'이라는 말은 순서가 있다는 뜻이므로 순열로 계산해야 함.",
    "commonMistake": "②를 고르는 학생 — 조합 공식 C(5,3)=10을 사용, '나열'이라는 순서 조건을 놓침.",
    "lukaExplain": "'나열한다'는 건 순서가 다르면 다른 경우로 센다는 뜻이야 — 순열! 5개 중 3개를 순서대로 뽑는 거니까 5×4×3=60. 조합이랑 순열, '순서가 중요한가'로 구분하는 습관을 들이자.",
    "reframe": "순열과 조합을 '순서 고려 여부'로 구분해 적용하는 능력."
  },
  {
    "id": "al-math-057", "subject": "수학", "domain": "함수", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "지수법칙에 따라 다음을 계산하시오.\n\n2³ × 2⁴ = ?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "2⁷", "correct": true, "trapNote": "" },
      { "label": "②", "text": "2¹²", "correct": false, "trapNote": "지수끼리 곱함" },
      { "label": "③", "text": "4⁷", "correct": false, "trapNote": "밑을 더함" },
      { "label": "④", "text": "2¹", "correct": false, "trapNote": "지수를 뺌" },
      { "label": "⑤", "text": "16⁷", "correct": false, "trapNote": "밑을 곱함" }
    ],
    "hiddenPremise": "같은 밑의 지수 곱셈에서 지수끼리 곱해야 한다는 전제. 실제 지수법칙은 밑이 같으면 지수를 '더함'(aᵐ×aⁿ=aᵐ⁺ⁿ).",
    "commonMistake": "②를 고르는 학생 — '곱셈이니까 지수도 곱해야지'라고 직관적으로 착각.",
    "lukaExplain": "지수법칙 aᵐ×aⁿ=aᵐ⁺ⁿ이야 — 곱셈인데 지수는 '더해'. 2³×2⁴=2³⁺⁴=2⁷. 반대로 나눗셈일 땐 지수를 빼(aᵐ÷aⁿ=aᵐ⁻ⁿ). 곱셈=지수 더하기, 나눗셈=지수 빼기로 짝지어 기억하자.",
    "reframe": "지수법칙에서 곱셈은 지수를 더하고 거듭제곱은 지수를 곱한다는 차이를 정확히 아는 능력."
  },
  {
    "id": "al-math-058", "subject": "수학", "domain": "대수", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "두 근이 2와 3인 이차방정식을 x²의 계수가 1이 되도록 만드시오.",
    "passage": "",
    "choices": [
      { "label": "①", "text": "x² - 5x + 6 = 0", "correct": true, "trapNote": "" },
      { "label": "②", "text": "x² + 5x + 6 = 0", "correct": false, "trapNote": "합의 부호를 반대로 씀" },
      { "label": "③", "text": "x² - 5x - 6 = 0", "correct": false, "trapNote": "곱의 부호를 반대로 씀" },
      { "label": "④", "text": "x² - 6x + 5 = 0", "correct": false, "trapNote": "합과 곱의 값을 서로 바꿈" },
      { "label": "⑤", "text": "x² + 6x + 5 = 0", "correct": false, "trapNote": "합·곱 부호를 모두 반대로 씀" }
    ],
    "hiddenPremise": "두 근으로 이차방정식을 만들 때 근의 합과 곱을 서로 바꿔 쓰거나 부호를 그대로 쓰는 전제. 실제 공식은 x²-(합)x+(곱)=0.",
    "commonMistake": "④를 고르는 학생 — 합(5)과 곱(6)의 자리를 헷갈려서 서로 바꿔 씀.",
    "lukaExplain": "두 근이 α, β일 때 방정식은 x²-(α+β)x+αβ=0이야. 근이 2, 3이면 합은 5, 곱은 6. x²-5x+6=0. '합은 -x 자리에 부호 반대로, 곱은 상수항에 그대로' 이렇게 순서를 기억해두면 헷갈리지 않아.",
    "reframe": "두 근으로부터 근과 계수의 관계를 이용해 이차방정식을 세우는 능력."
  },
  {
    "id": "al-math-059", "subject": "수학", "domain": "기하", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "두 점 A(1, 2), B(4, 6) 사이의 거리를 구하시오.",
    "passage": "",
    "choices": [
      { "label": "①", "text": "5", "correct": true, "trapNote": "" },
      { "label": "②", "text": "7", "correct": false, "trapNote": "x차와 y차를 그냥 더함" },
      { "label": "③", "text": "25", "correct": false, "trapNote": "제곱근을 취하지 않음" },
      { "label": "④", "text": "√7", "correct": false, "trapNote": "차이를 제곱하지 않고 그냥 더한 후 제곱근" },
      { "label": "⑤", "text": "9", "correct": false, "trapNote": "좌표를 잘못 대입" }
    ],
    "hiddenPremise": "두 점 사이 거리를 구할 때 x차와 y차를 그냥 더하면 된다는 전제. 실제 공식은 √((x차)²+(y차)²).",
    "commonMistake": "②를 고르는 학생 — |4-1|+|6-2|=3+4=7로 단순히 더함(맨해튼 거리와 혼동).",
    "lukaExplain": "두 점 사이 거리 공식은 √((x₂-x₁)²+(y₂-y₁)²)이야. x차는 4-1=3, y차는 6-2=4. 3²+4²=9+16=25, √25=5. 피타고라스 정리랑 똑같은 원리야 — 각 차이를 제곱해서 더한 다음 제곱근을 취해야 해.",
    "reframe": "두 점 사이의 거리 공식(피타고라스 원리)을 정확히 적용하는 능력."
  },
  {
    "id": "al-math-060", "subject": "수학", "domain": "함수", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "함수 f(x) = x² - 4x + 5의 그래프를 x축 방향으로 2만큼, y축 방향으로 -3만큼 평행이동한 함수의 최솟값은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "-2", "correct": true, "trapNote": "" },
      { "label": "②", "text": "1", "correct": false, "trapNote": "평행이동을 적용하지 않고 원래 최솟값만 답함" },
      { "label": "③", "text": "4", "correct": false, "trapNote": "y축 이동량을 더함(부호 착각)" },
      { "label": "④", "text": "-4", "correct": false, "trapNote": "이동량 계산 시 부호를 이중으로 착각" },
      { "label": "⑤", "text": "3", "correct": false, "trapNote": "x축 이동량을 최솟값에 잘못 적용" }
    ],
    "hiddenPremise": "평행이동에서 y값 이동은 최솟값에 영향을 안 준다고 여기거나, x축 이동량을 최솟값에 적용하는 전제. 실제로는 y축 방향 이동만 최솟값에 그대로 더해짐.",
    "commonMistake": "②를 고르는 학생 — f(x)=x²-4x+5=(x-2)²+1로 원래 최솟값 1까지는 구했지만, 평행이동을 반영 안 함.",
    "lukaExplain": "먼저 f(x)=(x-2)²+1로 정리하면 원래 최솟값은 1(x=2일 때). y축 방향 -3만큼 이동하면 최솟값도 그대로 -3만큼 이동해서 1-3=-2. x축 이동은 최솟값의 '크기'엔 영향 없고 위치(x좌표)만 바꿔 — 최솟값 자체를 바꾸는 건 y축 이동이야.",
    "reframe": "평행이동에서 x축·y축 이동이 그래프의 최솟값에 미치는 영향을 구분하는 능력."
  },
  {
    "id": "al-math-061", "subject": "수학", "domain": "대수", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 로그를 계산하시오.\n\nlog₂ 8 = ?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "3", "correct": true, "trapNote": "" },
      { "label": "②", "text": "4", "correct": false, "trapNote": "8÷2로 잘못 계산" },
      { "label": "③", "text": "6", "correct": false, "trapNote": "2×3으로 밑과 답을 혼동" },
      { "label": "④", "text": "16", "correct": false, "trapNote": "2×8로 잘못 계산" },
      { "label": "⑤", "text": "2", "correct": false, "trapNote": "밑을 그대로 답으로 씀" }
    ],
    "hiddenPremise": "로그를 나눗셈이나 곱셈으로 착각하는 전제. log₂8은 '2를 몇 번 곱해야 8이 되는가'를 묻는 것.",
    "commonMistake": "②를 고르는 학생 — log를 나눗셈처럼 8÷2=4로 계산.",
    "lukaExplain": "log₂8은 '2를 몇 제곱해야 8이 되냐'는 질문이야. 2³=8이니까 log₂8=3. 로그는 나눗셈이 아니라 '지수를 거꾸로 묻는 것'이라고 생각하면 헷갈리지 않아.",
    "reframe": "로그의 정의(밑을 몇 제곱해야 진수가 되는가)를 정확히 이해하는 능력."
  },
  {
    "id": "al-math-062", "subject": "수학", "domain": "확률", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "주머니에 흰 공 4개, 검은 공 6개가 있다. 공 하나를 꺼낼 때 흰 공일 확률은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "2/5", "correct": true, "trapNote": "" },
      { "label": "②", "text": "4/6", "correct": false, "trapNote": "전체(10) 대신 검은 공 수(6)로 나눔" },
      { "label": "③", "text": "1/2", "correct": false, "trapNote": "색이 2가지니 반반이라 착각" },
      { "label": "④", "text": "6/10", "correct": false, "trapNote": "검은 공 확률과 혼동" },
      { "label": "⑤", "text": "4/10 아닌 4/4", "correct": false, "trapNote": "흰 공 수를 그대로 분모로 씀" }
    ],
    "hiddenPremise": "전체 개수(10)가 아니라 다른 색의 개수(6)나 색깔 종류 수(2)로 나누는 전제.",
    "commonMistake": "③을 고르는 학생 — 색이 두 가지라 무조건 확률이 반반일 거라 짐작.",
    "lukaExplain": "확률은 항상 '전체'로 나눠야 해. 전체 공은 4+6=10개, 흰 공은 4개. 확률은 4/10=2/5. 색깔 종류 수가 아니라 실제 개수 비율이 확률이야.",
    "reframe": "전체 경우의 수 대비 원하는 경우의 수 비율로 확률을 정확히 계산하는 능력."
  },
  {
    "id": "al-math-063", "subject": "수학", "domain": "대수", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "등비수열 {aₙ}에서 a₁ = 2, 공비 r = 3일 때, a₄의 값은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "54", "correct": true, "trapNote": "" },
      { "label": "②", "text": "24", "correct": false, "trapNote": "공비를 4번 곱함(2×3⁴)" },
      { "label": "③", "text": "18", "correct": false, "trapNote": "공비를 2번만 곱함" },
      { "label": "④", "text": "6", "correct": false, "trapNote": "공비를 곱하지 않고 그냥 더함" },
      { "label": "⑤", "text": "162", "correct": false, "trapNote": "공비를 5번 곱함" }
    ],
    "hiddenPremise": "등비수열 일반항에서 공비를 n번 곱한다는 전제. 실제 공식은 aₙ=a₁×r^(n-1) — (n-1)번만 곱해야 함.",
    "commonMistake": "②를 고르는 학생 — a₄=a₁×r⁴로 계산, (n-1) 대신 n=4를 그대로 지수로 씀.",
    "lukaExplain": "등비수열 공식은 aₙ=a₁×r^(n-1)이야. a₄를 구할 땐 (4-1)=3번만 공비를 곱해. a₄=2×3³=2×27=54. 등차수열과 마찬가지로 (n-1)번만 적용한다는 걸 꼭 기억해.",
    "reframe": "등비수열 일반항 공식에서 (n-1) 지수를 정확히 적용하는 능력."
  },
  {
    "id": "al-math-064", "subject": "수학", "domain": "기하", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "원 x² + y² = 25와 직선 y = x + 1의 교점의 개수는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "2개", "correct": true, "trapNote": "" },
      { "label": "②", "text": "0개", "correct": false, "trapNote": "판별식을 계산하지 않고 직관적으로 안 만난다고 추측" },
      { "label": "③", "text": "1개", "correct": false, "trapNote": "판별식=0(접함)으로 착각" },
      { "label": "④", "text": "무한개", "correct": false, "trapNote": "원과 직선을 같은 도형으로 착각" },
      { "label": "⑤", "text": "3개", "correct": false, "trapNote": "이차방정식의 근이 최대 2개라는 사실을 무시" }
    ],
    "hiddenPremise": "원과 직선의 교점 개수를 그래프를 안 그려보고 감으로 추측하는 전제. 실제로는 연립해서 나온 이차방정식의 판별식을 계산해야 함.",
    "commonMistake": "②·③을 고르는 학생 — 판별식을 실제로 계산하지 않고 원의 크기와 직선 위치를 눈대중으로만 판단.",
    "lukaExplain": "y=x+1을 원의 식에 대입하면 x²+(x+1)²=25, 전개하면 2x²+2x-24=0, x²+x-12=0. 판별식 D=1²-4×1×(-12)=1+48=49>0. 판별식이 0보다 크니까 서로 다른 두 점에서 만나 — 교점 2개.",
    "reframe": "원과 직선의 교점 개수를 연립방정식의 판별식으로 정확히 판단하는 능력."
  },
  {
    "id": "al-math-065", "subject": "수학", "domain": "대수", "track": "고등", "stage": "기본",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 식을 인수분해하시오.\n\nx² - 9 = ?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "(x+3)(x-3)", "correct": true, "trapNote": "" },
      { "label": "②", "text": "(x-9)(x+1)", "correct": false, "trapNote": "곱은 -9이지만 합 조건을 확인 안 함" },
      { "label": "③", "text": "(x-3)²", "correct": false, "trapNote": "합차공식을 완전제곱식으로 착각" },
      { "label": "④", "text": "(x+9)(x-1)", "correct": false, "trapNote": "곱과 합 조건 둘 다 틀림" },
      { "label": "⑤", "text": "(x+3)²", "correct": false, "trapNote": "부호와 공식을 모두 착각" }
    ],
    "hiddenPremise": "x²-9를 완전제곱식으로 착각하거나, 곱해서 -9가 되는 아무 두 수나 골라도 된다는 전제. 실제로는 a²-b² 합차공식(x²-3²)임을 봐야 함.",
    "commonMistake": "③을 고르는 학생 — x²-9를 (x-3)²처럼 완전제곱식으로 착각(부호 있는 항이 없는데도).",
    "lukaExplain": "x²-9는 x²-3² 꼴이야 — 합차공식 a²-b²=(a+b)(a-b) 그대로 적용하면 (x+3)(x-3). 가운데 항(x의 1차항)이 없다는 게 합차공식의 신호야. 완전제곱식이면 중간에 항이 있어야 해.",
    "reframe": "합차공식과 완전제곱식을 구별해 인수분해하는 능력."
  },
  {
    "id": "al-math-066", "subject": "수학", "domain": "함수", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "함수 y = |x - 2|의 그래프에 대한 설명으로 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "x=2에서 꺾이며, 최솟값은 0이다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "x=0에서 꺾이며, 최솟값은 2이다", "correct": false, "trapNote": "절댓값 안 상수의 부호를 반대로 해석" },
      { "label": "③", "text": "일차함수이므로 직선이다", "correct": false, "trapNote": "절댓값 기호를 무시하고 일반 일차함수로 착각" },
      { "label": "④", "text": "x=-2에서 꺾이며, 최솟값은 0이다", "correct": false, "trapNote": "꺾이는 점의 부호를 반대로 계산" },
      { "label": "⑤", "text": "최솟값이 없다", "correct": false, "trapNote": "절댓값 함수의 최솟값 존재를 놓침" }
    ],
    "hiddenPremise": "절댓값 기호를 무시하고 y=x-2처럼 일반 직선으로 취급하는 전제. 실제로는 절댓값 안이 0이 되는 지점(x=2)에서 그래프가 꺾임(V자 모양).",
    "commonMistake": "③을 고르는 학생 — 절댓값 기호가 있어도 그냥 일차함수(직선)라고 생각.",
    "lukaExplain": "y=|x-2|는 절댓값 안(x-2)이 0이 되는 x=2에서 V자 모양으로 꺾여. x=2일 때 y=0이 최솟값이고, 그 외에는 항상 0보다 커. 절댓값 기호가 붙으면 무조건 직선이 아니라 꺾인 그래프가 된다는 걸 기억해둬.",
    "reframe": "절댓값 함수의 그래프가 꺾이는 지점과 최솟값을 정확히 파악하는 능력."
  }
];
APPLICATION_LAB_ITEMS = APPLICATION_LAB_ITEMS.concat(APPLICATION_LAB_ITEMS_MATH_HIGH);

/* ===================== 역사 초등 추가 (hist-016 ~ hist-030, 15문항) ===================== */
var APPLICATION_LAB_ITEMS_HIST_ELEM = [
  {
    "id": "al-hist-016", "subject": "역사", "domain": "고대사", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "우리나라 최초의 국가로 알려진 나라는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "고조선", "correct": true, "trapNote": "" },
      { "label": "②", "text": "고구려", "correct": false, "trapNote": "삼국시대 국가와 혼동" },
      { "label": "③", "text": "발해", "correct": false, "trapNote": "남북국시대 국가와 혼동" },
      { "label": "④", "text": "고려", "correct": false, "trapNote": "이름이 비슷해 착각" },
      { "label": "⑤", "text": "가야", "correct": false, "trapNote": "삼국시대 소국 연맹과 혼동" }
    ],
    "hiddenPremise": "'고'로 시작하는 나라 이름이 다 비슷한 시기라고 착각하는 전제. 고조선과 고구려는 이름은 비슷해도 세워진 시기가 다름.",
    "commonMistake": "②를 고르는 학생 — 고조선과 고구려의 '고'자 때문에 헷갈림.",
    "lukaExplain": "고조선은 단군왕검이 세운 우리 역사 최초의 국가야. 고구려는 그보다 훨씬 뒤, 삼국시대에 세워진 나라고. 이름이 비슷해도 시대가 완전히 다르다는 거 기억해두자.",
    "reframe": "이름이 비슷한 국가명을 시대 순서로 구분하는 능력."
  },
  {
    "id": "al-hist-017", "subject": "역사", "domain": "고대사", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "삼국시대에 해당하지 않는 나라는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "고구려", "correct": false, "trapNote": "삼국 중 하나" },
      { "label": "②", "text": "백제", "correct": false, "trapNote": "삼국 중 하나" },
      { "label": "③", "text": "신라", "correct": false, "trapNote": "삼국 중 하나" },
      { "label": "④", "text": "발해", "correct": true, "trapNote": "" },
      { "label": "⑤", "text": "고구려·백제·신라 모두 삼국이다", "correct": false, "trapNote": "옳은 설명" }
    ],
    "hiddenPremise": "'삼국시대'라는 이름 때문에 그 시기에 존재한 나라는 무조건 삼국에 포함된다고 착각하는 전제. 발해는 신라와 같은 시기지만 삼국이 아니라 '남북국시대'의 북쪽 나라.",
    "commonMistake": "④를 삼국 중 하나로 착각하는 학생 — 발해도 옛날 나라니까 삼국에 속할 거라 짐작.",
    "lukaExplain": "삼국은 고구려·백제·신라 이 셋뿐이야. 발해는 고구려가 멸망한 뒤, 신라와 같은 시기에 북쪽에서 세워진 나라라서 '남북국시대'라고 따로 불러. 시기가 겹친다고 삼국에 포함되는 건 아니야.",
    "reframe": "삼국시대와 남북국시대의 국가 구성을 정확히 구분하는 능력."
  },
  {
    "id": "al-hist-018", "subject": "역사", "domain": "중세사", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "서연이는 '고려는 이성계가 세운 나라니까, 조선이랑 비슷한 시기에 있었을 거야'라고 말했다. 서연이의 말에서 잘못된 전제는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "고려를 이성계가 세웠다는 것", "correct": true, "trapNote": "" },
      { "label": "②", "text": "고려와 조선이 이름이 다른 나라라는 것", "correct": false, "trapNote": "의미 없는 선택지" },
      { "label": "③", "text": "고려가 옛날 나라라는 것", "correct": false, "trapNote": "맞는 내용이지만 핵심 오류는 아님" },
      { "label": "④", "text": "서연이가 고려에 대해 말했다는 것", "correct": false, "trapNote": "논지와 무관" },
      { "label": "⑤", "text": "서연이의 말은 전부 맞다", "correct": false, "trapNote": "고려는 왕건이 세웠고, 조선보다 훨씬 앞선 시대의 나라 — 전부 맞다는 건 틀림" }
    ],
    "hiddenPremise": "건국자를 헷갈리면 그 나라가 존재했던 시기까지 함께 잘못 추측하게 되는 전제. '이성계=조선'이라는 연결이 강해서 이성계가 나오면 곧 조선 시대로 착각.",
    "commonMistake": "③이나 ⑤를 고르는 학생 — 고려가 옛날 나라라는 것까지는 맞다고 느껴서 문장 전체를 맞다고 판단.",
    "lukaExplain": "서연이가 착각한 시작점은 '고려를 이성계가 세웠다'는 전제야. 고려를 세운 사람은 왕건이고, 이성계는 그보다 한참 뒤에 고려를 무너뜨리고 조선을 세운 사람이야. 건국자를 잘못 짚으면 그다음에 이어지는 '비슷한 시기'라는 추측까지 함께 틀어져버려.",
    "reframe": "하나의 잘못된 전제(건국자 오류)가 뒤따르는 추론(시대 추측)까지 연쇄적으로 틀리게 만든다는 것을 파악하는 능력."
  },
  {
    "id": "al-hist-019", "subject": "역사", "domain": "중세사", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "고려시대에 만들어진 것으로 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "팔만대장경", "correct": true, "trapNote": "" },
      { "label": "②", "text": "훈민정음", "correct": false, "trapNote": "조선 세종 때 만들어짐" },
      { "label": "③", "text": "경국대전", "correct": false, "trapNote": "조선의 법전" },
      { "label": "④", "text": "동의보감", "correct": false, "trapNote": "조선의 의학서" },
      { "label": "⑤", "text": "천상열차분야지도", "correct": false, "trapNote": "조선 태조 때 제작" }
    ],
    "hiddenPremise": "옛날 문화유산은 다 비슷한 시기에 만들어졌을 거라 짐작하는 전제. 고려와 조선은 시대가 다르고 대표 문화유산도 다름.",
    "commonMistake": "②를 고르는 학생 — 유명한 문화유산이라 다 고려 것이라 착각.",
    "lukaExplain": "팔만대장경은 고려시대에 몽골의 침입을 부처님 힘으로 물리치길 바라며 만든 거야. 훈민정음·경국대전·동의보감은 전부 조선시대 것들이야. 나라 이름과 대표 유산을 짝지어 기억해두자 — 고려→팔만대장경, 조선→훈민정음.",
    "reframe": "시대별 대표 문화유산을 정확한 왕조와 연결하는 능력."
  },
  {
    "id": "al-hist-020", "subject": "역사", "domain": "중세사", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "하준이는 '세종대왕은 태조 이성계보다 먼저 조선을 다스린 왕이니까, 조선을 세운 사람은 세종대왕일 거야'라고 말했다. 하준이의 말에서 잘못된 전제는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "세종대왕이 태조 이성계보다 먼저 조선을 다스렸다는 것", "correct": true, "trapNote": "" },
      { "label": "②", "text": "세종대왕이 조선의 왕이었다는 것", "correct": false, "trapNote": "맞는 내용" },
      { "label": "③", "text": "태조 이성계가 조선의 왕이었다는 것", "correct": false, "trapNote": "맞는 내용" },
      { "label": "④", "text": "하준이가 조선의 왕들에 대해 말했다는 것", "correct": false, "trapNote": "논지와 무관" },
      { "label": "⑤", "text": "하준이의 말은 전부 맞다", "correct": false, "trapNote": "세종대왕은 태조보다 뒤(4대 왕)이며, 조선을 세운 사람은 태조 이성계" }
    ],
    "hiddenPremise": "왕의 순서를 거꾸로 알면, 누가 나라를 세웠는지도 잘못 짚게 되는 전제. '태조'라는 호칭이 익숙하지 않아 세종대왕을 더 앞선 왕으로 착각.",
    "commonMistake": "②나 ③을 고르는 학생 — 두 왕 모두 조선의 왕이었다는 사실 자체는 맞기 때문에 문장 전체를 사실로 받아들임.",
    "lukaExplain": "하준이가 틀린 지점은 '세종대왕이 태조보다 먼저 다스렸다'는 순서야. 실제로는 태조 이성계가 조선을 세운 첫 번째 왕이고, 세종대왕은 그 뒤 4번째 왕이야. 왕의 순서를 정확히 알아야 누가 나라를 세웠는지도 헷갈리지 않아.",
    "reframe": "왕위의 순서(1대, 4대 등)를 정확히 알아야 건국자를 올바르게 짚을 수 있다는 것을 이해하는 능력."
  },
  {
    "id": "al-hist-021", "subject": "역사", "domain": "중세사", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "민서는 '거북선은 조선을 대표하는 발명품이니까, 조선을 대표하는 왕인 세종대왕이 만들었을 거야'라고 말했다. 민서의 말에서 잘못된 전제는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "조선을 대표하는 발명품은 조선을 대표하는 왕이 만들었을 것이라는 것", "correct": true, "trapNote": "" },
      { "label": "②", "text": "세종대왕이 조선을 대표하는 왕이라는 것", "correct": false, "trapNote": "널리 인정되는 평가라 오류로 보기 어려움" },
      { "label": "③", "text": "거북선이 조선시대에 사용됐다는 것", "correct": false, "trapNote": "맞는 내용" },
      { "label": "④", "text": "민서가 거북선에 대해 말했다는 것", "correct": false, "trapNote": "논지와 무관" },
      { "label": "⑤", "text": "민서의 말은 전부 맞다", "correct": false, "trapNote": "거북선은 임진왜란 때 이순신과 관련된 것으로, 세종대왕이 만든 게 아님(세종대왕은 훈민정음을 만듦)" }
    ],
    "hiddenPremise": "'그 나라를 대표하는 자랑스러운 것은 그 나라의 가장 유명한 왕이 만들었을 것'이라는 비약. 세종대왕(15세기)과 이순신(16세기 말)의 시대 차이를 무시.",
    "commonMistake": "③이나 ⑤를 고르는 학생 — 거북선이 조선시대 것이라는 사실은 맞기 때문에 문장 전체를 참으로 판단.",
    "lukaExplain": "민서 논리에서 진짜 틀린 지점은 '조선을 대표하는 것 = 세종대왕이 만든 것'이라는 전제야. 세종대왕이 만든 대표작은 훈민정음(한글)이고, 거북선은 그보다 약 150년 뒤 임진왜란 때 이순신 장군과 관련된 것이야. 같은 조선시대라고 해서 같은 사람의 업적은 아니야.",
    "reframe": "같은 왕조 안에서도 시기가 다르면 관련 인물도 다르다는 것을 짚어, '대표성'만으로 만든 사람을 단정하지 않는 능력."
  },
  {
    "id": "al-hist-022", "subject": "역사", "domain": "근현대사", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "1919년에 일어난, 일본의 지배에 저항해 전국적으로 만세를 부른 사건은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "3·1 운동", "correct": true, "trapNote": "" },
      { "label": "②", "text": "6·25 전쟁", "correct": false, "trapNote": "1950년에 일어난 다른 사건과 혼동" },
      { "label": "③", "text": "임진왜란", "correct": false, "trapNote": "조선시대 전쟁과 혼동" },
      { "label": "④", "text": "광복", "correct": false, "trapNote": "1945년 사건과 혼동" },
      { "label": "⑤", "text": "병자호란", "correct": false, "trapNote": "조선시대 전쟁과 혼동" }
    ],
    "hiddenPremise": "일본과 관련된 역사적 사건은 다 비슷한 시기라고 뭉뚱그려 생각하는 전제. 각 사건은 정확한 연도와 성격이 다름.",
    "commonMistake": "④를 고르는 학생 — 만세를 부르는 게 '해방'과 같은 느낌이라 광복과 혼동.",
    "lukaExplain": "3·1 운동은 1919년 3월 1일, 일본의 식민 지배에 저항해 전국에서 '대한독립만세'를 외친 사건이야. 광복은 그보다 나중인 1945년에 실제로 해방된 걸 말해. 만세를 불렀다고 바로 독립된 게 아니라는 것도 함께 기억해두자.",
    "reframe": "독립운동 관련 사건들을 정확한 연도와 함께 구분하는 능력."
  },
  {
    "id": "al-hist-023", "subject": "역사", "domain": "근현대사", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "유진이는 '3·1 운동 때 사람들이 만세를 부르며 독립을 외쳤으니까, 그 해에 바로 광복이 됐을 거야'라고 말했다. 유진이의 말에서 잘못된 전제는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "독립을 외친 해에 실제로 독립이 이뤄졌을 것이라는 것", "correct": true, "trapNote": "" },
      { "label": "②", "text": "3·1 운동 때 사람들이 만세를 불렀다는 것", "correct": false, "trapNote": "맞는 내용" },
      { "label": "③", "text": "3·1 운동이 독립을 요구하는 운동이었다는 것", "correct": false, "trapNote": "맞는 내용" },
      { "label": "④", "text": "유진이가 3·1 운동에 대해 말했다는 것", "correct": false, "trapNote": "논지와 무관" },
      { "label": "⑤", "text": "유진이의 말은 전부 맞다", "correct": false, "trapNote": "3·1 운동은 1919년, 실제 광복은 1945년으로 26년 차이가 남" }
    ],
    "hiddenPremise": "'외침 = 실현'이라는 전제. 요구한 것과 실제로 이루어진 것 사이에 시간 차이가 있을 수 있다는 걸 생략.",
    "commonMistake": "②나 ③을 고르는 학생 — 3·1 운동에 대한 설명 자체는 맞기 때문에 문장 전체를 사실로 받아들임.",
    "lukaExplain": "유진이 말에서 틀린 전제는 '외친 해에 바로 이루어졌을 것'이라는 부분이야. 3·1 운동은 1919년, 실제 광복은 1945년이라 26년이나 차이가 나. 무언가를 요구했다고 해서 바로 그 자리에서 이뤄지는 게 아니라는 걸 기억해두면, 사건과 결과의 연도를 헷갈리지 않아.",
    "reframe": "'요구한 시점'과 '실현된 시점'을 같다고 전제하지 않고 각각의 연도를 따로 확인하는 능력."
  },
  {
    "id": "al-hist-024", "subject": "역사", "domain": "근현대사", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "재민이는 '6·25 전쟁이라는 이름은 전쟁이 끝난 날짜를 가리키는 거니까, 전쟁이 끝난 해가 1950년일 거야'라고 말했다. 재민이의 말에서 잘못된 전제는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "6·25라는 이름이 전쟁이 끝난 날짜를 가리킨다는 것", "correct": true, "trapNote": "" },
      { "label": "②", "text": "6·25 전쟁이 우리나라에서 일어났다는 것", "correct": false, "trapNote": "맞는 내용" },
      { "label": "③", "text": "전쟁에는 시작한 날과 끝난 날이 있다는 것", "correct": false, "trapNote": "맞는 내용" },
      { "label": "④", "text": "재민이가 6·25 전쟁에 대해 말했다는 것", "correct": false, "trapNote": "논지와 무관" },
      { "label": "⑤", "text": "재민이의 말은 전부 맞다", "correct": false, "trapNote": "6·25는 전쟁이 시작된 날짜(1950년 6월 25일)를 가리키며, 전쟁은 1953년 휴전협정으로 멈춤" }
    ],
    "hiddenPremise": "사건 이름에 붙은 날짜가 '끝난 날'을 의미할 거라는 잘못된 전제. 이름의 날짜가 시작점이라는 걸 확인하지 않음.",
    "commonMistake": "②나 ③을 고르는 학생 — 전쟁에 대한 배경 설명 자체는 맞기 때문에 문장 전체를 사실로 받아들임.",
    "lukaExplain": "재민이가 착각한 지점은 '6·25라는 이름이 끝난 날짜를 가리킨다'는 전제야. 실제로 6·25는 전쟁이 시작된 1950년 6월 25일을 가리키는 이름이고, 전쟁이 멈춘(휴전) 해는 1953년이야. 이름에 들어간 날짜가 항상 '끝'을 의미하지는 않는다는 걸 기억해두자.",
    "reframe": "사건 이름에 포함된 날짜가 시작인지 끝인지를 확인 없이 단정하지 않는 능력."
  },
  {
    "id": "al-hist-025", "subject": "역사", "domain": "고대사", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "삼국을 통일한 나라는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "신라", "correct": true, "trapNote": "" },
      { "label": "②", "text": "고구려", "correct": false, "trapNote": "가장 강했던 나라라 통일했을 거라 착각" },
      { "label": "③", "text": "백제", "correct": false, "trapNote": "삼국 중 하나이나 통일 주체 아님" },
      { "label": "④", "text": "발해", "correct": false, "trapNote": "삼국통일 이후에 세워진 나라와 혼동" },
      { "label": "⑤", "text": "가야", "correct": false, "trapNote": "삼국 이전에 신라에 병합된 소국 연맹" }
    ],
    "hiddenPremise": "삼국 중 영토가 가장 넓거나 강했던 나라(고구려)가 통일했을 거라 짐작하는 전제. 실제로는 신라가 당나라와 손잡고 통일함.",
    "commonMistake": "②를 고르는 학생 — 고구려가 삼국 중 가장 강하고 넓었다는 인상 때문에 통일 주체로 착각.",
    "lukaExplain": "삼국을 통일한 나라는 신라야. 신라는 당나라와 동맹을 맺고 백제(660년), 고구려(668년)를 차례로 무너뜨렸어. '가장 강한 나라 = 통일한 나라'가 아니라는 게 이 문제의 핵심 포인트야.",
    "reframe": "국력이 강한 나라와 실제 통일을 이룬 나라를 구분하는 능력."
  },
  {
    "id": "al-hist-026", "subject": "역사", "domain": "고대사", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "소율이는 '광개토대왕은 이름이 힘차게 들리니까, 나라 이름도 비슷하게 들리는 고려의 왕일 거야'라고 말했다. 소율이의 말에서 잘못된 전제는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "이름이 비슷하게 들리는 나라(고구려-고려)는 서로 이어진 같은 나라일 것이라는 것", "correct": true, "trapNote": "" },
      { "label": "②", "text": "광개토대왕이 영토를 크게 넓힌 왕이라는 것", "correct": false, "trapNote": "맞는 내용" },
      { "label": "③", "text": "고려라는 나라가 실제로 있었다는 것", "correct": false, "trapNote": "맞는 내용" },
      { "label": "④", "text": "소율이가 광개토대왕에 대해 말했다는 것", "correct": false, "trapNote": "논지와 무관" },
      { "label": "⑤", "text": "소율이의 말은 전부 맞다", "correct": false, "trapNote": "광개토대왕은 고구려의 왕이며, 고려는 고구려가 멸망하고 약 250년 뒤 왕건이 세운 별개의 나라" }
    ],
    "hiddenPremise": "이름이 비슷하게 들리면 같은 나라이거나 이어진 나라라고 착각하는 전제. '고구려'와 '고려'는 실제로는 다른 시대의 다른 나라.",
    "commonMistake": "②나 ③을 고르는 학생 — 광개토대왕과 고려에 대한 개별 사실은 맞기 때문에 문장 전체를 사실로 받아들임.",
    "lukaExplain": "소율이가 틀린 지점은 '이름이 비슷하면 같은 계열의 나라'라는 전제야. 광개토대왕은 고구려의 왕이고, 고려는 고구려가 멸망한 뒤 약 250년이 지나 왕건이 세운 완전히 다른 나라야. 이름이 닮았다고 나라가 이어진 건 아니야.",
    "reframe": "이름의 유사성과 실제 역사적 연속성을 구분해서, '비슷하게 들림'을 근거로 삼지 않는 능력."
  },
  {
    "id": "al-hist-027", "subject": "역사", "domain": "중세사", "track": "초등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "다음 중 시대 순서가 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "고조선 → 삼국시대 → 고려 → 조선", "correct": true, "trapNote": "" },
      { "label": "②", "text": "삼국시대 → 고조선 → 고려 → 조선", "correct": false, "trapNote": "고조선과 삼국시대의 순서를 반대로 앎" },
      { "label": "③", "text": "고조선 → 고려 → 삼국시대 → 조선", "correct": false, "trapNote": "고려와 삼국시대의 순서를 반대로 앎" },
      { "label": "④", "text": "조선 → 고려 → 삼국시대 → 고조선", "correct": false, "trapNote": "전체 순서를 거꾸로 앎" },
      { "label": "⑤", "text": "고조선 → 조선 → 삼국시대 → 고려", "correct": false, "trapNote": "'조선'이라는 이름 때문에 고조선 바로 다음이라 착각" }
    ],
    "hiddenPremise": "이름이 비슷하면(고조선-조선) 시대도 가까울 거라 짐작하는 전제. 실제로는 고조선과 조선 사이에 삼국시대, 고려가 있어 시간 차이가 매우 큼.",
    "commonMistake": "⑤를 고르는 학생 — '고조선' 다음이 이름이 비슷한 '조선'일 거라 착각, 사이의 긴 시간을 놓침.",
    "lukaExplain": "순서는 고조선 → 삼국시대(고구려·백제·신라) → (남북국시대: 통일신라·발해) → 고려 → 조선이야. 이름이 비슷하다고 시대도 가까운 게 아니야 — 고조선과 조선 사이엔 수천 년의 차이가 있어. 전체 흐름을 큰 그림으로 먼저 그려두면 헷갈리지 않아.",
    "reframe": "이름의 유사성에 흔들리지 않고 실제 역사적 시대 순서를 파악하는 능력."
  },
  {
    "id": "al-hist-028", "subject": "역사", "domain": "고대사", "track": "초등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "다은이는 '첨성대는 아주 오래된 유물이니까, 우리나라 최초의 나라인 고조선의 유물일 거야'라고 말했다. 다은이의 말에서 잘못된 전제는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "오래된 유물이면 가장 오래된 나라(고조선)의 것일 것이라는 것", "correct": true, "trapNote": "" },
      { "label": "②", "text": "첨성대가 오래된 유물이라는 것", "correct": false, "trapNote": "맞는 내용" },
      { "label": "③", "text": "고조선이 우리나라 최초의 국가라는 것", "correct": false, "trapNote": "맞는 내용" },
      { "label": "④", "text": "다은이가 첨성대에 대해 말했다는 것", "correct": false, "trapNote": "논지와 무관" },
      { "label": "⑤", "text": "다은이의 말은 전부 맞다", "correct": false, "trapNote": "첨성대는 신라의 천문 관측대로, 고조선보다 훨씬 뒤인 신라(경주)에서 만들어짐" }
    ],
    "hiddenPremise": "'오래됨'의 정도를 비교하지 않고, 오래된 것은 다 가장 오래된 나라의 것이라 단정하는 전제. 첨성대도 오래됐지만 고조선(기원전 2333년 건국 전승)보다는 훨씬 후대(신라)의 것.",
    "commonMistake": "②나 ③을 고르는 학생 — 각각의 사실은 맞기 때문에 연결된 문장 전체를 사실로 받아들임.",
    "lukaExplain": "다은이가 틀린 지점은 '오래된 유물 = 가장 오래된 나라의 것'이라는 전제야. 첨성대는 분명 오래됐지만, 신라(경주)의 천문 관측대야. 고조선은 그보다 훨씬 이전에 있었던 나라라서, '오래됨'의 정도를 구체적으로 비교하지 않으면 이렇게 착각하기 쉬워.",
    "reframe": "'오래됨'이라는 막연한 인상만으로 가장 오래된 대상과 연결짓지 않고, 정확한 시기를 확인하는 능력."
  },
  {
    "id": "al-hist-029", "subject": "역사", "domain": "근현대사", "track": "초등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "다음 중 일어난 순서가 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "3·1 운동 → 광복 → 6·25 전쟁", "correct": true, "trapNote": "" },
      { "label": "②", "text": "광복 → 3·1 운동 → 6·25 전쟁", "correct": false, "trapNote": "3·1운동과 광복의 순서를 반대로 앎" },
      { "label": "③", "text": "6·25 전쟁 → 3·1 운동 → 광복", "correct": false, "trapNote": "6·25 전쟁을 가장 먼저라고 착각" },
      { "label": "④", "text": "3·1 운동 → 6·25 전쟁 → 광복", "correct": false, "trapNote": "광복과 6·25 전쟁의 순서를 반대로 앎" },
      { "label": "⑤", "text": "광복 → 6·25 전쟁 → 3·1 운동", "correct": false, "trapNote": "전체 순서를 거꾸로 앎" }
    ],
    "hiddenPremise": "근현대사 사건들의 이름만 알고 정확한 연도(1919, 1945, 1950)를 몰라 순서를 감으로 나열하는 전제.",
    "commonMistake": "④를 고르는 학생 — 광복(1945) 전에 6·25 전쟁(1950)이 일어났다고 착각.",
    "lukaExplain": "연도로 기억하면 헷갈리지 않아: 3·1 운동(1919) → 광복(1945) → 6·25 전쟁(1950). 독립을 외치고(3·1운동), 실제로 독립하고(광복), 그 후에 전쟁이 났어(6·25). 연도 숫자를 순서대로 짝지어 외워두면 편해.",
    "reframe": "근현대사 주요 사건을 정확한 연도 순서로 배열하는 능력."
  },
  {
    "id": "al-hist-030", "subject": "역사", "domain": "고대사", "track": "초등", "stage": "입문",
    "difficulty": 1, "finalSparkEligible": false,
    "stem": "고구려, 백제, 신라 중 한반도 남서쪽에 위치했던 나라는?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "백제", "correct": true, "trapNote": "" },
      { "label": "②", "text": "고구려", "correct": false, "trapNote": "북쪽에 위치했던 나라" },
      { "label": "③", "text": "신라", "correct": false, "trapNote": "남동쪽에 위치했던 나라" },
      { "label": "④", "text": "발해", "correct": false, "trapNote": "훨씬 북쪽(만주 일대)에 위치했던 나라" },
      { "label": "⑤", "text": "위치는 셋 다 같다", "correct": false, "trapNote": "삼국의 지리적 위치 차이를 무시" }
    ],
    "hiddenPremise": "삼국은 이름만 다를 뿐 위치는 비슷했을 거라 짐작하는 전제. 실제로는 고구려(북)·백제(서남)·신라(동남)로 뚜렷이 구분됨.",
    "commonMistake": "③을 고르는 학생 — 백제와 신라의 위치(서남 vs 동남)를 서로 바꿔 기억.",
    "lukaExplain": "삼국의 위치를 지도로 그려보면 고구려는 북쪽, 백제는 남서쪽(한강 유역에서 시작해 점점 남서쪽으로), 신라는 남동쪽(경주 중심)이야. 위치를 지도랑 같이 기억해두면 헷갈리지 않아.",
    "reframe": "삼국의 지리적 위치를 정확히 구분하는 능력."
  }
];
APPLICATION_LAB_ITEMS = APPLICATION_LAB_ITEMS.concat(APPLICATION_LAB_ITEMS_HIST_ELEM);

/* ===================== 역사 중등 추가 (hist-031 ~ hist-049, 19문항) ===================== */
var APPLICATION_LAB_ITEMS_HIST_MID = [
  {
    "id": "al-hist-031", "subject": "역사", "domain": "고대사", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "고구려가 수나라의 대군을 물리친 전투로 알려진 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "살수대첩", "correct": true, "trapNote": "" },
      { "label": "②", "text": "귀주대첩", "correct": false, "trapNote": "고려-거란 전쟁의 전투와 혼동" },
      { "label": "③", "text": "한산도대첩", "correct": false, "trapNote": "조선-임진왜란 전투와 혼동" },
      { "label": "④", "text": "행주대첩", "correct": false, "trapNote": "조선-임진왜란 전투와 혼동" },
      { "label": "⑤", "text": "황산벌 전투", "correct": false, "trapNote": "백제-신라 전투와 혼동" }
    ],
    "hiddenPremise": "'대첩'이라는 단어가 붙으면 다 비슷한 시기·상대의 전투라고 뭉뚱그리는 전제. 각 대첩은 시대와 상대국이 다름.",
    "commonMistake": "②를 고르는 학생 — '대첩'이라는 이름만 보고 아무거나 고름. 귀주대첩은 고려-거란 전쟁.",
    "lukaExplain": "살수대첩은 고구려의 을지문덕 장군이 수나라의 대군을 살수(청천강)에서 크게 물리친 전투야. 귀주대첩은 그보다 훨씬 뒤, 고려 강감찬 장군이 거란을 물리친 전투고. '대첩'이라는 이름이 같아도 시대·상대·인물이 다 다르니 세트로 기억해야 해.",
    "reframe": "역사적 대첩들을 시대·상대국·인물 세트로 정확히 구분하는 능력."
  },
  {
    "id": "al-hist-032", "subject": "역사", "domain": "중세사", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "고려가 거란(요)의 침입을 물리친 전투로 알려진 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "귀주대첩", "correct": true, "trapNote": "" },
      { "label": "②", "text": "살수대첩", "correct": false, "trapNote": "고구려-수나라 전투와 혼동" },
      { "label": "③", "text": "한산도대첩", "correct": false, "trapNote": "조선-임진왜란 전투와 혼동" },
      { "label": "④", "text": "명량대첩", "correct": false, "trapNote": "조선-임진왜란 전투와 혼동" },
      { "label": "⑤", "text": "황산벌 전투", "correct": false, "trapNote": "백제-신라 전투와 혼동" }
    ],
    "hiddenPremise": "'대첩'이 붙은 전투를 임진왜란과 자동으로 연결짓는 전제(이순신 관련 대첩이 워낙 유명해서).",
    "commonMistake": "③·④를 고르는 학생 — '대첩'이라 하면 이순신의 해전을 먼저 떠올림.",
    "lukaExplain": "귀주대첩은 고려의 강감찬 장군이 거란의 침입을 귀주에서 크게 물리친 전투야. 이순신의 한산도대첩·명량대첩은 그보다 훨씬 뒤(조선, 임진왜란)의 일이고. 나라·시대별로 대표 전투를 짝지어 기억해두자: 고구려-살수대첩, 고려-귀주대첩, 조선(임진왜란)-한산도·명량대첩.",
    "reframe": "동일한 명칭 패턴(대첩)의 전투를 시대와 지휘관별로 정확히 매칭하는 능력."
  },
  {
    "id": "al-hist-033", "subject": "역사", "domain": "중세사", "track": "중등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "고려시대 몽골의 침입에 대한 설명으로 옳지 않은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "고려는 몽골의 침입에 맞서 강화도로 도읍을 옮겼다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "②", "text": "팔만대장경은 몽골 침입 당시 만들어졌다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "③", "text": "고려는 몽골에 항복한 적이 없다", "correct": true, "trapNote": "" },
      { "label": "④", "text": "삼별초는 몽골과의 강화에 반발해 항쟁을 이어갔다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "⑤", "text": "몽골과의 전쟁은 약 30년간 지속되었다", "correct": false, "trapNote": "옳은 설명" }
    ],
    "hiddenPremise": "삼별초의 항쟁이 있었으니 고려 전체가 끝까지 항복하지 않았을 거라 짐작하는 전제. 실제로는 고려 왕실이 몽골과 강화(항복에 가까운 화친)를 맺었고, 이에 반발한 것이 삼별초.",
    "commonMistake": "③을 옳은 설명으로 착각하는 학생 — 삼별초의 저항만 기억하고 왕실의 강화 사실을 놓침.",
    "lukaExplain": "고려 왕실은 결국 몽골과 강화를 맺고 개경으로 환도했어. 이 강화에 반발해서 끝까지 싸운 게 삼별초야. 그러니까 '고려가 항복한 적이 없다'는 건 틀린 설명 — 왕실의 강화와 삼별초의 저항은 서로 다른 이야기라는 걸 구분해야 해.",
    "reframe": "왕실의 공식 결정과 일부 세력의 독자적 저항을 구분해서 이해하는 능력."
  },
  {
    "id": "al-hist-034", "subject": "역사", "domain": "중세사", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "고려시대의 신분제도에 대한 설명으로 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "귀족, 중류층, 양민, 천민으로 구성되었다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "양반, 중인, 상민, 천민으로 구성되었다", "correct": false, "trapNote": "조선의 신분제도와 혼동" },
      { "label": "③", "text": "신분제도가 존재하지 않았다", "correct": false, "trapNote": "역사적 사실과 반대" },
      { "label": "④", "text": "골품제로 신분이 나뉘었다", "correct": false, "trapNote": "신라의 신분제도와 혼동" },
      { "label": "⑤", "text": "모든 백성이 평등하게 대우받았다", "correct": false, "trapNote": "역사적 사실과 반대" }
    ],
    "hiddenPremise": "옛날 신분제도는 다 '양반·중인·상민·천민'이었을 거라 조선의 제도를 모든 왕조에 그대로 적용하는 전제.",
    "commonMistake": "②를 고르는 학생 — 가장 익숙한 조선의 신분제(양반·중인·상민·천민)를 고려에도 그대로 적용.",
    "lukaExplain": "고려의 신분제도는 귀족·중류층·양민·천민으로 나뉘어. 양반·중인·상민·천민은 조선의 신분제야. 골품제는 그보다 더 이전인 신라의 제도고. 왕조마다 신분제 이름이 다르다는 걸 꼭 구분해서 기억해야 해.",
    "reframe": "왕조별로 다른 신분제도의 명칭과 구성을 정확히 구분하는 능력."
  },
  {
    "id": "al-hist-035", "subject": "역사", "domain": "중세사", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "조선의 신분제도에 대한 설명으로 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "양반, 중인, 상민, 천민으로 구성되었다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "귀족, 중류층, 양민, 천민으로 구성되었다", "correct": false, "trapNote": "고려의 신분제도와 혼동" },
      { "label": "③", "text": "골품제로 신분이 나뉘었다", "correct": false, "trapNote": "신라의 신분제도와 혼동" },
      { "label": "④", "text": "신분제도가 조선 후기에 처음 생겼다", "correct": false, "trapNote": "역사적 사실과 반대" },
      { "label": "⑤", "text": "노비 제도는 존재하지 않았다", "correct": false, "trapNote": "역사적 사실과 반대(천민에 노비 포함)" }
    ],
    "hiddenPremise": "왕조가 바뀌어도 신분제도의 이름이나 구성은 크게 다르지 않을 거라 짐작하는 전제.",
    "commonMistake": "②를 고르는 학생 — 고려의 신분제(귀족·중류층·양민·천민)와 조선의 신분제를 혼동.",
    "lukaExplain": "조선의 신분제는 양반·중인·상민·천민 네 계층이야. 고려는 귀족·중류층·양민·천민, 신라는 골품제였지. 왕조가 바뀌면 신분제 이름도 함께 바뀐다는 걸 기억해두면 좋아.",
    "reframe": "조선 신분제의 명칭과 구성을 다른 왕조와 구분해 정확히 아는 능력."
  },
  {
    "id": "al-hist-036", "subject": "역사", "domain": "근현대사", "track": "중등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": true,
    "stem": "임진왜란에 대한 설명으로 옳지 않은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "1592년 일본의 침입으로 시작되었다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "②", "text": "이순신 장군이 한산도대첩에서 승리했다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "③", "text": "임진왜란은 병자호란보다 나중에 일어났다", "correct": true, "trapNote": "" },
      { "label": "④", "text": "권율 장군이 행주대첩에서 승리했다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "⑤", "text": "임진왜란 이후에도 정유재란이 이어졌다", "correct": false, "trapNote": "옳은 설명" }
    ],
    "hiddenPremise": "임진왜란과 병자호란 둘 다 조선시대 외침이니 순서는 아무렇게나 기억해도 될 거라 짐작하는 전제. 실제로는 임진왜란(1592)이 병자호란(1636)보다 먼저 일어남.",
    "commonMistake": "③을 옳다고 착각하는 학생 — 두 전쟁의 순서를 정확한 연도로 기억하지 못함.",
    "lukaExplain": "임진왜란은 1592년 일본의 침입, 병자호란은 그보다 훨씬 뒤인 1636년 청나라의 침입이야. 임진왜란이 먼저 일어났어. '왜란(일본)'과 '호란(청·여진족)'을 상대국과 함께 연도 순서로 기억해두면 안 헷갈려.",
    "reframe": "조선시대 두 차례의 외침을 정확한 연도 순서와 상대국으로 구분하는 능력."
  },
  {
    "id": "al-hist-037", "subject": "역사", "domain": "근현대사", "track": "중등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "병자호란에 대한 설명으로 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "청나라의 침입으로 인조가 남한산성에서 항전하다 항복했다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "일본의 침입으로 이순신이 활약했다", "correct": false, "trapNote": "임진왜란과 혼동" },
      { "label": "③", "text": "몽골의 침입으로 강화도로 천도했다", "correct": false, "trapNote": "고려-몽골 침입과 혼동" },
      { "label": "④", "text": "수나라의 침입을 살수에서 물리쳤다", "correct": false, "trapNote": "고구려-수나라 전쟁과 혼동" },
      { "label": "⑤", "text": "거란의 침입을 귀주에서 물리쳤다", "correct": false, "trapNote": "고려-거란 전쟁과 혼동" }
    ],
    "hiddenPremise": "'외침'이라는 공통점만 보고 임진왜란·몽골 침입·병자호란 등을 뒤섞어 기억하는 전제. 각 사건은 침입국·시대·결과가 모두 다름.",
    "commonMistake": "②를 고르는 학생 — 조선시대 전쟁이라 하면 임진왜란(일본)부터 떠올려 병자호란과 혼동.",
    "lukaExplain": "병자호란은 청나라(여진족이 세운 나라)가 조선을 침입한 전쟁이야. 인조 임금이 남한산성에서 버티다 결국 항복했지(삼전도의 굴욕). 임진왜란은 일본, 병자호란은 청나라 — 침입한 나라가 다르다는 걸 정확히 짝지어 기억해야 해.",
    "reframe": "각 외침 사건의 침입국과 결과를 정확히 매칭하는 능력."
  },
  {
    "id": "al-hist-038", "subject": "역사", "domain": "근현대사", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "동학농민운동이 일어난 주된 배경으로 가장 적절한 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "탐관오리의 수탈과 사회 모순에 대한 반발", "correct": true, "trapNote": "" },
      { "label": "②", "text": "일본의 직접적인 식민 통치에 대한 저항", "correct": false, "trapNote": "1894년은 아직 식민 통치 이전 시기임을 놓침" },
      { "label": "③", "text": "고려 왕실의 부패", "correct": false, "trapNote": "시대(고려)를 잘못 연결" },
      { "label": "④", "text": "몽골의 침입에 대한 저항", "correct": false, "trapNote": "완전히 다른 시대·사건과 혼동" },
      { "label": "⑤", "text": "6·25 전쟁 중 발생한 저항운동", "correct": false, "trapNote": "시대 순서를 완전히 뒤바꿈" }
    ],
    "hiddenPremise": "'저항운동'이라는 단어를 보면 무조건 일본의 식민 통치에 대한 저항일 거라 짐작하는 전제. 동학농민운동(1894)은 아직 조선이 일본의 완전한 식민지가 되기 전(1910년 이전) 발생한, 국내 정치 부패에 대한 저항.",
    "commonMistake": "②를 고르는 학생 — '농민운동=일본에 대한 저항'이라는 성급한 연결.",
    "lukaExplain": "동학농민운동(1894)은 탐관오리의 수탈, 즉 조선 내부의 부패한 관리들에 맞선 농민들의 봉기야. 이때는 아직 일본의 식민 통치(1910년부터) 이전이었어. 시기를 정확히 따져보면 '일본 식민 통치에 대한 저항'이라는 답이 시대상 맞지 않는다는 걸 알 수 있어.",
    "reframe": "역사적 사건의 정확한 연도를 기준으로 배경과 성격을 판단하는 능력."
  },
  {
    "id": "al-hist-039", "subject": "역사", "domain": "근현대사", "track": "중등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "다음 중 일어난 순서가 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "동학농민운동 → 을사늑약 → 국권 피탈(경술국치)", "correct": true, "trapNote": "" },
      { "label": "②", "text": "을사늑약 → 동학농민운동 → 국권 피탈", "correct": false, "trapNote": "동학농민운동과 을사늑약의 순서를 반대로 앎" },
      { "label": "③", "text": "국권 피탈 → 동학농민운동 → 을사늑약", "correct": false, "trapNote": "국권 피탈을 가장 먼저라고 착각" },
      { "label": "④", "text": "동학농민운동 → 국권 피탈 → 을사늑약", "correct": false, "trapNote": "을사늑약과 국권 피탈의 순서를 반대로 앎" },
      { "label": "⑤", "text": "국권 피탈 → 을사늑약 → 동학농민운동", "correct": false, "trapNote": "전체 순서를 거꾸로 앎" }
    ],
    "hiddenPremise": "일본의 조선 침탈 과정이 한 번에 이루어졌다고 생각해 세부 사건들의 순서를 신경 쓰지 않는 전제. 실제로는 단계적으로 진행됨(1894→1905→1910).",
    "commonMistake": "④를 고르는 학생 — 을사늑약(외교권 박탈)과 국권 피탈(주권 완전 상실)의 순서를 헷갈림.",
    "lukaExplain": "연도로 정리하면: 동학농민운동(1894) → 을사늑약(1905, 외교권을 빼앗김) → 국권 피탈(1910, 나라를 완전히 빼앗김). 일본의 침탈은 한 번에 일어난 게 아니라 여러 단계를 거쳤다는 걸 기억해두면 순서가 헷갈리지 않아.",
    "reframe": "일본의 조선 침탈 과정을 단계별 연도로 정확히 파악하는 능력."
  },
  {
    "id": "al-hist-040", "subject": "역사", "domain": "근현대사", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "대한민국 임시정부가 수립된 지역은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "상하이", "correct": true, "trapNote": "" },
      { "label": "②", "text": "서울", "correct": false, "trapNote": "국내 지역이라 착각" },
      { "label": "③", "text": "도쿄", "correct": false, "trapNote": "일본 지역과 혼동" },
      { "label": "④", "text": "베이징", "correct": false, "trapNote": "중국의 다른 도시와 혼동" },
      { "label": "⑤", "text": "평양", "correct": false, "trapNote": "국내 지역이라 착각" }
    ],
    "hiddenPremise": "임시정부는 우리나라를 대표하는 정부니까 국내(서울·평양)에 세워졌을 거라 짐작하는 전제. 실제로는 일본의 감시를 피해 중국 상하이에서 수립됨.",
    "commonMistake": "②를 고르는 학생 — '정부'라는 이름 때문에 당연히 국내에 세워졌을 거라 짐작.",
    "lukaExplain": "대한민국 임시정부는 1919년, 일본의 감시가 미치지 않는 중국 상하이에서 수립됐어. 국내에서는 일본이 강하게 통제하고 있어서 독립운동을 이어가기 어려웠거든. 그래서 나라 밖(상하이)에 임시로 정부를 세운 거야.",
    "reframe": "임시정부 수립의 배경(국외 활동의 필요성)과 정확한 위치를 함께 이해하는 능력."
  },
  {
    "id": "al-hist-041", "subject": "역사", "domain": "고대사", "track": "중등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "발해에 대한 설명으로 옳지 않은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "발해는 백제 유민이 중심이 되어 세운 나라이다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "발해는 고구려 계승 의식을 가지고 있었다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "③", "text": "발해는 통일신라와 같은 시기에 존재했다", "correct": false, "trapNote": "옳은 설명(남북국시대)" },
      { "label": "④", "text": "발해는 대조영이 세운 나라이다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "⑤", "text": "발해는 '해동성국'이라 불릴 만큼 강성했던 시기가 있었다", "correct": false, "trapNote": "옳은 설명" }
    ],
    "hiddenPremise": "삼국 유민이 세운 나라라면 아무 유민이나 가능하다고 짐작하는 전제. 실제로는 발해는 고구려 유민(대조영)이 중심이 되어 세운 나라이지 백제 유민이 아님.",
    "commonMistake": "①을 옳은 설명으로 착각하는 학생 — 발해를 세운 유민 집단을 백제로 잘못 기억.",
    "lukaExplain": "발해는 고구려가 멸망한 뒤, 고구려 유민 출신인 대조영이 세운 나라야. 그래서 발해는 스스로 고구려를 계승했다는 의식을 강하게 가지고 있었어. 백제 유민이 아니라 고구려 유민이라는 게 핵심 포인트야.",
    "reframe": "발해 건국의 주체 세력(고구려 유민)을 정확히 아는 능력."
  },
  {
    "id": "al-hist-042", "subject": "역사", "domain": "중세사", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "고려의 과거제도를 처음 실시한 왕은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "광종", "correct": true, "trapNote": "" },
      { "label": "②", "text": "태조 왕건", "correct": false, "trapNote": "고려 건국자와 혼동" },
      { "label": "③", "text": "성종", "correct": false, "trapNote": "고려의 다른 왕과 혼동" },
      { "label": "④", "text": "세종대왕", "correct": false, "trapNote": "조선의 왕과 혼동" },
      { "label": "⑤", "text": "공민왕", "correct": false, "trapNote": "고려 말의 다른 왕과 혼동" }
    ],
    "hiddenPremise": "고려의 대표적인 제도는 다 건국자(왕건)가 만들었을 거라 짐작하는 전제. 실제로는 4대 왕인 광종이 과거제도를 처음 도입.",
    "commonMistake": "②를 고르는 학생 — 고려 하면 왕건이 가장 먼저 떠올라서 웬만한 제도는 다 왕건이 만들었다고 착각.",
    "lukaExplain": "과거제도는 고려 4대 왕인 광종이 처음 실시했어. 중국(후주)에서 온 쌍기의 건의를 받아들인 거지. 나라를 세운 왕(왕건)과 나라를 발전시킨 후대 왕(광종)의 업적을 구분해서 기억해야 해.",
    "reframe": "건국자와 후대 왕의 서로 다른 업적을 정확히 구분하는 능력."
  },
  {
    "id": "al-hist-043", "subject": "역사", "domain": "중세사", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "조선의 기본 법전으로, 통치 체제의 기틀을 마련한 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "경국대전", "correct": true, "trapNote": "" },
      { "label": "②", "text": "팔만대장경", "correct": false, "trapNote": "고려시대 불교 경전과 혼동" },
      { "label": "③", "text": "삼국사기", "correct": false, "trapNote": "고려시대 역사서와 혼동" },
      { "label": "④", "text": "동의보감", "correct": false, "trapNote": "조선의 의학서와 혼동(법전 아님)" },
      { "label": "⑤", "text": "훈민정음", "correct": false, "trapNote": "조선의 문자 체계와 혼동(법전 아님)" }
    ],
    "hiddenPremise": "조선시대의 유명한 책이면 다 비슷한 성격(법전)일 거라 뭉뚱그리는 전제. 훈민정음(문자), 동의보감(의학서), 경국대전(법전)은 성격이 전혀 다름.",
    "commonMistake": "④·⑤를 고르는 학생 — 조선시대의 유명한 책이라는 것만 기억하고 각각의 성격(의학서 vs 법전)을 구분 못함.",
    "lukaExplain": "경국대전은 조선의 기본 법전으로, 나라를 다스리는 기틀이 되는 법을 정리한 책이야. 동의보감은 의학서, 훈민정음은 문자 체계, 삼국사기는 역사서 — 다 조선(또는 고려) 시대의 유명한 책이지만 성격이 완전히 달라. 이름과 '무슨 책인지'를 함께 기억해야 해.",
    "reframe": "같은 시대의 여러 문헌을 성격(법전/의학서/역사서/문자)별로 구분하는 능력."
  },
  {
    "id": "al-hist-044", "subject": "역사", "domain": "고대사", "track": "중등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "신라의 골품제에 대한 설명으로 옳지 않은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "골품에 따라 관직 승진의 상한선이 정해져 있었다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "②", "text": "골품제는 개인의 능력만으로 신분 이동이 자유로웠다", "correct": true, "trapNote": "" },
      { "label": "③", "text": "성골과 진골은 왕이 될 수 있는 신분이었다", "correct": false, "trapNote": "옳은 설명(성골 소멸 후 진골이 왕위 계승)" },
      { "label": "④", "text": "골품에 따라 집의 크기, 옷의 색깔 등 일상생활까지 제한받았다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "⑤", "text": "6두품은 능력이 뛰어나도 일정 관직 이상 오르기 어려웠다", "correct": false, "trapNote": "옳은 설명" }
    ],
    "hiddenPremise": "신분제도라고 하면 어느 정도는 노력으로 극복할 수 있었을 거라 현대적 관점을 과거에 그대로 적용하는 전제. 골품제는 태어날 때부터 정해진 혈통에 따라 엄격히 제한되는 폐쇄적 신분제였음.",
    "commonMistake": "②를 옳은 설명으로 착각하는 학생 — 신분 상승이 어느 정도는 가능했을 거라 짐작.",
    "lukaExplain": "골품제는 태어날 때부터 신분(골품)이 정해지고, 개인의 능력과 상관없이 그 틀 안에서만 살아야 했던 제도야. 아무리 능력이 뛰어나도 6두품은 일정 관직(아찬) 이상 오를 수 없었어. '노력하면 신분이 바뀔 수 있었다'는 현대적 생각을 그대로 적용하면 틀리기 쉬워.",
    "reframe": "폐쇄적 신분제(골품제)의 엄격한 제한을 현대적 관점과 구분해 이해하는 능력."
  },
  {
    "id": "al-hist-045", "subject": "역사", "domain": "근현대사", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "갑오개혁에 대한 설명으로 가장 적절한 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "신분제 폐지 등 근대적 개혁을 시도했다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "일본의 식민 통치가 시작된 사건이다", "correct": false, "trapNote": "국권 피탈(1910)과 혼동" },
      { "label": "③", "text": "고려시대에 일어난 개혁이다", "correct": false, "trapNote": "시대(고려)를 잘못 연결" },
      { "label": "④", "text": "동학농민운동을 진압하기 위한 군사 작전이다", "correct": false, "trapNote": "개혁과 군사 진압을 혼동" },
      { "label": "⑤", "text": "3·1 운동 이후에 일어난 개혁이다", "correct": false, "trapNote": "순서를 반대로 앎(갑오개혁이 먼저, 1894)" }
    ],
    "hiddenPremise": "1894년 전후의 사건들(동학농민운동, 갑오개혁, 을사늑약 등)을 뭉뚱그려서 순서나 성격을 구분하지 않는 전제.",
    "commonMistake": "⑤를 고르는 학생 — 근대적 사건이라 하면 3·1 운동(1919) 이후일 거라 막연히 짐작, 실제로는 갑오개혁(1894)이 훨씬 먼저.",
    "lukaExplain": "갑오개혁(1894)은 신분제 폐지, 과거제 폐지 등 조선을 근대적인 나라로 바꾸려 한 개혁이야. 동학농민운동과 비슷한 시기지만 서로 다른 사건이고, 3·1 운동(1919)보다 25년이나 앞서 일어났어. 연도를 기준으로 사건들을 순서대로 정리해두면 헷갈리지 않아.",
    "reframe": "근대 개혁과 저항운동을 정확한 연도로 구분해 순서를 파악하는 능력."
  },
  {
    "id": "al-hist-046", "subject": "역사", "domain": "고대사", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "백제의 전성기를 이끈 왕으로, 영토를 크게 넓힌 왕은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "근초고왕", "correct": true, "trapNote": "" },
      { "label": "②", "text": "광개토대왕", "correct": false, "trapNote": "고구려의 왕과 혼동" },
      { "label": "③", "text": "진흥왕", "correct": false, "trapNote": "신라의 왕과 혼동" },
      { "label": "④", "text": "온조왕", "correct": false, "trapNote": "백제의 건국자와 혼동(전성기 왕 아님)" },
      { "label": "⑤", "text": "무령왕", "correct": false, "trapNote": "백제의 다른 왕과 혼동" }
    ],
    "hiddenPremise": "삼국의 전성기를 이끈 왕이 다 비슷하게 유명해서 나라와 상관없이 아무렇게나 골라도 된다는 전제. 각 나라의 전성기 왕은 정확히 구분됨.",
    "commonMistake": "②를 고르는 학생 — '전성기 왕' 하면 가장 유명한 광개토대왕(고구려)을 먼저 떠올림.",
    "lukaExplain": "백제의 전성기는 근초고왕 때야. 고구려의 전성기는 광개토대왕·장수왕, 신라의 전성기는 진흥왕 때고. 삼국 각각의 전성기 왕을 나라별로 짝지어 기억해두면 헷갈리지 않아 — 백제-근초고왕, 고구려-광개토대왕, 신라-진흥왕.",
    "reframe": "삼국 각각의 전성기를 이끈 왕을 정확히 매칭하는 능력."
  },
  {
    "id": "al-hist-047", "subject": "역사", "domain": "고대사", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": false,
    "stem": "신라의 전성기를 이끌며 한강 유역을 차지한 왕은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "진흥왕", "correct": true, "trapNote": "" },
      { "label": "②", "text": "근초고왕", "correct": false, "trapNote": "백제의 왕과 혼동" },
      { "label": "③", "text": "광개토대왕", "correct": false, "trapNote": "고구려의 왕과 혼동" },
      { "label": "④", "text": "무열왕", "correct": false, "trapNote": "삼국통일 시기 신라의 다른 왕과 혼동" },
      { "label": "⑤", "text": "혁거세", "correct": false, "trapNote": "신라의 건국자와 혼동" }
    ],
    "hiddenPremise": "신라와 관련된 유명한 왕이면 아무나 전성기 왕으로 짐작하는 전제.",
    "commonMistake": "④를 고르는 학생 — 무열왕(삼국통일 관련)과 진흥왕(전성기, 영토 확장)의 역할을 혼동.",
    "lukaExplain": "진흥왕은 신라의 전성기를 이끈 왕으로, 한강 유역을 차지하고 영토를 크게 넓혔어. 무열왕은 그보다 나중에 삼국통일의 기초를 닦은 왕이고. 두 왕 모두 유명하지만 시기와 업적이 달라 — 진흥왕은 '영토 확장', 무열왕은 '통일 준비'로 구분해서 기억하자.",
    "reframe": "신라의 서로 다른 시기 왕들의 업적을 정확히 구분하는 능력."
  },
  {
    "id": "al-hist-048", "subject": "역사", "domain": "근현대사", "track": "중등", "stage": "기본",
    "difficulty": 2, "finalSparkEligible": true,
    "stem": "흥선대원군이 실시한 정책으로 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "서양과의 통상을 거부하는 통상수교거부정책(쇄국정책)을 폈다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "서양 문물을 적극적으로 받아들이는 개방정책을 폈다", "correct": false, "trapNote": "실제 정책과 정반대" },
      { "label": "③", "text": "신분제를 전면 폐지했다", "correct": false, "trapNote": "갑오개혁(1894)의 내용과 혼동" },
      { "label": "④", "text": "한글을 창제했다", "correct": false, "trapNote": "세종대왕의 업적과 혼동" },
      { "label": "⑤", "text": "과거제도를 처음 도입했다", "correct": false, "trapNote": "고려 광종의 업적과 혼동" }
    ],
    "hiddenPremise": "조선 후기의 정책이면 다 개방적이고 근대적이었을 거라 짐작하는 전제. 실제로 흥선대원군은 서양과의 통상을 거부하는 쇄국정책을 폈음.",
    "commonMistake": "②를 고르는 학생 — '후기니까 점점 개방적으로 바뀌었을 것'이라는 막연한 시대 흐름 추측.",
    "lukaExplain": "흥선대원군은 서양의 통상 요구를 거부하는 통상수교거부정책(쇄국정책)을 폈어. 병인양요·신미양요 같은 서양과의 충돌도 이 시기에 있었지. 시대가 흐른다고 무조건 개방적으로 변한 게 아니라는 걸 기억해두면 좋아.",
    "reframe": "역사적 흐름을 '무조건 개방적으로 발전'이라 단정하지 않고 사실에 근거해 판단하는 능력."
  },
  {
    "id": "al-hist-049", "subject": "역사", "domain": "근현대사", "track": "중등", "stage": "심화",
    "difficulty": 3, "finalSparkEligible": false,
    "stem": "다음 중 일어난 순서가 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "병인양요 → 갑오개혁 → 을사늑약 → 국권 피탈", "correct": true, "trapNote": "" },
      { "label": "②", "text": "갑오개혁 → 병인양요 → 을사늑약 → 국권 피탈", "correct": false, "trapNote": "병인양요와 갑오개혁의 순서를 반대로 앎" },
      { "label": "③", "text": "을사늑약 → 병인양요 → 갑오개혁 → 국권 피탈", "correct": false, "trapNote": "을사늑약을 가장 먼저라고 착각" },
      { "label": "④", "text": "병인양요 → 을사늑약 → 갑오개혁 → 국권 피탈", "correct": false, "trapNote": "갑오개혁과 을사늑약의 순서를 반대로 앎" },
      { "label": "⑤", "text": "국권 피탈 → 을사늑약 → 갑오개혁 → 병인양요", "correct": false, "trapNote": "전체 순서를 거꾸로 앎" }
    ],
    "hiddenPremise": "근현대사 사건이 너무 많아서 정확한 연도를 몰라도 대충 익숙한 이름 순서대로 나열해도 될 거라 짐작하는 전제.",
    "commonMistake": "④를 고르는 학생 — 을사늑약(1905)과 갑오개혁(1894)의 순서를 헷갈림.",
    "lukaExplain": "연도로 정리하면: 병인양요(1866) → 갑오개혁(1894) → 을사늑약(1905) → 국권 피탈(1910). 조선 후기부터 나라를 잃기까지 여러 사건이 있었는데, 연도를 하나씩 짝지어 순서를 외워두면 시험에서 훨씬 든든해.",
    "reframe": "근현대사의 여러 사건을 정확한 연도 순서로 배열하는 능력."
  }
];
APPLICATION_LAB_ITEMS = APPLICATION_LAB_ITEMS.concat(APPLICATION_LAB_ITEMS_HIST_MID);

/* ===================== 역사 고등 추가 (hist-050 ~ hist-068, 19문항) ===================== */
var APPLICATION_LAB_ITEMS_HIST_HIGH = [
  {
    "id": "al-hist-050", "subject": "역사", "domain": "고대사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "신라의 삼국통일에 대한 평가로 다음 자료가 뒷받침하는 주장으로 가장 적절한 것은?\n\n'신라는 통일 과정에서 당나라를 끌어들였으나, 이후 당의 한반도 지배 야욕에 맞서 나당전쟁을 벌여 실질적인 자주적 통일을 이루었다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "신라의 통일은 외세를 이용했지만 이후 그 외세를 몰아낸 자주적 성격도 함께 지닌다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "신라의 통일은 처음부터 끝까지 완전히 자주적으로 이루어졌다", "correct": false, "trapNote": "당나라의 개입 사실을 무시" },
      { "label": "③", "text": "신라의 통일은 당나라에 의해 이루어진 것이므로 의미가 없다", "correct": false, "trapNote": "나당전쟁으로 당을 몰아낸 사실을 무시" },
      { "label": "④", "text": "신라는 삼국통일에 실패했다", "correct": false, "trapNote": "자료의 핵심 내용과 반대" },
      { "label": "⑤", "text": "당나라가 삼국통일의 주체였다", "correct": false, "trapNote": "자료의 논지와 반대" }
    ],
    "hiddenPremise": "'외세를 이용했다'와 '자주적이다'가 양립할 수 없다는 이분법적 전제. 자료는 두 측면이 함께 존재했다고 설명하고 있음.",
    "commonMistake": "②·③처럼 한쪽 측면(외세 이용 또는 자주성)만 보고 극단적으로 판단하는 경우.",
    "lukaExplain": "자료를 잘 보면 '당을 끌어들였으나(외세 이용) → 이후 당과 싸워 몰아냈다(자주적 통일)'는 두 단계를 다 말하고 있어. 역사적 사건은 한 단어로 딱 잘라 평가하기보다, 과정 전체를 봐야 정확한 이해가 가능해.",
    "reframe": "역사적 사건의 복합적 성격(외세 이용+자주적 극복)을 자료에 근거해 균형 있게 평가하는 능력."
  },
  {
    "id": "al-hist-051", "subject": "역사", "domain": "중세사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "다음 정책이 시행된 배경으로 가장 적절한 것은?\n\n'고려 광종은 노비안검법을 실시해 불법으로 노비가 된 자를 양민으로 해방시켰다.'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "호족 세력을 약화시키고 왕권을 강화하기 위해", "correct": true, "trapNote": "" },
      { "label": "②", "text": "농업 생산량을 늘리기 위해", "correct": false, "trapNote": "정책의 정치적 목적을 놓친 경제적 해석" },
      { "label": "③", "text": "불교를 장려하기 위해", "correct": false, "trapNote": "관련 없는 종교적 목적으로 오해" },
      { "label": "④", "text": "거란의 침입에 대비하기 위해", "correct": false, "trapNote": "군사적 목적과 혼동" },
      { "label": "⑤", "text": "과거제도를 대체하기 위해", "correct": false, "trapNote": "노비안검법과 과거제를 서로 대체 관계로 착각" }
    ],
    "hiddenPremise": "노비를 해방시키는 정책을 단순한 '선의'나 경제 정책으로만 해석하는 전제. 실제로는 호족들이 불법으로 소유한 노비(사병·경제 기반)를 줄여 호족 세력을 약화시키려는 정치적 목적이 큼.",
    "commonMistake": "②를 고르는 학생 — 노비를 양민으로 바꾸면 세금 내는 인구가 늘어난다는 경제적 측면만 생각.",
    "lukaExplain": "노비안검법은 호족들이 불법으로 차지한 노비를 양민으로 되돌려서, 호족의 경제력·군사력(사병)을 약화시키려는 정책이었어. 같은 시기 광종이 과거제도도 도입했는데, 둘 다 '호족 견제 + 왕권 강화'라는 같은 목적을 가진 정책들이야. 겉으로 보이는 정책의 내용(노비 해방)보다 그 뒤에 숨은 정치적 목적을 파악하는 게 중요해.",
    "reframe": "정책의 표면적 내용이 아니라 그 뒤에 숨은 정치적 의도를 파악하는 능력."
  },
  {
    "id": "al-hist-052", "subject": "역사", "domain": "중세사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": true,
    "stem": "다음 중 무신정변(1170) 이후 고려 사회에 대한 설명으로 옳지 않은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "무신정변 이후에도 국왕이 실질적인 통치권을 그대로 유지했다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "무신들이 정권을 장악하며 문신 중심 사회 질서가 크게 흔들렸다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "③", "text": "최씨 무신정권이 오랜 기간 권력을 독점했다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "④", "text": "무신정권기에 하층민의 봉기(망이·망소이의 난 등)가 여러 차례 일어났다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "⑤", "text": "무신정변으로 문벌귀족 중심의 지배 질서가 무너지는 계기가 되었다", "correct": false, "trapNote": "옳은 설명" }
    ],
    "hiddenPremise": "'정변'이 일어나도 왕은 상징적으로 자리를 지켰으니 실권도 유지했을 거라 짐작하는 전제. 실제로는 무신정변 이후 실권은 무신(이후 최씨 정권)에게 넘어가고 왕은 명목상의 존재로 전락함.",
    "commonMistake": "①을 옳은 설명으로 착각하는 학생 — 왕이 폐위되지 않고 자리를 지켰다는 사실만 보고 실권도 유지했다고 판단.",
    "lukaExplain": "무신정변 이후 왕은 자리는 지켰지만 실제 권력은 무신들, 특히 나중에는 최씨 정권(최충헌 등)에게 완전히 넘어갔어. '왕좌에 앉아 있다'와 '실제로 다스린다'는 다른 이야기야 — 명목상의 지위와 실질적 권력을 구분해서 봐야 해.",
    "reframe": "정치적 지위(왕좌)와 실질적 권력(통치권)을 구분해서 역사적 상황을 판단하는 능력."
  },
  {
    "id": "al-hist-053", "subject": "역사", "domain": "중세사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "다음 중 조선의 통치 체제에 대한 설명으로 옳지 않은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "의정부는 삼사(사헌부·사간원·홍문관)의 감찰과 견제를 전혀 받지 않는 독립 기구였다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "삼사는 언론 기능을 통해 권력의 견제와 균형을 담당했다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "③", "text": "의정부는 국정을 총괄하는 최고 행정기구였다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "④", "text": "6조는 실제 행정 업무를 분담해 처리했다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "⑤", "text": "왕과 신하들은 경연을 통해 학문과 정책을 논의했다", "correct": false, "trapNote": "옳은 설명" }
    ],
    "hiddenPremise": "높은 지위의 기구(의정부)는 다른 기구의 견제를 받지 않았을 거라 짐작하는 전제. 실제로는 조선의 통치 체제가 권력 분산과 상호 견제를 중요한 원리로 설계됨.",
    "commonMistake": "①을 옳은 설명으로 착각하는 학생 — 의정부가 최고 행정기구라는 점만 보고 견제받지 않는 독립 기구라고 확대 해석.",
    "lukaExplain": "조선은 권력이 한쪽에 집중되지 않도록 설계됐어. 삼사(사헌부·사간원·홍문관)는 의정부나 왕의 정책까지도 비판하고 견제하는 언론 기능을 가졌지. '최고 기구니까 아무도 못 건드린다'는 생각은 조선의 견제와 균형 원리를 놓치는 거야.",
    "reframe": "권력기구 간의 상호 견제 구조를 이해하고 지위의 높음과 견제 여부를 구분하는 능력."
  },
  {
    "id": "al-hist-054", "subject": "역사", "domain": "근현대사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": true,
    "stem": "다음 두 사건의 공통된 성격으로 가장 적절한 것은?\n\n'임술농민봉기(1862)'와 '동학농민운동(1894)'",
    "passage": "",
    "choices": [
      { "label": "①", "text": "삼정의 문란 등 지배층의 수탈에 저항한 민중 운동이었다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "둘 다 일본의 식민 통치에 저항한 항일 운동이었다", "correct": false, "trapNote": "두 사건 모두 일본의 완전한 식민 지배 이전에 일어남" },
      { "label": "③", "text": "둘 다 왕권 강화를 목표로 한 운동이었다", "correct": false, "trapNote": "민중 봉기의 목적을 왕권과 관련짓는 오류" },
      { "label": "④", "text": "둘 다 성공적으로 신분제 폐지를 이끌어냈다", "correct": false, "trapNote": "봉기 자체가 신분제를 직접 폐지한 건 아님(갑오개혁에서 폐지)" },
      { "label": "⑤", "text": "둘 다 외국 군대와의 직접적인 전투였다", "correct": false, "trapNote": "임술농민봉기는 국내 지배층에 대한 저항" }
    ],
    "hiddenPremise": "조선 후기의 저항운동은 무조건 '항일'이었을 거라 짐작하는 전제. 실제로 두 사건 모두 일본의 식민 통치 이전, 국내 지배층의 수탈과 부패에 대한 저항이 핵심.",
    "commonMistake": "②를 고르는 학생 — '저항 운동'이라 하면 자동으로 일본에 대한 저항으로 연결.",
    "lukaExplain": "임술농민봉기(1862)와 동학농민운동(1894) 둘 다 삼정의 문란(세금 수탈 등) 같은 국내 지배층의 부패와 착취에 맞선 민중 저항이야. 이때는 아직 일본의 완전한 식민 지배(1910년) 이전이었으니, '항일 운동'으로 단정하면 시대상 오류가 생겨. 저항의 대상이 누구인지 정확히 확인하는 습관이 중요해.",
    "reframe": "저항운동의 대상(국내 지배층 vs 외세)을 정확한 시대적 맥락 속에서 구분하는 능력."
  },
  {
    "id": "al-hist-055", "subject": "역사", "domain": "근현대사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "다음 중 대한제국(1897~1910)에 대한 설명으로 옳지 않은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "대한제국 수립으로 조선은 완전한 자주독립국의 지위를 국제적으로 확고히 보장받았다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "고종이 황제로 즉위하며 자주독립국임을 대내외에 선포했다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "③", "text": "광무개혁을 통해 근대적 개혁을 추진했다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "④", "text": "대한제국 시기에도 열강의 이권 침탈은 계속되었다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "⑤", "text": "결국 1910년 국권을 상실했다", "correct": false, "trapNote": "옳은 설명" }
    ],
    "hiddenPremise": "'황제'라는 칭호를 쓰고 '제국'을 선포하면 실질적으로도 완전한 자주독립이 보장됐을 거라 짐작하는 전제. 실제로는 선포와 별개로 열강의 간섭과 이권 침탈이 계속되었고 결국 국권을 상실함.",
    "commonMistake": "①을 옳은 설명으로 착각하는 학생 — '황제국 선포'라는 상징적 선언을 실질적인 국제적 보장으로 확대 해석.",
    "lukaExplain": "대한제국은 황제 칭호를 쓰고 자주독립을 선포했지만, 이는 어디까지나 대내외적 '선언'이었어. 실제로는 여전히 러시아·일본 등 열강의 간섭과 이권 침탈이 이어졌고, 결국 1910년 국권을 완전히 빼앗겼지. 선포한 것과 실제로 보장받은 것은 다르다는 걸 구분해야 해.",
    "reframe": "정치적 선언(명목상 지위)과 실제 국제 관계 속 현실을 구분해 평가하는 능력."
  },
  {
    "id": "al-hist-056", "subject": "역사", "domain": "근현대사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": true,
    "stem": "1919년 3·1 운동이 이후 독립운동에 끼친 영향으로 가장 적절한 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "대한민국 임시정부 수립의 계기가 되었고, 독립운동이 조직적·체계적으로 전개되는 전환점이 되었다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "일본이 3·1 운동 직후 조선의 독립을 승인했다", "correct": false, "trapNote": "역사적 사실과 반대" },
      { "label": "③", "text": "3·1 운동 이후 모든 독립운동이 중단되었다", "correct": false, "trapNote": "역사적 사실과 반대" },
      { "label": "④", "text": "3·1 운동으로 조선의 신분제가 폐지되었다", "correct": false, "trapNote": "갑오개혁(1894)과 혼동, 시대 순서도 반대" },
      { "label": "⑤", "text": "3·1 운동은 실패로 끝나 이후 독립운동에 아무 영향을 주지 못했다", "correct": false, "trapNote": "역사적 사실과 반대(임시정부 수립 등 실질적 영향)" }
    ],
    "hiddenPremise": "만세를 불렀지만 독립을 즉시 얻지 못했으니 3·1 운동이 '실패해서 아무 의미 없다'고 단순하게 결론짓는 전제. 실제로는 즉각적 독립은 못 이뤘지만 임시정부 수립 등 이후 독립운동의 조직화에 결정적 영향을 줌.",
    "commonMistake": "⑤를 고르는 학생 — 즉각적인 독립이라는 목표를 이루지 못했다는 이유로 '실패=무의미'라고 단정.",
    "lukaExplain": "3·1 운동으로 바로 독립이 이뤄지진 않았지만, 이 운동을 계기로 그해(1919) 상하이에서 대한민국 임시정부가 수립됐어. 이후 독립운동이 여기저기 흩어져 있던 것에서 좀 더 조직적으로 전개되는 전환점이 된 거지. 즉각적인 목표 달성 여부와 장기적인 영향은 따로 평가해야 해.",
    "reframe": "역사적 사건을 즉각적 결과뿐 아니라 장기적 영향까지 함께 평가하는 능력."
  },
  {
    "id": "al-hist-057", "subject": "역사", "domain": "근현대사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "1930년대 이후 일제의 식민 통치 방식 변화(민족말살통치)에 대한 설명으로 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "일본어 사용 강요, 창씨개명, 신사참배 강요 등 우리 민족의 정체성을 말살하려 했다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "조선의 문화와 전통을 적극적으로 보존·장려했다", "correct": false, "trapNote": "역사적 사실과 정반대" },
      { "label": "③", "text": "1910년대의 무단통치보다 훨씬 관대하고 온건한 통치 방식이었다", "correct": false, "trapNote": "실제로는 더 강압적인 동화 정책" },
      { "label": "④", "text": "조선인의 정치 참여를 전면 확대했다", "correct": false, "trapNote": "역사적 사실과 반대" },
      { "label": "⑤", "text": "조선어 사용을 적극 장려했다", "correct": false, "trapNote": "실제로는 조선어 교육과 사용을 금지·억압" }
    ],
    "hiddenPremise": "일제 식민 통치가 시간이 지날수록 점점 관대해졌을 거라 짐작하는 전제. 실제로는 1930년대 이후(중일전쟁·태평양전쟁 시기) 오히려 민족 정체성을 말살하려는 더 강압적인 정책으로 전환됨.",
    "commonMistake": "③을 고르는 학생 — '통치가 오래될수록 안정되고 온건해질 것'이라는 막연한 시대 흐름 추측.",
    "lukaExplain": "1930년대 이후 일제는 중일전쟁·태평양전쟁을 준비하며 조선인을 전쟁에 동원하기 위해 오히려 더 강하게 민족 정체성을 지우려 했어. 창씨개명(이름을 일본식으로 바꾸게 함), 신사참배 강요, 조선어 교육 금지 같은 정책이 이 시기에 집중됐지. '시간이 지나면 통치가 완화된다'는 생각은 이 시기엔 맞지 않아.",
    "reframe": "식민 통치의 강도를 시간 순서에 따른 단순한 완화가 아니라 정세(전쟁 준비)와 연결해 이해하는 능력."
  },
  {
    "id": "al-hist-058", "subject": "역사", "domain": "근현대사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "8·15 광복(1945) 이후 한반도 상황에 대한 설명으로 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "광복 직후 남과 북에 각각 미군과 소련군이 진주해 군정이 실시되었다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "광복과 동시에 통일된 하나의 독립 정부가 즉시 수립되었다", "correct": false, "trapNote": "실제로는 남북 분단 상황이 이어짐" },
      { "label": "③", "text": "광복 이후 즉시 6·25 전쟁이 시작되었다", "correct": false, "trapNote": "광복(1945)과 6·25 전쟁(1950) 사이 5년의 시차를 무시" },
      { "label": "④", "text": "광복 이후 일본의 통치가 형태만 바꿔 계속되었다", "correct": false, "trapNote": "역사적 사실과 반대" },
      { "label": "⑤", "text": "광복 직후 대한민국 정부가 즉시 수립되어 안정적으로 통치했다", "correct": false, "trapNote": "실제 정부 수립은 1948년으로 3년의 시차가 있음" }
    ],
    "hiddenPremise": "'광복'이라는 단어 때문에 해방과 동시에 완전한 독립 정부 수립까지 한 번에 이뤄졌을 거라 짐작하는 전제. 실제로는 광복(1945) 이후 미소 군정을 거쳐 1948년에야 정부가 수립됨.",
    "commonMistake": "②·⑤를 고르는 학생 — 광복=독립정부 수립을 같은 시점의 일로 착각.",
    "lukaExplain": "광복(1945.8.15)은 일본의 지배에서 벗어난 것이고, 그 직후 남쪽엔 미군, 북쪽엔 소련군이 들어와 군정을 실시했어. 대한민국 정부가 정식으로 수립된 건 그로부터 3년 뒤인 1948년이야. '해방됐다'와 '독립 정부가 세워졌다' 사이에 시간 차이가 있다는 걸 꼭 기억해야 해.",
    "reframe": "해방과 정부 수립 사이의 시간적 간극과 그 사이의 과정(군정)을 정확히 이해하는 능력."
  },
  {
    "id": "al-hist-059", "subject": "역사", "domain": "근현대사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": true,
    "stem": "6·25 전쟁(1950~1953)에 대한 설명으로 옳지 않은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "전쟁은 완전한 승리로 끝나 남북통일이 이루어졌다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "1953년 휴전협정이 체결되며 전쟁이 멈췄다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "③", "text": "유엔군과 중국군이 각각 남과 북을 지원하며 국제전 성격을 띠었다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "④", "text": "전쟁으로 남북 간의 분단이 더욱 고착화되었다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "⑤", "text": "전쟁 중 서울이 여러 차례 주인이 바뀌었다(1·4후퇴 등)", "correct": false, "trapNote": "옳은 설명" }
    ],
    "hiddenPremise": "전쟁이 3년이나 지속됐으니 결국 어느 한쪽의 완전한 승리로 끝났을 거라 짐작하는 전제. 실제로는 승자 없이 휴전협정으로 전투가 멈췄고, 통일도 이루어지지 않음.",
    "commonMistake": "①을 옳은 설명으로 착각하는 학생 — '전쟁=승패가 갈려야 끝난다'는 일반적 통념을 그대로 적용.",
    "lukaExplain": "6·25 전쟁은 1953년 휴전협정으로 멈췄을 뿐, 아직도 공식적으로 '종전'이 아니라 '휴전' 상태야. 어느 한쪽이 완전히 이긴 게 아니라 원래의 분단선과 비슷한 위치(휴전선)에서 전투가 멈춘 거지. 그래서 통일은 이루어지지 않았고 분단이 오히려 굳어졌어. '오래 끈 전쟁=승패로 끝난다'는 통념이 항상 맞는 건 아니야.",
    "reframe": "전쟁의 종결 방식(승리/패배/휴전)을 정확한 역사적 사실에 근거해 판단하는 능력."
  },
  {
    "id": "al-hist-060", "subject": "역사", "domain": "고대사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "다음 중 통일신라 시기의 사회 변화에 대한 설명으로 옳지 않은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "통일 이후 골품제가 폐지되어 신분에 따른 제약이 완전히 사라졌다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "통일 이후에도 골품제에 따른 신분적 제약은 계속 유지되었다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "③", "text": "6두품 세력 중 일부는 신라 말 반신라적 성향을 보이기도 했다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "④", "text": "통일 이후 영토와 인구가 늘어나며 왕권이 강화되었다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "⑤", "text": "9주 5소경 체제로 지방 행정 조직을 정비했다", "correct": false, "trapNote": "옳은 설명" }
    ],
    "hiddenPremise": "나라가 통일되고 커지면 옛 신분제 같은 낡은 제도는 자연히 사라졌을 거라 짐작하는 전제. 실제로는 통일 이후에도 골품제는 그대로 유지되어 오히려 나중에 6두품의 불만(반신라적 성향)으로 이어짐.",
    "commonMistake": "①을 옳은 설명으로 착각하는 학생 — '통일=낡은 제도 청산'이라는 막연한 진보적 서사를 적용.",
    "lukaExplain": "통일신라 시기에도 골품제는 그대로 유지됐어. 오히려 이 폐쇄적인 신분제 때문에 능력 있는 6두품 출신들이 승진의 한계를 느끼고, 신라 말에는 반신라적 성향(호족과 손잡거나 새 왕조 건국에 참여)을 보이기도 했지. 나라의 규모가 커진다고 낡은 제도가 자동으로 사라지는 건 아니야.",
    "reframe": "역사적 변화를 '통일=모든 게 개선'이라는 단순한 서사로 보지 않고 사실에 근거해 판단하는 능력."
  },
  {
    "id": "al-hist-061", "subject": "역사", "domain": "중세사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "고려의 대외 관계에 대한 설명으로 옳지 않은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "고려는 건국 이후 원(몽골)을 제외한 모든 주변국과 전쟁 없이 지냈다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "거란(요)의 침입을 세 차례 받았고 서희의 외교 담판으로 강동 6주를 획득한 사례도 있었다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "③", "text": "여진(금)이 성장하며 고려에 사대 관계를 요구하기도 했다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "④", "text": "몽골의 침입 이후 오랜 기간 원의 간섭을 받았다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "⑤", "text": "고려 말에는 왜구의 침입이 잦아 최영·이성계 등이 활약했다", "correct": false, "trapNote": "옳은 설명" }
    ],
    "hiddenPremise": "주요 침략국(몽골)만 기억하면 충분하다고 생각해 다른 대외 관계(거란·여진·왜구)를 아예 없었던 일로 단정하는 전제.",
    "commonMistake": "①을 옳은 설명으로 착각하는 학생 — 몽골(원)의 침입만 강하게 기억하고 거란·왜구 등 다른 대외 갈등은 몰랐거나 잊음.",
    "lukaExplain": "고려는 원 이전에도 거란(3차례 침입, 서희의 외교 담판 유명), 여진(금)의 사대 요구 등 여러 대외 갈등을 겪었어. 고려 말에는 왜구의 침입도 심각한 문제였고, 최영·이성계가 이때 활약하며 성장했지. 몽골만 기억하고 다른 나라와의 관계를 '전쟁 없었다'고 단정하면 안 돼.",
    "reframe": "고려 대외 관계의 전체 흐름(거란-여진-몽골-왜구)을 빠짐없이 파악하는 능력."
  },
  {
    "id": "al-hist-062", "subject": "역사", "domain": "중세사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": true,
    "stem": "조선 전기와 후기의 사회 변화에 대한 설명으로 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "조선 후기에는 상품 화폐 경제가 발달하며 신분제가 점차 동요하는 모습을 보였다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "조선 전기와 후기 모두 신분제에 변화가 전혀 없었다", "correct": false, "trapNote": "역사적 사실과 반대" },
      { "label": "③", "text": "조선 후기에는 오히려 신분제가 더욱 엄격해져 신분 이동이 완전히 사라졌다", "correct": false, "trapNote": "실제로는 신분 이동이 늘어남(공명첩, 납속 등)" },
      { "label": "④", "text": "조선 전기에 이미 양반 중심 신분제가 완전히 붕괴되었다", "correct": false, "trapNote": "시기를 잘못 앎(붕괴 조짐은 후기)" },
      { "label": "⑤", "text": "조선 후기의 경제 발전은 신분제와 아무런 관련이 없었다", "correct": false, "trapNote": "실제로는 경제 발전이 신분제 동요와 밀접히 연결됨" }
    ],
    "hiddenPremise": "신분제 같은 오래된 제도는 조선 시대 내내(전기·후기 구분 없이) 똑같이 고정되어 있었을 거라 짐작하는 전제. 실제로는 후기에 상업·화폐 경제 발달과 함께 공명첩·납속 등으로 신분 이동이 늘어남.",
    "commonMistake": "②를 고르는 학생 — '신분제'라는 단어 자체가 고정불변일 거라 생각해 시기별 변화를 고려하지 않음.",
    "lukaExplain": "조선 후기에는 상업과 화폐 경제가 발달하면서 돈으로 신분을 사는 방법(공명첩, 납속)이 생기고, 양반 수가 늘어나는 등 신분제가 흔들리기 시작했어. 조선을 '전기'와 '후기'로 나눠서 각 시기의 특징을 다르게 기억하는 게 중요해 — 같은 왕조 안에서도 시대에 따라 사회가 크게 달라질 수 있거든.",
    "reframe": "같은 왕조 안에서도 전기·후기의 사회 변화를 구분해 이해하는 능력."
  },
  {
    "id": "al-hist-063", "subject": "역사", "domain": "근현대사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "실학의 등장 배경으로 가장 적절한 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "임진왜란과 병자호란 이후 기존 성리학 중심 사회의 한계를 극복하고 현실 문제를 해결하려는 움직임이 나타났다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "일본의 식민 통치에 저항하기 위해 등장했다", "correct": false, "trapNote": "시대(조선 후기 vs 일제강점기)를 완전히 착각" },
      { "label": "③", "text": "고려의 불교 중심 사상을 계승하기 위해 등장했다", "correct": false, "trapNote": "실학은 조선 후기 유학자들의 학문, 불교와 무관" },
      { "label": "④", "text": "고려시대 몽골의 침입에 대응하기 위해 등장했다", "correct": false, "trapNote": "시대를 완전히 잘못 연결" },
      { "label": "⑤", "text": "갑오개혁의 결과로 등장했다", "correct": false, "trapNote": "순서가 반대(실학이 갑오개혁보다 훨씬 앞섬)" }
    ],
    "hiddenPremise": "실학이라는 이름 때문에 근대(일제강점기)나 개혁(갑오개혁) 이후에 등장했을 거라 짐작하는 전제. 실제로는 조선 후기(양난 이후) 성리학의 한계를 느낀 학자들이 등장시킨 학문.",
    "commonMistake": "②를 고르는 학생 — '실학'이라는 말이 왠지 근대적으로 느껴져서 일제강점기 저항운동과 연결.",
    "lukaExplain": "실학은 임진왜란·병자호란을 겪으며 기존의 성리학이 실제 사회 문제(농업, 상공업, 신분제 등)를 해결하는 데 한계가 있다는 걸 느낀 학자들이 조선 후기에 만든 새로운 학문 경향이야. 정약용 등이 대표적이지. '실학'이라는 이름이 현대적으로 들려도, 실제로는 조선 후기(17~19세기)의 학문이라는 걸 기억해둬.",
    "reframe": "학문·사상의 등장 배경을 정확한 시대적 맥락(양난 이후 조선 후기) 속에서 파악하는 능력."
  },
  {
    "id": "al-hist-064", "subject": "역사", "domain": "근현대사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": true,
    "stem": "다음 중 일제강점기 국내외 독립운동의 노선에 대한 설명으로 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "무장투쟁, 외교 활동, 실력 양성 운동 등 다양한 방식이 동시에 존재했다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "모든 독립운동가는 오직 무력 투쟁만을 유일한 방법으로 여겼다", "correct": false, "trapNote": "실력양성론·외교론 등 다른 노선의 존재를 무시" },
      { "label": "③", "text": "독립운동은 국내에서만 이루어졌고 해외에서는 이루어지지 않았다", "correct": false, "trapNote": "만주·연해주·상하이 등 해외 독립운동 무시" },
      { "label": "④", "text": "모든 독립운동 세력은 하나의 통일된 조직 아래 일사불란하게 움직였다", "correct": false, "trapNote": "실제로는 노선과 조직이 다양하게 나뉘어 있었음" },
      { "label": "⑤", "text": "3·1 운동 이후 독립운동은 완전히 중단되었다", "correct": false, "trapNote": "역사적 사실과 반대" }
    ],
    "hiddenPremise": "'독립운동'이라는 하나의 이름 아래 모든 활동이 같은 방식·같은 조직으로 이뤄졌을 거라 단순화하는 전제. 실제로는 무장투쟁(독립군), 외교 활동(임시정부의 외교전), 실력 양성 운동(교육·산업) 등 여러 노선이 동시에 존재했음.",
    "commonMistake": "②나 ④를 고르는 학생 — 독립운동을 하나의 방법이나 하나의 조직으로 단순화해서 기억.",
    "lukaExplain": "독립운동은 한 가지 방식이 아니라 여러 갈래로 동시에 이루어졌어. 만주·연해주에서는 무장투쟁(독립군), 임시정부는 외교 활동, 국내에서는 물산장려운동 같은 실력 양성 운동도 있었지. '독립운동=하나의 방법'이라고 단순화하지 말고, 여러 노선이 각자의 방식으로 존재했다는 걸 기억해야 해.",
    "reframe": "복합적인 역사적 운동을 하나의 방식으로 단순화하지 않고 다양한 노선으로 이해하는 능력."
  },
  {
    "id": "al-hist-065", "subject": "역사", "domain": "근현대사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "4·19 혁명(1960)에 대한 설명으로 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "3·15 부정선거에 항의하는 시위로 시작되어 이승만 대통령의 하야로 이어졌다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "박정희 정권의 유신 체제에 저항한 운동이었다", "correct": false, "trapNote": "1970년대 유신 체제 저항 운동과 혼동" },
      { "label": "③", "text": "전두환 정권의 신군부 세력에 저항한 운동이었다", "correct": false, "trapNote": "5·18 민주화운동(1980)과 혼동" },
      { "label": "④", "text": "일제의 식민 통치에 저항한 독립운동이었다", "correct": false, "trapNote": "시대(일제강점기)를 완전히 착각" },
      { "label": "⑤", "text": "6·25 전쟁 중에 일어난 사건이다", "correct": false, "trapNote": "6·25 전쟁(1950~1953)과 시기를 혼동" }
    ],
    "hiddenPremise": "'민주화 운동'이나 '혁명'이라는 이름이 붙은 사건들을 시대 구분 없이 하나로 뭉뚱그리는 전제. 4·19 혁명(1960, 이승만)·5·18 민주화운동(1980, 전두환 신군부)·6월 민주항쟁(1987) 등은 각기 다른 시기, 다른 대상에 대한 저항.",
    "commonMistake": "③을 고르는 학생 — 민주화 운동이라 하면 5·18(전두환)을 먼저 떠올려 4·19와 혼동.",
    "lukaExplain": "4·19 혁명은 1960년, 이승만 정권의 3·15 부정선거에 항의하며 일어난 시위였고, 결국 이승만 대통령이 물러났어(하야). 5·18 민주화운동은 그보다 20년 뒤(1980), 전두환 신군부에 맞선 저항이야. 시대별로 저항 대상이 된 정권을 정확히 짝지어 기억해야 해 — 4·19는 이승만, 5·18은 전두환.",
    "reframe": "여러 민주화 운동을 정확한 시기와 저항 대상(정권)별로 구분하는 능력."
  },
  {
    "id": "al-hist-066", "subject": "역사", "domain": "근현대사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": true,
    "stem": "5·18 민주화운동(1980)에 대한 설명으로 옳은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "신군부의 계엄 확대에 저항한 광주 시민들의 민주화 운동이었다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "이승만 정권의 부정선거에 항의한 운동이었다", "correct": false, "trapNote": "4·19 혁명(1960)과 혼동" },
      { "label": "③", "text": "6·25 전쟁 중 일어난 지역 전투였다", "correct": false, "trapNote": "시기(1950년대)를 완전히 착각" },
      { "label": "④", "text": "일제강점기 광주 학생들의 항일 운동이었다", "correct": false, "trapNote": "광주학생항일운동(1929)과 혼동" },
      { "label": "⑤", "text": "노태우 정권에 대한 저항 운동이었다", "correct": false, "trapNote": "전두환 정권과 혼동(노태우는 이후 정권)" }
    ],
    "hiddenPremise": "'광주'와 관련된 역사적 사건이면 시대와 상관없이 다 같은 사건으로 뭉뚱그리는 전제. 광주학생항일운동(1929, 일제강점기)과 5·18 민주화운동(1980, 신군부 시기)은 전혀 다른 시대의 사건.",
    "commonMistake": "④를 고르는 학생 — '광주'라는 지역명만 보고 일제강점기의 광주학생항일운동과 혼동.",
    "lukaExplain": "5·18 민주화운동은 1980년, 전두환을 중심으로 한 신군부가 계엄을 전국으로 확대하자 광주 시민들이 이에 맞서 일어난 운동이야. 광주학생항일운동은 이름은 비슷해도 1929년 일제강점기에 일어난 완전히 다른 사건이지. 지역이 같다고 같은 사건이 아니라는 걸 꼭 구분해야 해.",
    "reframe": "같은 지역에서 일어난 서로 다른 시대의 사건을 정확히 구분하는 능력."
  },
  {
    "id": "al-hist-067", "subject": "역사", "domain": "근현대사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "6월 민주항쟁(1987)의 결과로 가장 적절한 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "대통령 직선제를 포함한 6·29 민주화 선언을 이끌어냈다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "이승만 대통령이 하야했다", "correct": false, "trapNote": "4·19 혁명의 결과와 혼동" },
      { "label": "③", "text": "일본으로부터 독립을 이루었다", "correct": false, "trapNote": "광복(1945)과 시대를 완전히 혼동" },
      { "label": "④", "text": "6·25 전쟁이 휴전으로 마무리되었다", "correct": false, "trapNote": "1953년 사건과 혼동" },
      { "label": "⑤", "text": "신분제가 폐지되었다", "correct": false, "trapNote": "갑오개혁(1894)과 완전히 다른 시대" }
    ],
    "hiddenPremise": "민주화 운동이라는 공통점 때문에 여러 시대의 사건 결과를 뒤섞어 기억하는 전제. 6월 민주항쟁(1987)의 구체적 결과(대통령 직선제 개헌)를 다른 시대 사건의 결과와 혼동하기 쉬움.",
    "commonMistake": "②를 고르는 학생 — '민주화 운동=이승만 하야'라는 4·19 혁명의 결과를 6월 민주항쟁에도 그대로 적용.",
    "lukaExplain": "6월 민주항쟁은 1987년, 전두환 정권의 독재에 맞서 일어난 운동으로, 그 결과 대통령을 국민이 직접 뽑는 직선제 개헌을 약속하는 6·29 선언을 이끌어냈어. 이승만 하야는 그보다 27년 전인 4·19 혁명의 결과야. 각 민주화 운동마다 '누구에 맞서서, 무슨 결과를 냈는지' 짝지어 기억하는 게 중요해.",
    "reframe": "여러 민주화 운동 각각의 구체적인 결과를 정확히 구분해 기억하는 능력."
  },
  {
    "id": "al-hist-068", "subject": "역사", "domain": "고대사", "track": "고등", "stage": "심화",
    "difficulty": 4, "finalSparkEligible": false,
    "stem": "다음 중 가야에 대한 설명으로 옳지 않은 것은?",
    "passage": "",
    "choices": [
      { "label": "①", "text": "가야는 강력한 중앙집권 국가를 이루어 삼국과 대등하게 경쟁하다 끝까지 독립을 유지했다", "correct": true, "trapNote": "" },
      { "label": "②", "text": "가야는 여러 소국들의 연맹체 형태로 존재했다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "③", "text": "가야는 철기 문화가 발달해 철을 주변국에 수출하기도 했다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "④", "text": "금관가야는 신라 법흥왕 때, 대가야는 진흥왕 때 각각 신라에 병합되었다", "correct": false, "trapNote": "옳은 설명" },
      { "label": "⑤", "text": "가야는 결국 삼국(신라)에 흡수되며 독자적인 왕조로 남지 못했다", "correct": false, "trapNote": "옳은 설명" }
    ],
    "hiddenPremise": "고대 국가라면 다 강력한 중앙집권 체제를 갖췄을 거라 짐작하는 전제. 실제로는 가야는 여러 소국의 연맹 형태에 머물러 중앙집권화에 실패했고, 결국 신라에 흡수됨.",
    "commonMistake": "①을 옳은 설명으로 착각하는 학생 — 가야가 철기 문화 등으로 강성했다는 인상만으로 '독립을 끝까지 유지'했을 거라 확대 해석.",
    "lukaExplain": "가야는 철기 문화가 발달하고 한때 융성했지만, 여러 소국이 느슨하게 묶인 연맹체 수준에 머물러서 삼국처럼 강력한 중앙집권 국가로 발전하지 못했어. 결국 금관가야는 법흥왕 때, 대가야는 진흥왕 때 각각 신라에 병합되며 역사 속으로 사라졌지. '한때 강성했다'와 '끝까지 독립을 유지했다'는 다른 이야기야.",
    "reframe": "국가의 일시적 번성과 최종적인 정치적 결말(독립 유지 여부)을 구분해서 평가하는 능력."
  }
];
APPLICATION_LAB_ITEMS = APPLICATION_LAB_ITEMS.concat(APPLICATION_LAB_ITEMS_HIST_HIGH);

/* 통계: 국어 66문항(완료) / 수학 66문항(완료) / 역사 68문항(완료) = 총 200문항 (200 목표 달성) */
