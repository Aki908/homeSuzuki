// Cloudinary image optimization settings
const CLOUDINARY_CONFIG = {
    baseUrl: 'https://res.cloudinary.com/dgldatt9k/image/upload',
    defaultTransforms: {
        auto: 'f_auto,q_auto',
        responsive: {
            small: { width: 400, height: 300 },
            large: { width: 800, height: 600 }
        }
    }
};

class ImageLoader {
    static generateUrl(imageId, transforms = '') {
        return `${CLOUDINARY_CONFIG.baseUrl}/${transforms}/${imageId}`;
    }

    static generateResponsiveImage(imageId, options = {}) {
        const { small, large } = CLOUDINARY_CONFIG.defaultTransforms.responsive;
        const auto = CLOUDINARY_CONFIG.defaultTransforms.auto;

        // Default image attributes
        const attrs = {
            src: this.generateUrl(imageId, `c_fill,w_${small.width},h_${small.height},${auto}`),
            srcset: [
                `${this.generateUrl(imageId, `c_fill,w_${small.width},h_${small.height},${auto}`)} ${small.width}w`,
                `${this.generateUrl(imageId, `c_fill,w_${large.width},h_${large.height},${auto}`)} ${large.width}w`
            ].join(',\n        '),
            sizes: '(max-width: 768px) 400px, 800px',
            width: small.width,
            height: small.height,
            loading: 'lazy',
            decoding: 'async',
            ...options
        };

        // Generate HTML attributes string
        return Object.entries(attrs)
            .map(([key, value]) => `${key}="${value}"`)
            .join('\n        ');
    }

    static createProductImage(imageId, altText) {
        return `<img ${this.generateResponsiveImage(imageId, { alt: altText })}>`
    }
}

// Example usage:
// const productImage = ImageLoader.createProductImage('v1740269875/foods_vwrriz.webp', '商品名');
