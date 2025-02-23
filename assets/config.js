// 環境設定
const config = {
    // GitHub Pages用のベースパス
    basePath: '/homeSuzuki',
    
    // 環境判定とパス取得
    getBasePath() {
        // ローカル環境かGitHub Pagesかを判定
        const isGitHubPages = location.hostname === 'aki908.github.io';
        return isGitHubPages ? this.basePath : '';
    },

    // アセットのパスを取得
    getAssetPath(path) {
        return `${this.getBasePath()}/${path}`;
    }
};

// HTML内で使用するためにグローバルに公開
window.siteConfig = config;

// 現在のページのベースパスを設定
document.addEventListener('DOMContentLoaded', () => {
    // 現在のパスを取得
    const basePath = config.getBasePath();
    
    // すべてのリンクを修正
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        // 外部リンクは除外
        if (!href.startsWith('http') && !href.startsWith('#')) {
            link.href = `${basePath}/${href.replace(/^\//, '')}`;
        }
    });

    // すべてのアセットパスを修正
    document.querySelectorAll('img[src], script[src], link[href]').forEach(element => {
        const attr = element.hasAttribute('src') ? 'src' : 'href';
        const path = element.getAttribute(attr);
        if (!path.startsWith('http')) {
            element.setAttribute(attr, `${basePath}/${path.replace(/^\//, '')}`);
        }
    });
});
