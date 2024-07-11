import React from 'react';
import SimpleBtn from '../SimpleBtn/SimpleBtn';

const DiscountStyle2 = ({ backgroundImage, offerTitle, offerSubtitle, link, linkText, discountImage, pizzaImage }) => {
  return (
    <div className="single-offer-items bg-cover style-3" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="offer-content">
        <h5>{offerTitle}</h5>
        <h3>{offerSubtitle}</h3>
        <SimpleBtn link={link} text={linkText} />
      </div>
      <div className="offer-shape-3">
        <img src={discountImage} alt="shape-img" />
      </div>
      <div className="main-food-3">
        <img src={pizzaImage} alt="pizza-img" />
      </div>
    </div>
  );
};

export default DiscountStyle2;