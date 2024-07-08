import React from 'react';
import Logo from '../../assets/img/logo/logo.svg';
import FoodImg1 from '../../assets/img/header/01.jpg';
import FoodImg2 from '../../assets/img/header/02.jpg';
import FoodImg3 from '../../assets/img/header/03.jpg';
import FoodImg4 from '../../assets/img/header/04.jpg';
import FoodImg5 from '../../assets/img/header/05.jpg';
import FoodImg6 from '../../assets/img/header/06.jpg';
import { Link } from 'react-router-dom';
import GreenRedBtn from '../GreenRedBtn/GreenRedBtn';
import { FaFacebookF, FaTruckFast, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const OffCanvas = () => {
  return (
    <div>
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/">
                    <img src={Logo} alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-lg-block">
                This involves interactions between a business and its customers. It's about meeting customers' needs and resolving their problems. Effective customer service is crucial.
              </p>
              <div className="offcanvas-gallery-area d-none d-lg-block">
                <div className="offcanvas-gallery-items">
                  <Link to="assets/img/header/01.jpg" className="offcanvas-image img-popup">
                    <img src={FoodImg1} alt="gallery-img" />
                  </Link>
                  <Link to="assets/img/header/02.jpg" className="offcanvas-image img-popup">
                    <img src={FoodImg2} alt="gallery-img" />
                  </Link>
                  <Link to="assets/img/header/03.jpg" className="offcanvas-image img-popup">
                    <img src={FoodImg3} alt="gallery-img" />
                  </Link>
                </div>
                <div className="offcanvas-gallery-items">
                  <Link to="assets/img/header/04.jpg" className="offcanvas-image img-popup">
                    <img src={FoodImg4} alt="gallery-img" />
                  </Link>
                  <Link to="assets/img/header/05.jpg" className="offcanvas-image img-popup">
                    <img src={FoodImg5} alt="gallery-img" />
                  </Link>
                  <Link to="assets/img/header/06.jpg" className="offcanvas-image img-popup">
                    <img src={FoodImg6} alt="gallery-img" />
                  </Link>
                </div>
              </div>
              <div className="mobile-menu fix mb-3"></div>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">Main Street, Melbourne, Australia</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+013-003-003-9993"><span className="mailto:info@enofik.com">info@foodking.com</span></a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">+11002345909</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <GreenRedBtn text="Order Now" link="/shop" Icon={FaTruckFast} />
                </div>
                <div className="social-icon d-flex align-items-center">
                  <Link to="#"><FaFacebookF /></Link>
                  <Link to="#"><FaTwitter /></Link>
                  <Link to="#"><FaInstagram /></Link>
                  <Link to="#"><FaLinkedin /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>
    </div>
  );
};

export default OffCanvas;