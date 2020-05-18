import React,{useContext} from 'react'
import "./ShoppingCart.scss"
import SingleCartItem from './SingleCartItem/SingleCartItem'
import { Context } from '../../Context'
import Button from '../Button/Button'


export default function ShoppingCart({toggleCart}) {
  const {cart}=useContext(Context)
  const cartChecker=cart.get.length
  
  
    return (
        <div className='cart-dropdown'>
          <div className='cart-items'>
            {cartChecker? 
            <SingleCartItem cartItems={cart.get}/>
            :<p>empty Cart</p>}
          </div>
          <a href="/Checkout"><Button content ="GO TO CHECKOUT"/></a>
      </div>
    )
}

