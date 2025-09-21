class App {
    constructor() {
        this.cart = null;
        this.cartDrawer = null;
        this.product = null;
        this.header = null;
        this.navigation = null;
        
        this.init();
    }

    async init() {
        await this.loadComponents();
        this.initializeComponents();
        this.setupGlobalEventListeners();
        this.initializeDisplay();
    }

    async loadComponents() {
        const components = [
            { id: 'header-container', path: 'components/header/header.html' },
            { id: 'navigation-container', path: 'components/navigation/navigation.html' },
            { id: 'product-container', path: 'components/product/product.html' },
            { id: 'cart-container', path: 'components/cart/cart.html' },
            { id: 'footer-container', path: 'components/footer/footer.html' }
        ];
        
        await Promise.all(components.map(async ({ id, path }) => {
            const container = document.getElementById(id);
            if (container) {
                const html = await window.Utils.loadTemplate(path);
                if (html) container.innerHTML = html;
            }
        }));
    }


    initializeComponents() {
        const components = [
            { name: 'Cart', instance: 'cart' },
            { name: 'CartDrawer', instance: 'cartDrawer' },
            { name: 'Product', instance: 'product', required: true },
            { name: 'Header', instance: 'header' },
            { name: 'Navigation', instance: 'navigation' }
        ];
        
        try {
            components.forEach(({ name, instance, required }) => {
                if (typeof window[name] !== 'undefined') {
                    this[instance] = new window[name]();
                    window[instance] = this[instance];
                } else if (required) {
                    console.error(`${name} class not found`);
                }
            });
        } catch (error) {
            console.error('Error initializing components:', error);
        }
    }

    setupGlobalEventListeners() {
        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'IMG') {
                window.Utils?.handleImageError(e.target);
            }
        }, true);
    }

    initializeDisplay() {
        this.cart?.updateCartDisplay();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
