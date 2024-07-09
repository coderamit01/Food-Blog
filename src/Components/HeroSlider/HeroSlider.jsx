import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.css';
import SlideItem1 from './SlideItem1';
import SlideItem2 from './SlideItem2';
import SlideItem3 from './SlideItem3';

// Install Swiper modules
SwiperCore.use([Autoplay, EffectFade]);

const HeroSlider = () => {
  return (
    <section className="hero-section">
      <div className='hero-slider'>
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade"
          loop={true}
        >
          <SwiperSlide>
            <SlideItem1 />
          </SwiperSlide>
          <SwiperSlide>
            <SlideItem2 />
          </SwiperSlide>
          <SwiperSlide>
            <SlideItem3 />
          </SwiperSlide>
          </Swiper>
      </div>
    </section>
  );
};

export default HeroSlider;
