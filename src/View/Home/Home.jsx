import React, { Component } from 'react'
import "./Home.scss"
import Header from "../../Custom/Header/Header"

export class Home extends Component {
    
    render() {
        return (
            <div>
                <Header/>
                <div className="headerSlider">
                    <div className="categories">
                        <ul>
                            <li>One</li>
                            <li>One</li>
                            <li>One</li>
                            <li>One</li>
                            <li>One</li>
                            <li>One</li>
                            <li>One</li>
                            <li>One</li>
                            <li>One</li>
                            <li>One</li>
                        </ul>
                    </div>
                    <div className="slider">stuff</div>
                </div>
            </div>
        )
    }
}

export default Home
