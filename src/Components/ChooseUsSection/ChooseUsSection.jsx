import React from 'react';
import img1 from '../../assets/img/icon/01.svg';
import img2 from '../../assets/img/icon/02.svg';
import img3 from '../../assets/img/icon/03.svg';
import img4 from '../../assets/img/icon/04.svg';
import ChooseItem from './ChooseItem';

const ChooseUsSection = () => {
  return (
    <section className="choose-us-2 fix section-padding bg-cover">
      <div className="container">
        <div className="food-icon-wrapper-2">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
            <ChooseItem
                img={img1}
                title="Best Quality Food"
                sumery="Sed ut perspiciatis unde omnis
                    este natus sit voluptatem" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
            <ChooseItem
                img={img2}
                title="fast food delivery"
                sumery="Sed ut perspiciatis unde omnis
                    este natus sit voluptatem" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".7s">
            <ChooseItem
                img={img3}
                title="money back guarantee"
                sumery="Sed ut perspiciatis unde omnis
                    este natus sit voluptatem" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".9s">
            <ChooseItem
                img={img4}
                title="100% natural food"
                sumery="Sed ut perspiciatis unde omnis
                    este natus sit voluptatem" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;