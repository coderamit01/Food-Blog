import React from 'react';
import GreenRedBtn from '../Components/GreenRedBtn/GreenRedBtn';

const NotFound = () => {
  return (
      <section className="error-section section-bg fix">
        <div className="container">
          <div className="error-content text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">4<span>0</span>4</h2>
            <h3 className="wow fadeInUp pb-3" data-wow-delay=".5s">we’re sorry page not found</h3>
            <GreenRedBtn text="Back To Home" link="/" />
          </div>
        </div>
      </section>
  );
};

export default NotFound;