import React from 'react';
import { Link } from 'react-router-dom';

const RedGreenBtn = ({text}) => {
  return (
    <>
      <Link to="contact.html" className="theme-btn bg-red-2">{text}</Link>
    </>
  );
};

export default RedGreenBtn;