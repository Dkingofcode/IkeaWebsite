//import React from 'react'

import Logo from '../../ui/Logo';
import Searchbar from '../../ui/Searchbar';
import "./header.modules.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <Logo />

      <ul className='nav-links'>
        <li>New</li>
        <li>Products</li>
        <li>Rooms</li>
        <li>Inspirations</li>
      </ul>

       <Searchbar />


       <div>
       <p>$0</p>
       
        <img  />
        <span>2</span>
       </div>
    </div>
  )
}

export default Header;
