document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    // Hàm xáo trộn mảng (thuật toán Fisher-Yates)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // Xáo trộn các bài viết khi tải trang
    const articlesContainer = document.querySelector('.article-grid');
    if (articlesContainer) {
        const articleCards = Array.from(articlesContainer.querySelectorAll('.article-card'));
        if (articleCards.length > 0) {
            // Xáo trộn mảng bài viết
            const shuffledArticles = shuffleArray(articleCards);
            
            // Xóa tất cả bài viết hiện tại
            articleCards.forEach(card => card.remove());
            
            // Thêm lại các bài viết theo thứ tự đã xáo trộn
            shuffledArticles.forEach(card => {
                articlesContainer.appendChild(card);
            });
        }
    }

    // Xử lý tìm kiếm
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.toLowerCase();
            const articles = document.querySelectorAll('.article-card');

            articles.forEach(article => {
                const title = article.querySelector('h3').textContent.toLowerCase();
                const content = article.querySelector('p').textContent.toLowerCase();

                if (title.includes(searchTerm) || content.includes(searchTerm)) {
                    article.style.display = '';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    }
});