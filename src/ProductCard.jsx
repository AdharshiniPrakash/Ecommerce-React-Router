import { useState } from 'react';
import { CartContext } from "./CartContext";
import star from './assets/star.svg';

function ProductCard({ product, addToCart, removeFromCart }) {
  const [btnText, setBtnText] = useState('Add to Cart');  

  const { addToCart } = useContext(CartContext);

  const updateCart = () => {
    if (btnText === 'Remove from Cart') {
      removeFromCart(product);
      setBtnText('Add to Cart');
    }
    else {
      addToCart(product);
      setBtnText('Remove from Cart');
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