import React from 'react';
import { FaCartPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AddToCartBtn = () => {
  return (
    <Link to="/cart" class="theme-btn cart-btn">
      <FaCartPlus />
      Add to Cart
    </Link>
  );
};

export default AddToCartBtn;