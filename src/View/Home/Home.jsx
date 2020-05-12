import React, { Component , useState, useContext} from 'react'
import Slider from "react-slick";
import "./Home.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../../Custom/Button/Button'
import Card from "../../Custom/Card/Card"
import pepsi from "../../Custom/Images/2.png"
import PromotionCard from '../../Custom/PromotionCard/PromotionCard'
import AdvertBanner from '../../Custom/AdvertBanner/AdvertBanner'
import MailingList from '../../Custom/MailingList/MailingList'
import {Context} from "../../Context.jsx"

export class Home extends Component {
    static contextType = Context
    
    render() {
        const value = this.context
    console.log(value)
        // const value = useContext(Context)
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 1
          };
        
        return (
            <div>
                <div className="promotions">
        <p>Welcome to Geetico some lorem ipsum generic text</p>
                </div>
                <div className="headerSlider">
                    <div className="categories">
                        <ul>
                            <li><a href="/">Top Sellers</a></li>
                            <li><a href="/">New Arrivals</a></li>
                            <li><a href="/">Baking Ingredients</a></li>
                            <li><a href="/">Cake Decoration</a></li>
                            <li><a href="/">Frosting & Design</a></li>
                            <li><a href="/">Equipment & Tools</a></li>
                            <li><a href="/">Cooking</a></li>
                            <li><a href="/">Appliances</a></li>
                        </ul>
                    </div>
                    <div className="slider">
                    <h1 class="slider_title">Heading Spaced with padding</h1>
                    <h2 class="slider_subtitle">Some sort of lovely supporting text</h2>
                    <div className="buttonDiv"><Button content="Shop Now"/></div>y
                    </div>
                    </div>
                <div className="topProducts">
                <h1>Top Sellers</h1>
                <div className="productBar">
                    <Card Name="Pepsi" image={pepsi} price="200"/>
                    <Card Name="Coke" image={pepsi} price="200"/>
                    <Card Name="BigCola" image={pepsi} price="200"/>
                    <Card Name="Rc Cola" image={pepsi} price="200"/>
                </div>
                </div>
                <div className="categorySliderContainer">
                <h1>TEXT</h1>
                <div className="categorySlider">
                <Slider {...settings} className="sliderProductContainer">
                <div className="sliderProduct"><img src={pepsi} alt =''/> <p>Pepsi</p><p>N200</p></div>
                <div className="spacer"></div>
                <div className="sliderProduct"><img src={pepsi} alt =''/><p>Pepsi</p><p>N200</p></div>
                <div className="spacer"></div>
                <div className="sliderProduct"><img src={pepsi} alt =''/><p>Pepsi</p><p>N200</p></div>
                <div className="spacer"></div>
                <div className="sliderProduct"><img src={pepsi} alt =''/><p>Pepsi</p><p>N200</p></div>
                <div className="spacer"></div>
                <div className="sliderProduct"><img src={pepsi} alt =''/><p>Pepsi</p><p>N200</p></div>
                <div className="spacer"></div>
                <div className="sliderProduct"><img src={pepsi} alt =''/><p>Pepsi</p><p>N200</p></div>
                <div className="spacer"></div>
                </Slider>
                </div>
                </div>
                <div className="advertSection">
                    <AdvertBanner/>
                </div>
            </div>
        )
    }
}

export default Home
