// Cloudinary configuration
export const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dgldatt9k';
export const CLOUDINARY_PARAMS = {
    format: 'f_auto',
    quality: 'q_auto',
    version: 'v1740269876'
};

// Image URLs
export function getCloudinaryUrl(imagePath, width) {
    const { format, quality, version } = CLOUDINARY_PARAMS;
    const widthParam = width ? `w_${width},` : '';
    return `${CLOUDINARY_BASE_URL}/image/upload/${widthParam}${format},${quality}/${version}/${imagePath}`;
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
