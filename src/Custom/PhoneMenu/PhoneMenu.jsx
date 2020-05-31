import React from 'react'
import {Link} from "react-router-dom"
import "./PhoneMenu.scss"

export default function PhoneMenu() {
    return (
        <div className="phoneMenu">
            <Link to ="/"><h2>Home</h2></Link>
            <Link to ="/Shop/TopSellers"><h4>Top Sellers</h4></Link>
            <Link to ="/Shop"><h4>New Arrivals</h4></Link>
            <Link to ="/Shop"><h4>Essentials</h4></Link>
            <Link to ="/Shop"><h4>New Arrivals</h4></Link>
            <Link to ="/Shop"><h4>Essentials</h4></Link> 
            <Link to ="/Shop"><h4>New Arrivals</h4></Link>
            <Link to ="/Shop"><h4>Essentials</h4></Link>
            <Link to ="/Shop"><h4>New Arrivals</h4></Link>
            <Link to ="/Shop"><h4>Essentials</h4></Link> 
        </div>
    )
}
