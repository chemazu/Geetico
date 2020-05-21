import React from 'react'
import Slider from "react-slick";
import "./Hero.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../Custom/Images/Home-Hero/1.jpg"
import slide2 from "../../Custom/Images/Home-Hero/2.jpg"
import slide3 from "../../Custom/Images/Home-Hero/3.jpg"


export default function Hero() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      };

    return (
        <div>
            <div className="heroWrapper">
            <Slider {...settings} >
              <img src={slide1} alt = "slider"/>
              <img src={slide2} alt = "slider"/>
              <img src={slide3} alt = "slider"/>
              <img src={slide2} alt = "slider"/>
              <img src={slide3} alt = "slider"/> 
            </Slider>
            </div>
        </div>
    )
}
