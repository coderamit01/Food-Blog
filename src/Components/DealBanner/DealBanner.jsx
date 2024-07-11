import React from 'react';
import bg from '../../assets/img/banner/main-bg.jpg';
import foodImg from '../../assets/img/food/grilled.png';
import GreenRedBtn from '../GreenRedBtn/GreenRedBtn';
import { FaTruckFast } from 'react-icons/fa6';

const DealBanner = () => {
  return (
    <section className="grilled-banner fix section-padding bg-cover" style={{backgroundImage: `url(${bg})`}}>
      <div className="container">
        <div className="grilled-wrapper">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="grilled-content">
                <h4 className="wow fadeInUp">
                  save 20%
                </h4>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  tODAY'S <span>ASTACKIN</span> DAY
                </h2>
                <h3 className="wow fadeInUp" data-wow-delay=".5s">
                  <a href="shop.html">
                    grilled <span className="text-1">chiken</span>
                  </a>
                  <span className="text-2">$59,00</span>
                </h3>
                <div className="grilled-button wow fadeInUp" data-wow-delay=".7s">
                  <GreenRedBtn text="Order Now" link="/shop" Icon={ FaTruckFast} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0 wow fadeInUp" data-wow-delay=".4s">
              <div className="grilled-image">
                <img src={foodImg} alt="grilled-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealBanner;