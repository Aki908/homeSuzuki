import { getCloudinaryUrl, getImageConfig, CLOUDINARY_BASE_URL } from './constants.js';

document.addEventListener('DOMContentLoaded', function() {
    // ページタイプを判定（URLから）
    const isKitchenPage = window.location.pathname.includes('kitchen');
    const imageType = isKitchenPage ? 'kitchen' : 'interior';
    const config = getImageConfig(imageType);

    // 商品カードの画像を更新
    const productCards = document.querySelectorAll('.product-card img');
    productCards.forEach(img => {
        const urlBase = `${CLOUDINARY_BASE_URL}/image/upload`;
        const srcset = [
            `${urlBase}/w_400,f_auto,q_auto/${config.version}/${config.path} 400w`,
            `${urlBase}/w_800,f_auto,q_auto/${config.version}/${config.path} 800w`
        ].join(', ');

        img.setAttribute('src', `${urlBase}/f_auto,q_auto/${config.version}/${config.path}`);
        img.setAttribute('srcset', srcset);
        img.setAttribute('sizes', '(max-width: 768px) 400px, 800px');
        img.setAttribute('loading', 'lazy');
    });
});
