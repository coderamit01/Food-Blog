import React from 'react';
import { Link } from 'react-router-dom';
import ReadMoreBtn from '../ReadMoreBtn/ReadMoreBtn';

const BlogItem = (props) => {
  const {id,title,desc,img,author,date,} = props.blog;
  return (
    <div className="news-card-items">
      <div className="news-image bg-cover" style={{backgroundImage: `url(${img})`}}></div>
      <div className="news-content">
        <h4>
          <Link to="/single-blog">
            {title}
          </Link>
        </h4>
        <ul>
          <li>
            <i className="far fa-user"></i>
            {author}
          </li>
          <li>
            <i className="far fa-calendar-alt"></i>
            {date}
          </li>
        </ul>
        <p>
          {desc}
        </p>
        <ReadMoreBtn text="Read More" link="/single-blog" />
      </div>
    </div>
  );
};

export default BlogItem;