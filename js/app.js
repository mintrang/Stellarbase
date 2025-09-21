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
        await this.loadHeader();
        await this.loadNavigation();
        await this.loadProduct();
        await this.loadCart();
        await this.loadFooter();
    }

    async loadHeader() {
        const container = document.getElementById('header-container');
        if (container) {
            const html = await window.Utils.loadTemplate('components/header/header.html');
            if (html) container.innerHTML = html;
        }
    }

    async loadNavigation() {
        const container = document.getElementById('navigation-container');
        if (container) {
            const html = await window.Utils.loadTemplate('components/navigation/navigation.html');
            if (html) container.innerHTML = html;
        }
    }

    async loadProduct() {
        const container = document.getElementById('product-container');
        if (container) {
            const html = await window.Utils.loadTemplate('components/product/product.html');
            if (html) container.innerHTML = html;
        }
    }

    async loadCart() {
        const container = document.getElementById('cart-container');
        if (container) {
            const html = await window.Utils.loadTemplate('components/cart/cart.html');
            if (html) container.innerHTML = html;
        }
    }

    async loadFooter() {
        const container = document.getElementById('footer-container');
        if (container) {
            const html = await window.Utils.loadTemplate('components/footer/footer.html');
            if (html) container.innerHTML = html;
        }
    }

    initializeComponents() {
        try {
            if (typeof Cart !== 'undefined') {
                this.cart = new Cart();
                window.cart = this.cart;
            }
            
            if (typeof CartDrawer !== 'undefined') {
                this.cartDrawer = new CartDrawer();
                window.cartDrawer = this.cartDrawer;
            }
            
            if (typeof Product !== 'undefined') {
                this.product = new Product();
                window.product = this.product;
            } else {
                console.error('Product class not found');
            }
            
            if (typeof Header !== 'undefined') {
                this.header = new Header();
                window.header = this.header;
            }
            
            if (typeof Navigation !== 'undefined') {
                this.navigation = new Navigation();
                window.navigation = this.navigation;
            }
        } catch (error) {
            console.error('Error initializing components:', error);
        }
    }

    setupGlobalEventListeners() {
        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'IMG') {
                if (window.Utils) {
                    window.Utils.handleImageError(e.target);
                }
            }
        }, true);
    }

    initializeDisplay() {
        this.cart.updateCartDisplay();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
