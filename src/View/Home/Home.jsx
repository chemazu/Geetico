import React, { Component } from 'react'
import "./Home.scss"
import Header from "../../Custom/Header/Header"
import Button from '../../Custom/Button/Button'
import Card from "../../Custom/Card/Card"
import pepsi from "../../Custom/Images/2.png"
import Footer from '../../Custom/Footer/Footer'
import PromotionCard from '../../Custom/PromotionCard/PromotionCard'

export class Home extends Component {
    
    render() {
        return (
            <div>
                <Header/>
                <div className="promotions">
                    <h2>PROMOTIONS</h2>
                    
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
                <Footer/>
            </div>
        )
    }
}

export default Home
