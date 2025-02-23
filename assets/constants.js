// Cloudinary configuration
export const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dgldatt9k';
export const CLOUDINARY_PARAMS = {
    format: 'f_auto',
    quality: 'q_auto',
    loading: 'lazy',
    sizes: {
        mobile: 'w_400',
        desktop: 'w_800'
    },
    optimization: {
        compression: 'q_auto:best',
        format: 'f_auto',
        fetchFormat: 'auto'
    }
};

// Image URLs
export function getCloudinaryUrl(imagePath, options = {}) {
    const { optimization, sizes } = CLOUDINARY_PARAMS;
    const { width, isResponsive = true } = options;

    // 最適化パラメータの構築
    const params = [
        optimization.compression,
        optimization.format,
        width ? `w_${width}` : ''
    ].filter(Boolean).join(',');

    // レスポンシブ画像用のsrcset生成
    if (isResponsive) {
        return {
            src: `${CLOUDINARY_BASE_URL}/image/upload/${params}/${imagePath}`,
            srcset: `
                ${CLOUDINARY_BASE_URL}/image/upload/${sizes.mobile},${optimization.compression}/${imagePath} 400w,
                ${CLOUDINARY_BASE_URL}/image/upload/${sizes.desktop},${optimization.compression}/${imagePath} 800w
            `.trim(),
            sizes: '(max-width: 768px) 400px, 800px'
        };
    }

    // 通常の画像URL生成
    return `${CLOUDINARY_BASE_URL}/image/upload/${params}/${imagePath}`;
}

// Product images
export const PRODUCT_IMAGES = {
    interior: 'interior_hfcy8v.webp',
    kitchen: 'foods_vwrriz.webp',
    lineButton: 'ja_tyt1gl.png'
};

// Image versions
export const IMAGE_VERSIONS = {
    interior: 'v1740269876',
    kitchen: 'v1740269875',
    lineButton: 'v1740271253'
};

// Get full image configuration
export function getImageConfig(type) {
    return {
        path: PRODUCT_IMAGES[type],
        version: IMAGE_VERSIONS[type]
    };
}
