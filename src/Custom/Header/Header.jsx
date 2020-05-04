import React from 'react'
import "./Header.scss"
import Button from '../Button/Button'

export default function Header() {
    return (
        <div>
            <nav className="navbar">
                <label className="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
                    <i className="fa fa-bars"></i>
                </label>
                <a href="/#" className="logo">Geetico</a>
                <ul className="main-nav" id="js-menu">
                    <li>
                        <a href="/#" className="nav-links">Home</a>
                    </li>
                    <li>
                        <a href="/#" className="nav-links">Products</a>
                    </li>
                    <li>
                        <a href="/#" className="nav-links">Search Bar</a>
                    </li>
                    <li>
                        <a href="/#" className="nav-links">Cart Icon</a>
                    </li>
                    <span>&nbsp;</span>
                    <li>
                    <a href="/#" className="nav-links"><Button type="primary" content="Login/Register" /></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
