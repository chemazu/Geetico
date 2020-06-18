import React from 'react'
import {Link} from "react-router-dom"
import "./Home.scss"
import Hero from './Hero';
import CategorySlider from '../../Custom/CategorySlider/CategorySlider' 
import pepsi from "../../Custom/Images/2.png"
import AdvertBanner from '../../Custom/AdvertBanner/AdvertBanner'
import Benefits from '../../Custom/Benefits/Benefits';
import cash from "../../Custom/Images/cash_.png"
import value from "../../Custom/Images/diamond.png"
import delivery from "../../Custom/Images/delivery.png"
// import midAdvert from "../../Custom/Images/Adverts.jpg"
import midAdvert from "../../Custom/Images/Adverts.jpg"
import BenefitsSlider from '../../Custom/BenefitsSlider/BenefitsSlider';


export default function Home() {
    const benefits=[
        {"img":delivery, "text":"Fast Delivery" ,"id":"delivery"},
        {"img":value,"text":"Best Brands" ,"id":"value"},
        {"img":cash,"text":"Secure Payments ","id":"cash"}
    ]
    console.log(benefits)
    return (
        <div>
            <div className="promotions">
                <p>Our mission is to make Africa known for quality</p>
            </div>
                <Hero/>
                <div className="benefitsWrapper showWeb">
                    <div className="benefitsContainer">
                    {benefits.map(benefit=>{return(<Benefits benefit={benefit}/>)})}
                    </div>
                </div>
                <div className="benefitsWrapper showMobile">
                {/* {benefits.map(benefit=>{return(<BenefitsSlider benefit={benefit}/>)})} */}
                <BenefitsSlider/>
                </div>
                <div className="categories">
                <Link to ="/Shop/TopSellers"><h5 className="TS">Top Sellers</h5></Link>
                <Link to ="/Shop/TopSellers"><h5 className="NewA">New Arrivals</h5></Link>
                <Link to ="/Shop/TopSellers"><h5 className="GeeticoO">Geetico Originals</h5></Link>
                <Link to ="/Shop/TopSellers"><h5 className="BlackE">Black-Excellence</h5></Link>
                <Link to ="/Shop/TopSellers"><h5 className="DesignedC">Designed & Crafted</h5></Link>
                <Link to ="/Shop/TopSellers"><h5 className="EverydayL">Everyday Lifestyle</h5></Link>
                <Link to ="/Shop/TopSellers"><h5 className="">Home & Office</h5></Link>
                <Link to ="/Shop/TopSellers"><h5 className="ToolsE">Tools & Equipments</h5></Link>
                <Link to ="/Shop/TopSellers"><h5 className="">Fashion & Wellness</h5></Link>
                <Link to ="/Shop/TopSellers"><h5 className="">Essentials</h5></Link>    
                </div>
                <h2 style={{"textAlign":"center","padding":"10px"}}>Popular Categories</h2>
                
                <div className="categorySliderWrapper showMobile">
                    <CategorySlider pepsi={pepsi} slides={2} category ="Top Sellers" />
                    <CategorySlider pepsi={pepsi} slides={2} category ="New Arrivals"/>
                    <div className="midAdvert">
                        <img src={midAdvert} alt="midAdvert"/>
                    </div>
                    <CategorySlider pepsi={pepsi} slides={2} category ="Office"/>
                    <CategorySlider pepsi={pepsi} slides={2} category ="Fashion"/>
                </div>
                <div className="categorySliderWrapper showWeb">
                    <CategorySlider pepsi={pepsi} slides={5} category ="Top Sellers"/>
                    <CategorySlider pepsi={pepsi} slides={5} category ="New Arrivals"/>
                    <div className="midAdvert">
                        <img src={midAdvert} alt="midAdvert"/>
                    </div>
                    <CategorySlider pepsi={pepsi} slides={5} category ="Office"/>
                    <CategorySlider pepsi={pepsi} slides={5} category ="Fashion"/>
                </div>
                <AdvertBanner/>
            
        </div>
    )
}
