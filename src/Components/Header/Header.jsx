import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import OffCanvas from './OffCanvas';

const Header = () => {
  return (
    <header>
      <OffCanvas />
      <Topbar /> 
      <Navbar />
    </header>
  );
};

export default Header;