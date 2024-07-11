import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';

const Categories = () => {
  const categorieList = '../../../public/JsonData/ProductData.json';
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(categorieList)
    .then(res => res.json())
    .then(data =>{ 
      const uniqueCategories = {};
      data.forEach(item => {
        if(!uniqueCategories[item.category]){
          uniqueCategories[item.category] = {
            category: item.category,
            categoryImg: item.categoryImg
          };
        }
      });
      setCategory(Object.values(uniqueCategories))})
  },[])
  return (
    <>
    {
      category.map(category => (
        <SingleCategory key={category.id} category={category} />
      ))
    }
    {

console.log(category)}
      
    </>
  );
};

export default Categories;