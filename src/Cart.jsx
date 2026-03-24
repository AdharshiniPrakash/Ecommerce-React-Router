import { useContext, useState } from 'react';
import CartList from "./CartList";
import { CartContext } from "./CartContext";

function Cart() {

    const { cartItems } = useContext(CartContext);
    let cartTotal = 0;
    console.log(cartItems);
    cartItems.forEach(element => {
        let itemTotal = 0;
        itemTotal += (element.price * element.quantity);
        cartTotal += itemTotal;
    });

    const [items, setItems] = useState(cartItems);

    const updateItem = (id, quantity) => {
        const updated = [...cartItems];
        updated.forEach((item) => {
            if (item.id === id) {
                item.quantity = quantity;
            }
        });
        setItems(updated);
    };


    return (
        <div className="cart-container">
            <div className='cart-header'>
                <div className='cart-title'>Your Cart</div>
            </div>
            <div className="cart-content">
                {cartItems.length <= 0 && (
                    <div className="empty-cart">
                        <p>Your cart is empty</p>
                    </div>
                )}
                {cartItems.length > 0 && (
                    cartItems.map((product) => {
                        product.quantity = 1;
                        return (
                            <CartList product={product} key={product.id} updateItem={updateItem}></CartList>
                        );
                    })
                )}
                {cartItems.length > 0 && (
                    <div className="cart-total">
                        <div>Total</div>
                        <div>₹{cartTotal.toFixed(2)}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
