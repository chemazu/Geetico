import React from 'react'

export default function SingleCartItem({cartItems}) {
    return (
        <div>
            {cartItems.map(({Name,quantity,Price,id})=>{
                return(
                <div key={id}>
                    <p>{Name}</p><p>{quantity}</p><p>{Price}</p></div>
                
                )})}
            
        </div>
    )
}
