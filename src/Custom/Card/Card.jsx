import React, {useContext} from 'react'
import Pepsi from "../Images/2.png"
import "./Card.scss"
import {Context} from "../../Context"

export default function Card({item}) {
    const {Name, Price} = item
    const {total} = useContext(Context) 
    const addToCart = ()=>{
        const cart = JSON.parse(localStorage.getItem("cart"))
        const existingCartItem = cart.find(content=> content.id === item.id )
        if(existingCartItem){
            cart.map(content=> {if(content.id === item.id){ content.quantity++; total.set(prev=>[...prev])}})
        }
        else{cart.push({...item, quantity:1})}
        console.log(cart, "new")
        localStorage.setItem("cart",JSON.stringify(cart))
        console.log(localStorage)
    }
    return (
        <div>
            <div className="publicItem">
                <img src= {Pepsi} alt="single item"/>
                <div className="item-details">
                    <h4>{Name}</h4>
                <div>
                <h3>N{Price}</h3>
                <p><button onClick={addToCart}>Add to Cart</button></p>
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