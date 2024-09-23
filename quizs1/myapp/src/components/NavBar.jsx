import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">Navbar</li>
          <li className="navbar-item">Home</li>
          <li className="navbar-item">Features</li>
          <li className="navbar-item">Pricing</li>
          <li className="navbar-item">About</li>
          <li className="navbar-item search">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </li>
        </ul>
      </nav>

      <nav className="navbar reversed">
        <ul className="navbar-list">
          <li className="navbar-item search">
            <button>Search</button>
            <input type="text" placeholder="Search" />
          </li>
          <li className="navbar-item">About</li>
          <li className="navbar-item">Pricing</li>
          <li className="navbar-item">Features</li>
          <li className="navbar-item">Home</li>
          <li className="navbar-item">Navbar</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
