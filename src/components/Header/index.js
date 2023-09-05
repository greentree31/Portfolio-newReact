import React from 'react';
import Nav from '../Nav';

const Header = ({ pages, currentPage, setCurrentPage }) => {
  return (
  <header>
    {/* {<img />} */}
    <div className="container">
      <h1>Melisha Evans</h1>
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