import React from 'react';

const Topbar = () => {
  return (
    <div className="header-top">
        <div className="container">
            <div className="header-top-wrapper">
                <ul>
                    <li><span>100%</span> Secure delivery without contacting the courier</li>
                    <li><i className="fas fa-truck"></i>Track Your Order</li>
                </ul>
                <div className="top-right">
                    <div className="search-wrp">
                        <button><i className="far fa-search"></i></button>
                        <input placeholder="Search" aria-label="Search" />
                    </div>
                    <div className="social-icon d-flex align-items-center">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-vimeo-v"></i></a>
                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Topbar;