const ALL_QUESTIONS = [
  {
    ko: {
      q: "콘서트 티켓팅 날, 당신의 모습은?",
      r: [
        "미리 로그인, 결제수단, 좌석표까지 확인하고 정석대로 대기한다",
        "필요한 준비만 끝내고 조용히 집중해서 클릭 타이밍을 노린다",
        "친구들과 실시간으로 연락하면서 성공 여부를 같이 외친다",
        "플랜 A가 실패하면 바로 플랜 B, C, D까지 밀어붙인다"
      ]
    },
    en: {
      q: "It's concert ticketing day. What are you like?",
      r: [
        "Log in early, check payment methods and seat maps, and wait properly",
        "Prepare only what is necessary and quietly focus on the click timing",
        "Stay in live contact with friends and celebrate or panic together",
        "If Plan A fails, immediately push through Plans B, C, and D"
      ]
    },
    score: [[-10, 1], [-5, -8], [-1, 9], [10, 5]]
  },

  {
    ko: {
      q: "콘서트장에서 최애가 근처로 왔다. 당신은?",
      r: [
        "질서를 지키면서 조용히 손을 흔들고 눈에 담는다",
        "핸드폰은 잠깐 내려두고 그 순간을 온전히 기억하려 한다",
        "온 힘을 다해 응원하고 주변까지 같이 들뜨게 만든다",
        "기회가 왔다고 생각하고 슬로건, 하트, 리액션을 전부 쏟아낸다"
      ]
    },
    en: {
      q: "Your favorite member comes close during a concert. What do you do?",
      r: [
        "Stay respectful, quietly wave, and take the moment in",
        "Put my phone down for a moment and try to remember it fully",
        "Cheer with full energy and make everyone around me excited too",
        "See it as my chance and throw every slogan, heart, and reaction I have"
      ]
    },
    score: [[-8, -2], [-2, -9], [2, 9], [9, 8]]
  },

  {
    ko: {
      q: "새 앨범이 나온 날, 당신이 제일 먼저 하는 일은?",
      r: [
        "트랙 순서대로 처음부터 끝까지 정주행한다",
        "혼자 조용히 들으면서 가사와 사운드를 곱씹는다",
        "좋은 파트가 나오면 바로 친구들에게 보내고 반응을 기다린다",
        "타이틀, 수록곡, 무대, 챌린지까지 한꺼번에 몰아서 본다"
      ]
    },
    en: {
      q: "A new album drops. What do you do first?",
      r: [
        "Listen from the first track to the last in the intended order",
        "Listen quietly by myself and absorb the lyrics and sound",
        "Send my favorite parts to friends immediately and wait for reactions",
        "Consume the title track, B-sides, performances, and challenges all at once"
      ]
    },
    score: [[-9, -1], [-3, -9], [0, 8], [9, 6]]
  },

  {
    ko: {
      q: "당신이 하루 동안 아이돌 무대 연출가가 된다면?",
      r: [
        "동선, 카메라, 조명 타이밍이 완벽히 맞는 무대를 만든다",
        "불필요한 장식은 줄이고 음악과 멤버의 분위기가 잘 보이게 한다",
        "팬들이 소리 지를 만한 킬링파트와 엔딩 포즈를 크게 만든다",
        "갑자기 리프트, 불꽃, 비 오는 무대까지 넣어서 레전드를 노린다"
      ]
    },
    en: {
      q: "If you became a stage director for one day, what kind of performance would you create?",
      r: [
        "A stage where movement, camera work, and lighting timing are perfectly controlled",
        "A clean stage that lets the music and members' atmosphere stand out",
        "A stage full of killing parts and ending poses that make fans scream",
        "A legendary stage with lifts, fireworks, rain effects, and maybe too much ambition"
      ]
    },
    score: [[-10, 2], [-5, -7], [1, 9], [10, 9]]
  },

  {
    ko: {
      q: "최애가 갑자기 당신에게 응원법을 만들어달라고 한다면?",
      r: [
        "박자와 발음이 정확히 맞도록 깔끔하게 만든다",
        "부르기 쉽고 기억하기 편한 짧은 버전으로 만든다",
        "귀엽고 중독성 있게 만들어서 다 같이 외치고 싶게 한다",
        "한 번 들으면 잊을 수 없을 만큼 과감하고 이상하게 만든다"
      ]
    },
    en: {
      q: "Your favorite idol suddenly asks you to create a fan chant. What do you make?",
      r: [
        "Something clean where the rhythm and pronunciation match perfectly",
        "A short version that is easy to remember and easy to chant",
        "Something cute and addictive that everyone wants to shout together",
        "Something bold and weird enough that no one can forget it after hearing it once"
      ]
    },
    score: [[-9, 1], [-6, -6], [1, 8], [9, 7]]
  },

  {
    ko: {
      q: "작고 귀여운 무대 요정이 당신에게 소원을 하나 들어준다고 한다.",
      r: [
        "앞으로 실수 없이 안정적으로 모든 일이 잘 풀리게 해달라고 한다",
        "언제든 조용히 충전할 수 있는 나만의 작은 공간을 달라고 한다",
        "내가 좋아하는 노래가 나올 때마다 주변에 꽃가루가 터지게 해달라고 한다",
        "한 번만이라도 모두가 나를 주목하는 주인공 무대를 달라고 한다"
      ]
    },
    en: {
      q: "A tiny cute stage fairy offers to grant you one wish. What do you ask for?",
      r: [
        "For everything to go smoothly and reliably without mistakes",
        "For a small private space where I can quietly recharge anytime",
        "For confetti to burst around me whenever my favorite song plays",
        "For one main-character stage where everyone is watching me"
      ]
    },
    score: [[-9, -2], [-2, -10], [2, 7], [8, 10]]
  },

  {
    ko: {
      q: "당신이 작은 햄스터 밴드의 매니저가 되었다. 먼저 할 일은?",
      r: [
        "연습 시간표와 공연 순서를 정리해서 사고가 없게 한다",
        "햄스터들이 지치지 않도록 조용하고 편한 대기실을 만든다",
        "귀여운 의상과 무대 인사 멘트를 준비해 팬서비스를 강화한다",
        "햄스터 드럼 솔로와 치즈 폭죽으로 첫 공연부터 크게 터뜨린다"
      ]
    },
    en: {
      q: "You become the manager of a tiny hamster band. What do you do first?",
      r: [
        "Organize the practice schedule and performance order so nothing goes wrong",
        "Create a quiet, comfortable waiting room so the hamsters do not get tired",
        "Prepare cute outfits and stage greetings to improve fan service",
        "Launch the debut with a hamster drum solo and cheese fireworks"
      ]
    },
    score: [[-10, 1], [-4, -9], [0, 8], [10, 9]]
  },

  {
    ko: {
      q: "당신의 플레이리스트가 갑자기 살아나서 작은 생물이 되었다. 어떤 모습일까?",
      r: [
        "곡 순서대로 차분히 걸어가는 성실한 작은 로봇",
        "조용히 옆에 앉아 분위기에 맞는 노래만 골라주는 고양이",
        "기분이 좋으면 반짝이며 춤추는 말 많은 병아리",
        "장르를 무시하고 여기저기 튀어다니는 번개 토끼"
      ]
    },
    en: {
      q: "Your playlist suddenly comes alive as a tiny creature. What is it like?",
      r: [
        "A diligent little robot that walks calmly in track order",
        "A quiet cat that sits beside me and picks songs to match the mood",
        "A talkative chick that sparkles and dances when happy",
        "A lightning rabbit that jumps everywhere while ignoring genre boundaries"
      ]
    },
    score: [[-9, -2], [-2, -9], [2, 8], [9, 5]]
  },

  {
    ko: {
      q: "콘서트 끝나고 집에 돌아가는 길, 당신은?",
      r: [
        "굿즈와 티켓을 정리하고 오늘의 동선을 천천히 되짚어본다",
        "말없이 이어폰을 끼고 여운을 혼자 오래 간직한다",
        "친구들과 오늘의 레전드 순간을 계속 이야기한다",
        "아직 에너지가 남아서 다음 콘서트 계획까지 바로 세운다"
      ]
    },
    en: {
      q: "On your way home after a concert, what are you doing?",
      r: [
        "Organizing my merch and ticket while calmly replaying the day",
        "Putting on earphones and quietly keeping the feeling to myself",
        "Talking nonstop with friends about the legendary moments",
        "Still full of energy and already planning the next concert"
      ]
    },
    score: [[-8, -3], [-2, -10], [1, 9], [9, 6]]
  },

  {
    ko: {
      q: "당신이 한 곡의 주인공이 된다면, 어떤 곡일까?",
      r: [
        "천천히 쌓이다가 마지막에 단단하게 완성되는 곡",
        "밤에 혼자 들으면 마음이 정리되는 조용한 곡",
        "후렴에서 모두가 따라 부르고 손을 흔드는 밝은 곡",
        "첫 소절부터 심장이 뛰고 무대가 터지는 강렬한 곡"
      ]
    },
    en: {
      q: "If you became the main character of a song, what kind of song would it be?",
      r: [
        "A song that builds slowly and becomes solid by the end",
        "A quiet song that clears your mind when you listen alone at night",
        "A bright song where everyone sings along and waves their hands at the chorus",
        "An intense song that makes your heart race from the first line"
      ]
    },
    score: [[-9, -2], [-1, -10], [1, 9], [10, 8]]
  }
];

