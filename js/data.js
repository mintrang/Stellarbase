const productData = {
    id: 'captain-boots-001',
    title: 'Captain Boots - Premium Leather Sneakers',
    description: 'Discover the Captain Boots collection - premium unisex leather sneakers that combine timeless style with modern comfort. Perfect for both men and women, crafted from the finest materials and built to last with exceptional attention to detail.',
    features: [
        'Premium full-grain leather upper',
        'Classic cap-toe design for durability',
        'Memory foam cushioned insole',
        'Slip-resistant rubber outsole',
        'Handcrafted with attention to detail',
        'Breathable leather lining',
        'True to size fit guarantee'
    ],
    shipping: {
        free: 'Free shipping on orders over $100',
        express: 'Express delivery available',
        returns: '30-day return policy for unworn shoes',
        warranty: '2-year craftsmanship warranty',
        sizing: 'Free size exchange within 30 days',
        care: 'Complimentary leather care guide included'
    },
    variants: {
        color: {
            black: {
                name: 'Black',
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
                    title: "Captain Boots - Black Leather Sneakers",
                    description: "The classic black Captain Boots feature premium full-grain leather construction with a sophisticated cap-toe design. Perfect for both professional and casual settings, these sneakers offer exceptional comfort and durability. The rich black leather develops a beautiful patina over time, making each pair uniquely yours.",
                    image: "https://images.unsplash.com/photo-1723375386859-1731f1518a9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwc25lYWslMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
                },
                
            },
            pink: {
                name: 'Pink',
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
                    title: "Captain Boots - Pink Leather Sneakers",
                    description: "Make a bold statement with our pink Captain Boots. Crafted from premium pink leather, these sneakers combine vibrant style with exceptional comfort. Perfect for those who love to stand out, the beautiful pink hue adds a touch of personality to any outfit while maintaining the same quality construction as all Captain Boots.",
                    image: "https://plus.unsplash.com/premium_photo-1673716788828-52948c8fd974?w=800&h=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGluayUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"
                }
            },
            yellow: {
                name: 'Yellow',
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
                    title: "Captain Boots - Yellow Leather Sneakers",
                    description: "Brighten up your wardrobe with our vibrant yellow Captain Boots. Made from premium yellow leather, these sneakers are perfect for those who love to make a statement. The eye-catching yellow hue adds energy to any outfit while providing the same exceptional comfort and durability as all Captain Boots.",
                    image: "https://images.unsplash.com/photo-1657196084362-fa1ec1b97da5?w=800&h=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHllbGxvdyUyMHNuZWFrJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D"
                }
            },
            white: {
                name: 'White',
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
                    title: "Captain Boots - White Leather Sneakers",
                    description: "Achieve clean, sophisticated style with our white Captain Boots. Made from premium white leather, these sneakers offer a fresh, modern look that pairs perfectly with any outfit. The pristine white hue creates a timeless appeal while maintaining the same exceptional quality and comfort as all Captain Boots.",
                    image: "https://images.unsplash.com/photo-1641188721482-d6da1d5b87bf?w=800&h=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBzbmVhayUyMHNob2VzfGVufDB8fDB8fHww"
                }
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
                pricing: {
                    black: { basePrice: 225.25, discount: 0, finalPrice: 225.25 },
                    pink: { basePrice: 216.67, discount: 10, finalPrice: 195.00 },
                    yellow: { basePrice: 220.83, discount: 5, finalPrice: 209.79 },
                    white: { basePrice: 233.33, discount: 15, finalPrice: 198.33 }
                },
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
                pricing: {
                    black: { basePrice: 225.25, discount: 0, finalPrice: 225.25 },
                    pink: { basePrice: 216.67, discount: 10, finalPrice: 195.00 },
                    yellow: { basePrice: 220.83, discount: 5, finalPrice: 209.79 },
                    white: { basePrice: 233.33, discount: 15, finalPrice: 198.33 }
                },
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
                pricing: {
                    black: { basePrice: 225.25, discount: 0, finalPrice: 225.25 },
                    pink: { basePrice: 216.67, discount: 10, finalPrice: 195.00 },
                    yellow: { basePrice: 220.83, discount: 5, finalPrice: 209.79 },
                    white: { basePrice: 233.33, discount: 15, finalPrice: 198.33 }
                },
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
                pricing: {
                    black: { basePrice: 225.25, discount: 0, finalPrice: 225.25 },
                    pink: { basePrice: 216.67, discount: 10, finalPrice: 195.00 },
                    yellow: { basePrice: 220.83, discount: 5, finalPrice: 209.79 },
                    white: { basePrice: 233.33, discount: 15, finalPrice: 198.33 }
                },
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
                pricing: {
                    black: { basePrice: 225.25, discount: 0, finalPrice: 225.25 },
                    pink: { basePrice: 216.67, discount: 10, finalPrice: 195.00 },
                    yellow: { basePrice: 220.83, discount: 5, finalPrice: 209.79 },
                    white: { basePrice: 233.33, discount: 15, finalPrice: 198.33 }
                },
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
                pricing: {
                    black: { basePrice: 225.25, discount: 0, finalPrice: 225.25 },
                    pink: { basePrice: 216.67, discount: 10, finalPrice: 195.00 },
                    yellow: { basePrice: 220.83, discount: 5, finalPrice: 209.79 },
                    white: { basePrice: 233.33, discount: 15, finalPrice: 198.33 }
                },
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
                pricing: {
                    black: { basePrice: 225.25, discount: 0, finalPrice: 225.25 },
                    pink: { basePrice: 216.67, discount: 10, finalPrice: 195.00 },
                    yellow: { basePrice: 220.83, discount: 5, finalPrice: 209.79 },
                    white: { basePrice: 233.33, discount: 15, finalPrice: 198.33 }
                },
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
                pricing: {
                    black: { basePrice: 225.25, discount: 0, finalPrice: 225.25 },
                    pink: { basePrice: 216.67, discount: 10, finalPrice: 195.00 },
                    yellow: { basePrice: 220.83, discount: 5, finalPrice: 209.79 },
                    white: { basePrice: 233.33, discount: 15, finalPrice: 198.33 }
                },
            }
        }
    },

    pricingPhilosophy: {
        title: "Premium Quality. Fair Prices.",
        description: "Our Captain Boots are crafted with the same premium materials and attention to detail as luxury sneaker brands that charge 2-3x more. We believe in honest pricing year-round - no gimmicks, no inflated retail markups. Every pair is handcrafted with full-grain leather, memory foam cushioning, and slip-resistant soles, offering exceptional value without compromising on quality.",
        productImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        sellingPoints: [
            "No discount tricks or promo codes",
            "No seasonal sales", 
            "Best price offered year-round",
            "Direct-to-consumer pricing"
        ]
    }
};

window.productData = productData;