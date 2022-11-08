import React from 'react'
import logo from '../../assets/img/logo.svg'
import './Footer.sass'

import {GrFacebook, GrInstagram, GrTwitter, GrYoutube} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer_top">
            <div className="footer_top-first-col">
                <div className="footer_top-first-col-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer_top-first-col-desc">
                    <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .</p>
                </div>
            </div>
            <div className="footer_top-second-col">
            <div className="footer_top-second-col-head">
                <p>Menu Items</p>
            </div>
            <div className="footer_top-second-col-list">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            </div>
            <div className="footer_top-third-col">
                <div className="footer_top-third-col-head">
                    <p>Other Pages</p>
                </div>
                <div className="footer_top-third-col-list">
                    <ul>
                        <li><a href="#">Styleguide</a></li>
                        <li><a href="#">Changelog</a></li>
                        <li><a href="#">Licenses</a></li>
                        <li><a href="#">Team</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer_top-fourth-col">
                <div className="footer_top-fourth-col-head">
                    <p>Social Icons</p>
                </div>
                <div className="footer_top-fourth-col-social">
                    <div className="footer_top-fourth-col-social-bar"><GrInstagram/></div>
                    <div className="footer_top-fourth-col-social-bar"><GrFacebook /></div>
                    <div className="footer_top-fourth-col-social-bar"><GrTwitter /></div>
                    <div className="footer_top-fourth-col-social-bar"><GrYoutube /></div>
                </div>
            </div>
        </div>
        <div className="footer_bot">
            <p>Copyright by 2021 Flowzai</p>
        </div>
    </footer>
  )
}

export default Footer