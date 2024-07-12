import React, { useEffect, useState } from 'react';
import ArchiveCategoryItem from './ArchiveCategoryItem';

const ArchiveCategory = () => {
  const categorieList = '../../../public/JsonData/ProductData.json';
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(categorieList)
    .then(res => res.json())
    .then(data => {
      const uniqueCategories = {};
      data.forEach(item => {
        if (!uniqueCategories[item.category]) {
          uniqueCategories[item.category] = {
            category: item.category,
            id: item.id
          }
        }
      });
      setCategory(Object.values(uniqueCategories))
    })
  },[])
  return (
    <ul>
      {
        category.map((category) => (
          <li key={category.id}>
            <ArchiveCategoryItem category={category} />
          </li>
        ))
      }
    </ul>
  );
};

export default ArchiveCategory;