import React from 'react'
import {Link} from "react-router-dom"
import "./CategoryMenu.scss"

export default function CategoryMenu() {
    return (
        <div className="categoryMenu">
            <Link to ="/Shop/TopSellers"><h4>Top Sellers</h4></Link>
            <Link to ="/Shop"><h4>New Arrivals</h4></Link>
            <Link to ="/Shop"><h4>Essentials</h4></Link>
            <Link to ="/Shop"><h4>Home</h4></Link>
            <Link to ="/Shop"><h4>Home</h4></Link>
            <Link to ="/Shop/TopSellers"><h4>Top Sellers</h4></Link>
            <Link to ="/Shop"><h4>New Arrivals</h4></Link>
            <Link to ="/Shop"><h4>Essentials</h4></Link>
            <Link to ="/Shop"><h4>Home</h4></Link>
            <Link to ="/Shop"><h4>Home</h4></Link>  
        </div>
    )
}
