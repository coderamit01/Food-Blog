import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = (props) => {
  const {category,categoryImg} = props.category;
  return (
    <div className="food-menu-card-items wow fadeInUp">
      <div className="menu-thumb">
        <Link to="/category-archive">
          <img src={categoryImg} alt="Category-Image" />
        </Link>
      </div>
      <h5 className="title">
        <Link to="/category-archive">{category}</Link>
      </h5>
    </div>
  );
};

export default SingleCategory;