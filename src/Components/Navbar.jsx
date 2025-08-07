import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const text = "Ask Anything About Malaria ";
  const letters = text.split("");

  return (
    <nav className="navbar">
     <div className="logo">Malaria Awareness</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/heatmap">Heatmap</Link></li>
          <li><Link to="/random-facts">Random Facts</Link></li>
        <li><Link to="/get-help">Get Help</Link></li>              
      </ul>
    </nav>
  );
}

export default Navbar;
