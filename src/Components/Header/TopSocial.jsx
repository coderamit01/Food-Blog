import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const TopSocial = () => {
  return (
    <>
      <Link to="#"><FaFacebookF /></Link>
      <Link to="#"><FaTwitter /></Link>
      <Link to="#"><FaLinkedin /></Link>
      <Link to="#"><FaInstagram /></Link>
    </>
  );
};

export default TopSocial;