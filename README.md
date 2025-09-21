# Captain Sneakers – Product Page

A modern, responsive **e-commerce product page** built with **HTML, CSS, and vanilla JavaScript**.  
Designed to be **functional, maintainable, and SEO-friendly**.

🌐 **[Live Demo](https://m-shoes.vercel.app/)**

---

## ✅ Features Implemented

- **Product Info**
  - Product image, title, price, quantity selector, add-to-cart button  
  - Sale pricing (original crossed out, discounted shown)  
  - Disabled button for out-of-stock  

- **Variant Selector**
  - Dropdown for size & color variants  
  - Dynamic updates: image, price, stock  

- **Edge Cases / Error Handling**
  - Prevent adding beyond available stock  
  - Prevent negative or zero quantities  
  - Out-of-stock variants handled gracefully  

- **Cart Sidebar (Bonus)**
  - Slide-in mini cart with selected product  
  - Shows variant, quantity, price, total  
  - Update quantity / remove items  

---

## 🛠️ Technical Details

- **Pure HTML, CSS, JS** – no frameworks  
- **Responsive**: mobile-first with breakpoints  
- **SEO-friendly**: product info in initial DOM + meta tags  
- **Clean, modular code**: component-based structure (header, product, cart, footer)  
- **Variants** loaded from JS object  

---

## 🚀 Run Locally

### Option 1 – VS Code Live Server (Recommended)
1. Install the **Live Server** extension in VS Code  
2. Right-click `index.html` → **Open with Live Server**  
3. The project will run at `http://127.0.0.1:5500`  

### Option 2 – HTTP Server
```bash
npm install -g http-server
cd /path/to/Stellarbase
http-server -p 8000
# open http://localhost:8000
```
⚠️ Important

Do not open index.html directly in the browser.
A local server is required – otherwise, features like dynamic imports, CORS, and cart functionality may not work