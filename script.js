const ALL_QUESTIONS = [
  { ko: { q: "친구들과 여행을 준비하게 되었다. 당신의 모습은?", r: [
      "숙소, 교통, 식당까지 미리 정리해서 공유한다",
      "큰 일정만 정해두고 나머지는 상황에 맞춰 조정한다",
      "다른 사람들이 정한 계획에 맞추되 의견이 있으면 바로 말한다",
      "도착한 뒤 분위기를 보고 무엇을 할지 정하는 편이다",
      "계획 없이 돌아다니다 재미있는 것을 발견하면 모두를 끌고 간다" ] },
    en: { q: "You're planning a trip with friends. What are you most likely to do?", r: [
      "Organize the lodging, transportation, and restaurants in advance",
      "Set only the major plans and adjust everything else as you go",
      "Follow the group's plan but speak up immediately when you have an idea",
      "Wait until you arrive and decide based on the mood",
      "Wander without a plan and drag everyone along when you find something fun" ] },
    score: [[-6,2],[-3,1],[-1,4],[4,-1],[6,5]] },
  { ko: { q: "기분이 크게 상하는 일이 생겼을 때, 당신은?", r: [
      "혼자 충분히 생각해서 감정을 정리한 뒤에야 이야기한다",
      "평소처럼 행동하지만 머릿속에서는 계속 상황을 되짚는다",
      "믿을 만한 한 사람에게 조용히 털어놓는다",
      "무슨 일이 있었는지 주변 사람에게 솔직하게 이야기한다",
      "감정이 얼굴과 말투에 바로 드러나서 숨기기가 어렵다" ] },
    en: { q: "When something seriously upsets you, what do you usually do?", r: [
      "Think it through alone and only talk once I've processed it",
      "Act normally while replaying the situation repeatedly in my head",
      "Quietly open up to one person I trust",
      "Honestly tell people around me what happened",
      "My feelings immediately show in my face and voice" ] },
    score: [[-2,-6],[0,-5],[-1,-2],[1,5],[3,6]] },
  { ko: { q: "갑자기 하루 일정이 전부 취소되어 완전히 자유로운 날이 생겼다.", r: [
      "미뤄둔 일을 처리할 절호의 기회라고 생각한다",
      "하고 싶었던 것들을 정리해서 하나씩 해본다",
      "일단 쉬다가 그때그때 하고 싶은 것을 한다",
      "친구들에게 지금 뭐 하는지 연락해본다",
      "집을 나선 뒤 어디로 갈지는 나중에 생각한다" ] },
    en: { q: "Your entire schedule is suddenly canceled, leaving you completely free for the day.", r: [
      "Treat it as the perfect chance to finish things I've been putting off",
      "Make a list of things I've wanted to do and work through it",
      "Relax first and do whatever I feel like doing in the moment",
      "Message friends to see what everyone is doing",
      "Leave the house first and decide where I'm going later" ] },
    score: [[-6,-2],[-4,1],[2,-1],[3,5],[6,2]] },
  { ko: { q: "여러 사람이 함께하는 프로젝트가 자꾸 엉키기 시작한다. 당신은?", r: [
      "업무와 역할을 다시 나누고 진행 방식을 정리한다",
      "문제의 원인을 조용히 파악한 뒤 해결책을 제안한다",
      "사람들 사이의 분위기가 나빠지지 않도록 먼저 조율한다",
      "답답한 점을 솔직하게 말하고 바로 토론을 시작한다",
      "기존 방식을 버리고 완전히 다른 방법을 한번 시도해본다" ] },
    en: { q: "A group project keeps falling apart. What do you do?", r: [
      "Reassign tasks and reorganize the entire workflow",
      "Quietly identify the cause and then propose a solution",
      "Focus first on keeping tension between people from getting worse",
      "Say what's frustrating me and start a direct discussion",
      "Throw out the old approach and try something completely different" ] },
    score: [[-6,2],[-5,-2],[-2,4],[-1,6],[6,1]] },
  { ko: { q: "새로운 취미를 시작하게 되면 보통 어떻게 배우는가?", r: [
      "기초부터 순서대로 배우고 제대로 익힌 뒤 다음 단계로 간다",
      "잘하는 사람을 관찰하면서 혼자 반복 연습한다",
      "기본적인 설명만 듣고 직접 해보면서 감을 잡는다",
      "다른 사람들과 함께 배우며 의견과 반응을 주고받는다",
      "정해진 방법보다 나만의 방식을 이것저것 실험해본다" ] },
    en: { q: "How do you usually approach learning a new hobby?", r: [
      "Learn the fundamentals in order and master each step before moving on",
      "Observe skilled people and practice repeatedly on my own",
      "Learn the basics, then figure things out by doing",
      "Learn with other people and constantly exchange feedback",
      "Experiment with my own methods instead of following the standard approach" ] },
    score: [[-6,-2],[-4,-5],[2,0],[1,5],[6,-1]] },
  { ko: { q: "친한 친구와 의견 충돌이 생겼다. 가장 가까운 반응은?", r: [
      "감정이 가라앉을 때까지 기다렸다가 차분히 이야기한다",
      "내가 왜 불편했는지 먼저 혼자 정리한다",
      "관계가 중요하니 서로 양보할 수 있는 지점을 찾는다",
      "오해를 오래 끌기 싫어서 그 자리에서 솔직하게 말한다",
      "논쟁이 너무 심각해지지 않도록 농담이나 다른 방식으로 분위기를 바꾼다" ] },
    en: { q: "You have a disagreement with a close friend. What is your most likely response?", r: [
      "Wait until emotions settle, then talk calmly",
      "First figure out privately why the situation bothered me",
      "Look for a compromise because preserving the relationship matters",
      "Speak honestly on the spot because I hate letting misunderstandings drag on",
      "Use humor or change the approach so the argument doesn't become too serious" ] },
    score: [[-4,-3],[-2,-6],[-2,3],[0,6],[5,4]] },
  { ko: { q: "중요한 결정을 내려야 할 때 당신이 가장 믿는 것은?", r: [
      "충분히 조사한 정보와 검증된 기준",
      "오래 고민한 끝에 내린 나 자신의 판단",
      "경험 있는 사람들의 조언과 내 생각의 균형",
      "상황을 직접 마주했을 때 느껴지는 직감",
      "처음부터 이상하게 끌렸던 선택" ] },
    en: { q: "When making an important decision, what do you trust most?", r: [
      "Thorough research and proven criteria",
      "My own judgment after thinking about it for a long time",
      "A balance between experienced advice and my own opinion",
      "The instinct I feel when I actually face the situation",
      "The option I was strangely drawn to from the beginning" ] },
    score: [[-6,-1],[-3,-5],[-2,2],[4,0],[6,2]] },
  { ko: { q: "사람이 많은 모임에 갔는데 아는 사람이 거의 없다.", r: [
      "조용한 자리를 찾아 상황을 먼저 관찰한다",
      "아는 사람 한 명과 이야기하면서 천천히 적응한다",
      "누가 말을 걸어오면 편하게 대화를 이어간다",
      "흥미로워 보이는 사람에게 먼저 말을 걸어본다",
      "분위기가 재미있으면 금방 중심에 섞여들어 장난치고 떠든다" ] },
    en: { q: "You're at a large gathering where you barely know anyone.", r: [
      "Find a quiet spot and observe the situation first",
      "Stay with one familiar person while slowly getting comfortable",
      "Comfortably continue conversations when someone approaches me",
      "Approach someone who seems interesting and start talking",
      "If the mood is fun, quickly jump into the center of things and joke around" ] },
    score: [[-2,-6],[-3,-3],[0,1],[3,5],[5,6]] },
  { ko: { q: "열심히 준비한 일이 예상보다 좋지 않은 결과로 끝났다.", r: [
      "무엇이 잘못됐는지 분석하고 다음에는 같은 실수를 하지 않도록 한다",
      "겉으로는 담담하지만 혼자 있는 동안 계속 생각하게 된다",
      "아쉬움을 인정하고 주변 사람들과 이야기를 나눈다",
      "결과보다 도전한 경험 자체에서 의미를 찾으려 한다",
      "실패한 방식은 잊고 완전히 새로운 방향을 시도해보고 싶어진다" ] },
    en: { q: "Something you worked hard on ends with a disappointing result.", r: [
      "Analyze what went wrong and make sure I don't repeat the mistake",
      "Act calm outwardly but keep thinking about it when I'm alone",
      "Acknowledge my disappointment and talk it through with people around me",
      "Try to find value in the experience of attempting it",
      "Forget the failed approach and feel like trying a completely new direction" ] },
    score: [[-6,-1],[-2,-6],[-1,5],[3,2],[6,1]] },
  { ko: { q: "누군가에게 특별한 선물을 준비한다면?", r: [
      "필요한 물건을 미리 알아보고 가장 실용적인 것을 고른다",
      "그 사람이 예전에 무심코 했던 말을 기억해서 준비한다",
      "상대가 좋아할 만한 것과 내 취향을 적당히 섞어서 고른다",
      "선물을 주면서 상대의 반응을 보는 순간이 가장 기대된다",
      "갑자기 떠오른 독특한 아이디어를 그대로 실행한다" ] },
    en: { q: "When preparing a special gift for someone, what do you do?", r: [
      "Research what they need and choose the most practical option",
      "Remember something they casually mentioned a long time ago",
      "Choose something that mixes their taste with a bit of my own",
      "Look forward most to seeing their reaction when I give it to them",
      "Act on a strange or unique idea that suddenly comes to mind" ] },
    score: [[-5,1],[-3,-4],[1,1],[1,6],[6,3]] },
  { ko: { q: "당신이 어떤 팀의 리더가 되었다. 가장 중요하게 생각하는 것은?", r: [
      "역할과 목표를 명확하게 정해서 혼란을 줄이는 것",
      "모든 상황을 살피면서 문제가 커지기 전에 해결하는 것",
      "각자의 성격과 장점을 이해해 모두가 편하게 참여하게 하는 것",
      "내가 먼저 열정을 보여서 팀 전체의 분위기를 끌어올리는 것",
      "형식에 얽매이지 않고 각자가 가장 잘하는 방식으로 움직이게 하는 것" ] },
    en: { q: "You become the leader of a team. What matters most to you?", r: [
      "Defining clear roles and goals to minimize confusion",
      "Watching the situation carefully and solving problems before they grow",
      "Understanding everyone's strengths and making participation comfortable",
      "Showing my own passion first and raising the energy of the entire team",
      "Letting everyone work in the way they do best without rigid structure" ] },
    score: [[-6,3],[-5,-2],[-2,4],[-1,6],[6,2]] },
  { ko: { q: "아무에게도 보여주지 않아도 되는 개인 프로젝트를 한다면?", r: [
      "처음 정한 목표와 기준에 맞게 끝까지 완성한다",
      "혼자 오랫동안 파고들면서 만족할 때까지 다듬는다",
      "완성도에 너무 집착하지 않고 즐기는 데 집중한다",
      "중간 결과물을 주변 사람에게 보여주고 반응을 듣는다",
      "계속 새로운 아이디어가 생겨서 처음과 전혀 다른 결과물이 된다" ] },
    en: { q: "You're working on a personal project that no one else ever has to see.", r: [
      "Finish it according to the goals and standards I set at the beginning",
      "Dive deeply into it alone and refine it until I'm satisfied",
      "Avoid obsessing over perfection and focus on enjoying the process",
      "Show the progress to people around me and ask for reactions",
      "Keep following new ideas until the result becomes completely different from the original plan" ] },
    score: [[-6,-3],[-3,-6],[2,-1],[1,5],[6,-2]] },
  { ko: { q: "예상하지 못한 문제가 갑자기 생겼을 때 가장 먼저 하는 것은?", r: [
      "상황을 정리하고 가능한 해결 순서를 세운다",
      "아무 말 없이 잠깐 생각할 시간을 갖는다",
      "주변 사람들과 상황을 공유하고 의견을 모은다",
      "일단 할 수 있는 것부터 바로 움직이면서 해결한다",
      "기존 방식이 안 되면 즉석에서 전혀 다른 방법을 만들어낸다" ] },
    en: { q: "When an unexpected problem suddenly appears, what do you do first?", r: [
      "Organize the situation and establish an order for possible solutions",
      "Stay quiet and take some time to think",
      "Share the situation with others and gather opinions",
      "Start doing whatever is immediately possible and solve it while moving",
      "If the usual method fails, invent a completely different approach on the spot" ] },
    score: [[-6,1],[-3,-6],[-2,5],[3,3],[6,1]] },
  { ko: { q: "친구들이 당신 몰래 깜짝 생일 파티를 준비했다.", r: [
      "고맙지만 갑작스러운 상황에 적응하는 데 시간이 조금 필요하다",
      "크게 티 내지는 않아도 오래 기억에 남을 것 같다",
      "당황스럽지만 준비해준 사람들에게 고마움을 표현한다",
      "놀란 감정과 기쁨을 그대로 크게 표현한다",
      "곧바로 분위기에 올라타서 예상하지 못한 장난이나 이벤트를 추가한다" ] },
    en: { q: "Your friends secretly prepare a surprise birthday party for you.", r: [
      "I'm grateful, but I need some time to adjust to the sudden situation",
      "I don't show a huge reaction, but I'll probably remember it for a long time",
      "I'm surprised, but I make sure to express gratitude to everyone",
      "I openly and enthusiastically show exactly how surprised and happy I am",
      "I immediately ride the energy and add my own unexpected joke or event" ] },
    score: [[-4,-4],[-2,-6],[-1,3],[2,6],[6,6]] },
  { ko: { q: "오랫동안 준비한 중요한 날을 앞두고 있다. 전날 밤 당신은?", r: [
      "준비물을 다시 확인하고 계획대로 일찍 잠든다",
      "조용히 혼자 있으면서 머릿속으로 내일을 시뮬레이션한다",
      "필요한 준비는 끝냈으니 평소처럼 편하게 시간을 보낸다",
      "함께하는 사람들과 연락하며 긴장과 기대를 나눈다",
      "갑자기 떠오른 아이디어를 마지막 순간까지 시험해본다" ] },
    en: { q: "The night before an important day you've prepared for a long time, what are you doing?", r: [
      "Check everything one more time and go to bed early as planned",
      "Spend time alone quietly rehearsing tomorrow in my head",
      "I've done what I can, so I relax and spend the evening normally",
      "Talk with the people involved and share our nerves and excitement",
      "Keep testing a new idea that suddenly came to me, even at the last minute" ] },
    score: [[-6,-2],[-4,-6],[1,-1],[-1,5],[6,2]] },
  { ko: { q: "게임 내에서 집을 꾸밀 수 있다. 나는...", r: [
      "게임에서 모은 희귀한 물건과 기념품을 보기 좋게 전시해 박물관처럼 만든다",
      "가구 배치와 분위기까지 최대한 실제 우리 집과 비슷하게 재현해본다",
      "현실에서는 살기 어려운, 내가 꿈꾸는 이상적인 집을 만들어본다",
      "꾸며도 게임 진행에 별 영향이 없으니 아이템을 쌓아두는 창고처럼 사용한다",
      "내가 정말 그 세계에 살고 있다고 상상하며 게임 속 분위기와 설정에 어울리게 꾸민다" ] },
    en: { q: "There is a house-decorating feature in the game. I...", r: [
      "Turn it into a museum where I can proudly display rare items and souvenirs I've collected",
      "Recreate my real home as closely as possible, including the furniture layout and atmosphere",
      "Build my ideal dream house, even if it would be unrealistic in real life",
      "Since decorating has no real effect on gameplay, use it mostly as storage for my items",
      "Imagine that I actually live in that world and decorate the house to fit its setting and atmosphere" ] },
    score: [[1,6],[-3,-2],[5,4],[0,-3],[3,-1]] },
  { ko: { q: "당신의 방은 어떻게 꾸미는 편인가?", r: [
      "다른 사람들이 방을 어떻게 꾸몄는지 찾아보고 마음에 드는 아이디어를 참고한다",
      "생활하기 편하도록 가구의 위치와 실용적인 동선을 먼저 구상한다",
      "내가 좋아하는 물건들을 자주 볼 수 있는 곳에 꺼내놓고 장식한다",
      "원하는 색감과 분위기를 먼저 정하고 전체적으로 통일감 있게 꾸민다",
      "마음에 드는 물건을 하나씩 들이다 보면 자연스럽게 내 취향대로 채워진다" ] },
    en: { q: "How do you usually decorate your room?", r: [
      "Look at how other people decorate their rooms and borrow ideas I like",
      "Plan the furniture layout and practical flow of the room first",
      "Display my favorite things where I can easily see and enjoy them",
      "Choose a color palette and atmosphere first, then keep the whole room cohesive",
      "Keep adding things I like until the room naturally becomes a reflection of my taste" ] },
    score: [[-2,2],[-6,-1],[2,5],[-5,2],[6,-1]] }
];

