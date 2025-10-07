// script.js (완전 교체본)
document.addEventListener('DOMContentLoaded', () => {
  /* 1) 데이터 정의 (기존과 동일) */
  const evaluationData = {
    "common-korean-2": { name: "공통국어2", performancePdf: "pdfs/공통국어2_수행평가기준.pdf", items: [
      { type: "지필", area: "1회고사", max: 100, ratio: 30, period: "9월 5주" },
      { type: "지필", area: "2회고사", max: 100, ratio: 30, period: "12월 2주" },
      { type: "수행", area: "활동 포트폴리오", max: 15, ratio: 15, period: "8월~12월" },
      { type: "수행", area: "매체 관련 콘텐츠제작", max: 10, ratio: 10, period: "9월" },
      { type: "수행", area: "감상문 쓰기", max: 10, ratio: 10, period: "11월" },
      { type: "수행", area: "중세국어의 이해", max: 5, ratio: 5, period: "10월" }
    ]},
    "advanced-math": { name: "심화수학", performancePdf: "pdfs/심화수학_수행평가기준.pdf", items: [
      { type: "지필", area: "1회고사", max: 100, ratio: 30, period: "9월 5주" },
      { type: "지필", area: "2회고사", max: 100, ratio: 30, period: "12월 2주" },
      { type: "수행", area: "탐구 프로젝트", max: 20, ratio: 20, period: "10월 2주" },
      { type: "수행", area: "AI 활용 문항 작성", max: 20, ratio: 20, period: "9월 1주, 11월 2주" }
    ]},
    "common-english-2": { name: "공통영어2", performancePdf: "pdfs/공통영어2_수행평가기준.pdf", items: [
      { type: "지필", area: "1회고사", max: 100, ratio: 30, period: "9월 5주" },
      { type: "지필", area: "2회고사", max: 100, ratio: 30, period: "12월 2주" },
      { type: "수행", area: "포트폴리오", max: 10, ratio: 10, period: "수시" },
      { type: "수행", area: "영어 에세이 쓰기", max: 10, ratio: 10, period: "10월" },
      { type: "수행", area: "영어 프리젠테이션", max: 10, ratio: 10, period: "9월" },
      { type: "수행", area: "어휘 의미 추론하기", max: 10, ratio: 10, period: "10월, 11월" }
    ]},
    "integrated-society-2": { name: "통합사회2", performancePdf: "pdfs/통합사회2_수행평가기준.pdf", items: [
      { type: "지필", area: "1회고사", max: 100, ratio: 30, period: "9월 5주" },
      { type: "지필", area: "2회고사", max: 100, ratio: 30, period: "12월 2주" },
      { type: "수행", area: "민주시민교육 프로젝트", max: 10, ratio: 10, period: "10-11월" },
      { type: "수행", area: "서술형 기반 포트폴리오", max: 10, ratio: 10, period: "8-11월" },
      { type: "수행", area: "인권 프로젝트", max: 12, ratio: 12, period: "8월" },
      { type: "수행", area: "그대는 어떤 삶을 살 것인가", max: 8, ratio: 8, period: "10월" }
    ]},
    "life-science": { name: "생명과학", performancePdf: "pdfs/생명과학_수행평가기준.pdf", items: [
      { type: "지필", area: "1회고사", max: 100, ratio: 30, period: "9월 5주" },
      { type: "지필", area: "2회고사", max: 100, ratio: 30, period: "12월 2주" },
      { type: "수행", area: "과학적 사고와 글쓰기", max: 20, ratio: 20, period: "9월" },
      { type: "수행", area: "생명과학 연구 방법", max: 20, ratio: 20, period: "11월" }
    ]},
    "earth-science": { name: "지구과학", performancePdf: "pdfs/지구과학_수행평가기준.pdf", items: [
      { type: "지필", area: "1회고사(중간고사)", max: 100, ratio: 30, period: "9월 5주" },
      { type: "지필", area: "2회고사(기말고사)", max: 100, ratio: 30, period: "12월 2주" },
      { type: "수행", area: "창의적 문제 해결", max: 15, ratio: 15, period: "8월 4주" },
      { type: "수행", area: "징검다리 탐구", max: 25, ratio: 25, period: "10월 3주" }
    ]},
    "advanced-physics": { name: "고급물리학", performancePdf: "pdfs/고급물리학_수행평가기준.pdf", items: [
      { type: "지필", area: "1회고사", max: 100, ratio: 30, period: "9월 5주" },
      { type: "지필", area: "2회고사", max: 100, ratio: 30, period: "12월 2주" },
      { type: "수행", area: "심층 논문 탐구", max: 20, ratio: 20, period: "8월~11월" },
      { type: "수행", area: "신기술과 사회 변화", max: 20, ratio: 20, period: "8월~11월" }
    ]},
    "advanced-chemistry": { name: "고급화학", performancePdf: "pdfs/고급화학_수행평가기준.pdf", items: [
      { type: "지필", area: "1회고사", max: 100, ratio: 30, period: "9월 5주" },
      { type: "지필", area: "2회고사", max: 100, ratio: 30, period: "12월 2주" },
      { type: "수행", area: "주제 탐구 보고서", max: 20, ratio: 20, period: "9~11월" },
      { type: "수행", area: "화학 실험 평가", max: 20, ratio: 20, period: "11월" }
    ]},
    "science-inquiry-1": { name: "과학탐구실험1", performancePdf: "pdfs/과학탐구실험1_수행평가기준.pdf", items: [
      { type: "수행", area: "탐구보고서", max: 20, ratio: 20, period: "11월~12월" },
      { type: "수행", area: "포트폴리오", max: 80, ratio: 80, period: "상시" }
    ]},
    "sports-science": { name: "스포츠과학", performancePdf: "pdfs/스포츠과학_수행평가기준.pdf", items: [
      { type: "수행", area: "배구 서비스", max: 40, ratio: 40, period: "9월 2주" },
      { type: "수행", area: "배구 토스", max: 30, ratio: 30, period: "10월 3주" },
      { type: "수행", area: "기술 줄넘기", max: 30, ratio: 30, period: "11월 1주" }
    ]},
    "info-science-project": { name: "정보과학 과제연구", performancePdf: "pdfs/정보과학 과제연구_수행평가기준.pdf", items: [
      { type: "수행", area: "프로그래밍 실습", max: 50, ratio: 50, period: "8~9월" },
      { type: "수행", area: "프로그래밍 실습 및 협업", max: 50, ratio: 50, period: "10~11월" }
    ]}
  };

  /* 2) 요소 참조 & 저장소 로드 */
  const subjectTabs = document.getElementById('subject-tabs');
  const subjectContent = document.getElementById('subject-content');
  let userData = {};
  try {
    userData = JSON.parse(localStorage.getItem('evaluationUserData')) || {};
  } catch {
    userData = {};
  }

  /* 유틸: 과목 사용자 데이터 구조를 항상 보정 */
  function ensureUserData(subjectKey) {
    const itemsLen = evaluationData[subjectKey].items.length;
    if (!userData[subjectKey] || typeof userData[subjectKey] !== 'object') {
      userData[subjectKey] = { scores: new Array(itemsLen).fill(null), memo: '' };
      return;
    }
    // scores 보정
    if (!Array.isArray(userData[subjectKey].scores)) {
      userData[subjectKey].scores = new Array(itemsLen).fill(null);
    } else if (userData[subjectKey].scores.length !== itemsLen) {
      const resized = new Array(itemsLen).fill(null);
      userData[subjectKey].scores.forEach((v, i) => { if (i < itemsLen) resized[i] = v; });
      userData[subjectKey].scores = resized;
    }
    // memo 보정
    if (typeof userData[subjectKey].memo !== 'string') userData[subjectKey].memo = '';
  }

  /* 3) 탭 & 표 생성 */
  Object.keys(evaluationData).forEach((key, index) => {
    const subject = evaluationData[key];

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${key}`;
    a.textContent = subject.name;
    a.dataset.tab = key;
    if (index === 0) a.classList.add('active');
    li.appendChild(a);
    subjectTabs.appendChild(li);

    const pane = document.createElement('div');
    pane.id = key;
    pane.classList.add('subject-pane');
    if (index === 0) pane.classList.add('active');

    const totalRatio = subject.items.reduce((s, it) => s + it.ratio, 0);

    const tbodyRows = subject.items.map((item, idx) => {
      let typeCell = '';
      if (idx === 0 || subject.items[idx - 1].type !== item.type) {
        const rowspan = subject.items.filter(i => i.type === item.type).length;
        typeCell = item.type === '수행' && subject.performancePdf
          ? `<td rowspan="${rowspan}" class="pdf-link-cell"><a href="${subject.performancePdf}" target="_blank" title="수행평가 기준 보기">수행평가</a></td>`
          : `<td rowspan="${rowspan}">${item.type}평가</td>`;
      }
      return `
        <tr>
          ${typeCell}
          <td>${item.area}</td>
          <td>${item.max}</td>
          <td>${item.ratio}</td>
          <td><input type="number" class="score-input" data-subject="${key}" data-itemindex="${idx}" min="0" max="${item.max}"></td>
          <td>${item.period}</td>
          <td class="status-cell">X</td>
        </tr>`;
    }).join('');

    pane.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>평가 방법</th><th>평가 영역</th><th>영역 만점</th>
            <th>학기말 반영비율(%)</th><th>내 점수</th><th>평가 시기</th><th>완료 여부</th>
          </tr>
        </thead>
        <tbody>${tbodyRows}</tbody>
        <tfoot>
          <tr>
            <td colspan="3">합계</td>
            <td>${totalRatio}</td>
            <td id="total-score-${key}" class="total-score">0.00</td>
            <td></td><td></td>
          </tr>
        </tfoot>
      </table>
      <div class="memo-container">
        <textarea class="memo-textarea" id="memo-${key}" data-subject="${key}" placeholder="메모"></textarea>
      </div>`;
    subjectContent.appendChild(pane);
  });

  /* 4) 탭 전환 */
  subjectTabs.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A') return;
    e.preventDefault();
    const tabId = e.target.dataset.tab;
    document.querySelectorAll('#subject-tabs a').forEach(a => a.classList.remove('active'));
    e.target.classList.add('active');
    document.querySelectorAll('.subject-pane').forEach(p => p.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  });

  /* 5) 계산 + 저장 */
  function updateAndSave(subjectKey) {
    const subject = evaluationData[subjectKey];
    if (!subject) return;

    ensureUserData(subjectKey);

    let total = 0;

    const inputs = document.querySelectorAll(`input.score-input[data-subject="${subjectKey}"]`);
    inputs.forEach(input => {
      const idx = parseInt(input.dataset.itemindex, 10);
      const item = subject.items[idx];
      const row = input.closest('tr');
      const statusCell = row.querySelector('.status-cell');

      const raw = (input.value ?? '').toString();
      const hasValue = raw.trim() !== '';
      statusCell.textContent = hasValue ? 'O' : 'X';

      const num = parseFloat(raw);
      if (!isNaN(num)) {
        total += (num / item.max) * item.ratio;
        userData[subjectKey].scores[idx] = num;
      } else {
        userData[subjectKey].scores[idx] = null;
      }
    });

    const memoEl = document.getElementById(`memo-${subjectKey}`);
    if (memoEl) userData[subjectKey].memo = memoEl.value || '';

    const totalCell = document.getElementById(`total-score-${subjectKey}`);
    if (totalCell) totalCell.textContent = total.toFixed(2);

    localStorage.setItem('evaluationUserData', JSON.stringify(userData));
  }

  /* 6) 복원 */
  function loadUserData() {
    Object.keys(evaluationData).forEach(subjectKey => {
      ensureUserData(subjectKey);
      const user = userData[subjectKey];

      user.scores.forEach((score, i) => {
        if (score !== null) {
          const input = document.querySelector(`input.score-input[data-subject="${subjectKey}"][data-itemindex="${i}"]`);
          if (input) input.value = score;
        }
      });

      const memoEl = document.getElementById(`memo-${subjectKey}`);
      if (memoEl) memoEl.value = user.memo || '';

      updateAndSave(subjectKey);
    });
  }

  /* 7) 이벤트 위임 */
  document.body.addEventListener('input', (e) => {
    const t = e.target;
    if (t.classList && (t.classList.contains('score-input') || t.classList.contains('memo-textarea'))) {
      updateAndSave(t.dataset.subject);
    }
  });

  /* 8) 초기 실행 */
  loadUserData();
});
