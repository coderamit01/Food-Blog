import React from 'react';
import { Link } from 'react-router-dom';

const PopularFeedItem = (props) => {
  const {id,img,title,date} = props.blog;
  return (
    <div className="single-post-item">
      <div className="thumb bg-cover" style={{backgroundImage: `url(${img})`}}></div>
      <div className="post-content">
        <h5><Link to={`/single-blog/${id}`} >{title}</Link></h5>
        <div className="post-date">
          <i className="far fa-calendar-alt"></i>{date}
        </div>
      </div>
    </div>
  );
};

export default PopularFeedItem;