import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ text, link, Icon }) => {
  return (
    <div>
      <Link to={link}> {text} {Icon && <Icon />}</Link>
    </div>
  );
};

export default MenuItem;