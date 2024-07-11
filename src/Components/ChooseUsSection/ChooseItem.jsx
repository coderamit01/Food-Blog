import React from 'react';

const ChooseItem = ({img,title,sumery}) => {
  return (
    <div className="single-food-icon">
      <div className="icon">
        <img src={img} alt="icon-img" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{sumery}</p>
      </div>
    </div>
  );
};

export default ChooseItem;