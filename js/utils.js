const Utils = {

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        
        const colors = { success: 'var(--color-success)', error: 'var(--color-danger)', info: 'var(--color-accent)' };
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            background: colors[type] || colors.info,
            color: 'white',
            borderRadius: 'var(--border-radius)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: '10000',
            animation: 'slideIn 0.3s ease'
        });
        
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
    },

    handleImageError(img) {
        img.src = 'https://via.placeholder.com/800x800/f8f9fa/666?text=Image+Not+Available';
    },

    formatPrice(price) {
        if (typeof price !== 'number' || isNaN(price)) return '$0.00';
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(price);
    },

    async loadTemplate(templatePath) {
        try {
            const response = await fetch(templatePath);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.text();
        } catch (error) {
            console.error(`Error loading template from ${templatePath}:`, error);
            return null;
        }
    }
};

window.Utils = Utils;

