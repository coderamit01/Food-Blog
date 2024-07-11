import React from 'react';
import DiscountStyle1 from '../MiniOfferDiscount/DiscountStyle1';
import bg1 from '../../assets/img/banner/offer-bg-2.png';
import pizzaImage from '../../assets/img/food/small-pizza.png';
import discountImage from '../../assets/img/offer/50percent-off-2.png';
import bg2 from '../../assets/img/banner/chiken-bg.png';
import pizzaImage2 from '../../assets/img/food/main-food-3.png';
import discountImage2 from '../../assets/img/offer/50percent-off-4.png'
import DiscountStyle2 from '../MiniOfferDiscount/DiscountStyle2';
import DiscountStyle3 from '../MiniOfferDiscount/DiscountStyle3';
import bg3 from '../../assets/img/banner/french-fry-bg.png';
import pizzaImage3 from '../../assets/img/food/french-fry.png'

const MiniOfferSection = () => {
  return (
    <div className="container">
      <div className="row g-4">
        <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
          <DiscountStyle1
            backgroundImage={bg1}
            offerTitle="Delicious & hot pizza"
            offerSubtitle="Crispy, every bite taste"
            link="/shop"
            linkText="Order Now"
            discountImage={discountImage}
            pizzaImage={pizzaImage}
          />
        </div>
        <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
          <DiscountStyle3
            backgroundImage={bg3}
            timeline="This Weekend only"
            offerTitle="french fry"
            highlight="Delicious"
            offerSubtitle="Todays"
            link="/shop"
            linkText="Order Now"
            discountImage={discountImage2}
            pizzaImage={pizzaImage3}
          />
        </div>
        <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
          <DiscountStyle2
            backgroundImage={bg2}
            offerTitle="crispy, every bite taste"
            offerSubtitle="chiken & french fry"
            link="/shop"
            linkText="Order Now"
            discountImage={discountImage2}
            pizzaImage={pizzaImage2}
          />
        </div>
      </div>
    </div>
  );
};

export default MiniOfferSection;