import React, {useState, createContext}from 'react'

export const Context = createContext();

export function StateProvider(props) {
    const [user,setUser] = useState("")
    const [products,setProducts] = useState("")
    const store ={
        user:{ get: user, set: setUser},
        products:{ get: products, set: setProducts}


    }
    
    return (
        <Context.Provider  value={store}>
            {props.children}
        </Context.Provider>
    )
}
