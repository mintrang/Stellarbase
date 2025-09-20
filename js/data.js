// Product Data Structure
const productData = {
    id: 'captain-boots-001',
    title: 'Captain',
    basePrice: 5406000,
    currentPrice: 5406000,
    onSale: false,
    discountPercentage: 0,
    description: 'Premium leather boots with cap-toe design. Built to last with quality craftsmanship and attention to detail.',
    variants: {
        color: {
            black: {
                name: 'Black',
                price: 0,
                stock: 10,
                images: [
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
                        url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
                        thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop',
                        alt: 'Captain boots detail view - Black',
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
                productInfo: {
                    title: "Classic Black Leather Edition",
                    description: "Crafted from premium black leather, this edition offers timeless elegance with exceptional durability. The rich black hue maintains its sophisticated appearance over time, making it perfect for both formal and casual occasions. Features our signature Goodyear welt construction and premium leather lining for all-day comfort.",
                    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop"
                },
                pricing: {
                    basePrice: 5406000,
                    discount: 0,
                    finalPrice: 5406000,
                    promotion: "Free shipping on orders over $100",
                    shippingInfo: "Ships within 2-3 business days"
                },
                features: [
                    'Premium black leather construction',
                    'Cap-toe design',
                    'Durable welt construction',
                    'Comfortable fit',
                    'Classic styling',
                    'Water-resistant finish'
                ]
            },
            brown: {
                name: 'Brown',
                price: 0,
                stock: 8,
                images: [
                    {
                        id: 'brown-1',
                        url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop',
                        thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop',
                        alt: 'Captain boots front view - Brown',
                        type: 'image'
                    },
                    {
                        id: 'brown-2',
                        url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop&sat=-50&hue=30',
                        thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&sat=-50&hue=30',
                        alt: 'Captain boots side view - Brown',
                        type: 'image'
                    },
                    {
                        id: 'brown-3',
                        url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop&sat=-30&hue=20',
                        thumbnail: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop&sat=-30&hue=20',
                        alt: 'Captain boots top view - Brown',
                        type: 'image'
                    },
                    {
                        id: 'brown-4',
                        url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop&sat=-40&hue=25',
                        thumbnail: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop&sat=-40&hue=25',
                        alt: 'Captain boots sole view - Brown',
                        type: 'image'
                    },
                    {
                        id: 'brown-5',
                        url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop&sat=-35&hue=35',
                        thumbnail: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=100&h=100&fit=crop&sat=-35&hue=35',
                        alt: 'Captain boots detail view - Brown',
                        type: 'image'
                    },
                    {
                        id: 'brown-6',
                        url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop&sat=-45&hue=30',
                        thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&sat=-45&hue=30',
                        alt: 'Captain boots top down view - Brown',
                        type: 'image'
                    },
                    {
                        id: 'brown-7',
                        url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop&sat=-25&hue=40',
                        thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop&sat=-25&hue=40',
                        alt: 'Captain boots close up - Brown',
                        type: 'image'
                    },
                    {
                        id: 'brown-video',
                        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop&sat=-30&hue=30',
                        alt: 'Captain boots video - Brown',
                        type: 'video'
                    }
                ],
                productInfo: {
                    title: "Classic Brown Leather Edition",
                    description: "Crafted from premium brown leather, this edition offers timeless elegance with exceptional durability. The rich brown hue develops a beautiful patina over time, telling the story of your adventures. Features our signature Goodyear welt construction and premium leather lining for all-day comfort.",
                    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop&sat=-30&hue=30"
                },
                pricing: {
                    basePrice: 5200000,
                    discount: 10,
                    finalPrice: 4680000,
                    promotion: "10% off + Free shipping",
                    shippingInfo: "Ships within 1-2 business days"
                },
                features: [
                    'Premium brown leather construction',
                    'Cap-toe design',
                    'Durable welt construction',
                    'Comfortable fit',
                    'Classic styling',
                    'Natural patina development'
                ]
            },
            gray: {
                name: 'Gray',
                price: 0,
                stock: 6,
                images: [
                    {
                        id: 'gray-1',
                        url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop&sat=-60&hue=0',
                        thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&sat=-60&hue=0',
                        alt: 'Captain boots front view - Gray',
                        type: 'image'
                    },
                    {
                        id: 'gray-2',
                        url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop&sat=-50&hue=0',
                        thumbnail: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop&sat=-50&hue=0',
                        alt: 'Captain boots side view - Gray',
                        type: 'image'
                    },
                    {
                        id: 'gray-3',
                        url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop&sat=-40&hue=0',
                        thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop&sat=-40&hue=0',
                        alt: 'Captain boots top view - Gray',
                        type: 'image'
                    },
                    {
                        id: 'gray-4',
                        url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop&sat=-45&hue=0',
                        thumbnail: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop&sat=-45&hue=0',
                        alt: 'Captain boots sole view - Gray',
                        type: 'image'
                    },
                    {
                        id: 'gray-5',
                        url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop&sat=-35&hue=0',
                        thumbnail: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=100&h=100&fit=crop&sat=-35&hue=0',
                        alt: 'Captain boots detail view - Gray',
                        type: 'image'
                    },
                    {
                        id: 'gray-6',
                        url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop&sat=-55&hue=0',
                        thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&sat=-55&hue=0',
                        alt: 'Captain boots top down view - Gray',
                        type: 'image'
                    },
                    {
                        id: 'gray-7',
                        url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop&sat=-30&hue=0',
                        thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop&sat=-30&hue=0',
                        alt: 'Captain boots close up - Gray',
                        type: 'image'
                    },
                    {
                        id: 'gray-video',
                        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop&sat=-40&hue=0',
                        alt: 'Captain boots video - Gray',
                        type: 'video'
                    }
                ],
                productInfo: {
                    title: "Classic Gray Leather Edition",
                    description: "Crafted from premium gray leather, this edition offers modern sophistication with exceptional durability. The versatile gray hue complements any outfit and maintains its elegant appearance over time. Features our signature Goodyear welt construction and premium leather lining for all-day comfort.",
                    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop&sat=-40&hue=0"
                },
                pricing: {
                    basePrice: 5300000,
                    discount: 5,
                    finalPrice: 5035000,
                    promotion: "5% off + Free shipping",
                    shippingInfo: "Ships within 2-3 business days"
                },
                features: [
                    'Premium gray leather construction',
                    'Cap-toe design',
                    'Durable welt construction',
                    'Comfortable fit',
                    'Modern styling',
                    'Versatile color matching'
                ]
            },
            navy: {
                name: 'Navy',
                price: 0,
                stock: 4,
                images: [
                    {
                        id: 'navy-1',
                        url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop&sat=-30&hue=240',
                        thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&sat=-30&hue=240',
                        alt: 'Captain boots front view - Navy',
                        type: 'image'
                    },
                    {
                        id: 'navy-2',
                        url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop&sat=-25&hue=240',
                        thumbnail: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop&sat=-25&hue=240',
                        alt: 'Captain boots side view - Navy',
                        type: 'image'
                    },
                    {
                        id: 'navy-3',
                        url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop&sat=-20&hue=240',
                        thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop&sat=-20&hue=240',
                        alt: 'Captain boots top view - Navy',
                        type: 'image'
                    },
                    {
                        id: 'navy-4',
                        url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop&sat=-35&hue=240',
                        thumbnail: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop&sat=-35&hue=240',
                        alt: 'Captain boots sole view - Navy',
                        type: 'image'
                    },
                    {
                        id: 'navy-5',
                        url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop&sat=-15&hue=240',
                        thumbnail: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=100&h=100&fit=crop&sat=-15&hue=240',
                        alt: 'Captain boots detail view - Navy',
                        type: 'image'
                    },
                    {
                        id: 'navy-6',
                        url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop&sat=-40&hue=240',
                        thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&sat=-40&hue=240',
                        alt: 'Captain boots top down view - Navy',
                        type: 'image'
                    },
                    {
                        id: 'navy-7',
                        url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop&sat=-10&hue=240',
                        thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop&sat=-10&hue=240',
                        alt: 'Captain boots close up - Navy',
                        type: 'image'
                    },
                    {
                        id: 'navy-video',
                        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop&sat=-20&hue=240',
                        alt: 'Captain boots video - Navy',
                        type: 'video'
                    }
                ],
                productInfo: {
                    title: "Classic Navy Leather Edition",
                    description: "Crafted from premium navy leather, this edition offers sophisticated elegance with exceptional durability. The rich navy hue provides a professional yet stylish appearance that pairs perfectly with both formal and casual attire. Features our signature Goodyear welt construction and premium leather lining for all-day comfort.",
                    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop&sat=-20&hue=240"
                },
                pricing: {
                    basePrice: 5500000,
                    discount: 0,
                    finalPrice: 5500000,
                    promotion: "Free shipping on orders over $100",
                    shippingInfo: "Ships within 3-4 business days"
                },
                features: [
                    'Premium navy leather construction',
                    'Cap-toe design',
                    'Durable welt construction',
                    'Comfortable fit',
                    'Professional styling',
                    'Rich color depth'
                ]
            },
            white: {
                name: 'White',
                price: 0,
                stock: 3,
                images: [
                    {
                        id: 'white-1',
                        url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop&sat=0&hue=0&brightness=120',
                        thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&sat=0&hue=0&brightness=120',
                        alt: 'Captain boots front view - White',
                        type: 'image'
                    },
                    {
                        id: 'white-2',
                        url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop&sat=0&hue=0&brightness=115',
                        thumbnail: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop&sat=0&hue=0&brightness=115',
                        alt: 'Captain boots side view - White',
                        type: 'image'
                    },
                    {
                        id: 'white-3',
                        url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop&sat=0&hue=0&brightness=110',
                        thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop&sat=0&hue=0&brightness=110',
                        alt: 'Captain boots top view - White',
                        type: 'image'
                    },
                    {
                        id: 'white-4',
                        url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop&sat=0&hue=0&brightness=125',
                        thumbnail: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop&sat=0&hue=0&brightness=125',
                        alt: 'Captain boots sole view - White',
                        type: 'image'
                    },
                    {
                        id: 'white-5',
                        url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop&sat=0&hue=0&brightness=105',
                        thumbnail: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=100&h=100&fit=crop&sat=0&hue=0&brightness=105',
                        alt: 'Captain boots detail view - White',
                        type: 'image'
                    },
                    {
                        id: 'white-6',
                        url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop&sat=0&hue=0&brightness=130',
                        thumbnail: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop&sat=0&hue=0&brightness=130',
                        alt: 'Captain boots top down view - White',
                        type: 'image'
                    },
                    {
                        id: 'white-7',
                        url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop&sat=0&hue=0&brightness=100',
                        thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop&sat=0&hue=0&brightness=100',
                        alt: 'Captain boots close up - White',
                        type: 'image'
                    },
                    {
                        id: 'white-video',
                        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        thumbnail: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&h=100&fit=crop&sat=0&hue=0&brightness=110',
                        alt: 'Captain boots video - White',
                        type: 'video'
                    }
                ],
                productInfo: {
                    title: "Classic White Leather Edition",
                    description: "Crafted from premium white leather, this edition offers clean sophistication with exceptional durability. The pristine white hue creates a fresh, modern look that stands out while maintaining its elegant appearance with proper care. Features our signature Goodyear welt construction and premium leather lining for all-day comfort.",
                    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop&sat=0&hue=0&brightness=110"
                },
                pricing: {
                    basePrice: 5600000,
                    discount: 15,
                    finalPrice: 4760000,
                    promotion: "15% off + Free shipping",
                    shippingInfo: "Ships within 2-3 business days"
                },
                features: [
                    'Premium white leather construction',
                    'Cap-toe design',
                    'Durable welt construction',
                    'Comfortable fit',
                    'Clean styling',
                    'Easy to maintain finish'
                ]
            }
        },
        size: {
            'size-35': { 
                name: '35', 
                stock: {
                    black: 0,
                    brown: 0,
                    gray: 0,
                    navy: 0,
                    white: 0
                },
                description: "Size 35 - Perfect for smaller feet with narrow width",
                features: ["Narrow last", "Comfortable fit", "Premium leather"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    brown: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    gray: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    navy: { basePrice: 5500000, discount: 0, finalPrice: 5500000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    brown: "Ships within 1-2 business days",
                    gray: "Ships within 2-3 business days",
                    navy: "Ships within 3-4 business days",
                    white: "Ships within 2-3 business days"
                }
            },
            'size-36': { 
                name: '36', 
                stock: {
                    black: 2,
                    brown: 1,
                    gray: 1,
                    navy: 0,
                    white: 0
                },
                description: "Size 36 - Ideal for smaller feet with standard width",
                features: ["Standard last", "Comfortable fit", "Premium leather"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    brown: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    gray: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    navy: { basePrice: 5500000, discount: 0, finalPrice: 5500000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    brown: "Ships within 1-2 business days",
                    gray: "Ships within 2-3 business days",
                    navy: "Ships within 3-4 business days",
                    white: "Ships within 2-3 business days"
                }
            },
            'size-37': { 
                name: '37', 
                stock: {
                    black: 3,
                    brown: 2,
                    gray: 2,
                    navy: 1,
                    white: 1
                },
                description: "Size 37 - Great for medium feet with standard width",
                features: ["Standard last", "Comfortable fit", "Premium leather"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    brown: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    gray: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    navy: { basePrice: 5500000, discount: 0, finalPrice: 5500000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    brown: "Ships within 1-2 business days",
                    gray: "Ships within 2-3 business days",
                    navy: "Ships within 3-4 business days",
                    white: "Ships within 2-3 business days"
                }
            },
            'size-38': { 
                name: '38', 
                stock: {
                    black: 8,
                    brown: 6,
                    gray: 4,
                    navy: 3,
                    white: 2
                },
                description: "Size 38 - Most popular size with perfect proportions",
                features: ["Standard last", "Comfortable fit", "Premium leather", "Best seller"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    brown: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    gray: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    navy: { basePrice: 5500000, discount: 0, finalPrice: 5500000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    brown: "Ships within 1-2 business days",
                    gray: "Ships within 2-3 business days",
                    navy: "Ships within 3-4 business days",
                    white: "Ships within 2-3 business days"
                }
            },
            'size-39': { 
                name: '39', 
                stock: {
                    black: 10,
                    brown: 8,
                    gray: 6,
                    navy: 4,
                    white: 3
                },
                description: "Size 39 - Excellent for larger feet with standard width",
                features: ["Standard last", "Comfortable fit", "Premium leather"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    brown: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    gray: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    navy: { basePrice: 5500000, discount: 0, finalPrice: 5500000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    brown: "Ships within 1-2 business days",
                    gray: "Ships within 2-3 business days",
                    navy: "Ships within 3-4 business days",
                    white: "Ships within 2-3 business days"
                }
            },
            'size-40': { 
                name: '40', 
                stock: {
                    black: 6,
                    brown: 4,
                    gray: 3,
                    navy: 2,
                    white: 1
                },
                description: "Size 40 - Perfect for larger feet with wide width",
                features: ["Wide last", "Comfortable fit", "Premium leather"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    brown: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    gray: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    navy: { basePrice: 5500000, discount: 0, finalPrice: 5500000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    brown: "Ships within 1-2 business days",
                    gray: "Ships within 2-3 business days",
                    navy: "Ships within 3-4 business days",
                    white: "Ships within 2-3 business days"
                }
            },
            'size-41': { 
                name: '41', 
                stock: {
                    black: 2,
                    brown: 1,
                    gray: 1,
                    navy: 0,
                    white: 0
                },
                description: "Size 41 - Great for extra large feet with wide width",
                features: ["Wide last", "Comfortable fit", "Premium leather"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    brown: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    gray: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    navy: { basePrice: 5500000, discount: 0, finalPrice: 5500000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    brown: "Ships within 1-2 business days",
                    gray: "Ships within 2-3 business days",
                    navy: "Ships within 3-4 business days",
                    white: "Ships within 2-3 business days"
                }
            },
            'size-42': { 
                name: '42', 
                stock: {
                    black: 1,
                    brown: 0,
                    gray: 0,
                    navy: 0,
                    white: 0
                },
                description: "Size 42 - Largest size with wide width for maximum comfort",
                features: ["Wide last", "Comfortable fit", "Premium leather", "Limited edition"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    brown: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    gray: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    navy: { basePrice: 5500000, discount: 0, finalPrice: 5500000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    brown: "Ships within 1-2 business days",
                    gray: "Ships within 2-3 business days",
                    navy: "Ships within 3-4 business days",
                    white: "Ships within 2-3 business days"
                }
            }
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
        title: 'Leather Belt',
        price: 890000,
        image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=300&h=300&fit=crop',
        sizes: ['30', '32', '34', '36', '38', '40']
    },
    {
        id: 'leather-care-kit-001',
        title: 'Leather Care Kit',
        price: 450000,
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop',
        sizes: []
    },
    {
        id: 'boot-socks-001',
        title: 'Boot Socks',
        price: 120000,
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop',
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 'boot-trees-001',
        title: 'Boot Trees',
        price: 350000,
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop',
        sizes: ['S', 'M', 'L']
    }
];

// Make data available globally
window.productData = productData;
window.suggestedProducts = suggestedProducts;