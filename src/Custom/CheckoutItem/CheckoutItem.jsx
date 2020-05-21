import React , {useContext} from 'react'
import "./CheckoutItem.scss"
import Pepsi from "../Images/2.png"
import {Context} from "../../Context"

export default function CheckoutItem({cartItem}) {
  const {cart, total}= useContext(Context)
    const { Name, imageUrl, Price, quantity } = cartItem;
    const increase = ()=>{
    cart.get.map(content=> {if(content.id === cartItem.id){ content.quantity++; cart.set(prev=>[...prev])}})
    let sum = 0 
    cart.get.map(({quantity,Price})=>{sum= sum + quantity*Price})
    total.set(sum)
    console.log(total)
  }
  const decrease = ()=>{
    cart.get.map(content=> {if(content.id === cartItem.id){if (content.quantity>1){ content.quantity--; cart.set(prev=>[...prev])}}})
    let sum = 0 
    cart.get.map(({quantity,Price})=>{sum= sum + quantity*Price})
    total.set(sum)
    console.log(total)
  }
    return (
        <div className='checkout-item'>
      <div className='image-container'>
        <img src={Pepsi} alt='item' />
      </div>
      <span className='name'>{Name}</span>
      <span className='quantity'>
        <span className="cartModifier" onClick={increase}>+</span>
        {quantity}
        <span className="cartModifier" onClick={decrease}>-</span></span>
      <span className='price'>{Price}</span>
      {/* <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div> */}
    </div>
    )
}
