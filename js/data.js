// Product Data Structure
const productData = {
    id: 'captain-boots-001',
    title: 'Captain',
    basePrice: 5406000,
    currentPrice: 5406000,
    onSale: false,
    discountPercentage: 0,
    description: 'Premium leather boots with cap-toe design. Built to last with quality craftsmanship and attention to detail.',
    features: [
        'Premium leather construction',
        'Cap-toe design for durability',
        'Comfortable padded insole',
        'Slip-resistant rubber sole',
        'Handcrafted quality'
    ],
    shipping: {
        free: 'Free shipping on orders over $100',
        express: 'Express delivery available',
        returns: '30-day return policy',
        warranty: '2-year manufacturer warranty'
    },
    variants: {
        color: {
            black: {
                name: 'Black',
                price: 0,
                stock: 10,
                images: [
                    {
                        id: 'black-1',
                        url: 'https://plus.unsplash.com/premium_photo-1674770380314-d1639a2d4b77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        thumbnail: 'https://plus.unsplash.com/premium_photo-1674770380314-d1639a2d4b77?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        alt: 'Captain boots front view - Black',
                        type: 'image'
                    },
                    {
                        id: 'black-2',
                        url: 'https://images.unsplash.com/photo-1687511968900-7418e0fdc532?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        thumbnail: 'https://images.unsplash.com/photo-1687511968900-7418e0fdc532?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        alt: 'Captain boots side view - Black',
                        type: 'image'
                    },
                    {
                        id: 'black-3',
                        url: 'https://images.unsplash.com/photo-1676838179247-6e60dba67d5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        thumbnail: 'https://images.unsplash.com/photo-1676838179247-6e60dba67d5c?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        alt: 'Captain boots top view - Black',
                        type: 'image'
                    },
                    {
                        id: 'black-4',
                        url: 'https://images.unsplash.com/photo-1687511845973-b6225ffec7e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        thumbnail: 'https://images.unsplash.com/photo-1687511845973-b6225ffec7e3?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        alt: 'Captain boots sole view - Black',
                        type: 'image'
                    },
                    {
                        id: 'black-5',
                        url: 'https://images.unsplash.com/photo-1542729802-d98e74c2bb0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        thumbnail: 'https://images.unsplash.com/photo-1542729802-d98e74c2bb0d?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        alt: 'Captain boots detail view - Black',
                        type: 'image'
                    },
                    {
                        id: 'black-6',
                        url: 'https://plus.unsplash.com/premium_photo-1695603437800-a679762b893e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        thumbnail: 'https://plus.unsplash.com/premium_photo-1695603437800-a679762b893e?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        alt: 'Captain boots top down view - Black',
                        type: 'image'
                    },
                    {
                        id: 'black-7',
                        url: 'https://images.unsplash.com/photo-1723375386859-1731f1518a9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1723375386859-1731f1518a9c?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        alt: 'Captain boots close up - Black',
                        type: 'image'
                    },
                    {
                        id: 'product-video',
                        url: './assets/videos/sample_video.mp4?v=' + Date.now(),
                        thumbnail: 'https://plus.unsplash.com/premium_photo-1674770380314-d1639a2d4b77?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        alt: 'Captain boots video',
                        type: 'video'
                    }
                ],
                productInfo: {
                    title: "Classic Black Leather Edition",
                    description: "Crafted from premium black leather, this edition offers timeless elegance with exceptional durability. The rich black hue maintains its sophisticated appearance over time, making it perfect for both formal and casual occasions. Features our signature Goodyear welt construction and premium leather lining for all-day comfort.",
                    image: "https://plus.unsplash.com/premium_photo-1674770380314-d1639a2d4b77?w=800&h=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww"
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
            pink: {
                name: 'Pink',
                price: 0,
                stock: 8,
                images: [
                    {
                        id: 'pink-1',
                        url: 'https://plus.unsplash.com/premium_photo-1673716788828-52948c8fd974?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGluayUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        thumbnail: 'https://plus.unsplash.com/premium_photo-1673716788828-52948c8fd974?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGluayUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        alt: 'Captain boots front view - Pink',
                        type: 'image'
                    },
                    {
                        id: 'pink-2',
                        url: 'https://images.unsplash.com/photo-1662749033862-e73c5afb4e7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGluayUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1662749033862-e73c5afb4e7c?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGluayUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        alt: 'Captain boots side view - Pink',
                        type: 'image'
                    },
                    {
                        id: 'pink-3',
                        url: 'https://images.unsplash.com/photo-1676149039309-d599769d7ab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBpbmslMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        thumbnail: 'https://images.unsplash.com/photo-1676149039309-d599769d7ab4?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBpbmslMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        alt: 'Captain boots top view - Pink',
                        type: 'image'
                    },
                    {
                        id: 'pink-4',
                        url: 'https://images.unsplash.com/photo-1582738412120-7f6baeff4da9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxwaW5rJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1582738412120-7f6baeff4da9?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxwaW5rJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        alt: 'Captain boots sole view - Pink',
                        type: 'image'
                    },
                    {
                        id: 'pink-5',
                        url: 'https://images.unsplash.com/photo-1642756465008-301dc6f42b58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxwaW5rJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1642756465008-301dc6f42b58?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxwaW5rJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        alt: 'Captain boots detail view - Pink',
                        type: 'image'
                    },
                    {
                        id: 'pink-6',
                        url: 'https://images.unsplash.com/photo-1592129706885-dc9986b30464?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUzfHxwaW5rJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1592129706885-dc9986b30464?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUzfHxwaW5rJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        alt: 'Captain boots top down view - Pink',
                        type: 'image'
                    },
                    {
                        id: 'pink-7',
                        url: 'https://plus.unsplash.com/premium_photo-1673716788828-52948c8fd974?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGluayUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        thumbnail: 'https://plus.unsplash.com/premium_photo-1673716788828-52948c8fd974?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGluayUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        alt: 'Captain boots close up - Pink',
                        type: 'image'
                    },
                    {
                        id: 'product-video',
                        url: './assets/videos/sample_video.mp4?v=' + Date.now(),
                        thumbnail: 'https://plus.unsplash.com/premium_photo-1673716788828-52948c8fd974?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGluayUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        alt: 'Captain boots video',
                        type: 'video'
                    }
                ],
                productInfo: {
                    title: "Classic Pink Leather Edition",
                    description: "Crafted from premium pink leather, this edition offers vibrant femininity with exceptional durability. The beautiful pink hue creates a bold and stylish statement while maintaining its elegant appearance over time. Features our signature Goodyear welt construction and premium leather lining for all-day comfort.",
                    image: "https://plus.unsplash.com/premium_photo-1673716788828-52948c8fd974?w=800&h=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGluayUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"
                },
                pricing: {
                    basePrice: 5200000,
                    discount: 10,
                    finalPrice: 4680000,
                    promotion: "10% off + Free shipping",
                    shippingInfo: "Ships within 1-2 business days"
                },
                features: [
                    'Premium pink leather construction',
                    'Cap-toe design',
                    'Durable welt construction',
                    'Comfortable fit',
                    'Feminine styling',
                    'Eye-catching color'
                ]
            },
            yellow: {
                name: 'Yellow',
                price: 0,
                stock: 6,
                images: [
                    {
                        id: 'yellow-1',
                        url: 'https://images.unsplash.com/photo-1657196084362-fa1ec1b97da5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1657196084362-fa1ec1b97da5?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        alt: 'Captain boots front view - Yellow',
                        type: 'image'
                    },
                    {
                        id: 'yellow-2',
                        url: 'https://images.unsplash.com/photo-1657196086650-4de9197d4720?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1657196086650-4de9197d4720?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        alt: 'Captain boots side view - Yellow',
                        type: 'image'
                    },
                    {
                        id: 'yellow-3',
                        url: 'https://images.unsplash.com/photo-1657196085060-b7017835c2b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1657196085060-b7017835c2b6?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        alt: 'Captain boots top view - Yellow',
                        type: 'image'
                    },
                    {
                        id: 'yellow-4',
                        url: 'https://images.unsplash.com/photo-1657196084373-8dd49a33a2a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1657196084373-8dd49a33a2a1?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        alt: 'Captain boots sole view - Yellow',
                        type: 'image'
                    },
                    {
                        id: 'yellow-5',
                        url: 'https://images.unsplash.com/photo-1657196084117-87f03087ab92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1657196084117-87f03087ab92?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        alt: 'Captain boots detail view - Yellow',
                        type: 'image'
                    },
                    {
                        id: 'yellow-6',
                        url: 'https://images.unsplash.com/photo-1631644181783-bb439cdb4fe9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1631644181783-bb439cdb4fe9?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        alt: 'Captain boots top down view - Yellow',
                        type: 'image'
                    },
                    {
                        id: 'yellow-7',
                        url: 'https://images.unsplash.com/photo-1657196084362-fa1ec1b97da5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1657196084362-fa1ec1b97da5?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        alt: 'Captain boots close up - Yellow',
                        type: 'image'
                    },
                    {
                        id: 'product-video',
                        url: './assets/videos/sample_video.mp4?v=' + Date.now(),
                        thumbnail: 'https://images.unsplash.com/photo-1657196084362-fa1ec1b97da5?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
                        alt: 'Captain boots video',
                        type: 'video'
                    }
                ],
                productInfo: {
                    title: "Classic Yellow Leather Edition",
                    description: "Crafted from premium yellow leather, this edition offers vibrant style with exceptional durability. The bright yellow hue creates a bold statement while maintaining its elegant appearance over time. Features our signature Goodyear welt construction and premium leather lining for all-day comfort.",
                    image: "https://images.unsplash.com/photo-1657196084362-fa1ec1b97da5?w=800&h=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"
                },
                pricing: {
                    basePrice: 5300000,
                    discount: 5,
                    finalPrice: 5035000,
                    promotion: "5% off + Free shipping",
                    shippingInfo: "Ships within 2-3 business days"
                },
                features: [
                    'Premium yellow leather construction',
                    'Cap-toe design',
                    'Durable welt construction',
                    'Comfortable fit',
                    'Bold styling',
                    'Eye-catching color'
                ]
            },
            white: {
                name: 'White',
                price: 0,
                stock: 3,
                images: [
                    {
                        id: 'white-1',
                        url: 'https://images.unsplash.com/photo-1641188721482-d6da1d5b87bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        thumbnail: 'https://images.unsplash.com/photo-1641188721482-d6da1d5b87bf?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        alt: 'Captain boots front view - White',
                        type: 'image'
                    },
                    {
                        id: 'white-2',
                        url: 'https://images.unsplash.com/photo-1627361673902-c80df14aecdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2hpdGUlMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        thumbnail: 'https://images.unsplash.com/photo-1627361673902-c80df14aecdd?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2hpdGUlMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        alt: 'Captain boots side view - White',
                        type: 'image'
                    },
                    {
                        id: 'white-3',
                        url: 'https://images.unsplash.com/photo-1579632265758-674f6e1513b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdoaXRlJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1579632265758-674f6e1513b0?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdoaXRlJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        alt: 'Captain boots top view - White',
                        type: 'image'
                    },
                    {
                        id: 'white-4',
                        url: 'https://images.unsplash.com/photo-1650071151779-da3ae8e09686?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdoaXRlJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1650071151779-da3ae8e09686?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdoaXRlJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        alt: 'Captain boots sole view - White',
                        type: 'image'
                    },
                    {
                        id: 'white-5',
                        url: 'https://images.unsplash.com/photo-1687840704850-7d85b0387587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdoaXRlJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1687840704850-7d85b0387587?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdoaXRlJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        alt: 'Captain boots detail view - White',
                        type: 'image'
                    },
                    {
                        id: 'white-6',
                        url: 'https://images.unsplash.com/photo-1608380272894-b3617f04b463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdoaXRlJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        thumbnail: 'https://images.unsplash.com/photo-1608380272894-b3617f04b463?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdoaXRlJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
                        alt: 'Captain boots top down view - White',
                        type: 'image'
                    },
                    {
                        id: 'white-7',
                        url: 'https://images.unsplash.com/photo-1641188721482-d6da1d5b87bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        thumbnail: 'https://images.unsplash.com/photo-1641188721482-d6da1d5b87bf?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        alt: 'Captain boots close up - White',
                        type: 'image'
                    },
                    {
                        id: 'product-video',
                        url: './assets/videos/sample_video.mp4?v=' + Date.now(),
                        thumbnail: 'https://images.unsplash.com/photo-1641188721482-d6da1d5b87bf?w=100&h=100&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww',
                        alt: 'Captain boots video',
                        type: 'video'
                    }
                ],
                productInfo: {
                    title: "Classic White Leather Edition",
                    description: "Crafted from premium white leather, this edition offers clean sophistication with exceptional durability. The pristine white hue creates a fresh, modern look that stands out while maintaining its elegant appearance with proper care. Features our signature Goodyear welt construction and premium leather lining for all-day comfort.",
                    image: "https://images.unsplash.com/photo-1641188721482-d6da1d5b87bf?w=800&h=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww"
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
                    pink: 0,
                    yellow: 0,
                    white: 0
                },
                description: "Size 35 - Perfect for smaller feet with narrow width",
                features: ["Narrow last", "Comfortable fit", "Premium leather"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    pink: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    yellow: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    pink: "Ships within 1-2 business days",
                    yellow: "Ships within 2-3 business days",
                    white: "Ships within 2-3 business days"
                }
            },
            'size-36': { 
                name: '36', 
                stock: {
                    black: 2,
                    pink: 1,
                    yellow: 1,
                    white: 0
                },
                description: "Size 36 - Ideal for smaller feet with standard width",
                features: ["Standard last", "Comfortable fit", "Premium leather"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    pink: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    yellow: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    pink: "Ships within 1-2 business days",
                    yellow: "Ships within 2-3 business days",
                    white: "Ships within 2-3 business days"
                }
            },
            'size-37': { 
                name: '37', 
                stock: {
                    black: 3,
                    pink: 2,
                    yellow: 2,
                    white: 1
                },
                description: "Size 37 - Great for medium feet with standard width",
                features: ["Standard last", "Comfortable fit", "Premium leather"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    pink: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    yellow: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    pink: "Ships within 1-2 business days",
                    yellow: "Ships within 2-3 business days",
                    white: "Ships within 2-3 business days"
                }
            },
            'size-38': { 
                name: '38', 
                stock: {
                    black: 8,
                    pink: 6,
                    yellow: 4,
                    white: 2
                },
                description: "Size 38 - Most popular size with perfect proportions",
                features: ["Standard last", "Comfortable fit", "Premium leather", "Best seller"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    pink: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    yellow: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    pink: "Ships within 1-2 business days",
                    yellow: "Ships within 2-3 business days",
                    white: "Ships within 2-3 business days"
                }
            },
            'size-39': { 
                name: '39', 
                stock: {
                    black: 10,
                    pink: 8,
                    yellow: 6,
                    white: 3
                },
                description: "Size 39 - Excellent for larger feet with standard width",
                features: ["Standard last", "Comfortable fit", "Premium leather"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    pink: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    yellow: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    pink: "Ships within 1-2 business days",
                    yellow: "Ships within 2-3 business days",
                    white: "Ships within 2-3 business days"
                }
            },
            'size-40': { 
                name: '40', 
                stock: {
                    black: 6,
                    pink: 4,
                    yellow: 3,
                    white: 1
                },
                description: "Size 40 - Perfect for larger feet with wide width",
                features: ["Wide last", "Comfortable fit", "Premium leather"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    pink: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    yellow: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    pink: "Ships within 1-2 business days",
                    yellow: "Ships within 2-3 business days",
                    white: "Ships within 2-3 business days"
                }
            },
            'size-41': { 
                name: '41', 
                stock: {
                    black: 2,
                    pink: 1,
                    yellow: 1,
                    white: 0
                },
                description: "Size 41 - Great for extra large feet with wide width",
                features: ["Wide last", "Comfortable fit", "Premium leather"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    pink: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    yellow: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    pink: "Ships within 1-2 business days",
                    yellow: "Ships within 2-3 business days",
                    white: "Ships within 2-3 business days"
                }
            },
            'size-42': { 
                name: '42', 
                stock: {
                    black: 1,
                    pink: 0,
                    yellow: 0,
                    white: 0
                },
                description: "Size 42 - Largest size with wide width for maximum comfort",
                features: ["Wide last", "Comfortable fit", "Premium leather", "Limited edition"],
                pricing: {
                    black: { basePrice: 5406000, discount: 0, finalPrice: 5406000 },
                    pink: { basePrice: 5200000, discount: 10, finalPrice: 4680000 },
                    yellow: { basePrice: 5300000, discount: 5, finalPrice: 5035000 },
                    white: { basePrice: 5600000, discount: 15, finalPrice: 4760000 }
                },
                shipping: {
                    black: "Ships within 2-3 business days",
                    pink: "Ships within 1-2 business days",
                    yellow: "Ships within 2-3 business days",
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

// Make data available globally
window.productData = productData;