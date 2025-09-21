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
        if (this.mobileMenuToggle) {
            this.mobileMenuToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        if (this.searchToggle) {
            this.searchToggle.addEventListener('click', () => {
                this.toggleSearch();
            });
        }

        if (this.cartToggle) {
            this.cartToggle.addEventListener('click', () => {
                this.toggleCart();
            });
        }
    }

    toggleMobileMenu() {
        if (window.navigation) {
            window.navigation.openMobileNav();
        }
    }

    toggleSearch() {
        console.log('Search toggled');
    }

    toggleCart() {
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

window.Header = Header;