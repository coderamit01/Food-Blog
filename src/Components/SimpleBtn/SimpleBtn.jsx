import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SimpleBtn = ({link,text}) => {
  return (
    <Link to={link} className="link-btn">
      {text} <FaArrowRight />
    </Link>
  );
};

export default SimpleBtn;