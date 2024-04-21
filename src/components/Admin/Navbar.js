import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Navbar.scss';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"/></svg>
      </div>
      <div className='icons'>
        <Link to="/" className='menu_item'>Dashboard</Link>
        <Link to="/clients" className='menu_item'>Clients</Link>
        <Link to="/new-client" className='menu_item'>Create New Client</Link>
        <Link to="/login" className='menu_item'>Login</Link>
        <Link to="/newtrainer" className='menu_item'>NewTrainer</Link>
        <Link to="/timeline" className='menu_item'>timeline</Link>
      </div>
    </div>
  );
}

export default Navbar;
