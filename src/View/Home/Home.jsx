import React, { Component } from 'react'
import Slider from "react-slick";
import "./Home.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../../Custom/Header/Header"
import Button from '../../Custom/Button/Button'
import Card from "../../Custom/Card/Card"
import pepsi from "../../Custom/Images/2.png"
import Footer from '../../Custom/Footer/Footer'
import PromotionCard from '../../Custom/PromotionCard/PromotionCard'
import AdvertBanner from '../../Custom/AdvertBanner/AdvertBanner'
import MailingList from '../../Custom/MailingList/MailingList'

export class Home extends Component {
    
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 1
          };
        return (
            <div>
                <Header/>
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
                <div className="categorySlider">
                <Slider {...settings} className="egg">
                <div className="sliderProduct"><img src={pepsi} alt =''/> <p>N200</p></div>
                <div className="spacer"></div>
                <div className="sliderProduct"><img src={pepsi} alt =''/> <p>N200</p></div>
                <div className="spacer"></div>
                <div className="sliderProduct"><img src={pepsi} alt =''/> <p>N200</p></div>
                <div className="spacer"></div>
                <div className="sliderProduct"><img src={pepsi} alt =''/> <p>N200</p></div>
                <div className="spacer"></div>
                <div className="sliderProduct"><img src={pepsi} alt =''/> <p>N200</p></div>
                <div className="spacer"></div>
                <div className="sliderProduct"><img src={pepsi} alt =''/> <p>N200</p></div>
                <div className="spacer"></div>
                </Slider>
                </div>
                <div className="advertSection">
                    <AdvertBanner/>
                </div>
                <MailingList/>
                <Footer/>
            </div>
        )
    }
}

export default Home
