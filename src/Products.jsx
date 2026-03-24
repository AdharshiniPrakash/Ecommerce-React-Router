import { useEffect, useState } from 'react';
import CategorySection from './CategorySection';

function Products({ productsData }) {

    const [cartItems, setCartItems] = useState([]);
    const [showPopUp, setShowPopup] = useState(false);
    const togglePopup = () => setShowPopup(!showPopUp);


    const addCartItem = (product) => {
        setCartItems([...cartItems, product]);
    };

    const removeCartItem = (product) => {
        setCartItems((prev) => prev.filter((item) => item.id !== product.id));
    };

    return (<div> 
        {
            productsData.map((cat, index) => (
                <CategorySection key={index} catKey={cat.name} title={cat.name} products={cat.items} addToCart={addCartItem} removeFromCart={removeCartItem} />
            ))
        }
    </div>);
}

export default Products;
