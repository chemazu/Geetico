import React,{useContext} from 'react'
import { Context } from '../../Context'
import Button from '../../Custom/Button/Button'

export default function Checkout() {
    const {cart}=useContext(Context)
  const cartChecker=cart.get.length

  
    return (
        <div className='cart-dropdown'>
          <div className='cart-items'>
            {cartChecker? 
            <div>
            </div>
            :<p>empty Cart</p>}
          </div>
          <a href="/Checkout"><Button content ="BUY"/></a>
      </div>
    )
}
