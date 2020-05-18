import React from 'react'
import "./MailingList.scss"
import Logo from "../Images/Logo.png"


export default function MailingList() {
    return (
        <div className="mailingList">
            <img src={Logo} alt="" className="Logo" />

            <div>
                <label>
                <p>NEW TO GEETICO?</p>
                <p>Subscribe to our newsletter to get updates on our latest offers!</p></label>
                <form>
                <input type="email" name="email" placeholder="email address" required/>
                <input type="submit" value="Subscribe" name="subscribe"/>
    </form>
</div>
        </div>
    )
}
