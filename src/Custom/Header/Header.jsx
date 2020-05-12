import React,{useContext} from 'react'
import "./Header.scss"
import Button from '../Button/Button'
import { auth } from 'firebase';
import {Context} from "../../Context"

export default function Header() {
    const {user} = useContext(Context)
    const handleSignOut=async ()=>{
        auth().signOut();
        user.set("")
        if (!user.get){

        }
    }
    return (
        <div>
            <nav className="navbar">
                <label className="navbar-toggle" id="js-navbar-toggle">
                    <i className="fa fa-bars"></i>
                </label>
                <a href="/#" className="logo">Geetico</a>
                <ul className="main-nav" id="js-menu">
                    <li>
                        <a href="/" className="nav-links">Home</a>
                    </li>
                    <li>
                        <a href="/#" className="nav-links">Products</a>
                    </li>
                    <li>
                        <a href="/#" className="nav-links">Search</a>
                    </li>
                    <li>
                        <a href="/#" className="nav-links">Cart</a>
                    </li>
                    <span>&nbsp;</span>
                    <li>
                        {user.get?
                        <Button Buttontype="primary" content="SignOut" onClick ={handleSignOut}/>
                        :
                        <a href="/Login" className="nav-links"><Button Buttontype="primary" content="Login/Register" /></a>
                    }
                    </li>
                </ul>
            </nav>
        </div>
    )
}
