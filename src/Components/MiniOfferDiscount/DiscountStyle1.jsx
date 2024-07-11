import React from 'react';
import SimpleBtn from '../SimpleBtn/SimpleBtn';

const DiscountStyle1 = ({ backgroundImage, offerTitle, offerSubtitle, link, linkText, discountImage, pizzaImage }) => {
  return (
    <div className="single-offer-items bg-cover style-3" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="offer-content">
        <h5>{offerSubtitle}</h5>
        <h3>
          {offerTitle}
        </h3>
        <SimpleBtn link={link} text={linkText} />
      </div>
      <div className="offer-image-2">
        <img src={discountImage} alt="offer-img" />
      </div>
      <div className="small-pizza">
        <img src={pizzaImage} alt="pizza-img" />
      </div>
    </div>
  );
};

export default DiscountStyle1;
