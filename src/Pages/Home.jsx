import React from 'react';
import HeroSlider from '../Components/HeroSlider/HeroSlider';
import MiniOfferSection from '../Components/MiniOfferSection/MiniOfferSection';
import Categories from '../Components/Categories/Categories';
import ProductSection from '../Components/Product/ProductSection';
import DealBanner from '../Components/DealBanner/DealBanner';
import BlogSection from '../Components/BlogSection/BlogSection';
import ChooseUsSection from '../Components/ChooseUsSection/ChooseUsSection';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <section className="food-menu-section pt-80 pb-80">
        <div className="container">
          <div className="section-title text-center mb-0">
            <h4 className="menu-title wow fadeInUp" data-wow-delay=".3s">menu</h4>
          </div>
          <div className="food-menu-card-wrapper pt-5">
            <Categories />
          </div>
        </div>
      </section>
      <section className="food-banner-section section-padding fix pt-0">
        <MiniOfferSection />
      </section>
      <section className="popular-dishes-section fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Products</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">Popular Products</h2>
          </div>
          <ProductSection />
        </div>
      </section>
      <DealBanner />
      <section className="news-section fix section-padding pt-5">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">news & blog</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">update news & blog</h2>
          </div>
          <BlogSection />
        </div>
      </section>
      <ChooseUsSection />
    </div>
  );
};

export default Home;