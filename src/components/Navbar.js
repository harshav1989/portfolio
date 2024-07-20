// src/components/Navbar.js
import React, { useState } from 'react';
import '../styles/styles.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Harsha Vardhini V</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Harsha Vardhini V</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {menuOpen && (
            <div className="menu-links">
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#Skills" onClick={toggleMenu}>Skills</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
