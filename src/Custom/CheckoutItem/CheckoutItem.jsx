import React , {useContext} from 'react'
import "./CheckoutItem.scss"
// import "./new.scss"
import Pepsi from "../Images/2.png"
import {Context} from "../../Context"

export default function CheckoutItem({cartItem}) {
  const {total,reload} = useContext(Context)
  const cart = JSON.parse(localStorage.getItem("cart"))
    const { Name, imageUrl, Price, quantity } = cartItem;

console.log(cart)
  const increase = ()=>{
    console.log(localStorage)
    console.log(cart)
    cart.map(content=>{if((content.id === cartItem.id)){ content.quantity++; total.set(prev=>[...prev])}})
    (localStorage.setItem("cart",JSON.stringify(cart)))
  }
  const decrease = ()=>{
    console.log(localStorage)
    console.log(cart)
    cart.map(content=>{if((content.id === cartItem.id)){ content.quantity--; total.set(prev=>[...prev])}})
    (localStorage.setItem("cart",JSON.stringify(cart)))
  }
  const removeItem = ()=>{
    const filteredCart = cart.filter(content=>content.id !== cartItem.id)
    console.log(filteredCart)
    localStorage.setItem("cart",JSON.stringify(filteredCart))
    reload.set(prv=>[...prv])  

  }
    return (
        <div className='checkout-item'>
          <div className='image-container'>
            <img src={Pepsi} alt='item' />
          </div>
          <span className='name'>{Name}</span>
          <span className='quantity'>
    <span className="cartModifier" onClick={decrease}>{"<"}</span>
            {quantity}
    <span className="cartModifier" onClick={increase}>{">"}</span>
          </span>
          <span className='price'>N{Price}</span>
          <span className='remove'onClick={removeItem}>Remove</span>
        </div>
    )
}
