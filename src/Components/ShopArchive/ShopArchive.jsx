import React, { useEffect, useState } from 'react';
import SingleProduct from '../Product/SingleProduct';

const ShopArchive = () => {
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
          <div className="col-xl-4 col-lg-6 col-md-6 col-6"  key={product.id}>
            <SingleProduct product={product} />
          </div>
        )
          
        )
      }
    </div>
  );
};

export default ShopArchive;