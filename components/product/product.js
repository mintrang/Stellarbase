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
            if (e.target.closest('#sizeDropdown') || e.target.closest('#sizeCloseButton')) {
                return;
            }
            
            if (e.target.closest('.color-option')) {
                const colorOption = e.target.closest('.color-option');
                const color = colorOption.dataset.color;
                this.updateVariant('color', color);
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target.closest('#sizeDropdown') || e.target.closest('#sizeCloseButton')) {
                return;
            }
            
            console.log('Click detected on:', e.target);
            if (e.target.closest('.product__media-thumbnail')) {
                const thumbnail = e.target.closest('.product__media-thumbnail');
                    
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
            if (e.target.closest('#sizeDropdown') || e.target.closest('#sizeCloseButton')) {
                return;
            }
            
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
            sizeCloseButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSizeDropdown();
                return false;
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
        const sizeText = document.querySelector('.size-selector__text');
        if (sizeText) {
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
                const sizeInfo = `\n\n<strong>${currentSizeVariant.description}:</strong>`;
                productInfoDescription.innerHTML = productInfo.description + sizeInfo;
            }
        }

        this.updateSizeStockInfo(currentSizeVariant);
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
                    // Cập nhật state ngay lập tức khi chọn size
                    this.currentVariant.size = sizeKey;
                    this.updateSizeOnly();
                    this.closeSizeDropdown();
                }
            });
        });
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
            this.savedVariant = { ...this.currentVariant };
            this.savedQuantity = this.quantity;
            
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
            
            this.savedVariant = null;
            this.savedQuantity = null;
        }
    }

    updateStockInfo() {
        const stockInfo = document.getElementById('stockInfo');
        if (!stockInfo) return;
        
        const maxStock = this.getMaxStock();
        const stockTexts = {
            0: { text: 'Out of Stock', class: 'out-of-stock' },
            low: { text: `Only ${maxStock} left in stock!`, class: 'low-stock' },
            normal: { text: `In Stock (${maxStock} available)`, class: '' }
        };
        
        const stockType = maxStock === 0 ? '0' : maxStock <= 3 ? 'low' : 'normal';
        stockInfo.textContent = stockTexts[stockType].text;
        stockInfo.className = `product-form__stock ${stockTexts[stockType].class}`;
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
        
        const stockConfig = maxStock === 0 ? 
            { text: 'Out of Stock', class: 'out-of-stock' } :
            maxStock <= 3 ? 
            { text: 'Low Stock', class: 'low-stock' } :
            { text: 'In Stock', class: '' };
            
        stockText.textContent = stockConfig.text;
        if (stockConfig.class) stockDisplay.classList.add(stockConfig.class);
    }

    showVideoInMain() {
        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        if (!currentColorVariant?.images) return;

        const videoData = currentColorVariant.images.find(img => img.id === 'product-video' && img.type === 'video');
        if (!videoData) return;

        const mainImageContainer = document.getElementById('mainImageContainer');
        const mainImage = document.getElementById('mainImage');
        if (!mainImageContainer || !mainImage) return;
        
        const video = document.createElement('video');
        Object.assign(video, {
            src: videoData.url,
            controls: true,
            autoplay: true,
            muted: true,
            loop: true
        });
        
        Object.assign(video.style, {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
            backgroundColor: '#000'
        });
        
        mainImage.style.display = 'none';
        mainImageContainer.appendChild(video);
        
        ['prevBtn', 'nextBtn'].forEach(id => {
            const btn = document.getElementById(id);
            if (btn) btn.style.display = 'none';
        });
        
        this.currentVideo = video;
        this.createVideoCloseBtn(mainImageContainer);
    }

    createVideoCloseBtn(container) {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'video-close-btn';
        closeBtn.innerHTML = '✕';
        Object.assign(closeBtn.style, {
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            zIndex: '10',
            fontSize: '16px'
        });
        closeBtn.addEventListener('click', () => this.showImageInMain());
        container.appendChild(closeBtn);
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
        if (closeBtn) closeBtn.remove();

        mainImage.style.display = 'block';
        ['prevBtn', 'nextBtn'].forEach(id => {
            const btn = document.getElementById(id);
            if (btn) btn.style.display = 'block';
        });

        const currentColorVariant = window.productData.variants.color[this.currentVariant.color];
        if (currentColorVariant?.images) {
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
            
            if (window.cartDrawer) {
                window.cartDrawer.toggle();
            }
        }
    }
}


window.Product = Product;
