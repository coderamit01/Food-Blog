import React from 'react';
import SimpleBtn from '../SimpleBtn/SimpleBtn';
import YellowWhiteBtn from '../YellowWhiteBtn/YellowWhiteBtn';
import { FaTruckFast } from 'react-icons/fa6';

const DiscountStyle3 = ({ backgroundImage, offerTitle,highlight, offerSubtitle,timeline, link, linkText, discountImage, pizzaImage }) => {
  return (
      <div className="single-offer-items bg-cover style-3" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="french-content">
          <h4>
            <span>{offerSubtitle}</span>{highlight}
          </h4>
          <h3>{offerTitle}</h3>
          <h5>{timeline}</h5>
          <YellowWhiteBtn link='/shop' text="Order Now" Icon={ FaTruckFast } />
        </div>
        <div className="french-image">
          <img src={pizzaImage} alt="food-img" />
        </div>
      </div>
  );
};

export default DiscountStyle3;