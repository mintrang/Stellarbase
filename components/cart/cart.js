class Cart {
    constructor() {
        this.items = [];
        this.cartItemTemplate = null;
        this.loadTemplate();
        this.setupEventListeners();
    }

    async loadTemplate() {
        this.cartItemTemplate = await window.Utils.loadTemplate('components/cart/cart-item.html');
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.quantity-btn')) {
                const action = e.target.dataset.action;
                const index = parseInt(e.target.dataset.index);
                
                if (action === 'decrease') {
                    this.decreaseQuantity(index);
                } else if (action === 'increase') {
                    this.increaseQuantity(index);
                }
            } else if (e.target.matches('.cart-item__remove')) {
                const index = parseInt(e.target.dataset.index);
                this.removeItem(index);
            }
        });

        document.addEventListener('change', (e) => {
            if (e.target.matches('.quantity-input')) {
                const index = parseInt(e.target.dataset.index);
                const quantity = parseInt(e.target.value) || 0;
                this.updateQuantity(index, quantity);
            }
        });

        document.addEventListener('input', (e) => {
            if (e.target.matches('.quantity-input')) {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                if (e.target.value === '') e.target.value = '0';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.target.matches('.quantity-input')) {
                if (['-', '+', 'e', 'E', '.'].includes(e.key)) {
                    e.preventDefault();
                }
            }
        });

        document.addEventListener('paste', (e) => {
            if (e.target.matches('.quantity-input')) {
                setTimeout(() => {
                    const index = parseInt(e.target.dataset.index);
                    const quantity = parseInt(e.target.value) || 0;
                    this.updateQuantity(index, quantity);
                }, 0);
            }
        });
    }

    renderCartItem(item, index) {
        if (!this.cartItemTemplate) return '';

        const maxQuantity = this.getMaxQuantity(item);
        const replacements = {
            '{{index}}': index,
            '{{image}}': item.image || '',
            '{{title}}': item.title || 'Product',
            '{{colorName}}': item.colorName || item.color || 'Default',
            '{{sizeName}}': item.sizeName || item.size || 'One Size',
            '{{price}}': this.formatPrice(item.price * item.quantity),
            '{{stockInfo}}': maxQuantity > 0 ? `<div class="cart-item__stock">${maxQuantity} in stock</div>` : '',
            '{{quantity}}': item.quantity,
            '{{maxQuantity}}': maxQuantity,
            '{{disabled}}': item.quantity >= maxQuantity ? 'disabled' : ''
        };
        
        return Object.entries(replacements).reduce((template, [key, value]) => 
            template.replace(new RegExp(key, 'g'), value), this.cartItemTemplate);
    }


    addItem(product, variant, quantity) {
        const existingItem = this.items.find(item => 
            item.productId === product.id && 
            item.color === variant.color && 
            item.size === variant.size
        );

        const maxQuantity = this.getMaxQuantity({ productId: product.id, color: variant.color, size: variant.size });
        const finalQuantity = Math.min(existingItem ? existingItem.quantity + quantity : quantity, maxQuantity);
        
        if (finalQuantity < (existingItem ? existingItem.quantity + quantity : quantity)) {
            window.Utils?.showNotification(`Only ${maxQuantity} items available in stock`, 'warning');
        }

        if (existingItem) {
            existingItem.quantity = finalQuantity;
            this.updateItemDetails(existingItem, product, variant);
        } else {
            this.items.push(this.createCartItem(product, variant, finalQuantity));
        }

        this.updateCartDisplay();
    }

    updateItemDetails(item, product, variant) {
        const colorVariant = product.variants.color[variant.color];
        const sizeVariant = product.variants.size[variant.size];
        
        if (colorVariant?.images) {
            const firstImage = colorVariant.images.find(img => img.type === 'image');
            if (firstImage) item.image = firstImage.url;
        }
        if (colorVariant) item.colorName = colorVariant.name;
        if (sizeVariant) item.sizeName = sizeVariant.name;
    }

    createCartItem(product, variant, quantity) {
        const sizeVariant = product.variants.size[variant.size];
        const colorVariant = product.variants.color[variant.color];
        const pricing = sizeVariant.pricing[variant.color];
        const firstImage = colorVariant?.images?.find(img => img.type === 'image');
        
        return {
            productId: product.id,
            title: product.title,
            color: variant.color,
            colorName: colorVariant?.name || variant.color,
            size: variant.size,
            sizeName: sizeVariant?.name || variant.size,
            price: pricing?.finalPrice || 0,
            quantity,
            image: firstImage?.url || ''
        };
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.updateCartDisplay();
        window.Utils?.showNotification('Item removed from cart', 'info');
    }

    increaseQuantity(index) {
        const item = this.items[index];
        if (!item) return;
        
        const newQuantity = item.quantity + 1;
        this.updateQuantity(index, newQuantity);
    }

    decreaseQuantity(index) {
        const item = this.items[index];
        if (!item) return;
        
        const newQuantity = item.quantity - 1;
        this.updateQuantity(index, newQuantity);
    }

    updateQuantity(index, quantity) {
        quantity = parseInt(quantity) || 0;
        
        if (quantity <= 0) {
            this.removeItem(index);
            return;
        }

        const item = this.items[index];
        if (!item) return;

        const maxQuantity = this.getMaxQuantity(item);
        const finalQuantity = Math.min(quantity, maxQuantity);
        
        if (finalQuantity < quantity) {
            window.Utils?.showNotification(`Only ${maxQuantity} items available in stock`, 'warning');
        }

        this.items[index].quantity = finalQuantity;
        this.updateCartItem(index);
        this.updateCartTotals();
    }

    getMaxQuantity(item) {
        const sizeVariant = window.productData?.variants?.size?.[item.size];
        return sizeVariant?.stock?.[item.color] || 10;
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }


    clearCart() {
        this.items = [];
        this.updateCartDisplay();
        window.Utils?.showNotification('Cart cleared', 'info');
    }

    formatPrice(price) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
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
                cartItems.innerHTML = this.items.map((item, index) => this.renderCartItem(item, index)).join('');
            }
        }

        if (cartSubtotal) {
            cartSubtotal.textContent = this.formatPrice(this.getTotal());
        }
    }

    updateCartItem(index) {
        const item = this.items[index];
        if (!item) return;

        const cartItem = document.querySelector(`[data-item-index="${index}"]`);
        if (!cartItem) return;

        const maxQuantity = this.getMaxQuantity(item);
        const isMaxReached = item.quantity >= maxQuantity;

        const priceElement = cartItem.querySelector('.cart-item__price');
        if (priceElement) {
            priceElement.textContent = this.formatPrice(item.price * item.quantity);
        }

        const quantityInput = cartItem.querySelector('input[type="number"]');
        if (quantityInput) {
            quantityInput.value = item.quantity;
            quantityInput.max = maxQuantity;
        }

        const minusBtn = cartItem.querySelector('button[onclick*="updateQuantity"][onclick*="-"]');
        const plusBtn = cartItem.querySelector('button[onclick*="updateQuantity"][onclick*="+"]');
        
        if (minusBtn) {
            minusBtn.disabled = false; // Allow decreasing to 0
        }
        if (plusBtn) {
            plusBtn.disabled = isMaxReached;
        }

        const stockElement = cartItem.querySelector('.cart-item__stock');
        if (stockElement && maxQuantity > 0) {
            stockElement.textContent = `${maxQuantity} in stock`;
        }
    }

    updateCartTotals() {
        const cartCount = document.getElementById('cartCount');
        const cartSubtotal = document.getElementById('cartSubtotal');

        if (cartCount) {
            cartCount.textContent = this.getItemCount();
        }

        if (cartSubtotal) {
            cartSubtotal.textContent = this.formatPrice(this.getTotal());
        }
    }

}

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

        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                this.handleCheckout();
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

    handleCheckout() {
        if (this.items.length === 0) {
            if (window.Utils) {
                window.Utils.showNotification('Your cart is empty', 'warning');
            }
            return;
        }

        if (window.Utils) {
            window.Utils.showNotification('Checkout functionality coming soon!', 'info');
        }
        
    }
}

window.Cart = Cart;
window.CartDrawer = CartDrawer;