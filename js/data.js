// Product Data Structure
const productData = {
    id: 'captain-boots-001',
    title: 'Captain',
    basePrice: 5406000,
    currentPrice: 5406000,
    onSale: false,
    discountPercentage: 0,
    description: 'Premium leather boots with cap-toe design. Built to last with quality craftsmanship and attention to detail.',
    images: {
        brandy: [
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop'
        ],
        black: [
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop'
        ],
        brown: [
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop'
        ]
    },
    variants: {
        color: {
            brandy: { name: 'Brandy', price: 0, stock: 8 },
            black: { name: 'Black', price: 0, stock: 12 },
            brown: { name: 'Brown', price: 0, stock: 6 }
        },
        width: {
            standard: { name: 'Standard', price: 0, stock: 10 },
            wide: { name: 'Wide (EE)', price: 0, stock: 8 }
        },
        size: {
            'size-6': { name: '6', price: 0, stock: 2 },
            'size-6.5': { name: '6.5', price: 0, stock: 4 },
            'size-7': { name: '7', price: 0, stock: 6 },
            'size-7.5': { name: '7.5', price: 0, stock: 8 },
            'size-8': { name: '8', price: 0, stock: 10 },
            'size-8.5': { name: '8.5', price: 0, stock: 8 },
            'size-9': { name: '9', price: 0, stock: 6 },
            'size-9.5': { name: '9.5', price: 0, stock: 4 },
            'size-10': { name: '10', price: 0, stock: 2 },
            'size-10.5': { name: '10.5', price: 0, stock: 1 }
        }
    },
    features: [
        'Premium leather construction',
        'Cap-toe design',
        'Durable welt construction',
        'Comfortable fit',
        'Classic styling'
    ]
};

// Export for use in other modules
window.productData = productData;
