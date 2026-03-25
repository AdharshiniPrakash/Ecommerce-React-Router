Ecommerce React Application
---------------------------

This is a simple Ecommerce web application built with React and Vite. The app allows users to browse products, view categories, add items to the cart, and manage their shopping experience with a modern, responsive UI.

Features
--------
- Product Listing: Browse products fetched from Fake Store API and shown as cards.
- Category Section: Products grouped by category with sorting by rating/price.
- Product Details: card shows image, title, price, description, rating.
- Add / Remove Cart: "Add to Cart" toggles to "Remove from Cart" based on cart state.
- Cart Persistence: cart data managed via React Context and available across routes.
- Quantity Controls: Increment/decrement item quantity in cart; removing when qty reaches 0.
- Per-Item Total: cart item row displays price * quantity.
- Cart Summary: subtotal, 10% discount, final total amount displayed in cart page.
- Responsive UI: Grid and layout adapt for desktop and mobile.
- Routing: Home, Products, Contact, Cart routes via React Router.
- Clean UX: buttons update with cart state and cart icon shows item count.

Folder Structure
----------------
src/
  App.jsx
  CartList.jsx
  CategorySection.jsx
  Header.jsx
  Hero.jsx
  Popup.jsx
  ProductCard.jsx
  assets/
  App.css
  index.css
  main.jsx
public/

Getting Started
---------------

Prerequisites
Node.js (v16 or above recommended)
npm or yarn

Installation
------------

Clone the repository:
git clone <repository-url>
cd Ecommerce-React

Install dependencies:
npm install


Running the Development Server
Start the app in development mode:
npm run dev

The app will be available at http://localhost:5173 by default.

Building for Production
To create an optimized production build:
npm run build

The build output will be in the dist folder.

Previewing the Production Build
You can locally preview the production build with:
npm run preview

Deployment
----------
Upload the contents of the dist folder to your static hosting provider (e.g., Netlify, Vercel, GitHub Pages).
Make sure to configure your host to serve index.html for all routes (for client-side routing).

Technologies Used
-----------------
React

Vite

JavaScript

CSS

License
-------
This project is for educational purposes.