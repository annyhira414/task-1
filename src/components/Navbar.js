import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Jsssl.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt="logo" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about/us' className='nav-links' onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Our Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/training/school'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Trainning School
              </Link>
            </li>

            <li>
              <Link
                to='/our/clients'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Our Clients
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/careers' className='nav-links' onClick={closeMobileMenu}>
                Careers
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/news/events' className='nav-links' onClick={closeMobileMenu}>
                News & Events
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact Us</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;