const CHARACTERS = [
  {
    coord: [-31, -24],
    name: "Stirling Engine",
    koreanName: "스털링 엔진",
    imageId: "portrait-stirling",
    imageSrc: "uploads/stirling.jpg",
    initial: "S",
    accent: "#8DA7B8",

    quoteKo: "조용히 돌아가고 있습니다. 진짜로요.",
    quoteEn: "I'm running quietly. Yes, I really am.",

    traitsKo: ["차분함", "신중함", "꾸준함", "예열 필요"],
    traitsEn: ["Calm", "Careful", "Consistent", "Slow to warm up"],

    aboutKo: "소리 없이 오래 버티는 엔진. 폭발적인 출력보다는 안정적인 온도 차이로 천천히, 꾸준히 움직인다. 시작은 느릴 수 있지만 한번 리듬을 찾으면 쉽게 흔들리지 않고 오래 간다.",
    aboutEn: "An engine built for quiet endurance. Instead of explosive power, it runs steadily through a stable temperature difference. It may start slowly, but once it finds its rhythm, it keeps going without much fuss.",

    matchKo: "전기 모터",
    matchEn: "Electric Motor",
    hardKo: "로켓 엔진",
    hardEn: "Rocket Engine"
  },

  {
    coord: [-16, -21],
    name: "Electric Motor",
    koreanName: "전기 모터",
    imageId: "portrait-electric",
    imageSrc: "uploads/motor.png",
    initial: "E",
    accent: "#58B7A8",

    quoteKo: "복잡하게 할 필요 있나요? 바로 돌리면 되죠.",
    quoteEn: "Why make it complicated? Just turn it on.",

    traitsKo: ["효율적", "부드러움", "유연함", "반응 빠름"],
    traitsEn: ["Efficient", "Smooth", "Flexible", "Responsive"],

    aboutKo: "조용하지만 반응은 빠른 엔진. 불필요한 소음이나 허세 없이 필요한 만큼 바로 움직인다. 겉으로는 차분해 보여도 입력이 들어오면 망설임 없이 작동하는 실용적인 타입이다.",
    aboutEn: "A quiet engine with quick response. No unnecessary noise, no theatrics — it simply delivers the power needed. It may look calm from the outside, but once it receives input, it moves without hesitation.",

    matchKo: "스털링 엔진",
    matchEn: "Stirling Engine",
    hardKo: "V8 엔진",
    hardEn: "V8 Engine"
  },

  {
    coord: [-34, 2],
    name: "Diesel Engine",
    koreanName: "디젤 엔진",
    imageId: "portrait-diesel",
    imageSrc: "uploads/diesel.jpg",
    initial: "D",
    accent: "#A8926B",

    quoteKo: "조금 투박해도 상관없습니다. 결국 굴러가면 됩니다.",
    quoteEn: "It doesn't have to be elegant. It just has to work.",

    traitsKo: ["현실적", "책임감", "튼튼함", "해결 중심"],
    traitsEn: ["Practical", "Responsible", "Durable", "Solution-oriented"],

    aboutKo: "화려하진 않지만 무거운 걸 끝까지 끌고 가는 엔진. 예쁘게 보이는 것보다 실제로 작동하는지가 더 중요하다. 상황이 복잡해져도 일단 굴러가게 만드는 쪽에 강하다.",
    aboutEn: "Not flashy, but built to pull heavy loads to the end. Looking elegant matters less than actually working. Even when things get complicated, this engine is good at keeping everything moving.",

    matchKo: "V8 엔진",
    matchEn: "V8 Engine",
    hardKo: "제트 엔진",
    hardEn: "Jet Engine"
  },

  {
    coord: [-12, 36],
    name: "V8 Engine",
    koreanName: "V8 엔진",
    imageId: "portrait-v8",
    imageSrc: "uploads/v8.png",
    initial: "V",
    accent: "#D15C4A",

    quoteKo: "신념도 강하고, 출력도 강하고, 목소리도 큽니다.",
    quoteEn: "Strong principles. Strong output. Strong volume.",

    traitsKo: ["열정적", "솔직함", "존재감", "고전적 매력"],
    traitsEn: ["Passionate", "Direct", "Commanding", "Classic"],

    aboutKo: "정해진 구조 안에서 강한 존재감을 뿜어내는 엔진. 효율만 따지면 설명하기 어려운 매력이 있고, 좋아하는 사람은 그 소리와 진동까지 좋아한다. 조용히 지나가는 법을 잘 모른다.",
    aboutEn: "An engine that produces a strong presence within a classic structure. Its appeal is hard to explain through efficiency alone; those who love it love the sound and vibration too. It does not really know how to pass by quietly.",

    matchKo: "디젤 엔진",
    matchEn: "Diesel Engine",
    hardKo: "전기 모터",
    hardEn: "Electric Motor"
  },

  {
    coord: [14, 36],
    name: "Two-Stroke Engine",
    koreanName: "2행정 엔진",
    imageId: "portrait-two-stroke",
    imageSrc: "uploads/two-stroke.jpg",
    initial: "T",
    accent: "#F3A43B",

    quoteKo: "작은 체구에서 예상하지 못한 소리와 에너지가 나옵니다.",
    quoteEn: "An unreasonable amount of noise and energy for something this size.",

    traitsKo: ["활발함", "즉흥적", "장난기", "반응 빠름"],
    traitsEn: ["Energetic", "Spontaneous", "Mischievous", "Quick-reacting"],

    aboutKo: "가볍고 빠르게 반응하는 엔진. 크기에 비해 소리와 에너지가 과하게 느껴질 정도로 존재감이 강하다. 깊게 고민하기보다는 바로 튀어나가고, 평범한 상황도 금방 시끄러운 사건으로 만든다.",
    aboutEn: "A light engine with fast reactions. For its size, it produces an almost unreasonable amount of sound and energy. It jumps forward before overthinking, and ordinary situations quickly become loud events around it.",

    matchKo: "제트 엔진",
    matchEn: "Jet Engine",
    hardKo: "스털링 엔진",
    hardEn: "Stirling Engine"
  },

  {
    coord: [26, 13],
    name: "Jet Engine",
    koreanName: "제트 엔진",
    imageId: "portrait-jet",
    imageSrc: "uploads/jet.webp",
    initial: "J",
    accent: "#4C7FC9",

    quoteKo: "계획은 이륙 후에 생각하겠습니다.",
    quoteEn: "I'll think about the plan after takeoff.",

    traitsKo: ["본능적", "자유로움", "추진력", "대담함"],
    traitsEn: ["Instinctive", "Free-spirited", "Driven", "Bold"],

    aboutKo: "고민보다 추진이 먼저인 엔진. 공기를 빨아들여 그대로 밀어내는 단순한 원리로 순식간에 최고 속도에 도달한다. 한번 궤도에 오르면 방향을 바꾸기 어렵지만, 그만큼 멀리, 빠르게 간다.",
    aboutEn: "Thrust first, thinking later. A simple principle — suck in air, push it out — that reaches top speed almost instantly. Hard to change course once it's on a heading, but it covers distance fast.",

    matchKo: "2행정 엔진",
    matchEn: "Two-Stroke Engine",
    hardKo: "디젤 엔진",
    hardEn: "Diesel Engine"
  },

  {
    coord: [32, 29],
    name: "Rocket Engine",
    koreanName: "로켓 엔진",
    imageId: "portrait-rocket",
    imageSrc: "uploads/rocket.jpg",
    initial: "R",
    accent: "#D94E7A",

    quoteKo: "목표가 지상에 없다면, 지상을 떠나면 됩니다.",
    quoteEn: "If the goal isn't on the ground, leave the ground.",

    traitsKo: ["폭발적", "올인", "극단적 추진력", "스케일 큼"],
    traitsEn: ["Explosive", "All-in", "Extreme thrust", "Large-scale"],

    aboutKo: "한번 점화되면 주변에 영향이 없을 수 없는 엔진. 안정적인 운전이나 적당한 타협보다는 목표를 향해 모든 연료를 태우는 쪽에 가깝다. 잘 맞는 순간에는 불가능해 보이는 곳까지 올라가지만, 애초에 평범하게 굴러가려고 만든 물건은 아니다.",
    aboutEn: "An engine that cannot ignite without affecting everything around it. It is less about stable driving or moderate compromise and more about burning all its fuel toward a target. When the timing is right, it can reach places that seem impossible, but it was never built to roll around normally.",

    matchKo: "V8 엔진",
    matchEn: "V8 Engine",
    hardKo: "스털링 엔진",
    hardEn: "Stirling Engine"
  }
];

