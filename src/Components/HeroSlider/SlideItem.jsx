import React, { useEffect } from 'react';
import GreenRedBtn from '../GreenRedBtn/GreenRedBtn';
import { FaTruckFast } from 'react-icons/fa6';



const SlideItem = (props) => {
  const {
    title,
    subTitle,
    offerTitle,
    price,
    leftShape,
    chiliImg,
    onionTomato,
    burgerImg,
    burgerTextImg,
    bestDealImg,
    bgImg,
  } = props.slideItem;

 

  return (
    <div className="hero-2 bg-cover" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="left-shape wow animate__fadeInUp" data-wow-delay="2.2s">
        <img src={leftShape} alt="shape-img" />
      </div>
      <div className="chili-shape wow animate__fadeInUp" data-wow-delay="2.4s">
        <img src={chiliImg} alt="shape-img" />
      </div>
      <div className="vagetable-shape wow animate__fadeInUp" data-wow-delay="2.8s">
        <img src={onionTomato} alt="shape-img" />
      </div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="hero-content">
              <p className="wow animate__fadeInUp" data-wow-delay="1.3s">{subTitle}</p>
              <h1 className="wow animate__fadeInUp" data-wow-delay="1.5s">{title}</h1>
              <div className="price-text wow animate__fadeInUp" data-wow-delay="1.7s">
                <h3>{offerTitle}</h3>
                <h2>${price}</h2>
              </div>
              <div className="hero-button">
                <GreenRedBtn text="Order Now" link="/shop" Icon={FaTruckFast} />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
            <div className="burger-image wow animate__fadeInUp" data-wow-delay="1.4s">
              <img src={burgerImg} alt="chiken-img" />
              <div className="burger-text wow animate__fadeInUp" data-wow-delay="1.6s">
                <img src={burgerTextImg} alt="shape-img" />
              </div>
              <div className="hero-text wow animate__fadeInUp" data-wow-delay="1.8s">
                <img src={bestDealImg} alt="text-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
