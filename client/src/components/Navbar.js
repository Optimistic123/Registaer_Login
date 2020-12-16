import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { FaWallet } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

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

  window.removeEventListener('resize', showButton)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <FaWallet style={{color:'black'}} className='navbar-icon' />
               PretVA
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes style={{color:'black'}}/> : <FaBars style={{color:'black'}}/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/aboutus'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Aboutus
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Register</Button>
                  </Link>
                ) : (
                  <Link to='/' className='btn-link' onClick={closeMobileMenu}>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      
                    >
                      Register
                    </Button>
                  </Link>
                )}
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Login</Button>
                  </Link>
                ) : (
                  <Link to='/' className='btn-link' onClick={closeMobileMenu}>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      
                    >
                      Login
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
          
        </nav>
        <div className='line'></div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;