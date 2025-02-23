import { getCloudinaryUrl, getImageConfig, CLOUDINARY_BASE_URL } from './constants.js';

document.addEventListener('DOMContentLoaded', function() {
    // ページタイプを判定（URLから）
    const isKitchenPage = window.location.pathname.includes('kitchen');
    const imageType = isKitchenPage ? 'kitchen' : 'daily-necessities';
    const config = getImageConfig(imageType);

    // 商品カードの画像を更新
    const productCards = document.querySelectorAll('.product-card img');
    productCards.forEach(img => {
        const urlBase = `${CLOUDINARY_BASE_URL}/image/upload`;
        const imageResult = getCloudinaryUrl(`${config.version}/${config.path}`, {
            isResponsive: true
        });

        img.setAttribute('src', imageResult.src);
        img.setAttribute('srcset', imageResult.srcset);
        img.setAttribute('sizes', '(max-width: 768px) 400px, 800px');
        img.setAttribute('loading', 'lazy');
    });
});
