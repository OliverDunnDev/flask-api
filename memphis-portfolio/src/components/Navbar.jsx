import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // close menu on link click
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Oliver Dunn
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li onClick={() => handleLinkClick('hero')}>Home</li>
          <li onClick={() => handleLinkClick('about')}>About</li>
          <li onClick={() => handleLinkClick('projects')}>Projects</li>
          <li onClick={() => handleLinkClick('contact')}>Contact</li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



