import React from 'react';
import { Link } from 'react-router-dom';

const GreenRedBtn = ({text,link,Icon}) => {
  return (
      <Link to={link} className="theme-btn">{Icon && <Icon />} {text}</Link>
  );
};

export default GreenRedBtn;