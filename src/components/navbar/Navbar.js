import React from 'react'

import logo from '../../assets/img/logo.svg'
import {SlBasket} from 'react-icons/sl'

import './Navbar.sass'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Pages</a></li>
        </ul>
      </div>

      <div className="nav-contact">
        <div className="basket">
          <SlBasket className='basket-logo'/>
          <div className="weird-logo">0</div>
        </div>
        <div className="nav-btn">
          <button>Contact Us</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar