document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const productsGrid = document.getElementById('productsGrid');
    const productCards = document.querySelectorAll('.product-card');

    // 検索機能の実装
    searchInput.addEventListener('input', function(e) {
        const searchQuery = e.target.value.toLowerCase().trim();
        
        productCards.forEach(card => {
            const productName = card.getAttribute('data-name').toLowerCase();
            const productCategory = card.getAttribute('data-category').toLowerCase();
            const productDescription = card.querySelector('p').textContent.toLowerCase();
            
            // 商品名、カテゴリー、説明文で検索
            const matchesSearch = productName.includes(searchQuery) ||
                                productCategory.includes(searchQuery) ||
                                productDescription.includes(searchQuery);

            // アニメーション付きで表示/非表示を切り替え
            if (matchesSearch) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });

        // 検索結果が0件の場合のメッセージ表示
        const visibleCards = Array.from(productCards).filter(card => card.style.display !== 'none');
        const noResultsMessage = document.querySelector('.no-results-message');
        
        if (visibleCards.length === 0 && searchQuery !== '') {
            if (!noResultsMessage) {
                const message = document.createElement('p');
                message.className = 'no-results-message';
                message.textContent = '一致する商品が見つかりませんでした。';
                message.style.textAlign = 'center';
                message.style.padding = '2rem';
                message.style.color = '#666';
                productsGrid.appendChild(message);
            }
        } else if (noResultsMessage) {
            noResultsMessage.remove();
        }
    });

    // Enterキーでのフォーム送信を防止
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });

    // 検索入力欄をクリアするボタンの実装
    searchInput.addEventListener('input', function() {
        if (this.value) {
            this.classList.add('has-text');
        } else {
            this.classList.remove('has-text');
        }
    });
});
