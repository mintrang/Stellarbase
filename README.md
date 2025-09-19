# E-commerce Product Page - Modular Structure

A modern, responsive product page built with vanilla HTML, CSS, and JavaScript using a modular component-based architecture.

## 📁 Project Structure

```
Stellarbase/
├── index.html                 # Main layout file
├── README.md                  # Project documentation
├── components/                # Reusable components
│   ├── header/               # Header component
│   │   ├── header.html
│   │   ├── header.css
│   │   └── header.js
│   ├── navigation/           # Navigation component
│   │   ├── navigation.html
│   │   ├── navigation.css
│   │   └── navigation.js
│   ├── product/             # Product component
│   │   ├── product.html
│   │   ├── product.css
│   │   └── product.js
│   ├── cart/                # Cart drawer component
│   │   ├── cart.html
│   │   ├── cart.css
│   │   └── cart.js
│   └── footer/              # Footer component
│       ├── footer.html
│       ├── footer.css
│       └── footer.js
├── css/                     # Global styles
│   ├── variables.css        # CSS custom properties
│   ├── base.css            # Base styles and reset
│   ├── buttons.css         # Button components
│   └── utilities.css       # Utility classes
└── js/                     # JavaScript modules
    ├── data.js             # Product data
    ├── utils.js            # Utility functions
    ├── cart.js             # Cart management
    ├── product.js          # Product management
    └── app.js              # Main application
```

## 🏗️ Architecture

### Component-Based Design
Each component is self-contained with its own HTML, CSS, and JavaScript files:

- **Header**: Site navigation and cart toggle
- **Navigation**: Breadcrumb and mobile menu
- **Product**: Product display and form
- **Cart**: Shopping cart drawer
- **Footer**: Site footer and links

### Modular CSS
CSS is organized by functionality:

- **variables.css**: CSS custom properties and design tokens
- **base.css**: Base styles, reset, and layout utilities
- **buttons.css**: Button component styles
- **utilities.css**: Utility classes and animations

### Modular JavaScript
JavaScript is split into logical modules:

- **data.js**: Product data and configuration
- **utils.js**: Utility functions and helpers
- **cart.js**: Cart and cart drawer management
- **product.js**: Product functionality and demo controls
- **app.js**: Main application initialization

## 🚀 Features

### Core Functionality
- **Product Display**: High-quality images with thumbnail gallery
- **Variant Selection**: Color and size selection with radio buttons
- **Stock Management**: Real-time inventory display
- **Shopping Cart**: Slide-out cart drawer with item management
- **Responsive Design**: Mobile-first approach

### Shopify-Style Design
- **Typography**: Inter font family
- **Color System**: Professional color palette
- **Spacing**: Consistent spacing scale
- **Components**: BEM methodology for CSS classes
- **Interactions**: Smooth animations and transitions

### Developer Experience
- **Modular Structure**: Easy to maintain and extend
- **Component Isolation**: Each component is independent
- **Clear Separation**: HTML, CSS, and JS are separated
- **Reusable Code**: Components can be reused across pages
- **Easy Debugging**: Clear file organization

## 🛠️ Usage

### Development
1. Open `index.html` in a web browser
2. Components are automatically loaded via JavaScript
3. Each component can be modified independently

### Adding New Components
1. Create a new folder in `components/`
2. Add `component.html`, `component.css`, and `component.js`
3. Load the component in `app.js`
4. Initialize the component in the `initializeComponents()` method

### Modifying Existing Components
1. Edit the respective files in the component folder
2. Changes are automatically reflected in the main page
3. Each component maintains its own scope

## 📱 Responsive Design

- **Mobile**: Optimized for touch interactions
- **Tablet**: 2-column product layout
- **Desktop**: Full Shopify-style experience

## 🎯 Benefits of This Structure

### Maintainability
- **Clear Organization**: Easy to find and modify code
- **Component Isolation**: Changes don't affect other components
- **Reusability**: Components can be used in other projects

### Scalability
- **Easy to Add Features**: New components can be added easily
- **Team Development**: Multiple developers can work on different components
- **Performance**: Only load what you need

### Debugging
- **Clear File Structure**: Easy to locate issues
- **Component Scope**: Problems are isolated to specific components
- **Modular Testing**: Each component can be tested independently

## 🔧 Customization

### Styling
- Modify CSS variables in `css/variables.css`
- Update component styles in respective CSS files
- Add utility classes in `css/utilities.css`

### Functionality
- Update product data in `js/data.js`
- Add utility functions in `js/utils.js`
- Modify component behavior in respective JS files

### Layout
- Update main layout in `index.html`
- Modify component HTML in respective files
- Adjust component loading in `js/app.js`

## 📋 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features used (classes, arrow functions, const/let)
- CSS Grid and Flexbox support required
- Local Storage support required

## 🚀 Getting Started

1. Clone or download the project
2. Open `index.html` in a web browser
3. Start customizing components as needed
4. Add new components following the established pattern

This modular structure makes the codebase easy to maintain, extend, and debug while providing a professional e-commerce experience.