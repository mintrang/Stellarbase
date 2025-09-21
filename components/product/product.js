// Product Component JavaScript
class Product {
    constructor() {
        this.currentVariant = {
            color: 'black',
            size: 'size-39'
        };
        this.quantity = 1;
        this.maxQuantity = 10;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateDisplay();
        this.updateStockInfo();
        this.updateQuantityDisplay();
        this.updateAddToCartButton();
    }

    setupEventListeners() {
        // Color selectors
        document.addEventListener('click', (e) => {
            if (e.target.closest('.color-option')) {
                const colorOption = e.target.closest('.color-option');
                const color = colorOption.dataset.color;
                this.updateVariant('color', color);
            }
        });

        // Thumbnail selectors
        document.addEventListener('click', (e) => {
            if (e.target.closest('.product__media-thumbnail')) {
                const thumbnail = e.target.closest('.product__media-thumbnail');
                if (thumbnail.dataset.image) {
                    const mainImage = document.getElementById('mainImage');
                    if (mainImage) {
                        mainImage.src = thumbnail.dataset.image;
                        
                        // Update active thumbnail
                        document.querySelectorAll('.product__media-thumbnail').forEach(t => t.classList.remove('active'));
                        thumbnail.classList.add('active');
                    }
                } else if (thumbnail.dataset.video) {
                    // Handle video thumbnail click
                    console.log('Video thumbnail clicked:', thumbnail.dataset.imageId);
                    // You can implement video modal or redirect here
                }
            }
        });

        // Mobile thumbnail selectors
        document.addEventListener('click', (e) => {
            if (e.target.closest('.product__media-thumbnail-mobile')) {
                const thumbnail = e.target.closest('.product__media-thumbnail-mobile');
                if (thumbnail.dataset.image) {
                    const mainImage = document.getElementById('mainImage');
                    if (mainImage) {
                        mainImage.src = thumbnail.dataset.image;
                        
                        // Update active mobile thumbnail
                        document.querySelectorAll('.product__media-thumbnail-mobile').forEach(t => t.classList.remove('active'));
                        thumbnail.classList.add('active');
                    }
                } else if (thumbnail.dataset.video) {
                    // Handle video thumbnail click
                    console.log('Video thumbnail clicked:', thumbnail.dataset.imageId);
                    // You can implement video modal or redirect here
                }
            }
        });

            // Navigation arrows
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    this.navigateImage(-1);
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    this.navigateImage(1);
                });
            }

        // Size dropdown
        const sizeSelectButton = document.getElementById('sizeSelectButton');
        const sizeDropdown = document.getElementById('sizeDropdown');
        const sizeOverlay = document.getElementById('sizeOverlay');
        const sizeCloseButton = document.getElementById('sizeCloseButton');

        if (sizeSelectButton) {
            sizeSelectButton.addEventListener('click', () => {
                this.toggleSizeDropdown();
            });
        }

        if (sizeCloseButton) {
            sizeCloseButton.addEventListener('click', () => {
                this.closeSizeDropdown();
            });
        }

        if (sizeOverlay) {
            sizeOverlay.addEventListener('click', () => {
                this.closeSizeDropdown();
            });
        }

        // Quantity controls
        const quantityMinusBtn = document.getElementById('quantityMinusBtn');
        const quantityPlusBtn = document.getElementById('quantityPlusBtn');
        const quantityInput = document.getElementById('quantityInput');

        if (quantityMinusBtn) {
            quantityMinusBtn.addEventListener('click', () => {
                this.updateQuantity(this.quantity - 1);
            });
        }

        if (quantityPlusBtn) {
            quantityPlusBtn.addEventListener('click', () => {
                this.updateQuantity(this.quantity + 1);
            });
        }

        if (quantityInput) {
            quantityInput.addEventListener('change', (e) => {
                let quantity = parseInt(e.target.value) || 1;
                
                // Prevent negative numbers
                if (quantity < 1) {
                    quantity = 1;
                    e.target.value = 1;
                }
                
                this.updateQuantity(quantity);
            });
            
            // Prevent typing negative numbers
            quantityInput.addEventListener('input', (e) => {
                let value = e.target.value;
                
                // Remove any non-numeric characters except digits
                value = value.replace(/[^0-9]/g, '');
                
                // If empty or starts with 0, set to 1
                if (value === '' || value === '0') {
                    value = '1';
                }
                
                e.target.value = value;
            });
            
            // Prevent pasting negative numbers
            quantityInput.addEventListener('paste', (e) => {
                setTimeout(() => {
                    let value = parseInt(e.target.value) || 1;
                    if (value < 1) {
                        e.target.value = 1;
                        this.updateQuantity(1);
                    }
                }, 0);
            });
        }

        // Add to cart button
        const addToCartBtn = document.getElementById('addToCartBtn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.addToCart();
            });
        }


        // Prevent form submission and negative input on quantity input
        if (quantityInput) {
            quantityInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.target.blur();
                }
                
                // Prevent typing minus sign, plus sign, or 'e' (scientific notation)
                if (e.key === '-' || e.key === '+' || e.key === 'e' || e.key === 'E') {
                    e.preventDefault();
                }
            });
        }
    }

    updateVariant(type, value) {
        this.currentVariant[type] = value;
        
        if (type === 'color') {
            // When color changes, update everything including images
            this.updateDisplay();
        } else if (type === 'size') {
            // When size changes, only update size-related info, not images
            this.updateSizeOnly();
        }
    }

    updateQuantity(quantity) {
        const maxStock = this.getMaxStock();
        this.quantity = Math.max(1, Math.min(quantity, maxStock));
        this.updateQuantityDisplay();
        this.updateAddToCartButton();
    }

    getMaxStock() {
        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        const currentSizeVariant = window.productData.variants.size[this.currentVariant.size];
        
        if (currentColorVariant && currentSizeVariant) {
            const colorStock = currentColorVariant.stock;
            const sizeStock = currentSizeVariant.stock[this.currentVariant.color];
            return Math.min(colorStock, sizeStock, this.maxQuantity);
        }
        return 0;
    }

    isVariantInStock() {
        return this.getMaxStock() > 0;
    }

    updateDisplay() {
        // Update main image (left column)
        const mainImage = document.getElementById('mainImage');
        if (mainImage) {
            const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
            if (currentColorVariant && currentColorVariant.images) {
                const firstImage = currentColorVariant.images.find(img => img.type === 'image') || currentColorVariant.images[0];
                mainImage.src = firstImage.url;
                mainImage.alt = firstImage.alt;
            }
        }

        // Update secondary image (right column)
        const secondaryImage = document.getElementById('secondaryImage');
        if (secondaryImage) {
            const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
            if (currentColorVariant && currentColorVariant.images) {
                const secondImage = currentColorVariant.images.find((img, index) => img.type === 'image' && index > 0) || currentColorVariant.images[0];
                secondaryImage.src = secondImage.url;
                secondaryImage.alt = secondImage.alt;
            }
        }

        // Update thumbnails
        this.updateThumbnails();

        // Update color options
        this.updateColorOptions();

        // Update product information
        this.updateProductInfo();

        // Update pricing philosophy
        setTimeout(() => {
            this.updatePricingPhilosophy();
        }, 100);

        // Update size information
        this.updateSizeInfo();

        // Update price display
        this.updatePriceDisplay();
        
        // Update variant options
        this.updateVariantOptions();
        
        // Update size button text
        this.updateSizeButtonText();
        
        // Update size dropdown
        this.updateSizeDropdown();
        
        // Update stock display
        this.updateStockDisplay();
    }

    updateSizeButtonText() {
        const sizeButton = document.getElementById('sizeSelectButton');
        const sizeText = document.querySelector('.size-selector__text');
        
        if (sizeButton && sizeText) {
            const currentSize = window.productData.variants.size[this.currentVariant.size];
            if (currentSize) {
                sizeText.textContent = currentSize.name;
            }
        }
    }

    updatePriceDisplay() {
        const currentPrice = document.getElementById('currentPrice');
        const originalPrice = document.getElementById('originalPrice');
        const discountPercentage = document.getElementById('discountPercentage');
        const saleBadge = document.getElementById('saleBadge');
        const addToCartBtn = document.getElementById('addToCartBtn');

        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        const currentSizeVariant = window.productData.variants.size[this.currentVariant.size];
        
        if (currentColorVariant && currentSizeVariant) {
            const pricing = currentSizeVariant.pricing[this.currentVariant.color];
            if (pricing) {
                if (currentPrice) currentPrice.textContent = window.Utils.formatPrice(pricing.finalPrice);
                
                // Update Add to Cart button text with current price
                if (addToCartBtn) {
                    const btnText = addToCartBtn.querySelector('.btn__text');
                    if (btnText) {
                        btnText.textContent = `Add to cart`;
                    }
                }
                
                if (pricing.discount > 0) {
                    if (originalPrice) {
                        originalPrice.textContent = window.Utils.formatPrice(pricing.basePrice);
                        originalPrice.style.display = 'inline';
                    }
                    if (discountPercentage) {
                        discountPercentage.textContent = `Save ${pricing.discount}%`;
                        discountPercentage.style.display = 'inline-block';
                    }
                    if (saleBadge) saleBadge.style.display = 'block';
                } else {
                    if (originalPrice) originalPrice.style.display = 'none';
                    if (discountPercentage) discountPercentage.style.display = 'none';
                    if (saleBadge) saleBadge.style.display = 'none';
                }
            }
        }
    }

    updateVariantOptions() {
        // Update color swatches
        const colorOptions = document.querySelectorAll('.color-option');
        colorOptions.forEach(option => {
            const color = option.dataset.color;
            const variant = window.productData.variants.color[color];
            
            if (this.currentVariant.color === color) {
                option.classList.add('color-option--selected');
            } else {
                option.classList.remove('color-option--selected');
            }
            
            // Disable out of stock colors
            if (variant.stock === 0) {
                option.style.opacity = '0.5';
                option.style.cursor = 'not-allowed';
            } else {
                option.style.opacity = '1';
                option.style.cursor = 'pointer';
            }

            // Update color image
            const colorImage = option.querySelector('.color-image');
            if (colorImage && variant.images) {
                const firstImage = variant.images.find(img => img.type === 'image');
                if (firstImage) {
                    colorImage.src = firstImage.thumbnail;
                    colorImage.alt = firstImage.alt;
                }
            }
        });

        // Update size options
        const sizeOptions = document.querySelectorAll('.size-option');
        sizeOptions.forEach(option => {
            const size = option.dataset.size;
            if (this.currentVariant.size === size) {
                option.classList.add('size-option--selected');
            } else {
                option.classList.remove('size-option--selected');
            }
        });

        // Update selected text
        this.updateSelectedText();
    }

    updateSelectedText() {
        const selectedColor = document.getElementById('selectedColor');
        const selectedSize = document.getElementById('selectedSize');

        if (selectedColor) {
            const colorVariant = window.productData.variants.color[this.currentVariant.color];
            selectedColor.textContent = colorVariant.name;
        }

        if (selectedSize) {
            const sizeVariant = window.productData.variants.size[this.currentVariant.size];
            selectedSize.textContent = sizeVariant.name;
        }
    }

    updateThumbnails() {
        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        if (!currentColorVariant || !currentColorVariant.images) return;
        
        const currentImages = currentColorVariant.images;

        // Update desktop thumbnails
        const desktopThumbnails = document.querySelector('.product__media-thumbnails');
        if (desktopThumbnails) {
            desktopThumbnails.innerHTML = currentImages.map((image, index) => {
                const isActive = index === 0;
                if (image.type === 'video') {
                    return `
                        <button class="product__media-thumbnail product__media-thumbnail--video ${isActive ? 'active' : ''}" 
                                data-video="true" data-image-id="${image.id}">
                            <div class="video-thumbnail">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                                </svg>
                                <span>Watch Video</span>
                            </div>
                        </button>
                    `;
                } else {
                    return `
                        <button class="product__media-thumbnail ${isActive ? 'active' : ''}" 
                                data-image="${image.url}" data-image-id="${image.id}">
                            <img src="${image.thumbnail}" alt="${image.alt}">
                        </button>
                    `;
                }
            }).join('');
        }

        // Update mobile thumbnails
        const mobileThumbnails = document.querySelector('.product__media-thumbnails-mobile');
        if (mobileThumbnails) {
            mobileThumbnails.innerHTML = currentImages.slice(0, 5).map((image, index) => {
                const isActive = index === 0;
                if (image.type === 'video') {
                    return `
                        <button class="product__media-thumbnail-mobile product__media-thumbnail-mobile--video ${isActive ? 'active' : ''}" 
                                data-video="true" data-image-id="${image.id}">
                            <div class="video-thumbnail">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                                </svg>
                                <span>Watch Video</span>
                            </div>
                        </button>
                    `;
                } else {
                    return `
                        <button class="product__media-thumbnail-mobile ${isActive ? 'active' : ''}" 
                                data-image="${image.url}" data-image-id="${image.id}">
                            <img src="${image.thumbnail}" alt="${image.alt}">
                        </button>
                    `;
                }
            }).join('');
        }
    }

    updateColorOptions() {
        const colorSelector = document.querySelector('.color-selector');
        if (!colorSelector) return;

        const colors = Object.keys(window.productData.variants.color);
        colorSelector.innerHTML = colors.map(colorKey => {
            const colorVariant = window.productData.variants.color[colorKey];
            const firstImage = colorVariant.images ? colorVariant.images.find(img => img.type === 'image') : null;
            const isSelected = this.currentVariant.color === colorKey;
            
            return `
                <div class="color-option ${isSelected ? 'color-option--selected' : ''}" data-color="${colorKey}">
                    <img src="${firstImage ? firstImage.thumbnail : ''}" 
                         alt="${firstImage ? firstImage.alt : colorVariant.name}" 
                         class="color-image">
                </div>
            `;
        }).join('');
    }

    updateProductInfo() {
        const productInfoImage = document.getElementById('productInfoImage');
        const productInfoTitle = document.getElementById('productInfoTitle');
        const productInfoDescription = document.getElementById('productInfoDescription');

        if (!productInfoImage || !productInfoTitle || !productInfoDescription) return;

        // Get product info for current color variant
        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        const productInfo = currentColorVariant.productInfo || window.productData.productInfo;

        if (productInfo) {
            productInfoImage.src = productInfo.image;
            productInfoImage.alt = productInfo.title;
            productInfoTitle.textContent = productInfo.title;
            productInfoDescription.textContent = productInfo.description;
        }
    }

    updatePricingPhilosophy() {
        const pricingProductImage = document.getElementById('pricingProductImage');
        const pricingPhilosophyTitle = document.getElementById('pricingPhilosophyTitle');
        const pricingPhilosophyDescription = document.getElementById('pricingPhilosophyDescription');
        const sellingPointsList = document.getElementById('sellingPointsList');
        const pricingReadMoreLink = document.getElementById('pricingReadMoreLink');

        if (!pricingProductImage || !pricingPhilosophyTitle || !pricingPhilosophyDescription) {
            setTimeout(() => this.updatePricingPhilosophy(), 500);
            return;
        }

        const pricingData = window.productData.pricingPhilosophy;
        if (!pricingData) {
            return;
        }

        // Update product image
        if (pricingData.productImage) {
            pricingProductImage.src = pricingData.productImage;
            pricingProductImage.alt = 'Product';
        }

        // Update title
        pricingPhilosophyTitle.textContent = pricingData.title;

        // Update description
        pricingPhilosophyDescription.textContent = pricingData.description;

        // Update selling points if element exists
        if (sellingPointsList && pricingData.sellingPoints) {
            sellingPointsList.innerHTML = pricingData.sellingPoints.map(point => 
                `<div class="selling-points__item">${point}</div>`
            ).join('');
        }

        // Update read more link if element exists
        if (pricingReadMoreLink && pricingData.readMoreLink) {
            pricingReadMoreLink.href = pricingData.readMoreLink;
        }
    }

    updateSizeInfo() {
        const currentSizeVariant = window.productData.variants.size[this.currentVariant.size];
        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        if (!currentSizeVariant || !currentColorVariant) return;

        // Update size description in product info section
        const productInfoDescription = document.getElementById('productInfoDescription');
        if (productInfoDescription && currentSizeVariant.description) {
            // Get current product info
            const productInfo = currentColorVariant.productInfo || window.productData.productInfo;
            
            if (productInfo) {
                // Combine original description with size-specific info
                const sizeInfo = `\n\nSize ${currentSizeVariant.name}: ${currentSizeVariant.description}`;
                productInfoDescription.textContent = productInfo.description + sizeInfo;
            }
        }

        // Update size features if available
        const productFeatures = document.querySelector('.product__features-list');
        if (productFeatures && currentSizeVariant.features) {
            // Add size-specific features
            const sizeFeatures = currentSizeVariant.features.map(feature => 
                `<li class="product__feature-item">${feature}</li>`
            ).join('');
            
            // Check if size features already exist
            let sizeFeaturesContainer = document.querySelector('.size-specific-features');
            if (!sizeFeaturesContainer) {
                sizeFeaturesContainer = document.createElement('div');
                sizeFeaturesContainer.className = 'size-specific-features';
                sizeFeaturesContainer.innerHTML = `
                    <h4 class="product__features-subtitle">Size ${currentSizeVariant.name} Features:</h4>
                    <ul class="product__features-list size-features-list">${sizeFeatures}</ul>
                `;
                productFeatures.parentNode.appendChild(sizeFeaturesContainer);
            } else {
                // Update existing size features
                const subtitle = sizeFeaturesContainer.querySelector('.product__features-subtitle');
                const featuresList = sizeFeaturesContainer.querySelector('.size-features-list');
                if (subtitle) subtitle.textContent = `Size ${currentSizeVariant.name} Features:`;
                if (featuresList) featuresList.innerHTML = sizeFeatures;
            }
        }

        // Update stock information for current size
        this.updateSizeStockInfo(currentSizeVariant);
        
        // Update shipping information
        this.updateShippingInfo(currentSizeVariant);
    }

    updateSizeOnly() {
        // Only update size-related information without touching images
        this.updateSizeButtonText();
        this.updatePriceDisplay();
        this.updateStockInfo();
        this.updateQuantityDisplay();
        this.updateAddToCartButton();
        this.updateSizeInfo();
        this.updateStockDisplay();
    }

    updateShippingInfo(sizeVariant) {
        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        if (!sizeVariant || !currentColorVariant) return;

        const shippingInfo = sizeVariant.shipping[this.currentVariant.color];
        const shippingInfoList = document.getElementById('shippingInfoList');
        
        if (shippingInfo && shippingInfoList) {
            // Update shipping info list with color and size specific information
            const baseShippingItems = [
                'Free domestic U.S. ground shipping',
                'Free domestic U.S. returns. <a href="#" class="shipping-info__link">See our full policy</a>',
                'International shipping available',
                'Expedited shipping options available at checkout'
            ];
            
            
        }
    }

    updateSizeStockInfo(sizeVariant) {
        const stockInfo = document.querySelector('.product__stock-info');
        if (stockInfo && sizeVariant) {
            const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
            if (!currentColorVariant) return;

            const stock = sizeVariant.stock[this.currentVariant.color];
            let stockText = '';
            if (stock === 0) {
                stockText = 'Out of stock | Waitlist available';
            } else if (stock <= 3) {
                stockText = `Only ${stock} left in size ${sizeVariant.name}`;
            } else {
                stockText = `${stock} available in size ${sizeVariant.name}`;
            }
            
            // Update or create stock info element
            let stockElement = document.querySelector('.size-stock-info');
            if (!stockElement) {
                stockElement = document.createElement('div');
                stockElement.className = 'size-stock-info product__stock-text';
                stockInfo.appendChild(stockElement);
            }
            stockElement.textContent = stockText;
        }
    }


    navigateImage(direction) {
        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        if (!currentColorVariant || !currentColorVariant.images) return;
        
        const currentImages = currentColorVariant.images;
        const currentImage = document.getElementById('mainImage');
        if (!currentImage) return;

        const currentSrc = currentImage.src;
        const currentIndex = currentImages.findIndex(img => img.url === currentSrc);
        
        let newIndex;
        if (direction === 1) {
            newIndex = (currentIndex + 1) % currentImages.length;
        } else {
            newIndex = currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1;
        }

        const newImage = currentImages[newIndex];
        currentImage.src = newImage.url;
        currentImage.alt = newImage.alt;

        // Update active thumbnails
        document.querySelectorAll('.product__media-thumbnail').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.product__media-thumbnail-mobile').forEach(t => t.classList.remove('active'));
        
        const desktopThumbnail = document.querySelector(`[data-image-id="${newImage.id}"]`);
        const mobileThumbnail = document.querySelector(`.product__media-thumbnail-mobile[data-image-id="${newImage.id}"]`);
        
        if (desktopThumbnail) desktopThumbnail.classList.add('active');
        if (mobileThumbnail) mobileThumbnail.classList.add('active');
    }

    updateSizeDropdown() {
        const sizeOptions = document.getElementById('sizeOptions');
        const sizeSummary = document.getElementById('sizeSummary');
        
        if (!sizeOptions) {
            return;
        }

        // Update stock summary
        this.updateStockSummary();

        const sizes = Object.keys(window.productData.variants.size);
        sizeOptions.innerHTML = sizes.map(sizeKey => {
            const variant = window.productData.variants.size[sizeKey];
            const isSelected = this.currentVariant.size === sizeKey;
            
            // Get stock for current color
            const currentColor = this.currentVariant.color;
            const stock = variant.stock[currentColor] || 0;
            const stockStatus = this.getStockStatus(stock);
            
            let statusText = stockStatus.text;
            if (stock === 0) {
                statusText = 'Out of stock | Waitlist';
            } else if (stock <= 3) {
                statusText = `Only ${stock} left!`;
            } else {
                statusText = `${stock} in stock`;
            }
            
            return `
                <div class="size-option ${isSelected ? 'size-option--selected' : ''} ${stock === 0 ? 'size-option--disabled' : ''}" 
                     data-size="${sizeKey}" ${stock === 0 ? 'data-disabled="true"' : ''}>
                    <div class="size-option__content">
                        <span class="size-option__size">${variant.name}</span>
                        <div class="size-option__status">
                            <span class="size-option__dot size-option__dot--${stockStatus.type}"></span>
                            <span class="size-option__text">${statusText}</span>
                        </div>
                    </div>
                    ${stock > 0 ? `
                        <svg class="size-option__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    ` : ''}
                </div>
            `;
        }).join('');

        // Add click listeners to size options
        sizeOptions.querySelectorAll('.size-option').forEach(option => {
            option.addEventListener('click', (e) => {
                if (!option.dataset.disabled) {
                    const sizeKey = option.dataset.size;
                    this.updateVariant('size', sizeKey);
                    this.closeSizeDropdown();
                }
            });
        });
    }

    updateStockSummary() {
        const sizeSummary = document.getElementById('sizeSummary');
        if (!sizeSummary) return;

        const sizes = Object.values(window.productData.variants.size);
        let inStock = 0, lowStock = 0, outOfStock = 0;
        const currentColor = this.currentVariant.color;

        sizes.forEach(variant => {
            const stock = variant.stock[currentColor] || 0;
            if (stock === 0) {
                outOfStock++;
            } else if (stock <= 3) {
                lowStock++;
            } else {
                inStock++;
            }
        });

        sizeSummary.innerHTML = `
            <div class="size-summary__item">
                <span class="size-summary__dot size-summary__dot--in"></span>
                <span>${inStock} in stock</span>
            </div>
            <div class="size-summary__item">
                <span class="size-summary__dot size-summary__dot--low"></span>
                <span>${lowStock} few left</span>
            </div>
            <div class="size-summary__item">
                <span class="size-summary__dot size-summary__dot--out"></span>
                <span>${outOfStock} out of stock</span>
            </div>
        `;
    }

    getStockStatus(stock) {
        if (stock === 0) {
            return { type: 'out', text: 'Out of stock | Waitlist', count: 0 };
        } else if (stock <= 3) {
            return { type: 'low', text: 'Only few left!', count: stock };
        } else {
            return { type: 'in', text: 'In stock', count: stock };
        }
    }

    toggleSizeDropdown() {
        const dropdown = document.getElementById('sizeDropdown');
        const overlay = document.getElementById('sizeOverlay');
        
        if (dropdown && overlay) {
            const isOpen = dropdown.classList.contains('size-selector__dropdown--open');
            
            if (isOpen) {
                this.closeSizeDropdown();
            } else {
                this.openSizeDropdown();
            }
        }
    }

    openSizeDropdown() {
        const dropdown = document.getElementById('sizeDropdown');
        const overlay = document.getElementById('sizeOverlay');
        
        if (dropdown && overlay) {
            // Update dropdown content before opening
            this.updateSizeDropdown();
            
            overlay.classList.add('size-selector__overlay--open');
            dropdown.classList.add('size-selector__dropdown--open');
            document.body.style.overflow = 'hidden';
        }
    }

    closeSizeDropdown() {
        const dropdown = document.getElementById('sizeDropdown');
        const overlay = document.getElementById('sizeOverlay');
        
        if (dropdown && overlay) {
            overlay.classList.remove('size-selector__overlay--open');
            dropdown.classList.remove('size-selector__dropdown--open');
            document.body.style.overflow = '';
        }
    }

    updateStockInfo() {
        const stockInfo = document.getElementById('stockInfo');
        if (!stockInfo) return;
        
        const maxStock = this.getMaxStock();
        
        if (maxStock === 0) {
            stockInfo.textContent = 'Out of Stock';
            stockInfo.className = 'product-form__stock out-of-stock';
        } else if (maxStock <= 3) {
            stockInfo.textContent = `Only ${maxStock} left in stock!`;
            stockInfo.className = 'product-form__stock low-stock';
        } else {
            stockInfo.textContent = `In Stock (${maxStock} available)`;
            stockInfo.className = 'product-form__stock';
        }
    }

    updateQuantityDisplay() {
        const quantityInput = document.getElementById('quantityInput');
        const quantityMinusBtn = document.getElementById('quantityMinusBtn');
        const quantityPlusBtn = document.getElementById('quantityPlusBtn');
        const quantityInfo = document.getElementById('quantityInfo');
        const maxStock = this.getMaxStock();

        if (quantityInput) {
            quantityInput.value = this.quantity;
            quantityInput.max = maxStock;
        }
        
        if (quantityMinusBtn) quantityMinusBtn.disabled = this.quantity <= 1;
        if (quantityPlusBtn) quantityPlusBtn.disabled = this.quantity >= maxStock || maxStock === 0;
        
        // Update quantity info text
        if (quantityInfo) {
            const quantityText = quantityInfo.querySelector('.quantity-info__text');
            if (quantityText) {
                const itemText = this.quantity === 1 ? 'item' : 'items';
                quantityText.textContent = `${this.quantity} ${itemText} selected`;
            }
        }

        // Update stock display
        this.updateStockDisplay();
    }

    updateStockDisplay() {
        const stockDisplay = document.getElementById('stockDisplay');
        const stockCount = document.getElementById('stockCount');
        const stockText = document.querySelector('.stock-text');
        
        if (!stockDisplay || !stockCount || !stockText) return;

        const maxStock = this.getMaxStock();
        
        // Update stock count
        stockCount.textContent = maxStock;
        
        // Update stock status and styling
        stockDisplay.classList.remove('low-stock', 'out-of-stock');
        
        if (maxStock === 0) {
            stockText.textContent = 'Out of Stock';
            stockDisplay.classList.add('out-of-stock');
        } else if (maxStock <= 3) {
            stockText.textContent = 'Low Stock';
            stockDisplay.classList.add('low-stock');
        } else {
            stockText.textContent = 'In Stock';
        }
    }

    updateAddToCartButton() {
        const addToCartBtn = document.getElementById('addToCartBtn');
        if (!addToCartBtn) return;
        
        const isInStock = this.isVariantInStock();
        const maxStock = this.getMaxStock();
        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        const currentSizeVariant = window.productData.variants.size[this.currentVariant.size];
        
        let currentPrice = 0;
        if (currentColorVariant && currentSizeVariant) {
            const pricing = currentSizeVariant.pricing[this.currentVariant.color];
            if (pricing) {
                currentPrice = pricing.finalPrice;
            }
        }

        if (!isInStock || maxStock === 0) {
            addToCartBtn.disabled = true;
            addToCartBtn.innerHTML = '<span class="btn__text">Out of Stock</span>';
        } else if (this.quantity > maxStock) {
            addToCartBtn.disabled = true;
            addToCartBtn.innerHTML = '<span class="btn__text">Not Enough Stock</span>';
        } else {
            addToCartBtn.disabled = false;
            addToCartBtn.innerHTML = `
                <span class="btn__text">Add to cart</span>
            `;
        }
    }

    addToCart() {
        if (!this.isVariantInStock() || this.quantity <= 0) {
            return;
        }

        const variant = {
            color: this.currentVariant.color,
            size: this.currentVariant.size
        };

        if (window.cart) {
            window.cart.addItem(window.productData, variant, this.quantity);
        }
        
        // Show cart drawer
        if (window.cartDrawer) {
            window.cartDrawer.toggle();
        }
    }
}


// Export for use in main application
window.Product = Product;
