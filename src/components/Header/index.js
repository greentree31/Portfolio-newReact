import React from 'react';
import Nav from '../Nav';
import './style.css';

const Header = ({ pages, currentPage, setCurrentPage }) => {
  return (
  <header>
    {/* {<img />} */}
    <div className="container d-lg-flex justify-content-lg-between">
      <h1 className="text-center">Melisha Evans</h1>
      <Nav 
      pages={pages} 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage} 
      />
    </div>
  </header>
  );
};

export default Header;