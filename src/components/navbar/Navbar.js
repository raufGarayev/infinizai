import { useEffect, useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import ProductContext from '../../context/ProductContext'

import logo from '../../assets/img/logo.svg'
import {SlBasket} from 'react-icons/sl'

import './Navbar.sass'


const Navbar = () => {

  const {basket, setBasketOn} = useContext(ProductContext)

  const toggleBasket = () => {
    setBasketOn(true)
  }

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
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/shop">Shop</Link></li>
        </ul>
      </div>

      <div className="nav-contact">
        <div onClick={toggleBasket} className="basketicon">
          <SlBasket className='basketicon-logo'/>
          <div className="weird-logo">{basket.length}</div>
        </div>
        <div className="nav-btn">
          <button>Contact Us</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar