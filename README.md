# Paradise Nursery 🌿 — Houseplant Shopping Application (e-plantShopping)

[![React](https://img.shields.io/badge/React-18.x-61dafb.svg)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.x-764abc.svg)](https://redux-toolkit.js.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff.svg)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Paradise Nursery is an intuitive e-commerce houseplant shopping web application built with **React**, **Redux Toolkit**, and responsive **CSS3**. The application allows users to explore a botanical catalog, view plant details (thumbnail, name, description, unit price), add plants to a shopping cart, and manage their cart items with real-time price and quantity synchronization.

Developed as the **Final Project: Paradise Nursery Shopping Application** for the **IBM Front-End JavaScript / React Developer Certificate** on Coursera.

---

## 🌟 Key Application Features

### 1. Landing Page (`src/App.jsx`, `src/App.css`)
- **Branding**: Prominently features the heading **"Welcome To Paradise Nursery"** and brand motto *"Where Green Meets Serenity"*.
- **Background Image**: Implements `.background-image` class in `src/App.css` rendering a high-resolution greenhouse landscape with overlay effects.
- **Get Started Action**: An interactive **"Get Started"** button that dynamically transitions users from the landing hero to the plant product catalog.

### 2. Company Background (`src/AboutUs.jsx`, `src/AboutUs.css`)
- Shares the company's founding mission, commitment to sustainable urban gardening, hand-nurtured plant care standards, and expert horticultural support.

### 3. Plant Catalog & Category Grouping (`src/ProductList.jsx`, `src/ProductList.css`)
- **18 Unique Plants Across 3 Distinct Categories** (6 plants per category):
  - **Air Purifying Plants**: Snake Plant ($15), Spider Plant ($12), Peace Lily ($18), Boston Fern ($20), Rubber Plant ($17), Aloe Vera ($14).
  - **Aromatic Fragrant Plants**: Lavender ($20), Jasmine ($18), Rosemary ($15), Mint ($12), Lemon Balm ($14), Chamomile ($15).
  - **Low Maintenance Plants**: ZZ Plant ($25), Golden Pothos ($10), Jade Plant ($15), Cast Iron Plant ($20), Haworthia Zebra ($16), Aglaonema ($22).
- **Interactive Add to Cart**:
  - Adds selected plant to the Redux cart store.
  - Dynamically disables the button and updates label to **"Added to Cart"**.
  - Dynamically updates the cart item badge count on the navigation bar.
- **Persistent Navbar**:
  - Displays logo, brand name, and navigation links: **Home**, **Plants**, and **Cart**.

### 4. Redux Shopping Cart State Management (`src/CartSlice.jsx`)
- Built using Redux Toolkit `createSlice` managing `state.cart.items`:
  - `addItem(state, action)`: Adds new plant or increments quantity if already present.
  - `removeItem(state, action)`: Removes plant from cart by product name.
  - `updateQuantity(state, action)`: Directly updates quantity for an item.

### 5. Shopping Cart Operations (`src/CartItem.jsx`, `src/CartItem.css`)
- Displays complete breakdown: Plant thumbnail, name, unit price, quantity, and subtotal.
- **Quantity Controls**: `+` and `-` buttons that increment/decrement plant count (removes item when quantity reaches zero).
- **Item Deletion**: Dedicated **Delete** button to purge an item from the cart.
- **Dynamic Totals**:
  - Total plant items counter.
  - Total cart amount calculated dynamically.
- **Navigation & Checkout**:
  - **Continue Shopping** button returning smoothly to the product catalog.
  - **Checkout** button displaying *"Coming Soon"* modal/alert.

---

## 📁 Repository Structure

```text
e-plantShopping/
├── README.md                 # Task 1: Project overview & documentation
├── index.html                # Single-page HTML entry point
├── package.json              # Node.js dependencies & scripts
├── vite.config.js            # Vite build configuration
├── src/
│   ├── AboutUs.jsx           # Task 2: Company details & mission
│   ├── AboutUs.css
│   ├── App.jsx               # Task 4: Landing page & Get Started button
│   ├── App.css               # Task 3: Background image & landing styles
│   ├── CartSlice.jsx         # Task 5: Redux slice (addItem, removeItem, updateQuantity)
│   ├── ProductList.jsx       # Task 6: 18 plants in 3 categories, Add to Cart, Navbar badge
│   ├── ProductList.css
│   ├── CartItem.jsx          # Task 7: Shopping cart management, totals, increment/decrement
│   ├── CartItem.css
│   ├── main.jsx              # React DOM root with Redux Provider
│   ├── index.css
│   └── store.js              # Redux store configuration
└── LICENSE                   # MIT License
```

---

## 🚀 Local Installation & Execution

1. Clone the repository:
   ```bash
   git clone https://github.com/SyukurGit/e-plantShopping.git
   cd e-plantShopping
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
