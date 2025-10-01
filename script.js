document.addEventListener('DOMContentLoaded', function () {
    // 1. 모든 과목 데이터에 'performancePdf' 속성 추가
    const evaluationData = {
        "common-korean-2": {
            name: "공통국어2",
            performancePdf: "pdfs/공통국어2_수행평가기준.pdf",
            items: [
                { type: "지필", area: "1회고사", max: 100, ratio: 30, period: "9월 5주" },
                { type: "지필", area: "2회고사", max: 100, ratio: 30, period: "12월 2주" },
                { type: "수행", area: "활동 포트폴리오", max: 15, ratio: 15, period: "8월~12월" },
                { type: "수행", area: "매체 관련 콘텐츠제작", max: 10, ratio: 10, period: "9월" },
                { type: "수행", area: "감상문 쓰기", max: 10, ratio: 10, period: "11월" },
                { type: "수행", area: "중세국어의 이해", max: 5, ratio: 5, period: "10월" },
            ]
        },
        "advanced-math": {
            name: "심화수학",
            performancePdf: "pdfs/심화수학_수행평가기준.pdf",
            items: [
                { type: "지필", area: "1회고사", max: 100, ratio: 30, period: "9월 5주" },
                { type: "지필", area: "2회고사", max: 100, ratio: 30, period: "12월 2주" },
                { type: "수행", area: "탐구 프로젝트", max: 20, ratio: 20, period: "10월 2주" },
                { type: "수행", area: "AI 활용 문항 작성", max: 20, ratio: 20, period: "9월 1주, 11월 2주" },
            ]
        },
        "common-english-2": {
            name: "공통영어2",
            performancePdf: "pdfs/공통영어2_수행평가기준.pdf",
            items: [
                { type: "지필", area: "1회고사", max: 100, ratio: 30, period: "9월 5주" },
                { type: "지필", area: "2회고사", max: 100, ratio: 30, period: "12월 2주" },
                { type: "수행", area: "포트폴리오", max: 10, ratio: 10, period: "수시" },
                { type: "수행", area: "영어 에세이 쓰기", max: 10, ratio: 10, period: "10월" },
                { type: "수행", area: "영어 프리젠테이션", max: 10, ratio: 10, period: "9월" },
                { type: "수행", area: "어휘 의미 추론하기", max: 10, ratio: 10, period: "10월, 11월" },
            ]
        },
         "integrated-society-2": {
            name: "통합사회2",
            performancePdf: "pdfs/통합사회2_수행평가기준.pdf",
            items: [
                { type: "지필", area: "1회고사", max: 100, ratio: 30, period: "9월 5주" },
                { type: "지필", area: "2회고사", max: 100, ratio: 30, period: "12월 2주" },
                { type: "수행", area: "민주시민교육 프로젝트", max: 10, ratio: 10, period: "10-11월" },
                { type: "수행", area: "서술형 기반 포트폴리오", max: 10, ratio: 10, period: "8-11월" },
                { type: "수행", area: "인권 프로젝트", max: 12, ratio: 12, period: "8월" },
                { type: "수행", area: "그대는 어떤 삶을 살 것인가", max: 8, ratio: 8, period: "10월" },
            ]
        },
        "life-science": {
            name: "생명과학",
            performancePdf: "pdfs/생명과학_수행평가기준.pdf",
            items: [
                { type: "지필", area: "1회고사", max: 100, ratio: 30, period: "9월 5주" },
                { type: "지필", area: "2회고사", max: 100, ratio: 30, period: "12월 2주" },
                { type: "수행", area: "과학적 사고와 글쓰기", max: 20, ratio: 20, period: "9월" },
                { type: "수행", area: "생명과학 연구 방법", max: 20, ratio: 20, period: "11월" },
            ]
        },
        "earth-science": {
            name: "지구과학",
            performancePdf: "pdfs/지구과학_수행평가기준.pdf",
            items: [
                { type: "지필", area: "1회고사(중간고사)", max: 100, ratio: 30, period: "9월 5주" },
                { type: "지필", area: "2회고사(기말고사)", max: 100, ratio: 30, period: "12월 2주" },
                { type: "수행", area: "창의적 문제 해결", max: 15, ratio: 15, period: "8월 4주" },
                { type: "수행", area: "징검다리 탐구", max: 25, ratio: 25, period: "10월 3주" },
            ]
        },
        "advanced-physics": {
            name: "고급물리학",
            performancePdf: "pdfs/고급물리학_수행평가기준.pdf",
            items: [
                { type: "지필", area: "1회고사", max: 100, ratio: 30, period: "9월 5주" },
                { type: "지필", area: "2회고사", max: 100, ratio: 30, period: "12월 2주" },
                { type: "수행", area: "심층 논문 탐구", max: 20, ratio: 20, period: "8월~11월" },
                { type: "수행", area: "신기술과 사회 변화", max: 20, ratio: 20, period: "8월~11월" },
            ]
        },
        "advanced-chemistry": {
            name: "고급화학",
            performancePdf: "pdfs/고급화학_수행평가기준.pdf",
            items: [
                { type: "지필", area: "1회고사", max: 100, ratio: 30, period: "9월 5주" },
                { type: "지필", area: "2회고사", max: 100, ratio: 30, period: "12월 2주" },
                { type: "수행", area: "주제 탐구 보고서", max: 20, ratio: 20, period: "9~11월" },
                { type: "수행", area: "화학 실험 평가", max: 20, ratio: 20, period: "11월" },
            ]
        },
        "science-inquiry-1": {
            name: "과학탐구실험1",
            performancePdf: "pdfs/과학탐구실험1_수행평가기준.pdf",
            items: [
                { type: "수행", area: "탐구보고서", max: 20, ratio: 20, period: "11월~12월" },
                { type: "수행", area: "포트폴리오", max: 80, ratio: 80, period: "상시" },
            ]
        },
        "sports-science": {
            name: "스포츠과학",
            performancePdf: "pdfs/스포츠과학_수행평가기준.pdf",
            items: [
                { type: "수행", area: "배구 서비스", max: 40, ratio: 40, period: "9월 2주" },
                { type: "수행", area: "배구 토스", max: 30, ratio: 30, period: "10월 3주" },
                { type: "수행", area: "기술 줄넘기", max: 30, ratio: 30, period: "11월 1주" },
            ]
        },
        "info-science-project": {
            name: "정보과학 과제연구",
            performancePdf: "pdfs/정보과학 과제연구_수행평가기준.pdf",
            items: [
                { type: "수행", area: "프로그래밍 실습", max: 50, ratio: 50, period: "8~9월" },
                { type: "수행", area: "프로그래밍 실습 및 협업", max: 50, ratio: 50, period: "10~11월" },
            ]
        }
    };
    
    // (이하 코드는 이전과 거의 동일)
    const subjectTabs = document.getElementById('subject-tabs');
    const subjectContent = document.getElementById('subject-content');
    let scores = JSON.parse(localStorage.getItem('evaluationScores')) || {};

    Object.keys(evaluationData).forEach((key, index) => {
        const subject = evaluationData[key];
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

        const table = `
            <table>
                <thead>
                    <tr>
                        <th>평가 방법</th><th>평가 영역</th><th>영역 만점</th><th>학기말 반영비율(%)</th><th>내 점수</th><th>평가 시기</th><th>완료 여부</th>
                    </tr>
                </thead>
                <tbody id="tbody-${key}">
                    ${subject.items.map((item, itemIndex) => {
                        let typeCell = '';
                        if (itemIndex === 0 || subject.items[itemIndex - 1].type !== item.type) {
                            const rowspan = subject.items.filter(i => i.type === item.type).length;
                            // ★★★★★ 변경점: '수행' 타입일 경우 <a> 태그로 감싸기 ★★★★★
                            if (item.type === '수행' && subject.performancePdf) {
                                typeCell = `<td rowspan="${rowspan}" class="pdf-link-cell"><a href="${subject.performancePdf}" target="_blank" title="수행평가 기준 보기">수행평가</a></td>`;
                            } else {
                                typeCell = `<td rowspan="${rowspan}">${item.type}평가</td>`;
                            }
                        }
                        return `
                            <tr>
                                ${typeCell}
                                <td>${item.area}</td>
                                <td>${item.max}</td>
                                <td>${item.ratio}</td>
                                <td><input type="number" class="score-input" data-subject="${key}" data-itemindex="${itemIndex}" min="0" max="${item.max}"></td>
                                <td>${item.period}</td>
                                <td id="status-${key}-${itemIndex}"></td> 
                            </tr>
                        `;
                    }).join('')}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3">합계</td><td>${totalRatio}</td><td id="total-score-${key}" class="total-score">0.00</td><td></td><td></td>
                    </tr>
                </tfoot>
            </table>
        `;
        pane.innerHTML = table;
        subjectContent.appendChild(pane);
    });
    
    subjectTabs.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') { e.preventDefault(); const tabId = e.target.dataset.tab; document.querySelectorAll('#subject-tabs a').forEach(a => a.classList.remove('active')); e.target.classList.add('active'); document.querySelectorAll('.subject-pane').forEach(p => p.classList.remove('active')); document.getElementById(tabId).classList.add('active'); }
    });
    function updateAndSave(subjectKey) {
        const subject = evaluationData[subjectKey]; let totalScore = 0; if (!scores[subjectKey]) { scores[subjectKey] = new Array(subject.items.length).fill(null); }
        subject.items.forEach((item, index) => {
            const scoreInput = document.querySelector(`input.score-input[data-subject="${subjectKey}"][data-itemindex="${index}"]`);
            const statusCell = document.getElementById(`status-${subjectKey}-${index}`);
            const scoreValue = scoreInput.value; const score = parseFloat(scoreValue);
            if (scoreValue.trim() !== '') { statusCell.textContent = 'O'; } else { statusCell.textContent = 'X'; }
            if (!isNaN(score)) { totalScore += (score / item.max) * item.ratio; scores[subjectKey][index] = score; } else { scores[subjectKey][index] = null; }
        });
        document.getElementById(`total-score-${subjectKey}`).textContent = totalScore.toFixed(2);
        localStorage.setItem('evaluationScores', JSON.stringify(scores));
    }
    document.querySelectorAll('.score-input').forEach(input => {
        input.addEventListener('input', () => { updateAndSave(input.dataset.subject); });
    });
    function loadUserData() {
        Object.keys(evaluationData).forEach(subjectKey => {
            if (scores[subjectKey]) {
                scores[subjectKey].forEach((score, index) => {
                    if (score !== null) { const scoreInput = document.querySelector(`input.score-input[data-subject="${subjectKey}"][data-itemindex="${index}"]`); if(scoreInput) { scoreInput.value = score; } }
                });
            }
            updateAndSave(subjectKey); 
        });
    }
    loadUserData();
});
