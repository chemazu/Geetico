import React, {useContext} from 'react'
import "./Card.scss"
import {Context} from "../../Context"

export default function Card({item}) {
    const {Name, Price} = item
    const {cart} = useContext(Context) 
    const addtoCart = ()=>{
        const existingCartItem = cart.get.find(content=> content.id === item.id )
        if(existingCartItem){
                // cart.get.map(content=> {if(content.id === item.id){ content.quantity++}})
                cart.get.map((content) => {if(content.id === item.id){ cart.set(prev=>[...prev,content.quantity++])}})
               
        }
        else{return cart.set(prevCart=>[...prevCart,{...item , quantity:1}])}
    }
    return(
        <div>
            <div className="singleProduct">
            <p>{Name}</p>
            <p>N{Price}</p>
            <button onClick={addtoCart}>Add to Cart</button>
            </div>
        </div>

    )
}

//     return(
//         <div className="wrapper">
//             <div className="productImageWrapper">
//                 <img src={image} alt={Name}/>
//             </div>
//             <div className="productDetails">
//                 <div className="details">
//                     <h3>{Name}</h3>
//                     <p><strong>N{Price}</strong></p>
//                 </div>
//                 <div className="cart">
//                     Cart
//                 </div>
//             </div>
//         </div>
// )
