import React from "react";
import { Link } from "react-router-dom";

import '../styles/Navbar.css';

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