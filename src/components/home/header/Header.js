import React from 'react'
import MovingText from 'react-moving-text'

import Fire from '../../../assets/img/fire.svg'
import Underline from '../../../assets/img/underline.svg'
import HeaderGaming from '../../../assets/img/header-gaming.svg'
import './Header.sass'

const Header = () => {
  return (
    <header>
        <div className="left-header">
            <MovingText
                type="fadeInFromLeft"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <div className="social-links">
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitch</a></li>
                    </ul>
                </div>
            </MovingText>
            <div className="header-main">
                <div className="header-main_top">
                    <img src={Fire} alt="" />
                    <h3>FUTURE OF ESPORTS</h3>
                </div>
                <div className="header-main_head">
                    <h1>Unleash the Next Generation of Gaming</h1>
                    <img src={Underline} alt="underline" />
                </div>
                <div className="header-main_desc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
                </div>
                <div className="header-main_btns">
                    <button className="explore">Explore More</button>
                    <button className="view-team">View our team</button>
                </div>
            </div>
        </div>

        <div className="right-header">
            <div className="right-header_img">
                <img src={HeaderGaming} alt="" />
            </div>
        </div>
    </header>

  )
}

export default Header