import React,{useContext} from 'react'
import {useHistory} from "react-router-dom"
import "./ShoppingCart.scss"
import SingleCartItem from './SingleCartItem/SingleCartItem'
import { Context } from '../../Context'
import Button from '../Button/Button'


export default function ShoppingCart({toggleCart}) {
  const {cart}=useContext(Context)
  const cartChecker=cart.get.length
  const history = useHistory()
  
    return (
        <div className='cart-dropdown'>
          <div className='cart-items'>
            {cartChecker? 
            <SingleCartItem cartItems={cart.get}/>
            :<p>empty Cart</p>}
          </div>
          <Button content ="GO TO CHECKOUT" onClick={()=>{history.push("/Checkout")}}/>
      </div>
    )
}