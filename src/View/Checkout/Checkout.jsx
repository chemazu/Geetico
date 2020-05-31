import React,{useContext} from 'react'
import {useHistory} from "react-router-dom"
import { Context } from '../../Context'
import Button from '../../Custom/Button/Button'
import "./Checkout.scss"
// import "./new.scss"
import CheckoutItem from '../../Custom/CheckoutItem/CheckoutItem'

export default function Checkout() {
  const history= useHistory()
  const {total,reload} = useContext(Context)
  const cart = JSON.parse(localStorage.getItem("cart"))
  const cartChecker=cart.length
  let sum = 0 
        cart.map(({quantity,Price})=>{sum= sum + quantity*Price; total.set(sum)})
  console.log(localStorage.getItem("total"))
  const clearCart=()=>{
    localStorage.setItem("cart","[]")
    reload.set(prv=>[...prv])  
  
  }
    return (
        <div className='checkout'>
          <div className='checkout-page'>
          <div className='checkout-header'>
            <div className='header-block'>
              <span>Product</span>
            </div>
            <div className='header-block'>
              <span>Description</span>
            </div>
            <div className='header-block'>
              <span>Quantity</span>
            </div>
            <div className='header-block'>
              <span>Price</span>
            </div>
            <div className='header-block'>
              <span>Remove</span>
            </div>
          </div>
          <div className="checkout-content">
          {cart.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          </div>
          <div className='total'>
            <p className="clearCart" onClick={clearCart}>Clear Cart</p>
            <p>&nbsp;</p>
            TOTAL: {cartChecker? <p>N{total.get}</p>:0}</div>
        </div> 
      </div>
    )
}
