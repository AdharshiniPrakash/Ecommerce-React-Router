import { useEffect, useState } from 'react';
import CategorySection from './CategorySection';

function Products({ productsData }) {
    return (
      <div>
        {productsData.map((cat, index) => (
          <CategorySection key={index} catKey={cat.name} title={cat.name} products={cat.items} />
        ))}
      </div>
    );
}

export default Products;
