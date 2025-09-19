// Header Component JavaScript
class Header {
    constructor() {
        this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
        this.searchToggle = document.getElementById('searchToggle');
        this.cartToggle = document.getElementById('cartToggle');
        this.cartCount = document.getElementById('cartCount');
        
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Mobile menu toggle
        if (this.mobileMenuToggle) {
            this.mobileMenuToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Search toggle
        if (this.searchToggle) {
            this.searchToggle.addEventListener('click', () => {
                this.toggleSearch();
            });
        }

        // Cart toggle
        if (this.cartToggle) {
            this.cartToggle.addEventListener('click', () => {
                this.toggleCart();
            });
        }
    }

    toggleMobileMenu() {
        // Mobile menu functionality - delegate to Navigation component
        if (window.navigation) {
            window.navigation.openMobileNav();
        }
    }

    toggleSearch() {
        // Search functionality
        console.log('Search toggled');
        // Implementation for search
    }

    toggleCart() {
        // Cart functionality - delegate to CartDrawer component
        if (window.cartDrawer) {
            window.cartDrawer.toggle();
        }
    }

    updateCartCount(count) {
        if (this.cartCount) {
            this.cartCount.textContent = count;
        }
    }
}

// Export for use in main application
window.Header = Header;