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
        console.log('Initializing product...');
        this.loadProductData();
        this.setupEventListeners();
        this.updateDisplay();
        this.updateStockInfo();
        this.updateQuantityDisplay();
        this.updateAddToCartButton();
    }

    loadProductData() {
        const productTitle = document.getElementById('productTitle');
        if (productTitle && window.productData) {
            productTitle.textContent = window.productData.title;
        }

        const productDescription = document.getElementById('productDescription');
        if (productDescription && window.productData) {
            productDescription.textContent = window.productData.description;
        }

        const mainImage = document.getElementById('mainImage');
        if (mainImage && window.productData) {
            const firstColorVariant = window.productData.variants.color[this.currentVariant.color];
            if (firstColorVariant && firstColorVariant.images) {
                const firstImage = firstColorVariant.images.find(img => img.type === 'image') || firstColorVariant.images[0];
                if (firstImage) {
                    mainImage.src = firstImage.url;
                    mainImage.alt = firstImage.alt;
                }
            }
        }

        this.updateColorDisplay();

        const selectedSize = document.getElementById('selectedSize');
        if (selectedSize && window.productData) {
            const currentSizeVariant = window.productData.variants.size[this.currentVariant.size];
            if (currentSizeVariant) {
                selectedSize.textContent = currentSizeVariant.name;
            }
        }


        this.loadProductFeatures();
        
        this.loadShippingInfo();
    }

    loadProductFeatures() {
        if (!window.productData || !window.productData.features) return;
        
        const featuresList = document.querySelector('.product-features__list');
        if (featuresList) {
            featuresList.innerHTML = '';
            
            window.productData.features.forEach(feature => {
                const li = document.createElement('li');
                li.className = 'product-features__item';
                li.textContent = feature;
                featuresList.appendChild(li);
            });
        }
    }

    loadShippingInfo() {
        if (!window.productData || !window.productData.shipping) return;
        
        const shippingList = document.getElementById('shippingInfoList');
        if (shippingList) {
            shippingList.innerHTML = '';
            
            Object.values(window.productData.shipping).forEach(info => {
                const li = document.createElement('li');
                li.className = 'shipping-info__item';
                li.textContent = info;
                shippingList.appendChild(li);
            });
        }
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.color-option')) {
                const colorOption = e.target.closest('.color-option');
                const color = colorOption.dataset.color;
                this.updateVariant('color', color);
            }
        });

        document.addEventListener('click', (e) => {
            console.log('Click detected on:', e.target);
            if (e.target.closest('.product__media-thumbnail')) {
                const thumbnail = e.target.closest('.product__media-thumbnail');
                console.log('Thumbnail clicked:', thumbnail);
                console.log('Thumbnail dataset:', thumbnail.dataset);
                
                if (thumbnail.dataset.image) {
                    this.showImageInMain();
                    
                    const mainImage = document.getElementById('mainImage');
                    if (mainImage) {
                        mainImage.src = thumbnail.dataset.image;
                        
                        document.querySelectorAll('.product__media-thumbnail').forEach(t => t.classList.remove('active'));
                        thumbnail.classList.add('active');
                    }
                } else if (thumbnail.dataset.video) {
                    console.log('Video thumbnail clicked, calling showVideoInMain');
                    this.showVideoInMain();
                }
            }
        });

        document.addEventListener('click', (e) => {
            console.log('Mobile click detected on:', e.target);
            if (e.target.closest('.product__media-thumbnail-mobile')) {
                const thumbnail = e.target.closest('.product__media-thumbnail-mobile');
                console.log('Mobile thumbnail clicked:', thumbnail);
                console.log('Mobile thumbnail dataset:', thumbnail.dataset);
                
                if (thumbnail.dataset.image) {
                    this.showImageInMain();
                    
                    const mainImage = document.getElementById('mainImage');
                    if (mainImage) {
                        mainImage.src = thumbnail.dataset.image;
                        
                        document.querySelectorAll('.product__media-thumbnail-mobile').forEach(t => t.classList.remove('active'));
                        thumbnail.classList.add('active');
                    }
                } else if (thumbnail.dataset.video) {
                    console.log('Mobile video thumbnail clicked, calling showVideoInMain');
                    this.showVideoInMain();
                }
            }
        });

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
                
                if (quantity < 1) {
                    quantity = 1;
                    e.target.value = 1;
                }
                
                this.updateQuantity(quantity);
            });
            
            quantityInput.addEventListener('input', (e) => {
                let value = e.target.value;
                
                value = value.replace(/[^0-9]/g, '');
                
                if (value === '' || value === '0') {
                    value = '1';
                }
                
                e.target.value = value;
            });
            
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

        const addToCartBtn = document.getElementById('addToCartBtn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.addToCart();
            });
        }


        if (quantityInput) {
            quantityInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.target.blur();
                }
                
                if (e.key === '-' || e.key === '+' || e.key === 'e' || e.key === 'E') {
                    e.preventDefault();
                }
            });
        }
    }

    updateVariant(type, value) {
        this.currentVariant[type] = value;
        
        if (type === 'color') {
            this.updateDisplay();
        } else if (type === 'size') {
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
        this.showImageInMain();

        const secondaryImage = document.getElementById('secondaryImage');
        if (secondaryImage) {
            const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
            if (currentColorVariant && currentColorVariant.images) {
                const secondImage = currentColorVariant.images.find((img, index) => img.type === 'image' && index > 0) || currentColorVariant.images[0];
                secondaryImage.src = secondImage.url;
                secondaryImage.alt = secondImage.alt;
            }
        }

        this.updateThumbnails();

        this.updateColorOptions();

        this.updateProductInfo();

        setTimeout(() => {
            this.updatePricingPhilosophy();
        }, 100);

        this.updateSizeInfo();

        this.updatePriceDisplay();
        
        this.updateVariantOptions();
        
        this.updateSizeButtonText();
        
        this.updateSizeDropdown();
        
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
        const colorOptions = document.querySelectorAll('.color-option');
        colorOptions.forEach(option => {
            const color = option.dataset.color;
            const variant = window.productData.variants.color[color];
            
            if (this.currentVariant.color === color) {
                option.classList.add('color-option--selected');
            } else {
                option.classList.remove('color-option--selected');
            }
            
            if (variant.stock === 0) {
                option.style.opacity = '0.5';
                option.style.cursor = 'not-allowed';
            } else {
                option.style.opacity = '1';
                option.style.cursor = 'pointer';
            }

            const colorImage = option.querySelector('.color-image');
            if (colorImage && variant.images) {
                const firstImage = variant.images.find(img => img.type === 'image');
                if (firstImage) {
                    colorImage.src = firstImage.thumbnail;
                    colorImage.alt = firstImage.alt;
                }
            }
        });

        const sizeOptions = document.querySelectorAll('.size-option');
        sizeOptions.forEach(option => {
            const size = option.dataset.size;
            if (this.currentVariant.size === size) {
                option.classList.add('size-option--selected');
            } else {
                option.classList.remove('size-option--selected');
            }
        });

        this.updateSelectedText();
    }

    updateColorDisplay() {
        const selectedColorSwatch = document.getElementById('selectedColorSwatch');
        const selectedColorName = document.getElementById('selectedColorName');
        
        if (selectedColorSwatch && selectedColorName && window.productData) {
            const colorVariant = window.productData.variants.color[this.currentVariant.color];
            if (colorVariant) {
                const colorCode = colorVariant.colorCode || this.getColorCode(this.currentVariant.color);
                
                selectedColorSwatch.style.backgroundColor = colorCode;
                selectedColorSwatch.style.borderColor = colorCode;
                
                selectedColorSwatch.classList.remove('white');
                if (this.currentVariant.color === 'white') {
                    selectedColorSwatch.classList.add('white');
                }
                
                selectedColorName.textContent = colorVariant.name;
            }
        }
    }

    getColorCode(colorName) {
        const colorMap = {
            'black': '#000000',
            'pink': '#ff69b4',
            'yellow': '#ffd700',
            'white': '#ffffff'
        };
        return colorMap[colorName] || '#f0f0f0';
    }

    updateSelectedText() {
        this.updateColorDisplay();
        const selectedSize = document.getElementById('selectedSize');

        if (selectedSize) {
            const sizeVariant = window.productData.variants.size[this.currentVariant.size];
            selectedSize.textContent = sizeVariant.name;
        }
    }

    updateThumbnails() {
        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        if (!currentColorVariant || !currentColorVariant.images) return;
        
        const currentImages = currentColorVariant.images;

        const desktopThumbnails = document.querySelector('.product__media-thumbnails');
        if (desktopThumbnails) {
            desktopThumbnails.innerHTML = currentImages.map((image, index) => {
                const isActive = index === 0;
                if (image.type === 'video') {
                    return `
                        <button class="product__media-thumbnail product__media-thumbnail--video ${isActive ? 'active' : ''}" 
                                data-video="true" data-image-id="${image.id}">
                            <img src="${image.thumbnail}" alt="${image.alt}" class="video-thumbnail-image">
                            <div class="video-play-overlay">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                                </svg>
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

        const mobileThumbnails = document.querySelector('.product__media-thumbnails-mobile');
        if (mobileThumbnails) {
            mobileThumbnails.innerHTML = currentImages.map((image, index) => {
                const isActive = index === 0;
                if (image.type === 'video') {
                    return `
                        <button class="product__media-thumbnail-mobile product__media-thumbnail-mobile--video ${isActive ? 'active' : ''}" 
                                data-video="true" data-image-id="${image.id}">
                            <img src="${image.thumbnail}" alt="${image.alt}" class="video-thumbnail-image">
                            <div class="video-play-overlay">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                                </svg>
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

        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        const productInfo = currentColorVariant.productInfo || window.productData.productInfo;

        if (productInfo) {
            if (currentColorVariant && currentColorVariant.images) {
                const firstImage = currentColorVariant.images.find(img => img.type === 'image') || currentColorVariant.images[0];
                if (firstImage) {
                    productInfoImage.src = firstImage.url;
                    productInfoImage.alt = firstImage.alt;
                }
            } else {
                productInfoImage.src = productInfo.image;
                productInfoImage.alt = productInfo.title;
            }
            
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

        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        if (currentColorVariant && currentColorVariant.images) {
            const firstImage = currentColorVariant.images.find(img => img.type === 'image') || currentColorVariant.images[0];
            if (firstImage) {
                pricingProductImage.src = firstImage.url;
                pricingProductImage.alt = firstImage.alt;
            }
        } else if (pricingData.productImage) {
            pricingProductImage.src = pricingData.productImage;
            pricingProductImage.alt = 'Product';
        }

        pricingPhilosophyTitle.textContent = pricingData.title;

        pricingPhilosophyDescription.textContent = pricingData.description;

        if (sellingPointsList && pricingData.sellingPoints) {
            sellingPointsList.innerHTML = pricingData.sellingPoints.map(point => 
                `<div class="selling-points__item">${point}</div>`
            ).join('');
        }

        if (pricingReadMoreLink && pricingData.readMoreLink) {
            pricingReadMoreLink.href = pricingData.readMoreLink;
        }
    }

    updateSizeInfo() {
        const currentSizeVariant = window.productData.variants.size[this.currentVariant.size];
        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        if (!currentSizeVariant || !currentColorVariant) return;

        const productInfoDescription = document.getElementById('productInfoDescription');
        if (productInfoDescription && currentSizeVariant.description) {
            const productInfo = currentColorVariant.productInfo || window.productData.productInfo;
            
            if (productInfo) {
                const sizeInfo = `\n\nSize ${currentSizeVariant.name}: ${currentSizeVariant.description}`;
                productInfoDescription.textContent = productInfo.description + sizeInfo;
            }
        }

        const productFeatures = document.querySelector('.product__features-list');
        if (productFeatures && currentSizeVariant.features) {
            const sizeFeatures = currentSizeVariant.features.map(feature => 
                `<li class="product__feature-item">${feature}</li>`
            ).join('');
            
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
                const subtitle = sizeFeaturesContainer.querySelector('.product__features-subtitle');
                const featuresList = sizeFeaturesContainer.querySelector('.size-features-list');
                if (subtitle) subtitle.textContent = `Size ${currentSizeVariant.name} Features:`;
                if (featuresList) featuresList.innerHTML = sizeFeatures;
            }
        }

        this.updateSizeStockInfo(currentSizeVariant);
        
        this.updateShippingInfo(currentSizeVariant);
    }

    updateSizeOnly() {
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

        this.updateStockSummary();

        const sizes = Object.keys(window.productData.variants.size);
        sizeOptions.innerHTML = sizes.map(sizeKey => {
            const variant = window.productData.variants.size[sizeKey];
            const isSelected = this.currentVariant.size === sizeKey;
            
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
        const maxStock = this.getMaxStock();

        if (quantityInput) {
            quantityInput.value = this.quantity;
            quantityInput.max = maxStock;
        }
        
        if (quantityMinusBtn) quantityMinusBtn.disabled = this.quantity <= 1;
        if (quantityPlusBtn) quantityPlusBtn.disabled = this.quantity >= maxStock || maxStock === 0;
        this.updateStockDisplay();
    }

    updateStockDisplay() {
        const stockDisplay = document.querySelector('.stock-display');
        const stockCount = document.getElementById('stockCount');
        const stockText = document.querySelector('.stock-text');
        
        if (!stockDisplay || !stockCount || !stockText) return;

        const maxStock = this.getMaxStock();
        
        stockCount.textContent = maxStock;
        
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

    showVideoInMain() {
        console.log('showVideoInMain called');
        
        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        console.log('currentColorVariant:', currentColorVariant);
        
        if (!currentColorVariant || !currentColorVariant.images) {
            console.log('No currentColorVariant or images found');
            return;
        }

        const videoData = currentColorVariant.images.find(img => img.id === 'product-video' && img.type === 'video');
        console.log('videoData found:', videoData);
        
        if (!videoData) {
            console.log('No video data found');
            return;
        }

        const mainImageContainer = document.getElementById('mainImageContainer');
        const mainImage = document.getElementById('mainImage');
        
        console.log('mainImageContainer:', mainImageContainer, 'mainImage:', mainImage);
        
        if (!mainImageContainer || !mainImage) {
            console.log('Main image container or image not found');
            return;
        }

        console.log('Trying local video:', videoData.url);
        
        const video = document.createElement('video');
        video.src = videoData.url;
        video.controls = true;
        video.autoplay = true;
        video.muted = true; // Muted for autoplay
        video.loop = true;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'cover';
        video.style.borderRadius = '8px';
        video.style.backgroundColor = '#000';
        
        video.addEventListener('loadstart', () => console.log('Video load started'));
        video.addEventListener('loadeddata', () => console.log('Video data loaded'));
        video.addEventListener('canplay', () => console.log('Video can play'));
        video.addEventListener('error', (e) => console.error('Video error:', e));
        
        mainImage.style.display = 'none';
        mainImageContainer.appendChild(video);
        
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        
        this.currentVideo = video;
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'video-close-btn';
        closeBtn.innerHTML = '✕';
        closeBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.7);
            color: white;
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            cursor: pointer;
            z-index: 10;
            font-size: 16px;
        `;
        
        closeBtn.addEventListener('click', () => {
            this.showImageInMain();
        });
        
        mainImageContainer.appendChild(closeBtn);
    }

    showImageInMain() {
        const mainImageContainer = document.getElementById('mainImageContainer');
        const mainImage = document.getElementById('mainImage');
        
        if (!mainImageContainer || !mainImage) return;

        if (this.currentVideo) {
            this.currentVideo.remove();
            this.currentVideo = null;
        }

        const closeBtn = mainImageContainer.querySelector('.video-close-btn');
        if (closeBtn) {
            closeBtn.remove();
        }

        mainImage.style.display = 'block';

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        if (prevBtn) prevBtn.style.display = 'block';
        if (nextBtn) nextBtn.style.display = 'block';

        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        if (currentColorVariant && currentColorVariant.images) {
            const firstImage = currentColorVariant.images.find(img => img.type === 'image') || currentColorVariant.images[0];
            if (firstImage) {
                mainImage.src = firstImage.url;
                mainImage.alt = firstImage.alt;
            }
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
        
        if (window.cartDrawer) {
            window.cartDrawer.toggle();
        }
    }
}


window.Product = Product;
