// 1. 카테고리별 12개 미션 데이터베이스
const missions = {
    water: [
        { badge: "자리 이동", text: "지금 바로 의자에서 일어나 텀블러나 컵에 시원한 물을 가득 채워 오세요! 💧" },
        { badge: "감각 느끼기", text: "물 한 모금을 입안에 넣고 3초 동안 천천히 머금은 뒤, 차가움을 느끼며 마시기 ⏱️" },
        { badge: "눈 피로 회복", text: "책에서 잠시 눈을 완전히 떼고, 창밖 먼 곳을 바라보며 시원한 물 한 모금 삼키기 🌊" },
        { badge: "함께 건강", text: "주변 짝꿍이나 학우에게 '우리 물 마시자!' 권하고, 나도 한 모금 들이키기 👥" },
        { badge: "몸풀기", text: "앉은 자리에서 가슴을 활짝 펴고, 하늘을 향해 고개를 들며 한 모금 천천히 넘기기 🧘" },
        { badge: "소소한 정성", text: "내 몸을 소중히 케어하듯, 컵을 따뜻하게 두 손으로 쥐고 천천히 쪼르륵 삼켜보기 👐" },
        { badge: "마인드 세팅", text: "오늘 하루도 바쁜 스케줄을 기특하게 소화 중인 자신을 응원하며 물 한 모금 마셔주기 ⭐" },
        { badge: "감각 충전", text: "사막에서 달콤한 오아시스를 발견한 생존가처럼 세상에서 가장 짜릿하게 마시기 🌴" },
        { badge: "장 보호", text: "너무 차갑지 않고 속을 은은하게 데워줄 미지근한 온수 한 모금으로 채워보기 🌡️" },
        { badge: "소량 집중", text: "귀여운 아기 새가 정원의 맑은 이슬을 축이듯 한 모금 쏙 들이마시기 🐣" },
        { badge: "목 풀기", text: "목을 대각선 양쪽으로 지그시 늘려 긴장감을 푼 뒤 고르게 수분 삼키기 🦒" },
        { badge: "집중 준비", text: "다시 시작할 공부나 활동에 앞서, 꺼진 뇌가 번쩍 깨어나도록 활력 있게 꿀꺽 삼키기 ✏️" }
    ],
    brain: [
        { badge: "두뇌 넌센스", text: "세상에서 가장 지루하고 시간 안 가는 중학교 이름은? <br><br><strong>(정답: 로딩중)</strong> 🧠" },
        { badge: "10초 암산", text: "잠자는 전두엽을 일깨워보자! 제한 시간 5초 안에 정답을 구해보기: <br><br><strong>17 + 28 = ?</strong><br><small>(정답: 45)</small> ⏱️" },
        { badge: "두뇌 키보드", text: "화면을 보지 않고 눈을 완전히 감은 상태에서, 타이핑으로 '행복한 하루' 오타 없이 치기 도전! ⌨️" },
        { badge: "세종의 수수께끼", text: "세종대왕이 가장 좋아하고 만든 우유는? <br><br><strong>(정답: 아야어여오우유)</strong> 🥛" },
        { badge: "초단기 암산", text: "뇌의 작업 메모리를 순간 가동하자! 빠르게 맞히기: <br><br><strong>9 × 8 − 15 = ?</strong><br><small>(정답: 57)</small> ⚡" },
        { badge: "발음 스피드", text: "입과 전두엽을 함께 활성화! '간장공장공장장'을 소리내어 혹은 속으로 꼬이지 않고 3회 말해보기 🗣️" },
        { badge: "시각적 스캐닝", text: "지금 눈앞에 보이는 사물들 중, 서로 다른 물건 3개의 이름을 머릿속으로 정교하게 외쳐보기 👁️" },
        { badge: "좌우뇌 교차", text: "오른손으로는 허공에 세모를 그리고, 동시에 왼손으로는 네모를 5초간 일정하게 그리기 도전! 📐" },
        { badge: "역순 읽기", text: "제시되는 단어를 머릿속에서 거꾸로 재정렬해 보세요: <br><br><strong>[전 두 엽 활 성 화]</strong> → 화성활엽두전! 🔄" },
        { badge: "두뇌 연산", text: "가속 페달을 밟아보자! 순식간에 계산해 보기: <br><br><strong>120 ÷ 4 + 19 = ?</strong><br><small>(정답: 49)</small> 🔢" },
        { badge: "카운트 마인드", text: "눈을 꼭 감고 마음속으로 정확히 5초를 센 다음, 가볍게 심호흡을 하며 눈뜨기 👁️" },
        { badge: "반사신경 교차", text: "양손 주먹을 쥐고, 한 손만 보자기 상태로 바꾸기. 이후 매 초마다 교차해서 좌우 번갈아 행동하기 ✊" }
    ],
    stretching: [
        { badge: "척추 일깨우기", text: "양손 깍지를 끼고 천장을 향해 손바닥을 뒤집으며 기지개를 10초간 길게 켜기 🧘" },
        { badge: "경추 릴렉싱", text: "어깨를 편 상태로 고개를 좌우 및 시계 방향으로 아주 천천히 크게 3번씩 롤링해 주기 🔄" },
        { badge: "견갑골 기어", text: "양손 끝을 어깨에 대고 팔꿈치로 우주를 그리듯 앞뒤 어깨 관절 5회씩 크게 돌리기 🏋️" },
        { badge: "몸통 회전", text: "허리를 바짝 세우고 앉아 의자 등받이를 양손으로 짚으며 허리를 좌우로 가볍게 비틀어주기 🧘" },
        { badge: "승모근 릴리스", text: "한 손으로 반대편 머리 관자놀이를 가볍게 눌러 고개를 어깨 쪽으로 10초 늘려주기 🦒" },
        { badge: "손목 건초염 예방", text: "가슴 앞에 양 손바닥을 합장하고, 아래로 천천히 손목을 눌러 손바닥 안쪽 늘리기 👐" },
        { badge: "하지 혈액 순환", text: "발목을 허공에 띄워 둥글게 원을 그리듯 안쪽 5회, 바깥쪽 5회 가볍게 돌려주기 👣" },
        { badge: "거북목 탈출", text: "양손 엄지손가락으로 턱을 지그시 받쳐주며 고개를 천장으로 천천히 끌어올리기 (8초 유지) 🐢" },
        { badge: "타이핑 피로 해소", text: "손을 가슴 높이로 올린 다음 양손의 마디마디를 세게 쥐었다 펼치는 잼잼을 15회 실시하기 ✊" },
        { badge: "목덜미 시원함", text: "두 손으로 뒤통수를 가볍게 짚고 턱이 가슴 끝에 닿을 만큼 숙여 목 뒤 늘리기 🙇" },
        { badge: "종아리 스트레칭", text: "다리를 쭉 뻗은 채 발끝을 내 몸 안쪽으로 당기면서 아킬레스건 시원하게 이완하기 🦵" },
        { badge: "라운드 숄더 교정", text: "양손을 등 뒤에서 깍지 끼고 날개뼈를 가운데로 모아 가슴을 팽팽히 8초 펴주기 🕊️" }
    ]
};

