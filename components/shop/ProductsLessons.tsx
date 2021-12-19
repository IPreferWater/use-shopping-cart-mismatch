import React from 'react';

import products from '../../data/lessons.json';
import ProductPictureStyle from './ProductPictureStyle'

const ProductsLessons = () => {

  return (
      
    <section className="products">
      <div  className="grid grid-cols-1 md:grid-cols-2 md:ml-8 gap-4">
      {products.map((product, i) => (
        <div key={i} className="max-w-xs mx-auto" >
          <ProductPictureStyle product={product} />          
        </div>
      ))}
      </div>
    </section>
  );
};

export default ProductsLessons;
