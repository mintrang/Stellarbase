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

        // Get current stock for this item
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
        } else {
            // Check if we can add this quantity
            if (quantity > maxQuantity) {
                if (window.Utils) {
                    window.Utils.showNotification(`Only ${maxQuantity} items available in stock`, 'warning');
                }
                quantity = maxQuantity;
            }

            // Get price from size variant pricing
            const sizeVariant = product.variants.size[variant.size];
            const pricing = sizeVariant.pricing[variant.color];
            const price = pricing ? pricing.finalPrice : 0;
            
            // Get image from color variant
            const colorVariant = product.variants.color[variant.color];
            const firstImage = colorVariant.images ? colorVariant.images.find(img => img.type === 'image') : null;
            const image = firstImage ? firstImage.url : '';
            
            this.items.push({
                productId: product.id,
                title: product.title,
                color: variant.color,
                size: variant.size,
                price: price,
                quantity: quantity,
                image: image
            });
        }

        this.saveToStorage();
        this.updateCartDisplay();
 
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.saveToStorage();
        
        // If cart is empty, show empty state
        if (this.items.length === 0) {
            this.updateCartDisplay();
        } else {
            // Otherwise, just update totals and re-render items to fix indices
            this.updateCartDisplay();
        }
        
        if (window.Utils) {
            window.Utils.showNotification('Item removed from cart', 'info');
        }
    }

    updateQuantity(index, quantity) {
        // Ensure quantity is a valid positive number
        quantity = parseInt(quantity) || 1;
        
        if (quantity <= 0) {
            this.removeItem(index);
            return;
        }

        const item = this.items[index];
        if (!item) return;

        // Get current stock for this item
        const maxQuantity = this.getMaxQuantity(item);
        
        if (quantity > maxQuantity) {
            quantity = maxQuantity;
            if (window.Utils) {
                window.Utils.showNotification(`Only ${maxQuantity} items available in stock`, 'warning');
            }
        }

        this.items[index].quantity = quantity;
        this.saveToStorage();
        
        // Only update the specific item and totals, not the entire cart
        this.updateCartItem(index);
        this.updateCartTotals();
    }

    getMaxQuantity(item) {
        // Get stock from productData
        if (window.productData && window.productData.variants) {
            const sizeVariant = window.productData.variants.size[item.size];
            if (sizeVariant && sizeVariant.stock) {
                return sizeVariant.stock[item.color] || 0;
            }
        }
        return 10; // Default max if no stock data
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
            try {
                this.items = JSON.parse(stored);
                // Clean up any invalid items
                this.items = this.items.filter(item => 
                    item.title && 
                    item.color && 
                    item.size && 
                    item.price && 
                    item.quantity
                );
            } catch (error) {
                console.error('Error loading cart from storage:', error);
                this.items = [];
            }
        }
    }

    clearCart() {
        this.items = [];
        this.saveToStorage();
        this.updateCartDisplay();
        if (window.Utils) {
            window.Utils.showNotification('Cart cleared', 'info');
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
                cartItems.innerHTML = this.items.map((item, index) => {
                    const maxQuantity = this.getMaxQuantity(item);
                    const isMaxReached = item.quantity >= maxQuantity;
                    
                    return `
                        <div class="cart-item" data-item-index="${index}">
                            <img src="${item.image || ''}" alt="${item.title || 'Product'}" class="cart-item__image">
                            <div class="cart-item__details">
                                <div class="cart-item__title">${item.title || 'Product'} | ${item.color || 'Default'}</div>
                                <div class="cart-item__variant">Size: ${item.size || 'One Size'}</div>
                                <div class="cart-item__price">${this.formatPrice(item.price * item.quantity)}</div>
                                ${maxQuantity > 0 ? `<div class="cart-item__stock">${maxQuantity} in stock</div>` : ''}
                            </div>
                            <div class="cart-item__controls">
                                <div class="cart-item__quantity">
                                    <button onclick="window.cart.updateQuantity(${index}, ${item.quantity - 1})" 
                                            ${item.quantity <= 1 ? 'disabled' : ''} 
                                            aria-label="Decrease quantity for ${item.title}">-</button>
                                    <input type="number" value="${item.quantity}" min="1" max="${maxQuantity}" 
                                           onchange="window.cart.updateQuantity(${index}, parseInt(this.value))" 
                                           oninput="this.value = this.value.replace(/[^0-9]/g, ''); if(this.value === '' || this.value === '0') this.value = '1';"
                                           onkeydown="if(event.key === '-' || event.key === '+' || event.key === 'e' || event.key === 'E') event.preventDefault();"
                                           onpaste="setTimeout(() => { let val = parseInt(this.value) || 1; if(val < 1) { this.value = 1; window.cart.updateQuantity(${index}, 1); } }, 0);"
                                           aria-label="Quantity for ${item.title}">
                                    <button onclick="window.cart.updateQuantity(${index}, ${item.quantity + 1})" 
                                            ${isMaxReached ? 'disabled' : ''} 
                                            aria-label="Increase quantity for ${item.title}">+</button>
                                </div>
                                <button class="cart-item__remove" onclick="window.cart.removeItem(${index})" 
                                        aria-label="Remove ${item.title} from cart">Remove</button>
                            </div>
                        </div>
                    `;
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

        // Update price
        const priceElement = cartItem.querySelector('.cart-item__price');
        if (priceElement) {
            priceElement.textContent = this.formatPrice(item.price * item.quantity);
        }

        // Update quantity input
        const quantityInput = cartItem.querySelector('input[type="number"]');
        if (quantityInput) {
            quantityInput.value = item.quantity;
            quantityInput.max = maxQuantity;
        }

        // Update buttons
        const minusBtn = cartItem.querySelector('button[onclick*="updateQuantity"][onclick*="-"]');
        const plusBtn = cartItem.querySelector('button[onclick*="updateQuantity"][onclick*="+"]');
        
        if (minusBtn) {
            minusBtn.disabled = item.quantity <= 1;
        }
        if (plusBtn) {
            plusBtn.disabled = isMaxReached;
        }

        // Update stock info
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

        // For now, just show a notification
        if (window.Utils) {
            window.Utils.showNotification('Checkout functionality coming soon!', 'info');
        }
        
        // In a real app, you would redirect to checkout page
        // window.location.href = '/checkout';
    }
}

// Export for use in main application
window.Cart = Cart;
window.CartDrawer = CartDrawer;