const CHARACTERS = {
  "neg-neg": { coord: [-4,-4], name: "Stirling Engine", koreanName: "스털링 엔진", imageId: "portrait-stirling", imageSrc: "uploads/stirling.jpg", initial: "S", accent: "#7C97A8",
    quoteKo: "조용히 돌아가고 있습니다. 진짜로요.", quoteEn: "I'm running quietly. Yes, I really am.",
    traitsKo: ["차분함", "신중함", "꾸준함", "완벽주의"], traitsEn: ["Calm", "Cautious", "Consistent", "Perfectionistic"],
    aboutKo: "외부 열원으로 천천히, 조용히 돌아가는 엔진. 소음도 진동도 거의 없이 낮은 회전수를 오래 유지하지만, 예열 없이는 절대 움직이지 않는다. 급발진은 없고, 대신 한번 안정되면 좀처럼 멈추지 않는다.",
    aboutEn: "A quiet external-combustion engine that runs slow and low, almost no noise or vibration, holding a steady RPM for a long time. It won't move at all without warming up first — but once stable, it rarely stalls.",
    matchKo: "전기 모터", matchEn: "Electric Motor", hardKo: "2행정 엔진", hardEn: "Two-Stroke Engine" },
  "neg-mid": { coord: [-4,0], name: "Diesel Engine", koreanName: "디젤 엔진", imageId: "portrait-diesel", imageSrc: "uploads/diesel.jpg", initial: "D", accent: "#C98A2D",
    quoteKo: "조금 투박해도 상관없습니다. 결국 굴러가면 됩니다.", quoteEn: "It doesn't have to be elegant. It just has to work.",
    traitsKo: ["현실적", "책임감", "안정적", "해결 중심"], traitsEn: ["Practical", "Responsible", "Reliable", "Solution-oriented"],
    aboutKo: "높은 압축비로 힘 있게, 오래 돌아가는 엔진. 회전수는 낮아도 토크는 강해서 무거운 짐을 지고도 끝까지 완주한다. 화려한 배기음은 없지만, 고장 없이 제일 오래 버티는 타입.",
    aboutEn: "A high-compression engine built for torque over flash. Low RPM, strong pulling power — hauls heavy loads all the way to the finish. No flashy exhaust note, but it's the type that keeps running the longest without breaking down.",
    matchKo: "V8 엔진", matchEn: "V8 Engine", hardKo: "제트 엔진", hardEn: "Jet Engine" },
  "neg-pos": { coord: [-4,4], name: "V8 Engine", koreanName: "V8 엔진", imageId: "portrait-v8", imageSrc: "uploads/v8.png", initial: "V8", accent: "#D8432E",
    quoteKo: "신념도 강하고, 출력도 강하고, 목소리도 큽니다.", quoteEn: "Strong principles. Strong output. Strong volume.",
    traitsKo: ["열정적", "솔직함", "신념 강함", "표현력 풍부"], traitsEn: ["Passionate", "Direct", "Principled", "Expressive"],
    aboutKo: "8기통이 동시에 터지는 만큼 출력도, 배기음도 압도적인 엔진. 한번 레드존까지 밟으면 타협이 없고, 존재감을 숨기는 법을 모른다. 연비는 나쁘지만 그만한 값을 한다.",
    aboutEn: "Eight cylinders firing together — massive output, massive exhaust note. Once it hits the redline, there's no backing off, and it doesn't know how to stay quiet. Terrible fuel economy, but it delivers.",
    matchKo: "디젤 엔진", matchEn: "Diesel Engine", hardKo: "친환경주의 모터", hardEn: "Eco-Conscious Motor" },
  "mid-mid": { coord: [0,0], name: "Electric Motor", koreanName: "전기 모터", imageId: "portrait-electric", imageSrc: "uploads/motor.png", initial: "E", accent: "#3E9E8E",
    quoteKo: "복잡하게 할 필요 있나요? 자연스럽게 맞추면 되죠.", quoteEn: "Why make it complicated? Just adapt and keep moving.",
    traitsKo: ["유연함", "친화적", "균형감", "적응력"], traitsEn: ["Flexible", "Friendly", "Balanced", "Adaptable"],
    aboutKo: "가솔린도 디젤도 아닌, 상황에 맞춰 출력을 조절하는 모터. 정지 상태에서도 최대 토크를 바로 낼 수 있고, 소음도 거의 없이 부드럽게 전환한다. 극단적인 스펙은 없지만 어디에나 잘 맞는다.",
    aboutEn: "Neither gasoline nor diesel — a motor that adjusts output to fit the situation. Delivers full torque instantly from a standstill, switching modes smoothly with almost no noise. No extreme specs, but it fits almost anywhere.",
    matchKo: "스털링 엔진", matchEn: "Stirling Engine", hardKo: "V8 엔진", hardEn: "V8 Engine" },
  "pos-mid": { coord: [4,0], name: "Jet Engine", koreanName: "제트 엔진", imageId: "portrait-jet", imageSrc: "uploads/jet.webp", initial: "J", accent: "#4C7FC9",
    quoteKo: "계획은 이륙 후에 생각하겠습니다.", quoteEn: "I'll think about the plan after takeoff.",
    traitsKo: ["본능적", "자유로움", "추진력", "대담함"], traitsEn: ["Instinctive", "Free-spirited", "Driven", "Bold"],
    aboutKo: "고민보다 추진이 먼저인 엔진. 공기를 빨아들여 그대로 밀어내는 단순한 원리로 순식간에 최고 속도에 도달한다. 한번 궤도에 오르면 방향을 바꾸기 어렵지만, 그만큼 멀리, 빠르게 간다.",
    aboutEn: "Thrust first, thinking later. A simple principle — suck in air, push it out — that reaches top speed almost instantly. Hard to change course once it's on a heading, but it covers distance fast.",
    matchKo: "2행정 엔진", matchEn: "Two-Stroke Engine", hardKo: "디젤 엔진", hardEn: "Diesel Engine" },
  "pos-pos": { coord: [4,4], name: "Two-Stroke Engine", koreanName: "2행정 엔진", imageId: "portrait-twostroke", imageSrc: "uploads/2stroke.jpg", initial: "2T", accent: "#E0A000",
    quoteKo: "작은 체구에서 예상하지 못한 소리와 에너지가 나옵니다.", quoteEn: "An unreasonable amount of noise and energy for something this size.",
    traitsKo: ["활발함", "즉흥적", "표현력 풍부", "반응 빠름"], traitsEn: ["Energetic", "Spontaneous", "Expressive", "Quick-reacting"],
    aboutKo: "한 바퀴에 한 번씩 무조건 폭발하는, 작지만 요란한 엔진. 회전수를 순식간에 끌어올리고 반응이 즉각적이라 조용히 지나가는 법이 없다. 무게 대비 출력은 최고 수준.",
    aboutEn: "Small but loud — it fires on every single revolution, no exceptions. Revs up instantly and reacts immediately, so it never passes through quietly. Best power-to-weight ratio around.",
    matchKo: "제트 엔진", matchEn: "Jet Engine", hardKo: "스털링 엔진", hardEn: "Stirling Engine" }
};

