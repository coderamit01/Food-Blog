import React from 'react';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaExpand, FaRegHeart } from 'react-icons/fa6';

const SingleProduct = (props) => {
  const {id,title,productImg,price} = props.product;
  return (
      <div className="popular-dishes-items">
        <div className="dishes-image">
          <Link to={`/single-product/${id}`}><img src={productImg} alt="Product Image" /></Link>
          <ul className="product-icon d-flex justify-content-center align-items-center">
            <li>
              <Link to="/cart"><FaRegHeart /></Link>
            </li>
            <li>
              <Link to="/cart">
                <FaCartPlus />
              </Link>
            </li>
            <li>
              <Link to={`/single-product/${id}`}><FaExpand /></Link>
            </li>
          </ul>
        </div>
        <div className="dishes-content">
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4>
            <Link to={`/single-product/${id}`}>{title}</Link>
          </h4>
          <h5 className='mb-2'>Price ${price}</h5>
          <AddToCartBtn />
        </div>
      </div>
  );
};

export default SingleProduct;