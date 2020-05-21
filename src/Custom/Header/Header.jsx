import React,{useContext,useState} from 'react'
import {useHistory,Link} from "react-router-dom"
import { auth } from 'firebase';
import {Context} from "../../Context"
import "./Header.scss"
import Button from '../Button/Button'
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import Logo from '../Logo/Logo';
import Search from '../Search/Search';


export default function Header({toggle,Cart}) {
    const {user} = useContext(Context)
    let history = useHistory();
    
    const handleSignOut=async ()=>{
        auth().signOut();
        user.set("")
        if (!user.get){
            history.push("/")
        }
    }
    return (
        <div>
            <nav className="navbar">
                <Link to ="/#" className="logo"><Logo/></Link>
                <ul className="main-nav" id="js-menu">
                    {/* <li>
                        <Search/>
                    </li> */}
                    <li  className = ".nav-links"style={{"paddingTop":"10px"}}>
                        {Cart}
                    </li>
                    <li><span>&nbsp;</span></li>
                    <li>
                        {toggle? null:<ShoppingCart/>}
                    </li>
                    <li><span>&nbsp;</span></li>
                    <li>
                        {user.get?
                        <Button Buttontype="primary" content="SignOut" onClick ={handleSignOut}/>
                        :
                        <Button Buttontype="primary" content="Login/Register" onClick={()=>history.push("/Login")}/>
                    }
                    </li>
                </ul>
            </nav>
        </div>
    )
}