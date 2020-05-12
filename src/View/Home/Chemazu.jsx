import React, {useContext, useState} from 'react'
import {Context} from "../../Context.jsx"

export default function Chemazu() {
    // const value =useContext(Context)
    const value = useContext(Context)
    const {user, ruser} = value
    // const [user, setUser] = value
    // const [user , setUser]= value
    console.log(value)

    const [name , setName] = useState('')
    const handleName =(e)=>{
        setName(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        user.set(name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input placeholder="enter username" onChange={handleName}/>
            
            <button type="submit">Submit</button>
            {user.get? <p>{user.get}</p>:<p></p>}
            </form>
        </div>
    )
}
