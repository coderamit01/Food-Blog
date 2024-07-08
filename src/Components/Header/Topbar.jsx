import React from 'react';
import { FaTruck } from 'react-icons/fa6';
import TopSocial from './TopSocial';

const Topbar = () => {
  return (
    <div className="header-top">
        <div className="container">
            <div className="header-top-wrapper">
                <ul>
                    <li><span>100%</span> Secure delivery without contacting the courier</li>
                    <li><FaTruck />Track Your Order</li>
                </ul>
                <div className="top-right">
                    <div className="search-wrp">
                        <button><i className="far fa-search"></i></button>
                        <input placeholder="Search" aria-label="Search" />
                    </div>
                    <div className="social-icon d-flex align-items-center">
                        <TopSocial />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Topbar;