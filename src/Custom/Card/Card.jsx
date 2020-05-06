import React from 'react'
import "./Card.scss"



export default function Card({Name, image,price}) {
    
    return(
        <div className="wrapper">
            <div className="productImageWrapper">
                <img src={image} alt={Name}/>
            </div>
            <div className="productDetails">
                <div className="details">
                    <h3>{Name}</h3>
                    <p><strong>N{price}</strong></p>
                </div>
                <div className="cart">
                    Cart
                </div>
            </div>
        </div>
)
    
}
