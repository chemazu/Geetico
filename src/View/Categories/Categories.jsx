import React ,{useContext} from 'react'
import {TopSellers} from "./Product"
import {Context} from "../../Context"
import {createProduct} from "../../Firebase/Firebase.utils"


export default function Categories() {
    const {products} = useContext(Context)
    const handleProduct = ()=>{
        products.set(TopSellers)
        console.log(products.get)
    }
    const uploadProduct = ()=>{
        createProduct(products.get)
    }
    
    console.log(products.get)
    return (
        <div>
            <button onClick={handleProduct}>UPLOAD PRODUCTS</button>
            <button onClick ={uploadProduct}>Firebase Product</button>
        </div>
    )
}




// import React from 'react'

// export default function Categories() {
//     return (
//         <div>
//             upload
//         </div>
//     )
// }
