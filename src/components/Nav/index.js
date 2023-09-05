import React from "react";
import './style.css';

const Nav = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <nav className="nav d-flex justify-content-between align-items-center">
      {pages.map((page) => (
        <a
          href="/#"
          key={page}
          className={`nav-link ${page === currentPage && "active"}`}
          onclick={() => setCurrentPage(page)}
        >
          {page}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
