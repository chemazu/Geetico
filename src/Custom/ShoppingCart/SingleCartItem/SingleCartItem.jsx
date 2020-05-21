import React from 'react'
import "./SingleCartItem.scss"
import pepsi from "../../Images/2.png"

export default function SingleCartItem({cartItems}) {
  
  
    return (
        <div>
            {cartItems.map(({Name,quantity,Price,id,photoURL})=>{
                return(
                    <div className='cart-item'>
                    <img src={pepsi} alt='item' />
                    <div className='item-details'>
                      <span className='name'>{Name}</span>
                      <span className='price'>
                        {quantity} X {Price}
                      </span>
                    </div>
                  </div>
                            
                )})}
            
        </div>
    )

    
    
}





