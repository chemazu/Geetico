import React, {useState, createContext}from 'react'

export const LoginContext = createContext();

export function LoginProvider(props) {
    const [user,setUser] = useState([
        {name:"harry",price:'30'},
        {name:"tarry",price:'30'},
        {name:"larry",price:'30'}
    ])
    return (
        <LoginContext.Provider value={[user,setUser]}>
            {props.children}
        </LoginContext.Provider>
    )
}
//ced
