Ecommerce React Application
---------------------------

This is a simple Ecommerce web application built with React and Vite. The app allows users to browse products, view categories, add items to the cart, and manage their shopping experience with a modern, responsive UI.

Features
--------
Product Listing:    Browse a variety of products displayed as cards.

Category Section:   Filter products by categories for easier navigation.

Product Details:    View product information, including images, price, and description.

Add to Cart:    Add products to the shopping cart and view the cart list.

Cart Management:    Increase, decrease, or remove items from the cart.

Popup Notifications:    Get instant feedback for actions like adding or removing items.

Responsive Design:  Works seamlessly on desktop and mobile devices.

Header & Hero Section:  Attractive landing section with navigation.

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