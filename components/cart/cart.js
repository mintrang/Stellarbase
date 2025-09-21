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
        if (!this.cartItemTemplate) {
        }

        const maxQuantity = this.getMaxQuantity(item);
        const isMaxReached = item.quantity >= maxQuantity;
        
        return this.cartItemTemplate
            .replace(/\{\{index\}\}/g, index)
            .replace(/\{\{image\}\}/g, item.image || '')
            .replace(/\{\{title\}\}/g, item.title || 'Product')
            .replace(/\{\{colorName\}\}/g, item.colorName || item.color || 'Default')
            .replace(/\{\{sizeName\}\}/g, item.sizeName || item.size || 'One Size')
            .replace(/\{\{price\}\}/g, this.formatPrice(item.price * item.quantity))
            .replace(/\{\{stockInfo\}\}/g, maxQuantity > 0 ? `<div class="cart-item__stock">${maxQuantity} in stock</div>` : '')
            .replace(/\{\{quantity\}\}/g, item.quantity)
            .replace(/\{\{maxQuantity\}\}/g, maxQuantity)
            .replace(/\{\{disabled\}\}/g, isMaxReached ? 'disabled' : '');
    }


    addItem(product, variant, quantity) {
        console.log('Adding item to cart...');
        const existingItem = this.items.find(item => 
            item.productId === product.id && 
            item.color === variant.color && 
            item.size === variant.size
        );

        const maxQuantity = this.getMaxQuantity({
            productId: product.id,
            color: variant.color,
            size: variant.size
        });

        if (existingItem) {
            const newQuantity = existingItem.quantity + quantity;
            if (newQuantity > maxQuantity) {
                if (window.Utils) {
                    window.Utils.showNotification(`Only ${maxQuantity} items available in stock`, 'warning');
                }
                existingItem.quantity = maxQuantity;
            } else {
                existingItem.quantity = newQuantity;
            }
            
            const colorVariant = product.variants.color[variant.color];
            const sizeVariant = product.variants.size[variant.size];
            const firstImage = colorVariant.images ? colorVariant.images.find(img => img.type === 'image') : null;
            if (firstImage) {
                existingItem.image = firstImage.url;
            }
            if (colorVariant) {
                existingItem.colorName = colorVariant.name;
            }
            if (sizeVariant) {
                existingItem.sizeName = sizeVariant.name;
            }
        } else {
            if (quantity > maxQuantity) {
                if (window.Utils) {
                    window.Utils.showNotification(`Only ${maxQuantity} items available in stock`, 'warning');
                }
                quantity = maxQuantity;
            }

            const sizeVariant = product.variants.size[variant.size];
            const pricing = sizeVariant.pricing[variant.color];
            const price = pricing ? pricing.finalPrice : 0;
            
            const colorVariant = product.variants.color[variant.color];
            const firstImage = colorVariant.images ? colorVariant.images.find(img => img.type === 'image') : null;
            const image = firstImage ? firstImage.url : '';
            
            const colorName = colorVariant ? colorVariant.name : variant.color;
            const sizeName = sizeVariant ? sizeVariant.name : variant.size;
            
            this.items.push({
                productId: product.id,
                title: product.title,
                color: variant.color,
                colorName: colorName,
                size: variant.size,
                sizeName: sizeName,
                price: price,
                quantity: quantity,
                image: image
            });
        }

        this.updateCartDisplay();
 
    }

    removeItem(index) {
        this.items.splice(index, 1);
        
        if (this.items.length === 0) {
            this.updateCartDisplay();
        } else {
            this.updateCartDisplay();
        }
        
        if (window.Utils) {
            window.Utils.showNotification('Item removed from cart', 'info');
        }
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
        quantity = parseInt(quantity);
        
        if (isNaN(quantity)) {
            quantity = 0;
        }
        
        if (quantity <= 0) {
            this.removeItem(index);
            return;
        }

        const item = this.items[index];
        if (!item) return;

        const maxQuantity = this.getMaxQuantity(item);
        console.log('Updating quantity for item:', item, 'new quantity:', quantity, 'max allowed:', maxQuantity);
        
        if (quantity > maxQuantity) {
            console.log('Quantity exceeds max, limiting to:', maxQuantity);
            quantity = maxQuantity;
            if (window.Utils) {
                window.Utils.showNotification(`Only ${maxQuantity} items available in stock`, 'warning');
            }
        }

        this.items[index].quantity = quantity;
        console.log('Updated item quantity to:', this.items[index].quantity);
        
        this.updateCartItem(index);
        this.updateCartTotals();
    }

    getMaxQuantity(item) {
        if (window.productData && window.productData.variants) {
            const sizeVariant = window.productData.variants.size[item.size];
            if (sizeVariant && sizeVariant.stock) {
                const stock = sizeVariant.stock[item.color];
                console.log('Stock for', item.color, item.size, ':', stock); // Debug log
                return stock || 0;
            }
        }
        console.log('No stock data found, using default 10'); // Debug log
        return 10; // Default max if no stock data
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
        if (window.Utils) {
            window.Utils.showNotification('Cart cleared', 'info');
        }
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
                cartItems.innerHTML = this.items.map((item, index) => {
                    console.log('Rendering cart item:', item.color, item.size, 'quantity:', item.quantity);
                    return this.renderCartItem(item, index);
                }).join('');
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