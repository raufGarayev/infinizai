import React from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import logo from '../../assets/img/logo.svg'
import {SlBasket} from 'react-icons/sl'

import './Navbar.sass'


const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 165) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  
  return (
    <nav className={navbar ? "nav black-nav" : "nav"}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Shop</a></li>
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