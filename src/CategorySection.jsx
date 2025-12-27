import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Sort from './assets/sort.svg';

function CategorySection({ catKey, title, products, updateCartCount, addToCart, removeFromCart }) {
  const [selectedValue, setSelectedValue] = useState('default');
  const [sortedProducts, setSortedProducts] = useState(products);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    let sortedArray = [...products];

    if (selectedValue === 'review') {
      sortedArray.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (selectedValue === 'price') {
      sortedArray.sort((a, b) => b.price - a.price);
    }

    setSortedProducts(sortedArray);
  }, [selectedValue]); 

    
  return (
    <section className="category" key={catKey}>
      <div className="category-head container">
        <h2>{title}</h2>
        <div className="category-controls">
          <img src={Sort} alt="Sort icon" className="sortImg" />
          <select value={selectedValue} onChange={handleChange} className="sort">
            <option value="default">Default</option>
            <option value="review">Sort by Review</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>
      </div>

      <div className="container">
        <div className="product-grid">
          {sortedProducts.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} removeFromCart={removeFromCart} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection;