import React, {useContext} from 'react'
import Pepsi from "../Images/2.png"
import "./Card.scss"
import {Context} from "../../Context"

export default function Card({item}) {
    const {Name, Price} = item
    const {cart,total} = useContext(Context) 
    const addtoCart = ()=>{
        const existingCartItem = cart.get.find(content=> content.id === item.id )
        console.log(cart.get)
        if(existingCartItem){
                cart.get.map(content=> {if(content.id === item.id){ content.quantity++; cart.set(prev=>[...prev])}})
                //cart.get.map((content) => {if(content.id === item.id){ cart.set(prev=>[...prev,content.quantity++])}})  
        }
        else{return cart.set(prevCart=>[...prevCart,{...item , quantity:1}])}
        let sum = 0 
        cart.get.map(({quantity,Price})=>{sum= sum + quantity*Price})
        total.set(sum)
        console.log(total)
    }
    return (
        <div>
            <div className="publicItem">
                <img src= {Pepsi} alt="single item"/>
                <div className="item-details">
                    <h4>{Name}</h4>
                <div>
                <h3>N{Price}</h3>
                <p><button onClick={addtoCart}>Add to Cart</button></p>
                </div>
                </div>
                
            </div>
        </div>
    )
    
}

    
// return(
//     <div>
//         <div className="singleProduct">
//         <p>{Name}</p>
//         <p>N{Price}</p>
//         <button onClick={addtoCart}>Add to Cart</button>
            
//         </div>
//     </div>

// )

// return(
//     <div className="wrapper">
//         <div className="productImageWrapper">
//             <img src={Pepsi} alt={Name}/>
//         </div>
//         <div className="productDetails">
//             <div className="details">
//                 <h3>{Name}</h3>
//                 <p><strong>N{Price}</strong></p>
//             </div>
//             <div className="cart">
//                 <button onClick={addtoCart}>Add to Cart</button>
//             </div>
//         </div>
//     </div>
// )