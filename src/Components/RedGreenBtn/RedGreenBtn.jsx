import React from 'react';
import { Link } from 'react-router-dom';

const RedGreenBtn = ({text,link}) => {
  return (
    <>
      <Link to={link} className="theme-btn bg-red-2">{text}</Link>
    </>
  );
};

export default RedGreenBtn;