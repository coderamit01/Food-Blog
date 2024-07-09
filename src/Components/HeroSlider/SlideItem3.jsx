import React from 'react';
import { SwiperSlide } from 'swiper/react';
import leftShape from '../../assets/img/hero/left-shape.png';
import chilli from '../../assets/img/hero/chilli.png';
import onionTomato from '../../assets/img/hero/onionTomato.png';
import burgur from '../../assets/img/hero/burger.png';
import burgurText from '../../assets/img/hero/burger-text.png';
import deal from '../../assets/img/hero/bestDeal.png';
import heroBg from '../../assets/img/hero/hero-bg-2.jpg';
import GreenRedBtn from '../GreenRedBtn/GreenRedBtn';
import { FaTruckFast } from 'react-icons/fa6';

const SlideItem3 = () => {
  return (
    <>
      <div className="swiper-slide">
        <div className="hero-2 bg-cover" style={{backgroundImage: `url(${heroBg})`}}>
          <div className="left-shape" data-animation="fadeInUp" data-delay="2.2s">
            <img src={leftShape} alt="shape-img" />
          </div>
          <div className="chili-shape" data-animation="fadeInUp" data-delay="2.4s">
            <img src={chilli} alt="shape-img" />
          </div>
          <div className="vagetable-shape" data-animation="fadeInUp" data-delay="2.8s">
            <img src={onionTomato} alt="shape-img" />
          </div>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="hero-content">
                  <p data-animation="fadeInUp" data-delay="1.3s">crispy, every bite taste</p>
                  <h1 data-animation="fadeInUp" data-delay="1.5s">
                    hot spicy
                    chiken burger
                  </h1>
                  <div data-animation="fadeInUp" data-delay="1.7s" className="price-text">
                    <h3>limited offer  /</h3>
                    <h2>$5</h2>
                  </div>
                  <div className="hero-button">
                    <GreenRedBtn text="Order Now" link="/shop" Icon={ FaTruckFast } />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                <div className="burger-image" data-animation="fadeInUp" data-delay="1.4s">
                  <img src={burgur} alt="chiken-img" />
                  <div className="burger-text" data-animation="fadeInUp" data-delay="1.6s">
                    <img src={burgurText} alt="shape-img" />
                  </div>
                  <div className="hero-text" data-animation="fadeInUp" data-delay="1.8s">
                    <img src={deal} alt="text-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideItem3;