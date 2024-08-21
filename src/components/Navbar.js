// src/components/Navbar.js
import React from 'react';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <input
          type="text"
          className="search-input"
          placeholder="Search widgets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
