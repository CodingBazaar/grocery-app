# Grocery App - Complete Guide for Beginners

Welcome! This README will walk you through this grocery store application step by step, even if you're new to programming or Angular.

---

## Table of Contents

1. [What is this app?](#what-is-this-app)
2. [How to set it up](#how-to-set-it-up)
3. [Project structure explained](#project-structure-explained)
4. [Core features](#core-features)
5. [How the app works](#how-the-app-works)
6. [Understanding the code](#understanding-the-code)
7. [Making changes](#making-changes)

---

## What is this app?

This is a **grocery store shopping app** built with Angular 21. Think of it like a mini Amazon for groceries.

### What can you do?
- Browse and search for grocery products
- Filter products by category (Fruits, Dairy, Snacks)
- Add items to your shopping cart
- View your cart and see the total price
- See prices in Indian Rupees (Rs.)

### What does it look like?
- **Top bar (Navbar)**: White with sear- **Top bar (Navbar)**: White with sear- **Top bar (Navbar)**: Whiry- **Top bar (Navbar)**: White with sear- **ed items
- **Product grid**: All available products to browse
- **Cart page**: Your shopping list with total price

---

## How to set it up

####################Nod####################Nod#################includes npm - Node Package Manager).
- Download from: https://nodejs.org/
- Choose the LTS (Long Term Sup- Choose the LTS (Long Term Sup- lowing the installer

### Step 2: Clone the project
```bash
# Copy this entire project to your computer
git clone https://github.com/CodingBazaar/grocery-app.git

# Go into the project folder
cd grocery-app
```

### Step 3: Install dependencies
```bash
# This downloads all packages the app needs (takes 1-2 minutes)
npm install
```

### Step 4: Run the app
```bash
# Start the development server
npm start
```

The app will open at: **http://localhost:4200**

---

## Project structure explained

Here's what each folder and file does:

```
grocery-app/
├── src/                          # All your project code goes here
│   ├── app/
│   │   ├── app.ts                # Main app file (entry point)
│   │   ├─│   │   ├─│   │   ├─│ out
│   │ �├│   │ �├│           # Main app styles
│   │   ├── app.routes.ts         # Navigation/routing setup
│   │   │
│   │   ├── components/           # Reusable pieces of the UI
│   │   │   ├── navbar/           # Top menu bar
│   │   │ │   │   │ │   │   │ │   │ � │   │   │ │   │   │ │   │   │ │   �ate
│   │   │   │   └── navbar.css    # Styling
│   │   │   │
│   │   │   ├── product-list/     # Product browsing page
│   │   │   │   ├── product-list.ts
│   │   │   │   ├── product-list.h│   │   │   │   ├── product-lis-list.css
│   │   │   │
│   │   │   └── cart/             # S�pping cart page
│   │   │       ├── cart.ts
│   │   │       ├── c│   │   │      │   │   │       ├── c│   │   │      │   │   │   ces/             # Where data and logic live
│   │   │   �│   │   │   �│   │   │   �│   │   │   �│� │   │   │   �│   │   │   �│   │   │   �│   │   �│ │   └── search.service.ts      # Search functionality
│   │   │
│   │   ├── models/               # Data structure definitions
│   │   │   ├── product.model.ts      # What a product looks like
│   │   │   └── cart-item.model.ts    # What a cart item looks like
│   │   │
│   │   ├─�│   │   ├─�│   │   ├─�│   │   ├─�│   └�│   │   ├─�│   │   ├─�│   �s.1│   │   ├─�│   │   ├─�│   │   ├─�│   │   ├─�│   └�│   │    │   │   ├─��│   │   ├─�│   │   ├─�│   │   ├─�│ �  │   │   ├─�│   │   ├─  │   │   ├─�│   │   ├─�│   │   ├─�│   │   ├─�│   └�│   │   ├─�│   │   ├─�│   �s.1│   │   ├─�│   │at│   │   ├─�│   │   ├─�│   │   ├─�│   │   ├─�│   └�│   │   ├─�│   │   ├─�│   �s.1│   │   ├─�│   │   ├─�│   │   ├─�│   │   ├�##│   │   �ro│   │   ├─�│   │   ├─�│   │   ├─�│   │  icon, name, category, price, and "Add to Cart" button
- Products include Fruits,- Products include Fruits,- Products include Fruits,- Products include Fruits,pr- Products inc
- Search happens instantly as you type

### 3. Category Filtering
- Click category chips (All, Fruits, Dairy, Snacks)
- Only shows products in that category
- Active filter is highlighted in green

### 4. Shopping Cart
- Click "Add to Cart" button on any product
- Cart badge shows how many items you have
- Click "Cart" button to see all items
- See total price in Indian Rupees
- Remove items if you want

### 5. Data Persistence
- Your cart is saved in browser storage
- Closing the app and opening again = your cart is still there!

---

## How the app works

### The Big Picture

```
User clicks a product
        |
        v
Component sends request to CartService
        |
        v
CartService updates cart data
        |
        v
Cart saved to browser storage
        |
        v
Cart badge updates automatically
        |
        v
User sees updated cart
```

### Navigation Flow

```
Home (Product List)
    |
    v
[Search/Filter products]
    |
    v
[Click "Add to Cart"]
    |
    v
[Click "Cart" button in t[Click "Cart" button in t[Click "Cart
                          to                          to                                                  to         -                           to          tSe                   ag                          to              se                          to          

SeaSeaSeaSeaSeaSeaSeaSeaSeaSeaSeaSeaSeaSerSeaSeaSeaSeaSeaSeaSeaSeaSeaSeaSea  SeaSeaSeaSeaSeaSeaSeaSeaSntsSeaSeaSeaSeaSeaSeaSeaSndSeaSeaSeaSeaSeaSeaSeaSeaSeaSeaSeaSeaSe


eaSeaSeaSeaSeaSeaSeaSeaSeaSeaSeaSeaSeaSerSeaSeaSeaSeaSeaSeaSeLEGeabrieaSeaSeaSeaSeaSeaSehaseaSeaSeaSeaSea
navbar/
�����������   ���� LOGIC (what it does)
├── navbar.html    ← The TEMPLATE (what it looks like)
└── navbar.css     ← The STYLING (how it looks)
```

### Example: Na### Examponent

**navbar.ts** - The logic
```typescript
export class NavbarComponent {
  cartCount = 0;  // How many items in cart
  
  // When user types in search box
  onSearch(query: string) {
    // Tell the app to filter products
  }
}
```

**navbar.html** - The structure
```html
<nav class="navbar">
  <h1>GroceryApp</h1>
  <input type="text" placeholder="Search products...">
  <button>Cart (5)</button>
</nav>
```

**navbar.css** - The styling
```css
.navbar {
  background: white;
  padding: 1rem;
  display: flex;
  align-items: center;
}
```

### What is a Service?

A **service** is where your data and logic live. Multiple components can use the same service.

Example:
```
ProductListComponent ──|
                       |
                       +──> CartService ──> saves to storage
                       |
CartComponent ─────────|
```

---

## Key Technologies

### TypeScript
- JavaScript with extra features (types, classes)
- Makes code safer and easier to understand

### Angular
- Framework that makes building web apps easier
- Handles component creation, routing, data management

### RxJS
- Library for handling data streams
- Used for search and cart updates

### CSS
- Pure CSS (no frameworks like Bootstrap)
- Custom-designed styling

---

## Making changes

### Add a new product

1. Open `src/app/services/product.service.ts`
2. Find the products array
3. Add a new product object:

```typescript
{
  id: 16,
  name: "Mangoes",
  price: 150,
  category: "Fruits",
  description: "Juicy seasonal mangoes"
}
```

### Change the app title

1. Op1. Op1. Op1. Op1. Op1. Op1. Op1. Op1. Op1. Op1. Op1. Op1. Op1. Op1. Op1. Op1. Op1. Op1. Op1.  Store</h1>`

### Change the color scheme

1. Open `src/styles.css` or component CSS files
2. Find color codes like `#10b981` (green)
3. Change to any color you want (e.g., `#3b82f6` for blue)

### Add a new page

1. Create a new component: `ng generate component components/new-page`
2. Add it to `app.routes.ts`
3. Link to it in navbar

---

## Learning Reso## Learning Reso## Learning Reso## Learn
- Official docs: https://angular.io/docs
- RxJS: https://rxjs.dev/

### To understand TypeScript:
- TypeScript handbook: https://www.typescriptl- Typeg/docs/

### To improve CSS:
- CSS tricks: https://css-tricks.com/

---

## If something goes wrong

### App won't start
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm innpm innpm innpm innpm innpmrt 4200 already in npm innbasnpm innpm innpor different port automatically
npm start
```

### Changes not showing up
```bash
# Hard refresh your browser
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)
```

---

## File Size & Performance

- Bundle size: ~2.07 MB
- Load time: < 5 seconds
- Search re- Search re- Search re- Search re- Search re- n - Search re- Search re- Search re- Searchps

### For beginners:
1. Get the app running locally
2. Explore the folder struct2. Explore the folder struct2. Explore the folder struct2. Explore e:
5. Create a new component
6. Add a new page
7. Modify the search functionality

### Advanced:
8. Connect to a real backend API
9. Add user authentication
10. 10. 10. 10. 10 shopping checkout

---

## Questions?

If you have questions about the code:
1. Check the comments in the code
2. Review this README
3. Check Angular documentation
4. Ask in the GitHub issues

---

## License

This project is free to use and modify.

---

## What You Learned

By exploring this code, you've seen:
- How modern web apps are structured
- How components communicate
- How to manage app state
- How to handle user input
- How to persist data
- How to style web applications

You're now ready to build your own apps!

---

## Local development commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Check for errors
npm run lint
```

---

Happy coding!
