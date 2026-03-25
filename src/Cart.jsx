import { useContext } from 'react';
import CartList from "./CartList";
import { CartContext } from "./CartContext";

function Cart() {

    const { cartItems, updateItem, removeFromCart } = useContext(CartContext);
    const cartTotal = cartItems.reduce(
      (sum, element) => sum + element.price * element.quantity,
      0
    );



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
                    cartItems.map((product) => (
                        <CartList
                            product={product}
                            key={product.id}
                            updateItem={updateItem}
                            removeFromCart={removeFromCart}
                        />
                    ))
                )}
                {cartItems.length > 0 && (() => {
                    const discount = cartTotal * 0.1;
                    const finalTotal = cartTotal - discount;
                    const saved = discount;
                    return (
                        <>
                            <div className="cart-total subtotal">
                                <div>Subtotal</div>
                                <div>₹{cartTotal.toFixed(2)}</div>
                            </div>
                            <div className="cart-total discount">
                                <div>Discount (10%)</div>
                                <div>-₹{discount.toFixed(2)}</div>
                            </div>
                            <div className="cart-total final">
                                <div>Total Amount</div>
                                <div>₹{finalTotal.toFixed(2)}</div>
                            </div>
                        </>
                    );
                })()}
            </div>
        </div>
    );
};

export default Cart;
