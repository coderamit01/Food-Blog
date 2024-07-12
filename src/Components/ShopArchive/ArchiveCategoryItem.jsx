import React from 'react';
import { Link } from 'react-router-dom';

const ArchiveCategoryItem = (props) => {
  const {category,categoryImg} = props.category;
  return (
    <Link to="/category-archive">
      {category}
    </Link>
  );
};

export default ArchiveCategoryItem;