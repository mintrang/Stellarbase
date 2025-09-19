// Cart Component JavaScript
class Cart {
    constructor() {
        this.items = [];
        this.loadFromStorage();
    }

    addItem(product, variant, quantity) {
        const existingItem = this.items.find(item => 
            item.productId === product.id && 
            item.color === variant.color && 
            item.size === variant.size
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                productId: product.id,
                title: product.title,
                color: variant.color,
                size: variant.size,
                price: product.currentPrice,
                quantity: quantity,
                image: product.images[variant.color][0]
            });
        }

        this.saveToStorage();
        this.updateCartDisplay();
        if (window.Utils) {
            window.Utils.showNotification('Item added to cart!', 'success');
        }
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.saveToStorage();
        this.updateCartDisplay();
        if (window.Utils) {
            window.Utils.showNotification('Item removed from cart', 'info');
        }
    }

    updateQuantity(index, quantity) {
        if (quantity <= 0) {
            this.removeItem(index);
        } else {
            this.items[index].quantity = quantity;
            this.saveToStorage();
            this.updateCartDisplay();
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    saveToStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    loadFromStorage() {
        const stored = localStorage.getItem('cart');
        if (stored) {
            this.items = JSON.parse(stored);
        }
    }

    formatPrice(price) {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0
        }).format(price);
    }

    updateCartDisplay() {
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartSubtotal = document.getElementById('cartSubtotal');

        if (cartCount) {
            cartCount.textContent = this.getItemCount();
        }

        if (cartItems) {
            if (this.items.length === 0) {
                cartItems.innerHTML = `
                    <div class="cart-drawer__empty">
                        <div class="cart-drawer__empty-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                <path d="M7 4V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V4M7 4H5C4.44772 4 4 4.44772 4 5V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V5C20 4.44772 19.5523 4 19 4H17M7 4H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <p class="cart-drawer__empty-text">Your cart is empty</p>
                    </div>
                `;
            } else {
                cartItems.innerHTML = this.items.map((item, index) => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.title}" class="cart-item__image">
                        <div class="cart-item__details">
                            <div class="cart-item__title">${item.title} | ${item.color}</div>
                            <div class="cart-item__variant">Size: ${item.size}</div>
                            <div class="cart-item__price">${this.formatPrice(item.price * item.quantity)}</div>
                        </div>
                        <div class="cart-item__controls">
                            <div class="cart-item__quantity">
                                <button onclick="window.cart.updateQuantity(${index}, ${item.quantity - 1})">-</button>
                                <input type="number" value="${item.quantity}" min="1" max="10" 
                                       onchange="window.cart.updateQuantity(${index}, parseInt(this.value))">
                                <button onclick="window.cart.updateQuantity(${index}, ${item.quantity + 1})">+</button>
                            </div>
                            <button class="cart-item__remove" onclick="window.cart.removeItem(${index})">Remove</button>
                        </div>
                    </div>
                `).join('');
            }
        }

        if (cartSubtotal) {
            cartSubtotal.textContent = this.formatPrice(this.getTotal());
        }
    }

    loadSuggestedProducts() {
        const container = document.getElementById('customersAlsoBought');
        if (!container || !window.suggestedProducts) return;

        container.innerHTML = window.suggestedProducts.map(product => `
            <div class="suggested-product">
                <img src="${product.image}" alt="${product.name}" class="suggested-product__image">
                <div class="suggested-product__content">
                    <h4 class="suggested-product__name">${product.name}</h4>
                    ${product.variant ? `<p class="suggested-product__variant">${product.variant}</p>` : ''}
                    <p class="suggested-product__price">${this.formatPrice(product.price)}</p>
                </div>
                <div class="suggested-product__actions">
                    ${product.sizes.length > 0 ? `
                        <div class="suggested-product__size">
                            <select class="suggested-product__size-select">
                                ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                            </select>
                        </div>
                    ` : ''}
                    <button class="suggested-product__add-btn" onclick="window.cart.addSuggestedProduct('${product.id}')">
                        Add To Cart
                    </button>
                    <a href="#" class="suggested-product__details">View more details</a>
                </div>
            </div>
        `).join('');
    }

    addSuggestedProduct(productId) {
        const product = window.suggestedProducts.find(p => p.id === productId);
        if (!product) return;

        const sizeSelect = document.querySelector(`[onclick="window.cart.addSuggestedProduct('${productId}')"]`)
            ?.closest('.suggested-product')
            ?.querySelector('.suggested-product__size-select');
        
        const selectedSize = sizeSelect ? sizeSelect.value : '';

        this.items.push({
            productId: product.id,
            title: product.name,
            color: product.variant || 'Default',
            size: selectedSize || 'One Size',
            price: product.price,
            quantity: 1,
            image: product.image
        });

        this.saveToStorage();
        this.updateCartDisplay();
        
        // Keep cart drawer open when adding suggested products
        // No need to toggle since drawer is already open
    }
}

// Cart Drawer Management
class CartDrawer {
    constructor() {
        this.isOpen = false;
        this.drawer = document.getElementById('cartDrawer');
        this.overlay = document.getElementById('cartOverlay');
        
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        const cartClose = document.getElementById('cartClose');
        if (cartClose) {
            cartClose.addEventListener('click', () => {
                this.close();
            });
        }

        if (this.overlay) {
            this.overlay.addEventListener('click', () => {
                this.close();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
    }

    toggle() {
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            if (this.drawer) this.drawer.classList.add('open');
            if (this.overlay) this.overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            if (window.cart) {
                window.cart.loadSuggestedProducts();
            }
        } else {
            if (this.drawer) this.drawer.classList.remove('open');
            if (this.overlay) this.overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    close() {
        this.isOpen = false;
        if (this.drawer) this.drawer.classList.remove('open');
        if (this.overlay) this.overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Export for use in main application
window.Cart = Cart;
window.CartDrawer = CartDrawer;