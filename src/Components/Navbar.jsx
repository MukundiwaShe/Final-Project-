import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const text = "Ask Anything About Malaria ";
  const letters = text.split("");

  return (
    <nav className="navbar">
      <div className="navbar-logo-circle-container">
        <div className="circle-text">
          {letters.map((letter, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(${i * (360 / letters.length)}deg) translate(0, -30px) rotate(-${i * (360 / letters.length)}deg)`
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="circle-center"></div>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
         <li> <Link to="/table">Table</Link></li>
          <li><Link to="/heatmap">Heatmap</Link></li>
          <li><Link to="/random-facts">Random Facts</Link></li>
        <li><Link to="/get-help">Get Help</Link></li>              
      </ul>
    </nav>
  );
}

export default Navbar;