const UI = {
  ko: { badge: "심리테스트", introTitle: "나는 어떤<br/>엔진일까?", introSubtitle: "질문 8개로 알아보는<br/>나와 꼭 닮은 엔진",
    introPlaceholder: "엔진 이미지를 놓아주세요", startBtn: "테스트 시작하기",
    footnote: "16개 중 랜덤으로 뽑힌 5개의 질문에 답해보세요", differentQBtn: "다른 질문! 🔀",
    resultBadge: "당신의 엔진 타입은...", matchLabel: "최고의 짝꿍", hardestLabel: "서먹서먹한 상대", restartBtn: "다시 테스트하기 🔁",
    typeLabel: " 타입", toggleTo: "EN",
    axisXLow: "신중함", axisXHigh: "본능적", axisYLow: "차분함", axisYHigh: "표현적", mapCaption: "당신의 위치" },
  en: { badge: "PERSONALITY QUIZ", introTitle: "Which Engine<br/> Am I?", introSubtitle: "8 questions to find<br/>your matching engine",
    introPlaceholder: "Drop an engine image here", startBtn: "Start the Quiz",
    footnote: "Answer 5 questions randomly drawn from a pool of 16", differentQBtn: "Different Question! 🔀",
    resultBadge: "Your engine is...", matchLabel: "Perfect Match", hardestLabel: "Hardest Match", restartBtn: "Retake the Quiz 🔁",
    typeLabel: " Type", toggleTo: "한",
    axisXLow: "Deliberate", axisXHigh: "Instinctive", axisYLow: "Reserved", axisYHigh: "Expressive", mapCaption: "Where you landed" }
};

