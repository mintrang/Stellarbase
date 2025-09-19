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
            'size-35': { name: '35', price: 0, stock: 0 },
            'size-36': { name: '36', price: 0, stock: 2 },
            'size-37': { name: '37', price: 0, stock: 3 },
            'size-38': { name: '38', price: 0, stock: 8 },
            'size-39': { name: '39', price: 0, stock: 10 },
            'size-40': { name: '40', price: 0, stock: 6 },
            'size-41': { name: '41', price: 0, stock: 2 },
            'size-42': { name: '42', price: 0, stock: 1 }
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
