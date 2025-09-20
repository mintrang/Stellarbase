// Utility Functions
const Utils = {
    // Format price
    formatPrice(price) {
        return `${price.toLocaleString('vi-VN')}₫`;
    },

    // Validate quantity
    validateQuantity(quantity) {
        return Math.max(1, Math.min(quantity, 10));
    },

    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Load component HTML
    async loadComponent(componentPath, containerId) {
        try {
            const response = await fetch(componentPath);
            const html = await response.text();
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = html;
            }
        } catch (error) {
            console.error(`Error loading component ${componentPath}:`, error);
        }
    },

    // Show notification
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'success' ? 'var(--color-success)' : type === 'error' ? 'var(--color-danger)' : 'var(--color-accent)'};
            color: white;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    },

    // Handle image loading errors
    handleImageError(img) {
        img.src = 'https://via.placeholder.com/800x800/f8f9fa/666?text=Image+Not+Available';
    }
};

// Export for use in other modules
window.Utils = Utils;
