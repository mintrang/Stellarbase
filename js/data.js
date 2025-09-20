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
            brandy: { 
                name: 'Brandy', 
                price: 0, 
                stock: 8,
                productInfo: {
                    title: "Classic Brandy Leather Edition",
                    description: "Crafted from premium brandy-colored leather, this edition offers timeless elegance with exceptional durability. The rich brown hue develops a beautiful patina over time, telling the story of your adventures. Features our signature Goodyear welt construction and premium leather lining for all-day comfort.",
                    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop"
                }
            },
            black: { 
                name: 'Black', 
                price: 0, 
                stock: 12,
                productInfo: {
                    title: "Rugged & Resilient™ StormKing® Outsole Edition",
                    description: "Built for the men who wear their boots hard. The Rugged & Resilient matte leather upper, sourced exclusively from Tier 1 USA cattle hides, was custom created to look great with years of hard wear and minimal care. This Captain also features our proprietary StormKing® rubber lug outsole for added traction and durability. From the Kevlar® blend laces to the durable steel shank, every material was carefully created so that you can go the extra mile with confidence.",
                    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop"
                }
            },
            brown: { 
                name: 'Brown', 
                price: 0, 
                stock: 6,
                productInfo: {
                    title: "Heritage Brown Full-Grain Edition",
                    description: "Inspired by classic work boots, this brown edition combines traditional craftsmanship with modern comfort. Made from full-grain leather that ages beautifully, featuring our signature cap-toe design and durable rubber sole. Perfect for both work and weekend adventures.",
                    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop"
                }
            }
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
    ],
    productInfo: {
        title: "Rugged & Resilient™ StormKing® Outsole Edition",
        description: "Built for the men who wear their boots hard. The Rugged & Resilient matte leather upper, sourced exclusively from Tier 1 USA cattle hides, was custom created to look great with years of hard wear and minimal care. This Captain also features our proprietary StormKing® rubber lug outsole for added traction and durability. From the Kevlar® blend laces to the durable steel shank, every material was carefully created so that you can go the extra mile with confidence.",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop",
        icon: "boot-icon"
    },
    pricingPhilosophy: {
        title: "Highest Quality. Honest Prices.",
        description: "Our products are handcrafted alongside similar products from other brands that charge customers 2-3x more. We make zero compromises in terms of quality materials, manufacturing, or business ethics, and we price our products honestly year-round. We simply believe that offering customers a great value is the foundation to long-term business success and is the right thing to do.",
        productImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        priceComparison: {
            cost: 1.0,
            ourPrice: 1.5,
            typicalDTC: 2.5,
            traditionalRetail: 4.0
        },
        sellingPoints: [
            "No discount tricks or promo codes",
            "No holiday sales", 
            "Best price offered year-round"
        ],
        readMoreLink: "#"
    }
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
