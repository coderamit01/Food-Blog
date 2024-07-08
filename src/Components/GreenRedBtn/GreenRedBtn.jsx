import React from 'react';

const GreenRedBtn = ({text,link,Icon}) => {
  return (
      <a href={link} className="theme-btn">{Icon && <Icon />} {text}</a>
  );
};

export default GreenRedBtn;