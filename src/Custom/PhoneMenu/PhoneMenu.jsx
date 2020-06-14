import React from 'react'
import {Link, useHistory} from "react-router-dom"
import "./PhoneMenu.scss"
import Button from '../Button/Button'
import fb from "../Images/facebook.png"
import twitter from "../Images/twitter.png"
import instagram from "../Images/instagram.png"

export default function PhoneMenu({close}) {
    const history = useHistory()
    const socials = [fb,twitter,instagram]
    return (
        <div className="phoneMenuWrapper">
        <div className="phoneMenu">
            <div className="closeBar" onClick={close}><p>X Close</p></div>
            <div className="phoneMenuButton"><Link to ="/Login" ><Button content="Login/SignUp" Buttontype="auth"/></Link></div>
            <div className="links">
            <h3>Home</h3>
            <h3>Categories</h3>
            <div className="categoryLinks">
            <Link to ="/Shop/TopSellers"><h5>Top Sellers</h5></Link>
            <Link to ="/Shop/TopSellers"><h5>New Arrivals</h5></Link>
            <Link to ="/Shop/TopSellers"><h5>Geetico Originals</h5></Link>
            <Link to ="/Shop/TopSellers"><h5>Black-Excellence</h5></Link>
            <Link to ="/Shop/TopSellers"><h5>Designed & Crafted</h5></Link>
            <Link to ="/Shop/TopSellers"><h5>Everyday Lifestyle</h5></Link>
            <Link to ="/Shop/TopSellers"><h5>Home & Office</h5></Link>
            <Link to ="/Shop/TopSellers"><h5>Tools & Equipments</h5></Link>
            <Link to ="/Shop/TopSellers"><h5>Fashion & Wellness</h5></Link>
            <Link to ="/Shop/TopSellers"><h5>Essentials</h5></Link>
            </div>
            <h3 style={{"paddingTop":"20px"}}>Checkout</h3>
            <div className="socialMedia">
                <p>follow us</p>
                <div className="socialLogos">{socials.map(social=>{return(<img src={social} key={social} alt={social}/>)})}</div>
                </div>
            </div>
            {/* <Link to ="/"><h3>Home</h3></Link>
            <Link to ="/Shop/TopSellers"><h5>Top Sellers</h5></Link>
            <Link to ="/Shop"><h5>New Arrivals</h5></Link>
            <Link to ="/Shop"><h5>Essentials</h5></Link>
            <Link to ="/Shop"><h5>New Arrivals</h5></Link>
            <Link to ="/Shop"><h5>Essentials</h5></Link> 
            <Link to ="/Shop"><h5>New Arrivals</h5></Link>
            <Link to ="/Shop"><h5>Essentials</h5></Link>
            <Link to ="/Shop"><h5>New Arrivals</h5></Link>
            <Link to ="/Shop"><h5>Essentials</h5></Link>  */}
        </div>
        </div>
    )
}
