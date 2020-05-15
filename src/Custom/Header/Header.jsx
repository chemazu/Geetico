import React,{useContext} from 'react'
import {BrowserRouter as Router, Link, Switch,useHistory} from "react-router-dom"
import "./Header.scss"
import Button from '../Button/Button'
import ShoppingCart from "../ShoppingCart/ShoppingCart"
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
    // let history = useHistory();

  
    console.log(useHistory)
    return (
        <div>
            <Router>
                <Switch>
            <nav className="navbar">
                <label className="navbar-toggle" id="js-navbar-toggle">
                    <i className="fa fa-bars"></i>
                </label>
                <a href="/#" className="logo">Geetico</a>
                <ul className="main-nav" id="js-menu">
                    <li>
                        <a href="/" className="nav-links">Home</a>
                    </li>
                    {/* <li onClick={()=>history.push("/Shop")}>
                        Shop
                    </li> */}
                    <li>
                        <a href="/#" className="nav-links">Search</a>
                    </li>
                    <li>
                        <a href="/#" className="nav-links">Cart</a>
                        <ShoppingCart/>
                    </li>
                    <span>&nbsp;</span>
                    {/* <li>
                        {user.get?
                        <Button Buttontype="primary" content="SignOut" onClick ={handleSignOut}/>
                        :
                        <Button Buttontype="primary" content="Login/Register" onClick={()=>history.push("/Login")}/>
                    }
                    </li> */}
                    <Link to= "/Login">Click me to Login</Link>
            
                </ul>
            </nav>
            </Switch>
            </Router>
        </div>
    )
}