// 2. 앱 전역 상태
const appState = {
    currentCategory: 'water',
    currentMission: null,
    counts: { water: 0, brain: 0, stretching: 0 },
    history: { water: [], brain: [], stretching: [] }
};

// 3. 레벨 등급 함수
function getLevelName(category, count) {
    if (category === 'water') {
        if (count === 0) return "🏜️ 메마른 사막";
        if (count <= 2) return "🌱 촉촉한 새싹";
        if (count <= 5) return "🌿 푸른 이파리";
        if (count <= 9) return "💧 맑은 오아시스";
        return "🐳 생명 바다";
    } else if (category === 'brain') {
        if (count === 0) return "💤 잠자는 전두엽";
        if (count <= 2) return "🐣 깨어나는 싱킹";
        if (count <= 5) return "🔥 뜨거운 브레인";
        if (count <= 9) return "🧠 파워 스마트 뇌";
        return "⚡ 초월 천재 상태";
    } else {
        if (count === 0) return "🪵 굳어버린 화석";
        if (count <= 2) return "🎋 유연한 대나무";
        if (count <= 5) return "🤸 균형 잡힌 신체";
        if (count <= 9) return "🕊️ 가벼운 깃털 몸";
        return "🧘 하이 요가 마스터";
    }
}

// 4. 카테고리 전환
function switchCategory(targetCategory) {
    appState.currentMission = null;
    appState.currentCategory = targetCategory;

    document.body.className = 'theme-' + targetCategory;

    document.querySelectorAll('.tab-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    document.getElementById('tab-' + targetCategory).classList.add('active');

    var titleEl = document.getElementById('app-title');
    var subtitleEl = document.getElementById('app-subtitle');
    var footerEl = document.getElementById('appFooter');

    if (targetCategory === 'water') {
        titleEl.innerHTML = '🥛 수분 충전';
        subtitleEl.innerText = '물 한 모금으로 채우는 건강 생활 습관';
        footerEl.innerText = '이 앱은 수분 섭취 습관 형성을 위한 생활습관 참고용입니다.';
    } else if (targetCategory === 'brain') {
        titleEl.innerHTML = '🧠 뇌 깨우기';
        subtitleEl.innerText = '공부 직전, 10초 만에 깨어나는 스마트 뇌 워밍업';
        footerEl.innerText = '이 앱은 두뇌 활성화를 위한 오락용 참고 앱입니다.';
    } else {
        titleEl.innerHTML = '🧘 1분 스트레칭';
        subtitleEl.innerText = '의자에서 바로 푸는 뻐근한 전신 피로 회복 가이드';
        footerEl.innerText = '본 앱은 가벼운 스트레칭 참고용이며, 통증이 있을 시 의사와 상의하세요.';
    }

    document.getElementById('missionBadge').innerText = '카테고리 변경';
    document.getElementById('missionText').innerHTML = '새로운 테마가 선택되었습니다! 아래 \'새 미션 뽑기\'를 눌러 실천해 보세요.';
    document.getElementById('completeBtn').disabled = true;

    renderStatus();
    renderHistory();
}

// 5. 상태 및 히스토리 렌더링
function renderStatus() {
    var cat = appState.currentCategory;
    var count = appState.counts[cat];
    document.getElementById('countDisplay').innerText = count + '회 완료';
    document.getElementById('levelDisplay').innerText = getLevelName(cat, count);
}

function renderHistory() {
    var cat = appState.currentCategory;
    var logs = appState.history[cat];
    var listEl = document.getElementById('recordList');

    listEl.innerHTML = '';

    if (logs.length === 0) {
        listEl.innerHTML = '<li class="empty-record">아직 완수한 기록이 없습니다.</li>';
        return;
    }

    logs.forEach(function(log) {
        var li = document.createElement('li');
        li.className = 'record-item';
        li.innerHTML =
            '<span>[' + log.badge + '] ' + log.shortText + '</span>' +
            '<span class="record-time">' + log.time + ' 완료</span>';
        listEl.appendChild(li);
    });
}

// 6. 미션 뽑기
function drawMission() {
    var cat = appState.currentCategory;
    var missionList = missions[cat];
    var cardBody = document.getElementById('cardBody');

    cardBody.classList.remove('bounce');
    void cardBody.offsetWidth;
    cardBody.classList.add('bounce');

    var randomIndex = Math.floor(Math.random() * missionList.length);
    var chosen = missionList[randomIndex];
    appState.currentMission = chosen;

    document.getElementById('missionBadge').innerText = chosen.badge;
    document.getElementById('missionText').innerHTML = chosen.text;
    document.getElementById('completeBtn').disabled = false;
}

// 7. 미션 완료 처리
function completeMission() {
    var cat = appState.currentCategory;
    var mission = appState.currentMission;
    if (!mission) return;

    appState.counts[cat] += 1;

    var now = new Date();
    var timeString = now.toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    var plainText = mission.text.replace(/<[^>]*>/g, '');
    var shortText = plainText.length > 22 ? plainText.substring(0, 22) + '...' : plainText;

    appState.history[cat].unshift({
        badge: mission.badge,
        shortText: shortText,
        time: timeString
    });

    if (appState.history[cat].length > 3) {
        appState.history[cat].pop();
    }

    document.getElementById('missionBadge').innerText = '미션 클리어!';
    document.getElementById('missionText').innerHTML = '🎉 축하합니다! 일상 속 작은 루틴을 훌륭히 완수하여 뇌와 몸에 새로운 활력을 더했습니다. 한 번 더 도전해 볼까요?';
    document.getElementById('completeBtn').disabled = true;

    renderStatus();
    renderHistory();
}

// 8. 앱 초기화
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tab-water').addEventListener('click', function() { switchCategory('water'); });
    document.getElementById('tab-brain').addEventListener('click', function() { switchCategory('brain'); });
    document.getElementById('tab-stretching').addEventListener('click', function() { switchCategory('stretching'); });
    document.getElementById('nextBtn').addEventListener('click', drawMission);
    document.getElementById('completeBtn').addEventListener('click', completeMission);
    switchCategory('water');
});
