import React from 'react';
import YellowStar from '../YellowStar/YellowStar';

const CommentBox = ({img,name,date,time,comment}) => {
  return (
    <div className="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
      <div className="admin-img pb-4 pb-md-0 me-4">
        <img src={img} alt="image" />
      </div>
      <div className="content p-4">
        <div className="head-content pb-1 d-flex flex-wrap justify-content-between">
          <h5>{name}<span>{date} at {time}pm</span></h5>
          <div className="star">
            <YellowStar />
            <YellowStar />
            <YellowStar />
            <YellowStar />
            <YellowStar />
          </div>
        </div>
        <p>{comment} </p>
      </div>
    </div>
  );
};

export default CommentBox;