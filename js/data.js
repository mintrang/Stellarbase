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
            {
                id: 'brandy-1',
                url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop',
                alt: 'Captain boots front view - Brandy',
                type: 'image'
            },
            {
                id: 'brandy-2',
                url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop',
                alt: 'Captain boots side view - Brandy',
                type: 'image'
            },
            {
                id: 'brandy-3',
                url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop',
                alt: 'Captain boots top view - Brandy',
                type: 'image'
            },
            {
                id: 'brandy-4',
                url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop',
                alt: 'Captain boots sole view - Brandy',
                type: 'image'
            },
            {
                id: 'brandy-5',
                url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
                alt: 'Captain boots worn view - Brandy',
                type: 'image'
            },
            {
                id: 'brandy-6',
                url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=100&h=100&fit=crop',
                alt: 'Captain boots top down view - Brandy',
                type: 'image'
            },
            {
                id: 'brandy-7',
                url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop',
                alt: 'Captain boots close up - Brandy',
                type: 'image'
            },
            {
                id: 'brandy-video',
                url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop',
                alt: 'Captain boots video - Brandy',
                type: 'video'
            }
        ],
        black: [
            {
                id: 'black-1',
                url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop',
                alt: 'Captain boots front view - Black',
                type: 'image'
            },
            {
                id: 'black-2',
                url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop',
                alt: 'Captain boots side view - Black',
                type: 'image'
            },
            {
                id: 'black-3',
                url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop',
                alt: 'Captain boots top view - Black',
                type: 'image'
            },
            {
                id: 'black-4',
                url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop',
                alt: 'Captain boots sole view - Black',
                type: 'image'
            },
            {
                id: 'black-5',
                url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
                alt: 'Captain boots worn view - Black',
                type: 'image'
            },
            {
                id: 'black-6',
                url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=100&h=100&fit=crop',
                alt: 'Captain boots top down view - Black',
                type: 'image'
            },
            {
                id: 'black-7',
                url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop',
                alt: 'Captain boots close up - Black',
                type: 'image'
            },
            {
                id: 'black-video',
                url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop',
                alt: 'Captain boots video - Black',
                type: 'video'
            }
        ],
        brown: [
            {
                id: 'brown-1',
                url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop',
                alt: 'Captain boots front view - Brown',
                type: 'image'
            },
            {
                id: 'brown-2',
                url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop',
                alt: 'Captain boots side view - Brown',
                type: 'image'
            },
            {
                id: 'brown-3',
                url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop',
                alt: 'Captain boots top view - Brown',
                type: 'image'
            },
            {
                id: 'brown-4',
                url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop',
                alt: 'Captain boots sole view - Brown',
                type: 'image'
            },
            {
                id: 'brown-5',
                url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
                alt: 'Captain boots worn view - Brown',
                type: 'image'
            },
            {
                id: 'brown-6',
                url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=100&h=100&fit=crop',
                alt: 'Captain boots top down view - Brown',
                type: 'image'
            },
            {
                id: 'brown-7',
                url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
                thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop',
                alt: 'Captain boots close up - Brown',
                type: 'image'
            },
            {
                id: 'brown-video',
                url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop',
                alt: 'Captain boots video - Brown',
                type: 'video'
            }
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

// Suggested Products Data
const suggestedProducts = [
    {
        id: 'leather-belt-001',
        name: "Men's Classic Leather Belt",
        variant: 'Brandy',
        price: 2174000,
        image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=160&h=160&fit=crop',
        sizes: ['30', '32', '34', '36', '38', '40']
    },
    {
        id: 'leather-care-kit-001',
        name: "Cobbler's Choice Essential Leather Kit",
        variant: '',
        price: 1494000,
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=160&h=160&fit=crop',
        sizes: []
    },
    {
        id: 'boot-socks-001',
        name: "Men's Classic Boot Sock",
        variant: '4-Pack',
        price: 1413000,
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=160&h=160&fit=crop',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 'boot-trees-001',
        name: "Men's Cedar Boot Tree",
        variant: '',
        price: 850000,
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=160&h=160&fit=crop',
        sizes: ['S', 'M', 'L']
    }
];

// Export for use in other modules
window.productData = productData;
window.suggestedProducts = suggestedProducts;
