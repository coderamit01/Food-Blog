import React from 'react';
import { Link } from 'react-router-dom';

const YellowWhiteBtn = ({link,text,Icon}) => {
  return (
    <Link to={link} className="theme-btn bg-yellow">
      {Icon && <Icon />} {text}
    </Link>
  );
};

export default YellowWhiteBtn;