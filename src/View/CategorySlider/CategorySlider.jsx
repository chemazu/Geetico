import React from 'react'
import "./CategorySlider.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PublicItem from '../../Custom/PublicItem/PublicItem';

export default function CategorySlider({pepsi,category}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
      };
    return (
        <div>
        <div className="sliderContainer">
                            <h2>{category}</h2>
                            <Slider {...settings} >
                            <PublicItem image={pepsi} price={200} item="Pepsi"/>
                            <div className="spacer"></div>
                            <PublicItem image={pepsi} price={200} item="Pepsi"/>
                            <div className="spacer"></div>
                            <PublicItem image={pepsi} price={200} item="Pepsi"/>
                            <div className="spacer"></div>
                            <PublicItem image={pepsi} price={200} item="Pepsi"/>
                            <div className="spacer"></div>
                            <PublicItem image={pepsi} price={200} item="Pepsi"/>
                            <div className="spacer"></div>
                            <PublicItem image={pepsi} price={200} item="Pepsi"/>
                            <div className="spacer"></div>
                            <PublicItem image={pepsi} price={200} item="Pepsi"/>
                            <div className="spacer"></div>
                        </Slider>
                    </div>
                    <div className="hspacer"></div>
                </div>
    )
}
