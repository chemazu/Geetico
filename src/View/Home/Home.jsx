import React, { Component} from 'react'
import {Link} from "react-router-dom"
import "./Home.scss"
import pepsi from "../../Custom/Images/2.png"
import AdvertBanner from '../../Custom/AdvertBanner/AdvertBanner'
import Hero from './Hero';
import CategorySlider from '../CategorySlider/CategorySlider';

export class Home extends Component {
    render() {
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
                    <CategorySlider pepsi={pepsi} category ="Top Sellers"/>
                    <CategorySlider pepsi={pepsi} category ="New Arrivals"/>
                    <CategorySlider pepsi={pepsi} category ="Office"/>
                    <CategorySlider pepsi={pepsi} category ="Fashion"/>
                </div>
                <AdvertBanner/>
            </div>
        )
    }
}
export default Home
