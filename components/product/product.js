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
        // Color swatch selectors
        document.addEventListener('click', (e) => {
            if (e.target.closest('.color-option')) {
                const colorOption = e.target.closest('.color-option');
                const color = colorOption.dataset.color;
                this.updateVariant('color', color);
            }
        });

        // Width selectors
        document.addEventListener('click', (e) => {
            if (e.target.closest('.width-option')) {
                const widthOption = e.target.closest('.width-option');
                const width = widthOption.dataset.width;
                this.updateVariant('width', width);
            }
        });

        // Size selectors
        document.addEventListener('click', (e) => {
            if (e.target.closest('.size-option')) {
                const sizeOption = e.target.closest('.size-option');
                const size = sizeOption.dataset.size;
                this.updateVariant('size', size);
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
        const decreaseBtn = document.getElementById('decreaseBtn');
        const increaseBtn = document.getElementById('increaseBtn');
        const quantityInput = document.getElementById('quantityInput');

        if (decreaseBtn) {
            decreaseBtn.addEventListener('click', () => {
                this.updateQuantity(this.quantity - 1);
            });
        }

        if (increaseBtn) {
            increaseBtn.addEventListener('click', () => {
                this.updateQuantity(this.quantity + 1);
            });
        }

        if (quantityInput) {
            quantityInput.addEventListener('change', (e) => {
                const quantity = parseInt(e.target.value) || 1;
                this.updateQuantity(quantity);
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

        // Thumbnail images
        document.addEventListener('click', (e) => {
            if (e.target.closest('.product__media-thumbnail')) {
                const thumbnail = e.target.closest('.product__media-thumbnail');
                const mainImage = document.getElementById('mainImage');
                if (mainImage && thumbnail.dataset.image) {
                    mainImage.src = thumbnail.dataset.image;
                    
                    // Update active thumbnail
                    document.querySelectorAll('.product__media-thumbnail').forEach(t => t.classList.remove('active'));
                    thumbnail.classList.add('active');
                }
            }
        });

        // Prevent form submission on quantity input
        if (quantityInput) {
            quantityInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.target.blur();
                }
            });
        }
    }

    updateVariant(type, value) {
        this.currentVariant[type] = value;
        this.updateDisplay();
        this.updateStockInfo();
        this.updateAddToCartButton();
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

        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        const currentSizeVariant = window.productData.variants.size[this.currentVariant.size];
        
        if (currentColorVariant && currentSizeVariant) {
            const pricing = currentSizeVariant.pricing[this.currentVariant.color];
            if (pricing) {
                if (currentPrice) currentPrice.textContent = window.Utils.formatPrice(pricing.finalPrice);
                
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
            if (colorImage && window.productData.images[color]) {
                const firstImage = window.productData.images[color].find(img => img.type === 'image');
                if (firstImage) {
                    colorImage.src = firstImage.thumbnail;
                    colorImage.alt = firstImage.alt;
                }
            }
        });

        // Update width options
        const widthOptions = document.querySelectorAll('.width-option');
        widthOptions.forEach(option => {
            const width = option.dataset.width;
            if (this.currentVariant.width === width) {
                option.classList.add('width-option--selected');
            } else {
                option.classList.remove('width-option--selected');
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
        const selectedWidth = document.getElementById('selectedWidth');
        const selectedColor = document.getElementById('selectedColor');
        const selectedSize = document.getElementById('selectedSize');

        if (selectedWidth) {
            const widthVariant = window.productData.variants.width[this.currentVariant.width];
            selectedWidth.textContent = widthVariant.name;
        }

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

        if (!pricingProductImage || !pricingPhilosophyTitle || !pricingPhilosophyDescription || !sellingPointsList || !pricingReadMoreLink) return;

        const pricingData = window.productData.pricingPhilosophy;
        if (!pricingData) return;

        // Update product image
        pricingProductImage.src = pricingData.productImage;
        pricingProductImage.alt = 'Product';

        // Update title
        pricingPhilosophyTitle.textContent = pricingData.title;

        // Update description
        pricingPhilosophyDescription.textContent = pricingData.description;

        // Update selling points
        sellingPointsList.innerHTML = pricingData.sellingPoints.map(point => 
            `<div class="selling-points__item">${point}</div>`
        ).join('');

        // Update read more link
        pricingReadMoreLink.href = pricingData.readMoreLink;
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

    updateShippingInfo(sizeVariant) {
        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        if (!sizeVariant || !currentColorVariant) return;

        const shippingInfo = sizeVariant.shipping[this.currentVariant.color];
        if (shippingInfo) {
            // Update or create shipping info element
            let shippingElement = document.querySelector('.shipping-info');
            if (!shippingElement) {
                shippingElement = document.createElement('div');
                shippingElement.className = 'shipping-info product__stock-text';
                const stockInfo = document.querySelector('.product__stock-info');
                if (stockInfo) {
                    stockInfo.appendChild(shippingElement);
                }
            }
            shippingElement.textContent = shippingInfo;
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
            console.log('Size options container not found');
            return;
        }

        console.log('Updating size dropdown...');
        console.log('Product data:', window.productData);
        console.log('Size variants:', window.productData?.variants?.size);

        // Update stock summary
        this.updateStockSummary();

        const sizes = Object.keys(window.productData.variants.size);
        sizeOptions.innerHTML = sizes.map(sizeKey => {
            const variant = window.productData.variants.size[sizeKey];
            const isSelected = this.currentVariant.size === sizeKey;
            const stockStatus = this.getStockStatus(variant.stock);
            
            let statusText = stockStatus.text;
            if (variant.stock === 0) {
                statusText = 'Out of stock | Waitlist';
            } else if (variant.stock <= 3) {
                statusText = `Only ${variant.stock} left!`;
            } else {
                statusText = `${variant.stock} in stock`;
            }
            
            return `
                <div class="size-option ${isSelected ? 'size-option--selected' : ''} ${variant.stock === 0 ? 'size-option--disabled' : ''}" 
                     data-size="${sizeKey}" ${variant.stock === 0 ? 'data-disabled="true"' : ''}>
                    <div class="size-option__content">
                        <span class="size-option__size">${variant.name}</span>
                        <div class="size-option__status">
                            <span class="size-option__dot size-option__dot--${stockStatus.type}"></span>
                            <span class="size-option__text">${statusText}</span>
                        </div>
                    </div>
                    ${variant.stock > 0 ? `
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

        sizes.forEach(variant => {
            if (variant.stock === 0) {
                outOfStock++;
            } else if (variant.stock <= 3) {
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
        const decreaseBtn = document.getElementById('decreaseBtn');
        const increaseBtn = document.getElementById('increaseBtn');
        const maxStock = this.getMaxStock();

        if (quantityInput) {
            quantityInput.value = this.quantity;
            quantityInput.max = maxStock;
        }
        
        if (decreaseBtn) decreaseBtn.disabled = this.quantity <= 1;
        if (increaseBtn) increaseBtn.disabled = this.quantity >= maxStock || maxStock === 0;
    }

    updateAddToCartButton() {
        const addToCartBtn = document.getElementById('addToCartBtn');
        if (!addToCartBtn) return;
        
        const isInStock = this.isVariantInStock();
        const maxStock = this.getMaxStock();

        if (!isInStock || maxStock === 0) {
            addToCartBtn.disabled = true;
            addToCartBtn.innerHTML = '<span class="btn__text">Out of Stock</span>';
        } else if (this.quantity > maxStock) {
            addToCartBtn.disabled = true;
            addToCartBtn.innerHTML = '<span class="btn__text">Not Enough Stock</span>';
        } else {
            addToCartBtn.disabled = false;
            addToCartBtn.innerHTML = `
                <span class="btn__text">Add to Cart</span>
                <span class="btn__icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 2L6 1C6 0.447715 6.44772 0 7 0H9C9.55228 0 10 0.447715 10 1V2M6 2H4C3.44772 2 3 2.44772 3 3V14C3 15.1046 3.89543 16 5 16H11C12.1046 16 13 15.1046 13 14V3C13 2.44772 12.5523 2 12 2H10M6 2H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
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

// Demo Functions
function toggleSale() {
    window.productData.onSale = !window.productData.onSale;
    if (window.product) {
        window.product.updatePriceDisplay();
    }
}

function setOutOfStock() {
    window.productData.variants.color.black.stock = 0;
    window.productData.variants.color.white.stock = 0;
    window.productData.variants.color.blue.stock = 0;
    if (window.product) {
        window.product.updateVariantOptions();
        window.product.updateStockInfo();
        window.product.updateAddToCartButton();
    }
}

function setLowStock() {
    window.productData.variants.color.black.stock = 2;
    window.productData.variants.color.white.stock = 1;
    window.productData.variants.color.blue.stock = 3;
    if (window.product) {
        window.product.updateVariantOptions();
        window.product.updateStockInfo();
        window.product.updateAddToCartButton();
    }
}

function resetStock() {
    window.productData.variants.color.black.stock = 10;
    window.productData.variants.color.white.stock = 2;
    window.productData.variants.color.blue.stock = 0;
    if (window.product) {
        window.product.updateVariantOptions();
        window.product.updateStockInfo();
        window.product.updateAddToCartButton();
    }
}

// Export for use in main application
window.Product = Product;