const UI = {
  ko: { badge: "심리테스트", introTitle: "나는 어떤<br/>엔진 타입일까?", introSubtitle: "질문 8개로 알아보는<br/>나와 꼭 닮은 엔진",
    introPlaceholder: "엔진 이미지를 놓아주세요", startBtn: "테스트 시작하기",
    footnote: "16개 중 랜덤으로 뽑힌 8개의 질문에 답해보세요", differentQBtn: "다른 질문! 🔀",
    resultBadge: "당신의 엔진 타입은...", matchLabel: "최고의 짝꿍", hardestLabel: "서먹서먹한 상대", restartBtn: "다시 테스트하기 🔁",
    typeLabel: " 타입", toggleTo: "EN",
    axisXLow: "신중함", axisXHigh: "본능적", axisYLow: "차분함", axisYHigh: "표현적", mapCaption: "당신의 위치" },
  en: { badge: "PERSONALITY QUIZ", introTitle: "Which Engine<br/>Type Am I?", introSubtitle: "8 questions to find<br/>your matching engine type",
    introPlaceholder: "Drop an engine image here", startBtn: "Start the Quiz",
    footnote: "Answer 8 questions randomly drawn from a pool of 16", differentQBtn: "Different Question! 🔀",
    resultBadge: "Your engine type is...", matchLabel: "Perfect Match", hardestLabel: "Hardest Match", restartBtn: "Retake the Quiz 🔁",
    typeLabel: " Type", toggleTo: "한",
    axisXLow: "Deliberate", axisXHigh: "Instinctive", axisYLow: "Reserved", axisYHigh: "Expressive", mapCaption: "Where you landed" }
};

const NUM_QUESTIONS_ASKED = 8;
const BUTTON_COLORS_STROKES = ["#F5B700","#46C2CB","#E4572E","#3E9E8E","#4C7FC9"];

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
    if (dist < bestDist) { bestDist = dist; bestKey = key; }
  }
  return bestKey;
}

// Maps a raw axis value onto the -4..4 plot domain (clamped, for display only —
// the nearest-character match itself uses the unclamped raw score).
// Raw axis scores can range up to ±6 per question over 8 questions (±48 total);
// scale that down to the ±4 plot domain the character coords live on.
const AXIS_SCALE = 12;
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
    const key = isResult ? nearestCharacterKey(state.axis1, state.axis2) : "mid-mid";
    const c = CHARACTERS[key] || CHARACTERS["mid-mid"];
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
}

el.langBtn.onclick = toggleLang;
el.startBtn.onclick = startTest;
el.restartBtn.onclick = restartTest;

render();
