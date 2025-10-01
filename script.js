// script.js 파일의 전체 내용
document.addEventListener('DOMContentLoaded', function () {
    const evaluationData = {
        "common-korean-2": {
            name: "공통국어2",
            items: [
                { type: "지필", area: "1회고사", max: 100, ratio: 30, period: "9월 5주" },
                { type: "지필", area: "2회고사", max: 100, ratio: 30, period: "12월 2주" },
                { type: "수행", area: "활동 포트폴리오", max: 15, ratio: 15, period: "8월~12월" },
                { type: "수행", area: "매체 관련 콘텐츠제작", max: 10, ratio: 10, period: "9월" },
                { type: "수행", area: "감상문 쓰기", max: 10, ratio: 10, period: "11월" },
                { type: "수행", area: "중세국어의 이해", max: 5, ratio: 5, period: "10월" },
            ]
        },
        // ... (나머지 과목 데이터는 동일) ...
        "info-science-project": {
            name: "정보과학 과제연구",
            items: [
                { type: "수행", area: "프로그래밍 실습", max: 50, ratio: 50, period: "8~9월" },
                { type: "수행", area: "프로그래밍 실습 및 협업", max: 50, ratio: 50, period: "10~11월" },
            ]
        }
    };

    const subjectTabs = document.getElementById('subject-tabs');
    const subjectContent = document.getElementById('subject-content');
    let scores = JSON.parse(localStorage.getItem('evaluationScores')) || {};

    Object.keys(evaluationData).forEach((key, index) => {
        const subject = evaluationData[key];
        
        // ... (탭 생성 코드는 동일) ...
        const tabItem = document.createElement('li');
        const tabLink = document.createElement('a');
        tabLink.href = `#${key}`;
        tabLink.textContent = subject.name;
        tabLink.dataset.tab = key;
        if (index === 0) tabLink.classList.add('active');
        tabItem.appendChild(tabLink);
        subjectTabs.appendChild(tabItem);
        
        const pane = document.createElement('div');
        pane.id = key;
        pane.classList.add('subject-pane');
        if (index === 0) pane.classList.add('active');
        
        const totalRatio = subject.items.reduce((sum, item) => sum + item.ratio, 0);

        // ★★★★★ 여기에서 placeholder 속성이 제거되었습니다. ★★★★★
        const table = `
            <table>
                <thead>
                    <tr>
                        <th>평가 방법</th>
                        <th>평가 영역</th>
                        <th>영역 만점</th>
                        <th>학기말 반영비율(%)</th>
                        <th>내 점수</th>
                        <th>평가 시기</th>
                    </tr>
                </thead>
                <tbody id="tbody-${key}">
                    ${subject.items.map((item, itemIndex) => {
                        const isFirstOfType = itemIndex === 0 || subject.items[itemIndex - 1].type !== item.type;
                        const typeCell = isFirstOfType 
                            ? `<td rowspan="${subject.items.filter(i => i.type === item.type).length}">${item.type}평가</td>` 
                            : '';
                        
                        return `
                            <tr>
                                ${typeCell}
                                <td>${item.area}</td>
                                <td>${item.max}</td>
                                <td>${item.ratio}</td>
                                <td><input type="number" class="score-input" data-subject="${key}" data-itemindex="${itemIndex}" min="0" max="${item.max}"></td>
                                <td>${item.period}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3">합계</td>
                        <td>${totalRatio}</td>
                        <td id="total-score-${key}" class="total-score">0.00</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        `;
        pane.innerHTML = table;
        subjectContent.appendChild(pane);
    });

    // ... (나머지 자바스크립트 코드는 이전과 동일합니다) ...
    subjectTabs.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') { e.preventDefault(); const tabId = e.target.dataset.tab; document.querySelectorAll('#subject-tabs a').forEach(a => a.classList.remove('active')); e.target.classList.add('active'); document.querySelectorAll('.subject-pane').forEach(p => p.classList.remove('active')); document.getElementById(tabId).classList.add('active'); }
    });
    function calculateAndSave(subjectKey) {
        const subject = evaluationData[subjectKey]; let total = 0; if (!scores[subjectKey]) { scores[subjectKey] = new Array(subject.items.length).fill(null); }
        subject.items.forEach((item, index) => {
            const input = document.querySelector(`input[data-subject="${subjectKey}"][data-itemindex="${index}"]`); const score = parseFloat(input.value);
            if (!isNaN(score)) { total += (score / item.max) * item.ratio; scores[subjectKey][index] = score; } else { scores[subjectKey][index] = null; }
        });
        document.getElementById(`total-score-${subjectKey}`).textContent = total.toFixed(2); localStorage.setItem('evaluationScores', JSON.stringify(scores));
    }
    document.querySelectorAll('.score-input').forEach(input => {
        input.addEventListener('input', () => { calculateAndSave(input.dataset.subject); });
    });
    function loadScoresAndCalculate() {
        Object.keys(evaluationData).forEach(subjectKey => {
            if (scores[subjectKey]) {
                scores[subjectKey].forEach((score, index) => {
                    if (score !== null) { const input = document.querySelector(`input[data-subject="${subjectKey}"][data-itemindex="${index}"]`); if(input) { input.value = score; } }
                });
            }
            calculateAndSave(subjectKey); 
        });
    }
    loadScoresAndCalculate();
});
