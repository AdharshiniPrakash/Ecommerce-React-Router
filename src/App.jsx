import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import Cart from './Cart';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  
  const [categories, setCategories] = useState([]);
  const [tempProduct, setProductArr] =useState([]);
  
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        
        const grouped = Object.groupBy(data, (product) => product.category);
        const formattedCategories = [];
        const productArr = [];
               
        Object.entries(grouped).map(([name, items]) => {
          productArr.push(items[0])
          formattedCategories.push({name,items})
        });

        setCategories(formattedCategories);
        setProductArr(productArr);

      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    getData();
  }, []);

  return (
    <BrowserRouter>
      <div className="app-root">
        <Header />
        <Hero />
        <main className="container">
          <Routes>
            <Route index element={<Home productsData={tempProduct} />} />
            <Route path={"products"} element={<Products productsData={categories} />} />
            <Route path={"contact"} element={<Contact />} />
            <Route path={"cart"} element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
