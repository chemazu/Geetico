import React from 'react'
import "./Logo.scss"
import logo from "../Images/Logo.png"
export default function Logo() {
    return (
        <div className="logoContainer">
            <img src ={logo} alt="Geetico Logo" className="logoImg"/>
            <span className="logo-text">Geetico</span>
        </div>
        
    )
}
