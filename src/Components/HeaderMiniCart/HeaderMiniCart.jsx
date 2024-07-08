import React from 'react';
import foodImg from '../../assets/img/shop-food/s2.png'
const HeaderMiniCart = () => {
  return (
      <ul>
        <li>
          <img src={foodImg} alt="image" />
          <div className="cart-product">
            <a href="#0">grilled chiken</a>
            <span>168$</span>
          </div>
        </li>
      </ul>
  );
};

export default HeaderMiniCart;