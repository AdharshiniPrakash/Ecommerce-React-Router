import cartList from "./cartList";

function Popup(showPopUp, closePopUp, cartItems) {

    console.log(cartItems)

    const className = `popup-overlay ${showPopUp === true ? 'show-popup':''}`;

    return (
        <div className={className}>
            <div className="popup-content">
                <div className='cart-header'>
                    <div className='cart-title'>Your Cart</div>
                    <div className='continue-shopping' onClick={closePopUp} >Continue Shopping</div>
                </div>
                <div className="cart-content">
                    {
                        cartItems.map((product) => {
                            product.quantity = 1;
                            return <cartList product={product}></cartList>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Popup;
