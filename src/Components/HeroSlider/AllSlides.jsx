import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import SlideItem from './SlideItem';




// Install Swiper modules
// SwiperCore.use([Navigation, Pagination, Autoplay]);

const AllSlides = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('../../../public/JsonData/SlideData.json')
      .then((res) => res.json())
      .then((data) => setSlides(data)) 
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-slider">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          {slides.map((slideItem, index) => (
            <SwiperSlide key={index}>
              <SlideItem slideItem={slideItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AllSlides;
