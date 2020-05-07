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
                    <p>Your Online Superstore for grocery, packaged food items and every of your household shopping.
                        We help you save the stress from the whole Lagos traffic, 
                        also save you the time to shop and most importantly save money by giving you the best deal 
                        because all of our products are offered to you at wholesale price.
                        You can even make custom orders because our mission is to go the extra mile for you!!!
                        Shop Geetico🛍 !!!</p>
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
