import React from 'react'
import './CustomChar.sass'
import Fire from '../../../assets/img/fire.svg'
import ChMain from '../../../assets/img/custom-char/custom-char-main.svg'
import Slider1 from '../../../assets/img/custom-char/slider1.png'
import Slider2 from '../../../assets/img/custom-char/slider2.png'
import Slider3 from '../../../assets/img/custom-char/slider3.png'
import Slider4 from '../../../assets/img/custom-char/slider4.png'
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Navigation} from "swiper";


const CustomChar = () => {
  return (
    <section className='customchar'>
        <div className="customchar_left">
            <div className="customchar_left-img">
                <img src={ChMain} alt="custom-char" />
            </div>
        </div>
        <div className="customchar_right">
            <div className="customchar_right-head">
                <div className="customchar_right-head-top">
                    <img src={Fire} alt="fire" />
                    <h3>FUTURE OF ESPORTS</h3>
                </div>
                <p>Customize Your Own Character</p>
            </div>
            <div className="customchar_right-desc">
                <p>Make your own fire-breathing Dragon born today. Equip them with legendary weapons and armor sets. Ready for battle!</p>
            </div>
            <div className="customchar_right-slider">
            <Swiper 
                slidesPerView={3}
                spaceBetween={0}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >   
                <SwiperSlide ><img src={Slider1} alt="slide" /></SwiperSlide>
                <SwiperSlide><img src={Slider2} alt="slide" /></SwiperSlide>
                <SwiperSlide><img src={Slider3} alt="slide" /></SwiperSlide>
                <SwiperSlide><img src={Slider4} alt="slide" /></SwiperSlide>
            </Swiper>
            </div>
        </div>
    </section>
  )
}

export default CustomChar