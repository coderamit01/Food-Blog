import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const ProductSection = () => {
  const AllProducts = '../../../public/JsonData/ProductData.json';
  const [products,setProducts] = useState([]);
  useEffect(() => {
    fetch(AllProducts)
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  return (
    <div className='row'>
      {
        products.slice(0,8).map(product => (
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"  key={product.id}>
            <SingleProduct product={product} />
          </div>
        )
          
        )
      }
    </div>
  );
};

export default ProductSection;