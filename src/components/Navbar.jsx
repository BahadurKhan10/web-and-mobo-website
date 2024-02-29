import React, { useState } from 'react';
import '../styles/navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <div className='mainNav'>
      <div className="logo">
        <img className='navLogo' src={Logo} height='80px' width='80px' alt="logo" />
      </div>
      
      
      {/* Show menu icon on small screens */}
      <div className="menuIcon" onClick={handleMenuToggle}>
  <MenuIcon />
</div>

      {/* Display navigation items */}
      <ul className={`navList ${showMenu ? 'showMenu' : ''}`}>
        <li className='navItems'>Home</li>
        <li className='navItems'>About Us</li>
        <li className='navItems'>Services</li>
        <li className='navItems'>Pricing</li>
        <li className='navItems'>Blogs</li>
        <li className='navItems'><button className='contactBtn'>Contact</button></li>
      </ul>
    </div>
  );
};

export default Navbar;
