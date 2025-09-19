// Main Application
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
        // Load components
        await this.loadComponents();
        
        // Initialize components
        this.initializeComponents();
        
        // Setup global event listeners
        this.setupGlobalEventListeners();
        
        // Initialize display
        this.initializeDisplay();
    }

    async loadComponents() {
        // Load header
        await this.loadHeader();
        
        // Load navigation
        await this.loadNavigation();
        
        // Load product
        await this.loadProduct();
        
        // Load cart
        await this.loadCart();
        
        // Load footer
        await this.loadFooter();
    }

    async loadHeader() {
        const container = document.getElementById('header-container');
        if (container) {
            try {
                const response = await fetch('components/header/header.html');
                const html = await response.text();
                container.innerHTML = html;
            } catch (error) {
                console.error('Error loading header:', error);
            }
        }
    }

    async loadNavigation() {
        const container = document.getElementById('navigation-container');
        if (container) {
            try {
                const response = await fetch('components/navigation/navigation.html');
                const html = await response.text();
                container.innerHTML = html;
            } catch (error) {
                console.error('Error loading navigation:', error);
            }
        }
    }

    async loadProduct() {
        const container = document.getElementById('product-container');
        if (container) {
            try {
                const response = await fetch('components/product/product.html');
                const html = await response.text();
                container.innerHTML = html;
            } catch (error) {
                console.error('Error loading product:', error);
            }
        }
    }

    async loadCart() {
        const container = document.getElementById('cart-container');
        if (container) {
            try {
                const response = await fetch('components/cart/cart.html');
                const html = await response.text();
                container.innerHTML = html;
            } catch (error) {
                console.error('Error loading cart:', error);
            }
        }
    }

    async loadFooter() {
        const container = document.getElementById('footer-container');
        if (container) {
            try {
                const response = await fetch('components/footer/footer.html');
                const html = await response.text();
                container.innerHTML = html;
            } catch (error) {
                console.error('Error loading footer:', error);
            }
        }
    }

    initializeComponents() {
        // Initialize cart
        this.cart = new Cart();
        window.cart = this.cart;
        
        // Initialize cart drawer
        this.cartDrawer = new CartDrawer();
        window.cartDrawer = this.cartDrawer;
        
        // Initialize product
        this.product = new Product();
        window.product = this.product;
        
        // Initialize header
        this.header = new Header();
        window.header = this.header;
        
        // Initialize navigation
        this.navigation = new Navigation();
        window.navigation = this.navigation;
    }

    setupGlobalEventListeners() {
        // Handle image loading errors
        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'IMG') {
                if (window.Utils) {
                    window.Utils.handleImageError(e.target);
                }
            }
        }, true);
    }

    initializeDisplay() {
        // Update cart display
        this.cart.updateCartDisplay();
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
