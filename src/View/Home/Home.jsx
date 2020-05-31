// import React, { Component} from 'react'
// import {Link} from "react-router-dom"
// import "./Home.scss"
// import pepsi from "../../Custom/Images/2.png"
// import AdvertBanner from '../../Custom/AdvertBanner/AdvertBanner'
// import Hero from './Hero';
// import CategorySlider from '../../Custom/CategorySlider/CategorySlider'
// import PublicItem from '../../Custom/PublicItem/PublicItem'

// export class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <div>
                    // <div className="promotions">
                    //     <p>Welcome to Geetico some lorem ipsum generic text</p>
                    // </div>
//                     <Hero/>
//                     <div className="categories">
//                         <div>
                            // <Link to ="/Shop/TopSellers"><h4>Top Sellers</h4></Link>
                            // <Link to ="/Shop"><h4>New Arrivals</h4></Link>
                            // <Link to ="/Shop"><h4>Essentials</h4></Link>
                            // <Link to ="/Shop"><h4>Home</h4></Link>
//                         </div>
//                         <div>
//                             <Link to ="/Shop"><h4>Office</h4></Link>
//                             <Link to ="/Shop"><h4>Ingredients</h4></Link>
//                             <Link to ="/Shop"><h4>Everyday Lifestyle</h4></Link>
//                             <Link to ="/Shop"><h4>Tools & Equipments</h4></Link>
//                         </div>
//                         <div>
//                             <Link to ="/Shop"><h4>Designed </h4></Link> 
//                             <Link to ="/Shop"><h4>Crafted</h4></Link>
//                             <Link to ="/Shop"><h4>Fashion </h4></Link> 
//                             <Link to ="/Shop"><h4>Wellness</h4></Link>
//                         </div>
//                     </div>
//                 </div>
                // <div>
                //     <CategorySlider pepsi={pepsi} slides={3}category ="Top Sellers"/>
                //     <CategorySlider pepsi={pepsi} slides={3}category ="New Arrivals"/>
                //     <CategorySlider pepsi={pepsi} slides={3}category ="Office"/>
                //     <CategorySlider pepsi={pepsi} slides={3}category ="Fashion"/>
//                     <div className="hiddenSlider">
//                     categories like in Current Geetico 
//                     </div>
//                 </div>
//                 <AdvertBanner/>
//             </div>
//         )
//     }
// }
// export default Home

import React from 'react'
import {Link} from "react-router-dom"
import "./Home.scss"
import Hero from './Hero';
import CategorySlider from '../../Custom/CategorySlider/CategorySlider' 
import pepsi from "../../Custom/Images/2.png"
import AdvertBanner from '../../Custom/AdvertBanner/AdvertBanner'

export default function Home() {
    return (
        <div>
            <div className="promotions">
                <p>Welcome to Geetico some lorem ipsum generic text</p>
            </div>
                <Hero/>
                <div className="categories">
                    <Link to ="/Shop/TopSellers"><h4>Top Sellers</h4></Link>
                    <Link to ="/Shop"><h4>New Arrivals</h4></Link>
                    <Link to ="/Shop"><h4>Essentials</h4></Link>
                    <Link to ="/Shop"><h4>Home</h4></Link>
                    <Link to ="/Shop"><h4>Home</h4></Link>
                    <Link to ="/Shop/TopSellers"><h4>Top Sellers</h4></Link>
                    <Link to ="/Shop"><h4>New Arrivals</h4></Link>
                    <Link to ="/Shop"><h4>Essentials</h4></Link>
                    <Link to ="/Shop"><h4>Home</h4></Link>
                    <Link to ="/Shop"><h4>Home</h4></Link>   
                </div>
                <h2 style={{"textAlign":"center","padding":"10px"}}>Popular Categories</h2>
                
                <div className="categorySliderWrapper showMobile">
                    <CategorySlider pepsi={pepsi} slides={2} category ="Top Sellers" />
                    <CategorySlider pepsi={pepsi} slides={2} category ="New Arrivals"/>
                    <CategorySlider pepsi={pepsi} slides={2} category ="Office"/>
                    <CategorySlider pepsi={pepsi} slides={2} category ="Fashion"/>
                </div>
                <div className="categorySliderWrapper showWeb">
                    <CategorySlider pepsi={pepsi} slides={5} category ="Top Sellers"/>
                    <CategorySlider pepsi={pepsi} slides={5} category ="New Arrivals"/>
                    <CategorySlider pepsi={pepsi} slides={5} category ="Office"/>
                    <CategorySlider pepsi={pepsi} slides={5} category ="Fashion"/>
                </div>
                <AdvertBanner/>
            
        </div>
    )
}
