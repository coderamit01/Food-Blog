import React from 'react';
import Logo from '../../assets/img/logo/logo.svg';
import { Link } from 'react-router-dom';
import RedGreenBtn from '../RedGreenBtn/RedGreenBtn';

const Navbar = () => {
  return (
    <div id="header-sticky" className="header-1">
      <div className="container">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="logo">
              <Link href="index.html" className="header-logo">
                <img src={Logo} alt="logo-img" />
              </Link>
            </div>
            <div className="header-left">
              <div className="mean__menu-wrapper d-none d-lg-block">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="active">
                        <a href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="has-dropdown">
                        <a href="shop.html">
                          Shop
                          <i className="fas fa-angle-down"></i>
                        </a>
                        <ul className="submenu">
                          <li><a href="shop.html">Shop Grid</a></li>
                          <li><a href="shop-list.html">Shop List</a></li>
                          <li><a href="shop-left-sidebar.html">Shop Left SideBar</a></li>
                          <li><a href="shop-right-sidebar.html">Shop Right SideBar</a></li>
                          <li><a href="shop-single.html">Shop Single</a></li>
                          <li><a href="shop-single-2.html">Shop Single 2</a></li>
                          <li><a href="shop-cart.html">Shop Cart</a></li>
                          <li><a href="checkout.html">checkout</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="news.html">
                          Blog
                          <i className="fas fa-angle-down"></i>
                        </a>
                        <ul className="submenu">
                          <li><a href="news.html">Blog</a></li>
                          <li><a href="news-details.html">Blog Details</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="news.html">
                          Pages
                          <i className="fas fa-angle-down"></i>
                        </a>
                        <ul className="submenu">
                          <li><a href="about.html">About Us</a></li>
                          <li className="has-dropdown">
                            <a href="team.html">
                              Chef Page
                              <i className="fas fa-angle-down"></i>
                            </a>
                            <ul className="submenu">
                              <li><a href="team.html">Chef</a></li>
                              <li><a href="team-details.html">Chef Details</a></li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a href="food-menu.html">
                              Food Menu
                              <i className="fas fa-angle-down"></i>
                            </a>
                            <ul className="submenu">
                              <li><a href="food-menu.html"> Food Menu 01</a></li>
                              <li><a href="food-menu-2.html"> Food Menu 02</a></li>
                            </ul>
                          </li>
                          <li><a href="gallery.html">Gallery</a></li>
                          <li><a href="testimonial.html">testimonial</a></li>
                          <li><a href="reservation.html">Reservation</a></li>
                          <li><a href="faq.html">Faq's</a></li>
                          <li><a href="404.html">404 Page</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="header-right d-flex justify-content-end align-items-center">
              <div className="menu-cart">
                <div className="cart-box">
                  <ul>
                    <li>
                      <img src="assets/img/shop-food/s2.png" alt="image" />
                      <div className="cart-product">
                        <a href="#0">grilled chiken</a>
                        <span>168$</span>
                      </div>
                    </li>
                  </ul>
                  <ul>
                    <li className="border-none">
                      <img src="assets/img/shop-food/s3.png" alt="image" />
                      <div className="cart-product">
                        <a href="#0">grilled chiken</a>
                        <span>168$</span>
                      </div>
                    </li>
                  </ul>
                  <div className="shopping-items d-flex align-items-center justify-content-between">
                    <span>Shopping : $20.00</span>
                    <span>Total : $168.00</span>
                  </div>
                  <div className="cart-button d-flex justify-content-between mb-4">
                    <a href="shop-cart.html" className="theme-btn">
                      View Cart
                    </a>
                    <a href="checkout.html" className="theme-btn bg-red-2">
                      Checkout
                    </a>
                  </div>
                </div>
                <a href="shop-cart.html" className="cart-icon">
                  <i className="far fa-shopping-basket"></i>
                </a>
              </div>
              <div className="header-button">
                <RedGreenBtn text="Contact Us" />
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