import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Navbar.scss';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        LOGO
      </div>
      {/* Show menu items on desktop */}
      <div className='menu_items desktop'>
        <Link to="/" className='menu_item'>Dashboard</Link>
        <Link to="/clients" className='menu_item'>Clients</Link>
        <Link to="/new-client" className='menu_item'>Create New Client</Link>
        <Link to="/login" className='menu_item'>Login</Link>
        <Link to="/newtrainer" className='menu_item'>New Trainer</Link>
        <Link to="/timeline" className='menu_item'>Timeline</Link>
      </div>
      {/* Hamburger menu for mobile */}
      <div className={`icons ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className='menu_icon'>
          <button>MENU</button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M400 368H48c-26.5 0-48 21.5-48 48s21.5 48 48 48h352c26.5 0 48-21.5 48-48s-21.5-48-48-48zm0-160H48c-26.5 0-48 21.5-48 48s21.5 48 48 48h352c26.5 0 48-21.5 48-48s-21.5-48-48-48zm0-160H48C21.5 48 0 69.5 0 96s21.5 48 48 48h352c26.5 0 48-21.5 48-48s-21.5-48-48-48z"/></svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
