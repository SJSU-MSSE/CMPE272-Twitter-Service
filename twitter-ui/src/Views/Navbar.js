import React from "react";
import { Link } from "react-router-dom";

import '../styles/Navbar.css';

/**
 * @Author: Miyar Karthik Kamath
 * The Navbar function returns a navigation bar component with two links, "Home" and "About".
 * @returns The Navbar component is returning a navigation bar with two list items. Each list item
 * contains a Link component that navigates to different routes ("/" and "/about"). The Link components
 * have the text "Home" and "About" respectively.
 */
const Navbar = () => {
  return (
    <nav className='Nav'>
      <ul >
        <li> 
          <Link to='/' className='pl-6 pr-8'>
            Home
          </Link>
        </li>
        &nbsp;&nbsp;&nbsp;
        <li >
          <Link to='/about' className='pl-6 pr-8'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;