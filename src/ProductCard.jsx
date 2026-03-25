import { useState, useContext } from 'react';
import { CartContext } from "./CartContext";
import star from './assets/star.svg';

function ProductCard({ product}) {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const inCart = cartItems.some((item) => item.id === product.id);
  const btnText = inCart ? 'Remove from Cart' : 'Add to Cart';

  const updateCart = () => {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <article className="card">
      <div className="card-media">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <div className="card-meta">
          <span className="rating"><img src={star} alt="Rating star" />&nbsp;&nbsp;{product.rating.rate}</span>
          <span className="reviews">({product.rating.count} ratings)</span>
        </div>
        <p className="card-desc">{product.description.substring(0, 256)}...</p>
        <div className="card-foot">
          <div className="price">&#x20B9;&nbsp;&nbsp;{product.price}</div>
          <button className="add-btn" onClick={updateCart}>{btnText}</button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard;