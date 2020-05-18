import React, { Component} from 'react'
import {Link} from "react-router-dom"
import Slider from "react-slick";
import "./Home.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../../Custom/Button/Button'
import pepsi from "../../Custom/Images/2.png"
import AdvertBanner from '../../Custom/AdvertBanner/AdvertBanner'
import Hero from './Hero';
import PublicItem from '../../Custom/PublicItem/PublicItem';

export class Home extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 1
          };
        
        return (
            <div>
                <div>
                    <div className="promotions">
                        <p>Welcome to Geetico some lorem ipsum generic text</p>
                    </div>
                    <Hero/>
                    <div className="categories">
                        <div>
                            <Link to ="/Shop"><h4>Top Sellers</h4></Link>
                            <Link to ="/Shop"><h4>New Arrivals</h4></Link>
                            <Link to ="/Shop"><h4>Essentials</h4></Link>
                            <Link to ="/Shop"><h4>Home</h4></Link>
                        </div>
                        <div>
                            <Link to ="/Shop"><h4>Office</h4></Link>
                            <Link to ="/Shop"><h4>Ingredients</h4></Link>
                            <Link to ="/Shop"><h4>Everyday Lifestyle</h4></Link>
                            <Link to ="/Shop"><h4>Tools & Equipments</h4></Link>
                        </div>
                        <div>
                            <Link to ="/Shop"><h4>Designed </h4></Link> 
                            <Link to ="/Shop"><h4>Crafted</h4></Link>
                            <Link to ="/Shop"><h4>Fashion </h4></Link> 
                            <Link to ="/Shop"><h4>Wellness</h4></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="sliderContainer">
                        <h2> Top Sellers</h2>
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
                    <div clasName="sliderWrapper"></div>
                    <div className="sliderContainer">
                        <h2> New Arrivals</h2>
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
                </div>
                <AdvertBanner/>
            </div>
        )
    }
}
export default Home
