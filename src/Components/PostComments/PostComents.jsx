import React from 'react';
import { Link } from 'react-router-dom';

const PostComents = ({img,name,date,comment}) => {
  return (
    <li className="single-comment-item">
      <div className="author-img">
        <img src={img} alt="img" />
      </div>
      <div className="author-info-comment">
        <div className="info">
          <h5><a href="#">{name}</a></h5>
          <span>{date}</span>
          <Link to="#" className="theme-btn minimal-btn"><i className="fal fa-reply"></i>Reply</Link>
        </div>
        <div className="comment-text">
          <p>{comment}</p>
        </div>
      </div>
    </li>
  );
};

export default PostComents;