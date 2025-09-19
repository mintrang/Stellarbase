// Navigation Component JavaScript
class Navigation {
    constructor() {
        this.mobileNav = document.getElementById('mobileNav');
        this.mobileNavOverlay = document.getElementById('mobileNavOverlay');
        this.mobileNavClose = document.getElementById('mobileNavClose');
        this.mobileMenuToggle = document.getElementById('mobileMenuToggle');
        
        this.isOpen = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Mobile menu toggle
        if (this.mobileMenuToggle) {
            this.mobileMenuToggle.addEventListener('click', () => {
                this.openMobileNav();
            });
        }

        // Mobile nav close
        if (this.mobileNavClose) {
            this.mobileNavClose.addEventListener('click', () => {
                this.closeMobileNav();
            });
        }

        // Overlay click to close
        if (this.mobileNavOverlay) {
            this.mobileNavOverlay.addEventListener('click', () => {
                this.closeMobileNav();
            });
        }

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMobileNav();
            }
        });
    }

    openMobileNav() {
        if (this.mobileNav) {
            this.mobileNav.classList.add('open');
            this.isOpen = true;
            document.body.style.overflow = 'hidden';
        }
    }

    closeMobileNav() {
        if (this.mobileNav) {
            this.mobileNav.classList.remove('open');
            this.isOpen = false;
            document.body.style.overflow = '';
        }
    }
}

// Export for use in main application
window.Navigation = Navigation;