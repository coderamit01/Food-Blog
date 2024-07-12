import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import GreenRedBtn from '../Components/GreenRedBtn/GreenRedBtn';
import { FaBasketShopping, FaRegStar, FaSistrix, FaStar } from 'react-icons/fa6';
import YellowStar from '../Components/YellowStar/YellowStar';
import NormalStar from '../Components/NormalStar/NormalStar';
import CommentBox from '../Components/CommentBox/CommentBox';
import img1 from '../assets/img/shop-food/review/01.jpg';
import img2 from '../assets/img/shop-food/review/02.jpg';

const SingleProductPage = () => {
  const  {id} = useParams();
  const AllProduct = '../../public/JsonData/ProductData.json';
  const [product,setProduct] = useState([]);
  useEffect(() => {
    fetch(AllProduct)
    .then(res => res.json())
    .then(data => {
      const matchProduct = data.find((item) => item.id == id)
      setProduct(matchProduct);
    })
  },[])
  return (
    <section className="product-details-section section-padding">
      <div className="container">
        <div className="product-details-wrapper">
          <div className="row">
            <div className="col-lg-5">
              <div className="product-image-items">
                <div className="tab-content" id="nav-tab-Content">
                  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className="product-image">
                      <img src={product.productImg} alt="img" />
                      <div className="icon img-popup">
                        <FaSistrix />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0">
              <div className="product-details-content">
                <div className="star pb-3">
                  <span>-5%</span>
                  <YellowStar />
                  <YellowStar />
                  <YellowStar />
                  <YellowStar />
                  <NormalStar />
                  <Link to="" className="text-color">( 2 Reviews )</Link>
                </div>
                <h3 className="pb-3">{product.title}</h3>
                <p className="mb-4">{product.shortDesc}</p>
                <div className="price-list d-flex align-items-center">
                  <span>{product.price}</span>
                  <del>$25</del>
                </div>
                <div className="cart-wrp">
                  <div className="cart-quantity">
                    <h5>QUANTITY:</h5>
                    <form id='myform' method='POST' className='quantity' action='#'>
                      <input type='button' value='-' className='qtyminus minus' />
                        <input type='text' name='quantity' value='0' className='qty' />
                          <input type='button' value='+' className='qtyplus plus' />
                          </form>
                        </div>
                        <div className="shop-button d-flex align-items-center">
                          <GreenRedBtn text="Add To Cart" link="/cart" Icon={FaBasketShopping} />
                          <Link to="/favourit" className="star-icon">
                            <FaRegStar />
                          </Link>
                        </div>
                      </div>
                      <h6 className="details-info"><span>Categories:</span> <a href="shop-single.html">{product.category}</a></h6>
                  </div>
                </div>
              </div>
              <div className="single-tab">
                <ul className="nav mb-4">
                  <li className="nav-item">
                    <a href="#description" data-bs-toggle="tab" className="nav-link active">
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#additional" data-bs-toggle="tab" className="nav-link">
                      Additional Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#review" data-bs-toggle="tab" className="nav-link">
                      reviews (4)
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="description" className="tab-pane fade show active">
                    <div className="description-items">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="description-content">
                            <h3>Experience is over the world visit</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor Numquam odit accusantium odit aut commodi et. Nostrum est atque ut dolorum. Et sequi aut atque doloribus qui. Iure amet in voluptate reiciendis. Perspiciatis consequatur aperiam repellendus velit quia est minima. tellus aliquet nunc vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis necenim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus
                            </p>
                            <h3 className="mb-0 mt-5">More Details</h3>
                            <div className="description-list-items d-flex">
                              <ul className="description-list">
                                <li>
                                  <i className="fal fa-check"></i>
                                  <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </li>
                                <li>
                                  <i className="fal fa-check"></i>
                                  <span>Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsumum is simply dummy text.</span>
                                </li>
                                <li>
                                  <i className="fal fa-check"></i>
                                  <span>type here your detail one by one li more add</span>
                                </li>
                                <li>
                                  <i className="fal fa-check"></i>
                                  <span>has been the industry’s standard dummy text ever since. Lorem Ips</span>
                                </li>
                              </ul>
                              <ul className="description-list">
                                <li>
                                  <i className="fal fa-check"></i>
                                  <span>Lorem Ipsum generators on the tend to repeat.</span>
                                </li>
                                <li>
                                  <i className="fal fa-check"></i>
                                  <span> If you are going to use a passage.</span>
                                </li>
                                <li>
                                  <i className="fal fa-check"></i>
                                  <span> Lorem Ipsum generators on the tend to repeat.</span>
                                </li>
                                <li>
                                  <i className="fal fa-check"></i>
                                  <span> Lorem Ipsum generators on the tend to repeat.</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="additional" className="tab-pane fade">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td>Weight</td>
                            <td>240 Ton</td>
                          </tr>
                          <tr>
                            <td>Dimensions</td>
                            <td>20 × 30 × 40 cm</td>
                          </tr>
                          <tr>
                            <td>Colors</td>
                            <td>Black, Blue, Green</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div id="review" className="tab-pane fade">
                    <div className="review-items">
                      <CommentBox
                        img={img1}
                        name="Amit"
                        date="27 JUNE 2024"
                        time="5.10"
                        comment="Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium."
                      />
                      <CommentBox
                        img={img2}
                        name="Riya"
                        date="03 APRIL 2024"
                        time="10.15"
                        comment="Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium."
                      />
                      <div className="review-form">
                        <form action="#" id="contact-form" method="POST">
                          <div className="row g-4">
                            <div className="col-lg-6">
                              <div className="form-clt">
                                <input type="text" name="name" id="name" placeholder="Full Name" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-clt">
                                <input type="text" name="email" id="email" placeholder="email addres" />
                              </div>
                            </div>
                            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".8">
                              <div className="form-clt-big form-clt">
                                <textarea name="message" id="message" placeholder="message"></textarea>
                              </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".9">
                              <button type="submit" className="theme-btn">
                                post Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
};

export default SingleProductPage;