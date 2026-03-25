import { useState, useEffect } from "react";

function CartList({ product, updateItem, removeFromCart }) {
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(product.id);
      return;
    }
    setQuantity(newQuantity);
    updateItem(product.id, newQuantity);
  };

  const handleRemove = () => removeFromCart(product.id);

  return (
    <div className="cart-item" key={product.id}>

      <div className="item-details">
        <img src={product.image} alt={product.title} className="item-image" />
        <div className="item-info">
          <h4>{product.title}</h4>
          <p>{product.description.substring(0, 100) + "..."}</p>
          <div className="item-remove" onClick={handleRemove}>Remove</div>
        </div>
      </div>

      <div className="item-price">₹{product.price.toLocaleString()}</div>

      <div className="item-quantity-control">
        <button className="quantity-btn" onClick={() => handleQuantityChange(quantity - 1)}>-</button>
        <div className="quantity-box">{quantity}</div>
        <button className="quantity-btn" onClick={() => handleQuantityChange(quantity + 1)}>+</button>
      </div>

      <div className="item-total-price">
        ₹{(product.price * quantity).toLocaleString()}
        <div style={{ fontSize: "12px", color: "#777", fontWeight: "normal" }}>
          ₹{product.price.toLocaleString()}
        </div>
      </div>

    </div>
  );
}

export default CartList;
