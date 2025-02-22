import React from 'react';
import Navbar from './Navbar';
import OffCanvas from './OffCanvas';

const Header = () => {
  return (
    <header>
      <OffCanvas />
      <Navbar />
    </header>
  );
};

export default Header;