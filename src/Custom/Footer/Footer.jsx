import React from 'react'
import "./Footer.scss"
import MailingList from '../MailingList/MailingList'

export default function Footer() {
    return (
        <div className="footer">
            <MailingList/>
            <div className="footerBar">
                <div>
                    <h2>Geetico</h2>
                    <p>Our mission is to make Africa known for quality✨
                    To ensure that every product we offer our customers 
                    worldwide is of the best & finest quality🌟, inspired by black originality⚡, 
                    built upon excellence🎖, craftsmanship & exclusivity✨✨</p>
                </div>
                <div>
                    <h2>Category</h2>
                    Beer, Wine and Spirit<br/>
                    Beverages<br/>
                    Drinks<br/>
                    Cooking, Spices and Baking Ingredients<br/>
                    Food Cupboard and Breakfast Food<br/>
                    Biscuits, Candy and Chocolate<br/>
                    Jams, Canned and Packaged Condiments<br/>
                    Household Supplies
                </div>
                <div>
                    <h2>Social</h2>
                    Instagram<br/>
                    Facebook<br/>
                    Twitter
                </div>
                <div>
                    <h2>Legal</h2>
                    Terms & Conditions<br/>
                    Privacy
                </div>
            </div>
        </div>
    )
}
