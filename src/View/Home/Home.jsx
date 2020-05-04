import React, { Component } from 'react'
import "./Home.scss"
import Header from "../../Custom/Header/Header"

export class Home extends Component {
    
    render() {
        return (
            <div>
                <Header/>
                <div className="somestuff">SOME STUFF</div>
                <div className="headerSlider">
                    <div className="categories">
                        <ul>
                            <li><a href="/">Top Sellers</a></li>
                            <li><a href="/">New Arrivals</a></li>
                            <li><a href="/">Baking Ingredients</a></li>
                            <li><a href="/">Cake Decoration</a></li>
                            <li><a href="/">Frosting & Design</a></li>
                            <li><a href="/">Equipment & Tools</a></li>
                            <li><a href="/">Cooking</a></li>
                            <li><a href="/">Appliances</a></li>
                        </ul>
                    </div>
                    <div class="masthead responsive-image slider">
   <header class="entry-header">
      <h1 class="entry-title">Heading Spaced with padding</h1>
      <h2 class="entry-subtitle">Some sort of lovely supporting title</h2>
    </header>
  </div>
                </div>
            </div>
        )
    }
}

export default Home
