import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ReadMoreBtn = ({link,text}) => {
  return (
    <Link to={link} className="link-btn style-2">
      {text} <FaArrowRight />
    </Link>
  );
};

export default ReadMoreBtn;