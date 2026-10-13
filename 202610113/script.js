let cartCount = 0;

function addToCart(event) {
    // 1. 更新購物車數量
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;

    // 2. 觸發愛心光波特效
    createHeartWave(event.target);
}

function createHeartWave(button) {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // 每次點擊產生 6 顆愛心向四面八方擴散
    const heartSymbols = ['💖', '❤️', '💕', '💗', '✨'];

    for (let i = 0; i < 6; i++) {
        const heart = document.createElement('span');
        heart.className = 'flying-heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        // 設定初始位置在按鈕中心
        heart.style.left = `${centerX}px`;
        heart.style.top = `${centerY}px`;

        // 隨機計算擴散的終點座標（光波範圍）
        const angle = Math.random() * Math.PI * 2; // 隨機角度 0 ~ 360 度
        const distance = 50 + Math.random() * 60;   // 飄散距離 50px ~ 110px
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance - 20; // 稍微往上飄

        heart.style.setProperty('--end-x', `${endX}px`);
        heart.style.setProperty('--end-y', `${endY}px`);

        // 加入到網頁中
        document.body.appendChild(heart);

        // 動畫結束後自動從 DOM 移除，避免記憶體浪費
        setTimeout(() => {
            heart.remove();
        }, 800);
    }
}