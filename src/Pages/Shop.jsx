import React from 'react';
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb';
import bgImg from '../assets/img/banner/breadcrumb.jpg';
import ShopArchive from '../Components/ShopArchive/ShopArchive';
import ArchiveCategory from '../Components/ShopArchive/ArchiveCategory';

const Shop = () => {
  return (
    <div>
      <BreadCrumb pageTitle="Shop" bgImg={bgImg} />
      <di className="food-category-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4 order-2 order-md-1 mt-5">
              <div className="main-sidebar">
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>catagories</h4>
                  </div>
                  <div className="widget-categories">
                    <ArchiveCategory />
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h4>filter by size</h4>
                  </div>
                  <div className="filter-size">
                    <div className="input-save d-flex align-items-center">
                      <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext" />
                      <label htmlFor="saveForNext">Small</label>
                    </div>
                    <div className="input-save d-flex align-items-center">
                      <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext2" />
                      <label htmlFor="saveForNext">Medium</label>
                    </div>
                    <div className="input-save d-flex align-items-center">
                      <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext3" />
                      <label htmlFor="saveForNext">Big</label>
                    </div>
                    <div className="input-save d-flex align-items-center">
                      <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext4" />
                      <label htmlFor="saveForNext">Mixing</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 order-1 order-md-2">
              <ShopArchive />
            </div>
          </div>
        </div>
      </di>
    </div>
  );
};

export default Shop;