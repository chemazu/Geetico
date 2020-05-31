import React,{useContext,useState} from 'react'
import {useHistory} from "react-router-dom"
import { auth } from 'firebase';
import {Context} from "../../Context"
import "./Header.scss"
import Logo from '../Logo/Logo';
import Button from '../Button/Button'
import icon from "../Images/menu.png"
import cartLogo from "../Images/cart.png"
import LogoImage from "../Images/Logo.png"
import PhoneMenu from '../PhoneMenu/PhoneMenu';
import CategoryMenu from "../CategoryMenu/CategoryMenu"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Header({toggle,handleMobile, handleToggle,mobile}) {
    const {user} = useContext(Context)
    const cart = JSON.parse(localStorage.getItem("cart"))
    let history = useHistory();
    const handleSignOut=async ()=>{
        auth().signOut();
        user.set("")
        if (!user.get){
            history.push("/")
        }
    }
    return(
        <div className="header">  
        <div className="webHeader">
            <div className="logo" onClick={()=>history.push("/")}>
            <Logo/>
            </div>
            <div className="actions">
                <p onClick={handleMobile}>Categories</p>
                {mobile?null:<CategoryMenu/>}
                <p onClick={handleToggle} className="cartIconWrapper"><img src={cartLogo} alt="cart"className="cartLogo"/>{cart.length?cart.length:null}</p>
                {toggle? null:<ShoppingCart/>}
            <div className="buttonWrapper">
                {user.get?
                    <Button Buttontype="primary" content="SignOut" onClick ={handleSignOut}/>
                    :<Button Buttontype="primary" content="Login" onClick={()=>history.push("/Login")}/>}
            </div>
            </div>
        </div>
        <div className="mobileHeader">
        <div className="icon">
            <img onClick={handleMobile} src={icon} alt="Geetico"/>
            {mobile?null:<PhoneMenu/>}
        </div>
        <div className="mobileLogoWrapper"><img src={LogoImage} alt="Geetico" className="mobileLogo"/><p>Geetico</p></div>
        <div className="mobNav">
            <p onClick={handleToggle} className="cartIconWrapper"><img src={cartLogo} alt="cart" className="cartLogo"/>{cart.length?cart.length:null}</p>
            {toggle? null:<ShoppingCart/>}
        </div> 
        </div>
        </div>
    )
}