import React, {useState, createContext}from 'react'

export const Context = createContext();

export function StateProvider(props) {
    const [user,setUser] = useState("")
    const [products,setProducts] = useState("")
    const [cart, setCart] = useState([])
    const [drop,setDrop] = useState("cool")
    const store ={
        user:{ get: user, set: setUser},
        products:{ get: products, set: setProducts},
        cart:{get:cart, set:setCart},
        drop:{get:drop, set:setDrop}


    }
    
    return (
        <Context.Provider  value={store}>
            {props.children}
        </Context.Provider>
    )
}
