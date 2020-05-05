import React, { Component } from 'react'
import "./Home.scss"
import Header from "../../Custom/Header/Header"
import Button from '../../Custom/Button/Button'

export class Home extends Component {
    
    render() {
        return (
            <div>
                <Header/>
                <div className="somestuff">SOME STUFF</div>
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
                    <div className="overlay">
                    <div className="slider">
                    <h1 class="slider_title">Heading Spaced with padding</h1>
                    <h2 class="slider_subtitle">Some sort of lovely supporting text</h2>
                    <div className="buttonDiv"><Button content="Shop Now"/></div>
                    </div>
                    </div>
                </div>
                <p>Top Products</p>
            </div>
        )
    }
}

export default Home
