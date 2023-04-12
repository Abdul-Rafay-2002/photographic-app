import React, { useState } from 'react';
import './NavBar.scss';
import { FaFacebook,  FaInstagram,  } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion } from 'framer-motion';
import logo from '../../Assets/logo.png'

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  
  return (
    <header>
      <div className="app__containe">
        <div className='app__navbar'>
          <div className='logo-wrapper'>
            <a href='/'><img src={logo} alt='app__logo' /></a>
          </div>
          <ul>
            {['home', 'services', 'gallery', 'about', 'contact'].map(
              (item) => (
                <li key={`link-${item}`}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              )
            )}
            <li><a href='https://facebook.com/' target='_blank' rel='noreferrer'><FaFacebook /></a></li>
            <li><a href='https://instagram.com' target='_blank' rel="noreferrer"><FaInstagram /></a></li>
          </ul>
          <div className="app__navbar-menu">
            <HiOutlineMenuAlt3 className='Open' onClick={() => setToggle(true)} />
            {toggle && (
              <motion.div
                whileInView={{ x: [0] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiOutlineX onClick={() => setToggle(false)} />
                <div className='mobile__logo-wrapper'>
                  <a href='/'><img src={logo} alt='app__logo' /></a>
                </div>
                {['home', 'services', 'gallery', 'about', 'contact'].map(
                  (item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                  )
                )}

              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
