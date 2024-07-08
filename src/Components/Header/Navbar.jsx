import React from 'react';
import Logo from '../../assets/img/logo/logo.svg';
import { Link } from 'react-router-dom';
import RedGreenBtn from '../RedGreenBtn/RedGreenBtn';
import MenuItem from './MenuItem';
import { FaBasketShopping } from 'react-icons/fa6';
import HeaderMiniCart from '../HeaderMiniCart/HeaderMiniCart';
import GreenRedBtn from '../GreenRedBtn/GreenRedBtn';

const Navbar = () => {
  return (
    <div id="header-sticky" className="header-1">
      <div className="container">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="logo">
              <Link to="/" className="header-logo">
                <img src={Logo} alt="logo-img" />
              </Link>
            </div>
            <div className="header-left">
              <div className="mean__menu-wrapper d-none d-lg-block">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="active">
                        <MenuItem text="Home" link="/" />
                      </li>
                      <li className="active">
                        <MenuItem text="Shop" link="/shop" />
                      </li>
                      <li className="active">
                        <MenuItem text="Blog" link="/blog" />
                      </li>
                      <li className="active">
                        <MenuItem text="About Us" link="/about-us" />
                      </li>
                      <li className="active">
                        <MenuItem text="Contact Us" link="/contact-us" />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="header-right d-flex justify-content-end align-items-center">
              <div className="menu-cart">
                <div className="cart-box">
                  <HeaderMiniCart />
                  <HeaderMiniCart />
                  <div className="shopping-items d-flex align-items-center justify-content-between">
                    <span>Shopping : $20.00</span>
                    <span>Total : $168.00</span>
                  </div>
                  <div className="cart-button d-flex justify-content-between mb-4">
                    <GreenRedBtn text="View Cart" link="/cart" />
                    <RedGreenBtn text="Checkout" link="/checkout" />
                  </div>
                </div>
                <a href="shop-cart.html" className="cart-icon">
                  <FaBasketShopping />
                </a>
              </div>
              <div className="header-button">
                <RedGreenBtn text="Contact Us" link="/contact-us" />
              </div>
              <div className="header__hamburger d-xl-block my-auto">
                <div className="sidebar__toggle">
                  <div className="header-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;