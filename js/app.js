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

    init() {
        // Load components
        this.loadComponents();
        
        // Initialize components
        this.initializeComponents();
        
        // Setup global event listeners
        this.setupGlobalEventListeners();
        
        // Initialize display
        this.initializeDisplay();
    }

    loadComponents() {
        // Load header
        this.loadHeader();
        
        // Load navigation
        this.loadNavigation();
        
        // Load product
        this.loadProduct();
        
        // Load cart
        this.loadCart();
        
        // Load footer
        this.loadFooter();
    }

    loadHeader() {
        const container = document.getElementById('header-container');
        if (container) {
            container.innerHTML = `
                <header class="site-header">
                    <div class="header-wrapper">
                        <div class="header-left">
                            <button class="mobile-menu-toggle" id="mobileMenuToggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <h1 class="site-logo">
                                <a href="/">SneakerHub</a>
                            </h1>
                        </div>
                        <nav class="main-nav">
                            <a href="#" class="nav-link">Products</a>
                            <a href="#" class="nav-link">Collections</a>
                            <a href="#" class="nav-link">About</a>
                            <a href="#" class="nav-link">Contact</a>
                        </nav>
                        <div class="header-right">
                            <button class="search-toggle" id="searchToggle">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M19 19L13 13M15 8A7 7 0 1 1 1 8A7 7 0 0 1 15 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <button class="cart-toggle" id="cartToggle">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7 4V2C7 1.44772 7.44772 1 8 1H12C12.5523 1 13 1.44772 13 2V4M7 4H5C4.44772 4 4 4.44772 4 5V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V5C16 4.44772 15.5523 4 15 4H13M7 4H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span class="cart-count" id="cartCount">0</span>
                            </button>
                        </div>
                    </div>
                </header>
            `;
        }
    }

    loadNavigation() {
        const container = document.getElementById('navigation-container');
        if (container) {
            container.innerHTML = `
                <nav class="breadcrumb">
                    <a href="/">Home</a>
                    <span class="breadcrumb-separator">/</span>
                    <a href="/collections/fall-25">Fall '25</a>
                    <span class="breadcrumb-separator">/</span>
                    <span>Napoli Tan Suede Loafer</span>
                </nav>

                <div class="mobile-nav" id="mobileNav">
                    <div class="mobile-nav__overlay" id="mobileNavOverlay"></div>
                    <div class="mobile-nav__menu">
                        <div class="mobile-nav__header">
                            <h2>Menu</h2>
                            <button class="mobile-nav__close" id="mobileNavClose">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div class="mobile-nav__content">
                            <a href="#" class="mobile-nav__link">Products</a>
                            <a href="#" class="mobile-nav__link">Collections</a>
                            <a href="#" class="mobile-nav__link">About</a>
                            <a href="#" class="mobile-nav__link">Contact</a>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    loadProduct() {
        const container = document.getElementById('product-container');
        if (container) {
            container.innerHTML = `
                <div class="product">
                    <div class="product__inner">
                        <div class="product__media">
                            <div class="product__media-thumbnails">
                                <button class="product__media-thumbnail active" data-image="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop">
                                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop" alt="Captain boots front view">
                                </button>
                                <button class="product__media-thumbnail" data-image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop">
                                    <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop" alt="Captain boots side view">
                                </button>
                                <button class="product__media-thumbnail" data-image="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop">
                                    <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop" alt="Captain boots top view">
                                </button>
                                <button class="product__media-thumbnail" data-image="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop">
                                    <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop" alt="Captain boots sole view">
                                </button>
                                <button class="product__media-thumbnail" data-image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop">
                                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" alt="Captain boots worn view">
                                </button>
                                <button class="product__media-thumbnail" data-image="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop">
                                    <img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=100&h=100&fit=crop" alt="Captain boots top down view">
                                </button>
                                <button class="product__media-thumbnail" data-image="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop">
                                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop" alt="Captain boots close up">
                                </button>
                                <button class="product__media-thumbnail product__media-thumbnail--video" data-video="true">
                                    <div class="video-thumbnail">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                                        </svg>
                                        <span>Watch Video</span>
                                    </div>
                                </button>
                            </div>
                            <div class="product__media-main">
                                <div class="product__media-container">
                                    <img id="mainImage" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop" alt="Captain boots" class="product__media-image">
                                    <button class="product__media-enlarge" id="enlargeBtn">
                                        <span>Q ENLARGE</span>
                                    </button>
                                    <button class="product__media-nav product__media-nav--prev" id="prevBtn">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    <button class="product__media-nav product__media-nav--next" id="nextBtn">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            
                            <div class="product__media-thumbnails-mobile">
                                <button class="product__media-thumbnail-mobile active" data-image="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop">
                                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop" alt="Captain boots front view">
                                </button>
                                <button class="product__media-thumbnail-mobile" data-image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop">
                                    <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop" alt="Captain boots side view">
                                </button>
                                <button class="product__media-thumbnail-mobile" data-image="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop">
                                    <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop" alt="Captain boots top view">
                                </button>
                                <button class="product__media-thumbnail-mobile" data-image="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop">
                                    <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop" alt="Captain boots sole view">
                                </button>
                                <button class="product__media-thumbnail-mobile product__media-thumbnail-mobile--video" data-video="true">
                                    <div class="video-thumbnail">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                                        </svg>
                                        <span>Watch Video</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div class="product__info">
                            <div class="product__header">
                                <h1 class="product__title" id="productTitle">Captain</h1>
                                <div class="product__price">
                                    <span class="price__current" id="currentPrice">5.406.000₫</span>
                                </div>
                                <div class="product__guarantee">
                                    <div class="guarantee-item">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" fill="#28a745"/>
                                        </svg>
                                        <span>Honest Pricing Guarantee</span>
                                        <a href="#" class="guarantee-link">More info</a>
                                    </div>
                                </div>
                                <div class="product__rating">
                                    <div class="rating">
                                        <div class="rating__stars">★★★★★</div>
                                        <span class="rating__text">4.9 (36,222 reviews)</span>
                                    </div>
                                </div>
                            </div>

                            <form class="product-form" id="productForm">
                                <div class="product-form__group">
                                    <h3 class="product-form__section-title">Width: <span id="selectedWidth">Standard</span></h3>
                                    <div class="width-selector">
                                        <button type="button" class="width-option" data-width="standard">Standard</button>
                                        <button type="button" class="width-option width-option--selected" data-width="wide">Wide (EE)</button>
                                    </div>
                                </div>

                                <div class="product-form__group">
                                    <h3 class="product-form__section-title">Color: <span id="selectedColor">Brandy</span></h3>
                                    <div class="color-categories">
                                        <div class="color-category">
                                            <h4 class="color-category__title">CLASSIC COLLECTION</h4>
                                            <div class="color-selector">
                                                <div class="color-option color-option--selected" data-color="brandy">
                                                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=80&h=80&fit=crop" alt="Brandy" class="color-image">
                                                </div>
                                                <div class="color-option" data-color="black">
                                                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=80&h=80&fit=crop" alt="Black" class="color-image">
                                                </div>
                                                <div class="color-option" data-color="brown">
                                                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=80&h=80&fit=crop" alt="Brown" class="color-image">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-form__group">
                                    <h3 class="product-form__section-title">Size: <span id="selectedSize">Choose a size</span></h3>
                                    <p class="size-guide-text">Order ½ size smaller than you wear in sneakers.</p>
                                    <div class="size-guide-links">
                                        <a href="#" class="size-guide-link">Find my size</a>
                                    </div>
                                    <div class="size-selector">
                                        <button type="button" class="size-selector__button" id="sizeSelectButton">
                                            <span class="size-selector__text">Choose a size</span>
                                            <svg class="size-selector__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                        <div class="size-selector__overlay" id="sizeOverlay"></div>
                                        <div class="size-selector__dropdown" id="sizeDropdown">
                                            <div class="size-selector__header">
                                                <h3 class="size-selector__title">Choose a size</h3>
                                                <button class="size-selector__close" id="sizeCloseButton">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </button>
                                            </div>
                                            
                                            <div class="size-selector__tips">
                                                <div class="size-tip">
                                                    <h4 class="size-tip__title">SIZING TIPS</h4>
                                                    <p class="size-tip__text">True to size</p>
                                                    <p class="size-tip__subtext">You can choose your usual size.</p>
                                                </div>
                                                <div class="size-tip">
                                                    <h4 class="size-tip__title">FIND YOUR SIZE</h4>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            
                                            <div class="size-selector__summary" id="sizeSummary">
                                                <!-- Stock summary will be populated by JavaScript -->
                                            </div>
                                            
                                            <div class="size-selector__options" id="sizeOptions">
                                                <!-- Size options will be populated by JavaScript -->
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-form__actions">
                                    <button type="submit" class="btn btn--primary btn--full" id="addToCartBtn">
                                        <span class="btn__text">Add to cart - 5.406.000₫</span>
                                    </button>
                                </div>
                            </form>

                            <div class="demo-controls">
                                <h3>Demo Controls:</h3>
                                <div class="demo-buttons">
                                    <button onclick="toggleSale()" class="demo-btn">Toggle Sale</button>
                                    <button onclick="setOutOfStock()" class="demo-btn">Set Out of Stock</button>
                                    <button onclick="setLowStock()" class="demo-btn">Set Low Stock</button>
                                    <button onclick="resetStock()" class="demo-btn">Reset Stock</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="floating-actions">
                    <button class="floating-action-btn floating-action-btn--purple" id="aiBtn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-5 0v-15A2.5 2.5 0 0 1 9.5 2z" fill="currentColor"/>
                            <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v15a2.5 2.5 0 0 1-5 0v-15A2.5 2.5 0 0 1 14.5 2z" fill="currentColor"/>
                        </svg>
                    </button>
                    <button class="floating-action-btn floating-action-btn--blue" id="helpBtn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }
    }

    loadCart() {
        const container = document.getElementById('cart-container');
        if (container) {
            container.innerHTML = `
                <div class="cart-drawer" id="cartDrawer">
                    <div class="cart-drawer__content">
                        <!-- Left Column: Customers Also Bought -->
                        <div class="cart-drawer__left">
                            <div class="customers-also-bought">
                                <h3 class="customers-also-bought__title">Customers Also Bought</h3>
                                <div class="customers-also-bought__list" id="customersAlsoBought">
                                    <!-- Suggested products will be populated by JavaScript -->
                                </div>
                            </div>
                        </div>
                        
                        <!-- Right Column: Your Cart -->
                        <div class="cart-drawer__right">
                            <div class="cart-drawer__header">
                                <h2 class="cart-drawer__title">Your Cart</h2>
                                <button class="cart-drawer__close" id="cartClose">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                            
                            <div class="cart-drawer__info">
                                <div class="cart-info">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.5 6L8 9.5 4.5 6l1-1L8 7.5 10.5 5l1 1z" fill="#3B82F6"/>
                                    </svg>
                                    <span>Fast shipping + easy returns</span>
                                </div>
                            </div>
                            
                            <div class="cart-items" id="cartItems">
                                <!-- Cart items will be populated by JavaScript -->
                            </div>
                            
                            <div class="cart-summary">
                                <div class="cart-summary__row">
                                    <span class="cart-summary__label">Shipping</span>
                                    <span class="cart-summary__value">Calculated at checkout</span>
                                </div>
                                <div class="cart-summary__row cart-summary__row--total">
                                    <span class="cart-summary__label">Subtotal</span>
                                    <span class="cart-summary__value" id="cartSubtotal">0₫</span>
                                </div>
                            </div>
                            
                            <div class="cart-actions">
                                <button class="btn btn--primary btn--full checkout-btn" id="checkoutBtn">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M2 3h12l-1 8H3L2 3zM2 3L1 1H0M4 6v6M8 6v6M12 6v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    CHECKOUT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cart-drawer__overlay" id="cartOverlay"></div>
            `;
        }
    }

    loadFooter() {
        const container = document.getElementById('footer-container');
        if (container) {
            container.innerHTML = `
                <footer class="site-footer">
                    <div class="footer-wrapper">
                        <div class="footer__content">
                            <div class="footer__section">
                                <h3 class="footer__title">SneakerHub</h3>
                                <p class="footer__description">
                                    Premium footwear for athletes and fashion enthusiasts. 
                                    Experience the perfect blend of performance and style.
                                </p>
                                <div class="footer__social">
                                    <a href="#" class="footer__social-link" aria-label="Facebook">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </a>
                                    <a href="#" class="footer__social-link" aria-label="Twitter">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
                                    </a>
                                    <a href="#" class="footer__social-link" aria-label="Instagram">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            
                            <div class="footer__section">
                                <h4 class="footer__subtitle">Products</h4>
                                <ul class="footer__links">
                                    <li><a href="#" class="footer__link">Running Shoes</a></li>
                                    <li><a href="#" class="footer__link">Basketball Shoes</a></li>
                                    <li><a href="#" class="footer__link">Casual Sneakers</a></li>
                                    <li><a href="#" class="footer__link">New Arrivals</a></li>
                                </ul>
                            </div>
                            
                            <div class="footer__section">
                                <h4 class="footer__subtitle">Support</h4>
                                <ul class="footer__links">
                                    <li><a href="#" class="footer__link">Help Center</a></li>
                                    <li><a href="#" class="footer__link">Warranty</a></li>
                                    <li><a href="#" class="footer__link">Returns</a></li>
                                    <li><a href="#" class="footer__link">Contact Us</a></li>
                                </ul>
                            </div>
                            
                            <div class="footer__section">
                                <h4 class="footer__subtitle">Company</h4>
                                <ul class="footer__links">
                                    <li><a href="#" class="footer__link">About Us</a></li>
                                    <li><a href="#" class="footer__link">Careers</a></li>
                                    <li><a href="#" class="footer__link">Press</a></li>
                                    <li><a href="#" class="footer__link">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="footer__bottom">
                            <div class="footer__bottom-content">
                                <p class="footer__copyright">
                                    © 2024 SneakerHub. All rights reserved.
                                </p>
                                <div class="footer__legal">
                                    <a href="#" class="footer__legal-link">Privacy Policy</a>
                                    <a href="#" class="footer__legal-link">Terms of Service</a>
                                    <a href="#" class="footer__legal-link">Cookie Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            `;
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
