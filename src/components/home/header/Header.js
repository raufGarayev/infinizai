import React from 'react'
import MovingComponent from 'react-moving-text'

import Fire from '../../../assets/img/fire.svg'
import Underline from '../../../assets/img/underline.svg'
import HeaderGaming from '../../../assets/img/header-gaming.svg'
import './Header.sass'

const Header = () => {
  return (
    <header>
        <div className="left-header">
        <MovingComponent
            type="fadeIn"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="none">
                <div className="social-links">
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitch</a></li>
                    </ul>
                </div>
        </MovingComponent>
            <div className="header-main">
                <div className="header-main_top">
                    <img src={Fire} alt="fire" />
                    <h3>FUTURE OF ESPORTS</h3>
                </div>
                <div className="header-main_head">
                    <h1>Unleash the Next Generation of Gaming</h1>
                    <img src={Underline} alt="underline" />
                </div>
                <div className="header-main_desc">
                    <p>An amazing, incredible and unstoppable eSports club founded in 2009.</p>
                </div>
                <div className="header-main_btns">
                    <button className="explore">Explore More</button>
                    <button className="view-team">View our team</button>
                </div>
            </div>
        </div>

        <div className="right-header">
            <div className="right-header_img">
                <img src={HeaderGaming} alt="headergaming" />
            </div>
        </div>
    </header>

  )
}

export default Header