const NUM_QUESTIONS_ASKED = 5;
const BUTTON_COLORS_STROKES = ["#F5B700","#46C2CB","#E4572E","#3E9E8E","#4C7FC9"];

const DEBUG = false;
let debugPanelEl = null;
function renderDebugPanel() {
  if (!DEBUG) return;
  if (!debugPanelEl) {
    debugPanelEl = document.createElement("div");
    debugPanelEl.id = "debug-score-panel";
    Object.assign(debugPanelEl.style, {
      position: "fixed", bottom: "8px", right: "8px", zIndex: 9999,
      background: "rgba(0,0,0,0.75)", color: "#0f0", font: "12px monospace",
      padding: "8px 10px", borderRadius: "6px", whiteSpace: "pre",
      pointerEvents: "none"
    });
    document.body.appendChild(debugPanelEl);
  }
  const q = state.questions[state.qIndex];
  const lines = [
    "[DEBUG] screen=" + state.screen + " phase=" + state.phase,
    "axis1=" + state.axis1 + "  axis2=" + state.axis2,
    "answered=" + state.answered + "/" + NUM_QUESTIONS_ASKED,
    q ? "qIdx=" + state.qIndex + " (pool idx " + q.idx + ") scores=" + JSON.stringify(q.score) : "qIdx=-"
  ];
  debugPanelEl.textContent = lines.join("\n");
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function nearestCharacterKey(axis1, axis2) {
  const nx = axis1 / AXIS_SCALE;
  const ny = axis2 / AXIS_SCALE;
  let bestKey = null;
  let bestDist = Infinity;
  for (const key in CHARACTERS) {
    const [cx, cy] = CHARACTERS[key].coord;
    const dx = nx - cx;
    const dy = ny - cy;
    const dist = dx * dx + dy * dy;
    console.log("dist for key=" + key + " is " + dist);
    if (dist < bestDist) { bestDist = dist; bestKey = key; }
  }
  return bestKey;
}

// Maps a raw axis value onto the -4..4 plot domain (clamped, for display only —
// the nearest-character match itself uses the unclamped raw score).
// Raw axis scores can range up to ±6 per question over 8 questions (±48 total);
// scale that down to the ±4 plot domain the character coords live on.
const AXIS_SCALE = 0.5;
function clampToPlot(v) {
  return Math.max(-4, Math.min(4, v / AXIS_SCALE));
}


const state = {
  screen: "intro",
  lang: "ko",
  questions: [],
  remainingPool: [],
  qIndex: 0,
  axis1: 0,
  axis2: 0,
  answered: 0,
  phase: "visible"
};

const el = {
  langBtn: document.getElementById("lang-btn"),
  introScreen: document.getElementById("intro-screen"),
  questionScreen: document.getElementById("question-screen"),
  resultScreen: document.getElementById("result-screen"),
  badge: document.getElementById("badge"),
  introTitle: document.getElementById("intro-title"),
  introSub: document.getElementById("intro-sub"),
  startBtn: document.getElementById("start-btn"),
  footnote: document.getElementById("footnote"),
  progressRow: document.getElementById("progress-row"),
  qCounter: document.getElementById("q-counter"),
  diffBtn: document.getElementById("diff-btn"),
  qCardWrap: document.getElementById("q-card-wrap"),
  qText: document.getElementById("q-text"),
  responses: document.getElementById("responses"),
  resultBadge: document.getElementById("result-badge"),
  resultName: document.getElementById("result-name"),
  resultSub: document.getElementById("result-sub"),
  portraitBox: document.getElementById("portrait-box"),
  portraitImg: document.getElementById("portrait-img"),
  resultQuote: document.getElementById("result-quote"),
  traitsRow: document.getElementById("traits-row"),
  resultAbout: document.getElementById("result-about"),
  matchLabel: document.getElementById("match-label"),
  matchValue: document.getElementById("match-value"),
  hardLabel: document.getElementById("hard-label"),
  hardValue: document.getElementById("hard-value"),
  restartBtn: document.getElementById("restart-btn")
};

function toggleLang() {
  state.lang = state.lang === "ko" ? "en" : "ko";
  render();
}

function startTest() {
  const order = shuffle(Array.from({ length: ALL_QUESTIONS.length }, (_, i) => i));
  const selected = order.slice(0, NUM_QUESTIONS_ASKED);
  const remaining = order.slice(NUM_QUESTIONS_ASKED);
  const questions = selected.map((idx) => ({ idx, ...ALL_QUESTIONS[idx] }));
  Object.assign(state, { screen: "question", questions, remainingPool: remaining, qIndex: 0, axis1: 0, axis2: 0, answered: 0, phase: "entering" });
  render();
  setTimeout(() => { state.phase = "visible"; render(); }, 30);
}

function restartTest() {
  state.screen = "intro";
  render();
}

function differentQuestion() {
  if (state.phase !== "visible" || state.remainingPool.length === 0) return;
  const pool = state.remainingPool.slice();
  const newIdx = pool.shift();
  const newQuestions = state.questions.slice();
  newQuestions[state.qIndex] = { idx: newIdx, ...ALL_QUESTIONS[newIdx] };
  state.phase = "leaving";
  render();
  setTimeout(() => {
    state.questions = newQuestions;
    state.remainingPool = pool;
    state.phase = "entering";
    render();
    setTimeout(() => { state.phase = "visible"; render(); }, 30);
  }, 250);
}

function pickAnswer(scoreArr) {
  if (state.phase !== "visible") return;
  state.phase = "leaving";
  render();
  setTimeout(() => {
    const nextAxis1 = state.axis1 + scoreArr[0];
    const nextAxis2 = state.axis2 + scoreArr[1];
    const nextAnswered = state.answered + 1;
    if (nextAnswered >= NUM_QUESTIONS_ASKED) {
      Object.assign(state, { axis1: nextAxis1, axis2: nextAxis2, answered: nextAnswered, screen: "result" });
      render();
    } else {
      Object.assign(state, {
        axis1: nextAxis1, axis2: nextAxis2, answered: nextAnswered,
        qIndex: state.qIndex + 1, phase: "entering"
      });
      render();
      setTimeout(() => { state.phase = "visible"; render(); }, 30);
    }
  }, 300);
}

function render() {
  const lang = state.lang;
  const t = UI[lang];
  const isIntro = state.screen === "intro";
  const isQuestion = state.screen === "question";
  const isResult = state.screen === "result";

  el.langBtn.textContent = t.toggleTo;
  el.introScreen.classList.toggle("hidden", !isIntro);
  el.questionScreen.classList.toggle("hidden", !isQuestion);
  el.resultScreen.classList.toggle("hidden", !isResult);

  if (isIntro) {
    el.badge.textContent = t.badge;
    el.introTitle.innerHTML = t.introTitle;
    el.introSub.innerHTML = t.introSubtitle;
    el.startBtn.textContent = t.startBtn;
    el.footnote.textContent = t.footnote;
  }

  if (isQuestion && state.questions.length) {
    const q = state.questions[state.qIndex];
    const qd = q[lang];

    el.progressRow.innerHTML = "";
    for (let i = 0; i < NUM_QUESTIONS_ASKED; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";
      dot.style.width = (i === state.qIndex ? 26 : 16) + "px";
      dot.style.background = i < state.qIndex ? "#46C2CB" : (i === state.qIndex ? "#F5B700" : "#4a5058");
      el.progressRow.appendChild(dot);
    }

    el.qCounter.textContent = (state.qIndex + 1) + " / " + NUM_QUESTIONS_ASKED;
    el.diffBtn.textContent = t.differentQBtn;
    const noMoreSpares = state.remainingPool.length === 0;
    el.diffBtn.disabled = noMoreSpares;
    el.diffBtn.onclick = differentQuestion;

    el.qText.textContent = qd.q;
    el.responses.innerHTML = "";
    qd.r.forEach((text, i) => {
      const stroke = BUTTON_COLORS_STROKES[i % BUTTON_COLORS_STROKES.length];
      const btn = document.createElement("button");
      btn.className = "resp-btn";
      btn.style.borderLeftColor = stroke;
      btn.textContent = text;
      btn.onclick = () => pickAnswer(q.score[i]);
      btn.onmouseenter = () => { btn.style.borderColor = stroke; };
      btn.onmouseleave = () => { btn.style.borderColor = "#4a5058"; btn.style.borderLeftColor = stroke; };
      el.responses.appendChild(btn);
    });

    el.qCardWrap.classList.remove("entering", "leaving");
    if (state.phase === "entering") el.qCardWrap.classList.add("entering");
    else if (state.phase === "leaving") el.qCardWrap.classList.add("leaving");
  }

  {
    const key = isResult ? nearestCharacterKey(state.axis1, state.axis2) : 0;
    const c = CHARACTERS[key] || CHARACTERS[0];
    const primaryName = lang === "ko" ? c.koreanName : c.name;
    const secondaryLine = lang === "ko" ? (c.name + " Type") : (c.koreanName + " · " + c.name + " Type");
    const quote = lang === "ko" ? c.quoteKo : c.quoteEn;
    const traits = lang === "ko" ? c.traitsKo : c.traitsEn;
    const about = lang === "ko" ? c.aboutKo : c.aboutEn;
    const perfectMatch = lang === "ko" ? c.matchKo : c.matchEn;
    const hardestFriendship = lang === "ko" ? c.hardKo : c.hardEn;

    if (isResult) {
      el.resultBadge.textContent = t.resultBadge;
      el.resultBadge.style.color = c.accent;
      el.resultBadge.style.borderColor = c.accent;
      el.resultName.textContent = primaryName;
      el.resultSub.textContent = secondaryLine;
      el.portraitBox.style.borderColor = c.accent;
      el.portraitImg.style.backgroundImage = "url('" + c.imageSrc + "')";
      el.resultQuote.textContent = "\u201C" + quote + "\u201D";
      el.resultQuote.style.borderLeftColor = c.accent;

      el.traitsRow.innerHTML = "";
      traits.forEach((trait) => {
        const chip = document.createElement("span");
        chip.className = "trait-chip";
        chip.style.color = c.accent;
        chip.style.border = "1.5px solid " + c.accent;
        chip.textContent = trait;
        el.traitsRow.appendChild(chip);
      });

      el.resultAbout.textContent = about;
      el.matchLabel.textContent = t.matchLabel;
      el.matchValue.textContent = perfectMatch;
      el.hardLabel.textContent = t.hardestLabel;
      el.hardValue.textContent = hardestFriendship;
      el.restartBtn.textContent = t.restartBtn;
    }
  }

  renderDebugPanel();
}

el.langBtn.onclick = toggleLang;
el.startBtn.onclick = startTest;
el.restartBtn.onclick = restartTest;

render();
