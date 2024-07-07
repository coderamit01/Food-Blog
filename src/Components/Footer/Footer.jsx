import React from 'react';

const Footer = () => {
  return (
    <div>
        {/* <footer className="footer-section fix">
            <div className="burger-shape">
                <img src="assets/img/shape/burger-shape-3.png" alt="burger-shape" />
            </div>
            <div className="fry-shape">
                <img src="assets/img/shape/fry-shape-2.png" alt="burger-shape" />
            </div>
            <div className="container">
                <div className="footer-widgets-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <a href="index.html">
                                    <img src="assets/img/logo/logo.svg" alt="logo-img" />
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        We believe it has the power to do <br />
                                        amazing things.
                                    </p>
                                    <span>Interested in working with us?</span> <br />
                                    <a href="mailto:info@example.com" className="link">info@example.com</a>
                                    <div className="social-icon d-flex align-items-center">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 ps-lg-5 col-sm-6 col-md-3 col-lg-3 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h4>Quick Links</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <a href="about.html"> 
                                        <span className="text-effect">
                                        <span className="effect-1">Services</span>
                                        <span className="effect-1">Services</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="about.html">
                                        <span className="text-effect">
                                        <span className="effect-1">About company</span>
                                        <span className="effect-1">About company</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="news-details.html">
                                        <span className="text-effect">
                                        <span className="effect-1">latest news</span>
                                        <span className="effect-1">latest news</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="team.html">
                                        <span className="text-effect">
                                        <span className="effect-1">team member</span>
                                        <span className="effect-1">team member</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="testimonial.html">
                                        <span className="text-effect">
                                        <span className="effect-1">testimonials</span>
                                        <span className="effect-1">testimonials</span>
                                        </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 ps-lg-4 col-sm-6 col-md-3 col-lg-3 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h4>My account</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <a href="shop-single.html">
                                        <span className="text-effect">
                                        <span className="effect-1">My Profile</span>
                                        <span className="effect-1">My Profile</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-single.html">
                                        <span className="text-effect">
                                        <span className="effect-1">My Order History</span>
                                        <span className="effect-1">My Order History</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-single.html">
                                        <span className="text-effect">
                                        <span className="effect-1">My Wish List</span>
                                        <span className="effect-1">My Wish List</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-single.html">
                                        <span className="text-effect">
                                        <span className="effect-1">Order Tracking</span>
                                        <span className="effect-1">Order Tracking</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-cart.html">
                                        <span className="text-effect">
                                        <span className="effect-1">Shopping Cart</span>
                                        <span className="effect-1">Shopping Cart</span>
                                        </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-sm-6 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h4>Address:</h4>
                                </div>
                                <div className="footer-address-text">
                                    <h6>
                                        570 8th Ave, New York,NY <span>10018</span>
                                        United States
                                    </h6>
                                    <h5>Hours:</h5>
                                    <h6>
                                        9.30am – 6.30pm <br />
                                        Monday to Friday
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 ps-xl-5 col-sm-6 col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".9s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h4>Install app</h4>
                                </div>
                                <div className="footer-apps-items">
                                    <h5>From App Store or Google Play</h5>
                                    <div className="apps-image d-flex align-items-center">
                                        <a href="#"><img src="assets/img/app-store.png" alt="store-img" /></a>
                                        <a href="#"><img src="assets/img/google-play.png" alt="store-img" /></a>
                                    </div>
                                    <div className="support-text">
                                        <h5>24/7 Support center</h5>
                                        <h3><a href="tel:+1718-904-4450">+1718-904-4450</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft" data-wow-delay=".3s">
                            © Copyright <span className="theme-color-3">2024</span> <a href="index.html">Foodking </a>. All Rights Reserved.
                        </p>
                        <div className="card-image wow fadeInRight" data-wow-delay=".5s">
                            <img src="assets/img/card.png" alt="card-img" />
                        </div>
                    </div>
                </div>
            </div>
        </footer> */}

    </div>
  );
};

export default Footer;