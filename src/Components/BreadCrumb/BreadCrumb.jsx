import React from 'react';
const BreadCrumb = ({bgImg,pageTitle}) => {
  return (
    <div className="breadcrumb-wrapper bg-cover" style={{backgroundImage: `url(${bgImg})`}}>
    <div className="container">
        <div className="page-heading center">
            <h1>{pageTitle}</h1>
        </div>
    </div>
</div>
  );
};

export default BreadCrumb;