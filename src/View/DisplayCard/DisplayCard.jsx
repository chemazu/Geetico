import React from 'react'
import "./DisplayCard.scss"
import SingleCartItem from '../../Custom/ShoppingCart/SingleCartItem/SingleCartItem'
import pepsi from "../../Custom/Images/2.png"

export default function DisplayCard() {
    const product ={
        Name:"Pepsi",
        quantity:2,
        Price:200,
        id:3,
        photoURL:pepsi
    }
    return (
        <div>
            <SingleCartItem products={product}/>
        </div>
    )
}
