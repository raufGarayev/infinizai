import { useEffect, useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import ProductContext from '../../context/ProductContext'
import {GiHamburgerMenu} from 'react-icons/gi'
import logo from '../../assets/img/logo.svg'
import {SlBasket} from 'react-icons/sl'

import './Navbar.sass'


const Navbar = () => {

  const {basket, setBasketOn} = useContext(ProductContext)
  const [active, setActive] = useState(false)

  const toggleBasket = () => {
    setBasketOn(true)
  }

  const showNav = () => {
    setActive(!active)
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
        <Link to="/"><img src={logo} alt="Logo" /></Link>
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
          <button><Link to="/contact">Contact Us</Link> </button>
        </div>
      </div>
      <button onClick={showNav} className="nav-toggler"/*  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" */>
          <span><GiHamburgerMenu className='burger'/></span>
        </button>

      <div className={active ? "show-nav active" : 'show-nav'}>
        <div className="nav-links-mob">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar