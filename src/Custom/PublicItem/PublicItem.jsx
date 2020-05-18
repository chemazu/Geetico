import React from 'react'
import "./PublicItem.scss"
import pepsi from "../../Custom/Images/2.png"


export default function PublicItem({image,price,item}) {
    
    return (
        <div>
            <div className="publicItem">
                <img src= {image} alt="single item"/>
                <div className="item-details">
                    <h4>{item}</h4>
                <div>
                <h3>{price}</h3>
                <p>Buy</p>
                </div>
                </div>
                
            </div>
        </div>
    )
}
