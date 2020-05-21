import React,{useContext} from 'react'
import { Context } from '../../Context'
import Button from '../../Custom/Button/Button'
import "./Checkout.scss"
import CheckoutItem from '../../Custom/CheckoutItem/CheckoutItem'

export default function Checkout() {
    const {cart,total}=useContext(Context)
  const cartChecker=cart.get.length
    
  
    return (
        <div className='Checkout'>
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
          {cart.get.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <div className='total'>TOTAL: {cartChecker? <p>N{total.get}</p>:0}</div>
          
        </div>
     
          
      </div>
    )
}

  
