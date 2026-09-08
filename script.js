// 大學專案資料庫
const projects = [
    {
        id: 1,
        title: "大一 C++ 終端機遊戲",
        category: "freshman",
        tag: "大一 | C++",
        image: "https://via.placeholder.com/400x200?text=C+++Game",
        shortDesc: "基於物件導向設計的控制台角色扮演遊戲。",
        fullDesc: "這是我在大一程式設計課程的期末專案，實作了角色狀態管理、背包系統與回合制戰鬥邏輯。",
        github: "https://github.com",
        demo: "#"
    },
    {
        id: 2,
        title: "大二 校園社團 RWD 網站",
        category: "sophomore",
        tag: "大二 | HTML / CSS / JS",
        image: "https://via.placeholder.com/400x200?text=Web+Design",
        shortDesc: "為學校社團開發的響應式官網與活動報名系統。",
        fullDesc: "大二網頁前端設計作業。採用 Flexbox 與 CSS Grid 佈局，實現手機與電腦端自動調應，並運用 JS 實現表單驗證功能。",
        github: "https://github.com",
        demo: "#"
    },
    {
        id: 3,
        title: "大三 智慧校園 App 原型",
        category: "junior",
        tag: "大三 | UI/UX & API 串接",
        image: "https://via.placeholder.com/400x200?text=Campus+App",
        shortDesc: "整合校園公車與課表即時查詢的行動端介面。",
        fullDesc: "大三系統分析專案，負責前端 UI 繪製與 Fetch API 資料串接，成功實現無刷新資料載入。",
        github: "https://github.com",
        demo: "#"
    },
    {
        id: 4,
        title: "大四 畢業專題：AI 影像辨識平台",
        category: "senior",
        tag: "大四 | Python / Web Dashboard",
        image: "https://via.placeholder.com/400x200?text=Senior+Project",
        shortDesc: "整合深度學習模型的即時物件偵測網頁介面。",
        fullDesc: "畢業專題作品。主要負責 Web 前端看板與後端 API 串接，將模型訓練與推論成果以視覺化圖表進行呈現。",
        github: "https://github.com",
        demo: "#"
    }
];

// 1. 動態渲染專案卡片
const grid = document.getElementById('projects-grid');

function renderProjects(filter = 'all') {
    grid.innerHTML = '';
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${p.image}" alt="${p.title}" class="card-img">
            <div class="card-info">
                <span class="card-tag">${p.tag}</span>
                <h3 class="card-title">${p.title}</h3>
                <p class="card-desc">${p.shortDesc}</p>
            </div>
        `;
        card.addEventListener('click', () => openModal(p));
        grid.appendChild(card);
    });
}

// 2. 切換分類按鈕觸發事件
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderProjects(e.target.dataset.filter);
    });
});

// 3. 彈窗 (Modal) 控制邏輯
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-btn');

function openModal(project) {
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-tag').innerText = project.tag;
    document.getElementById('modal-body').innerText = project.fullDesc;
    document.getElementById('modal-github').href = project.github;
    document.getElementById('modal-demo').href = project.demo;
    modal.style.display = 'flex';
}

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

// 初始化頁面
renderProjects();