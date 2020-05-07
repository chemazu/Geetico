import React from 'react'
import Button from '../../Custom/Button/Button'
import "./Login.scss"

export default function Login() {
    return (
        <div className="loginContainer">
           <div className="login">
            <h2>Login</h2>
                <form>
                <div>
                <input type='email' placeholder="Enter your Email"/></div>
                <div>
                <input type='password' placeholder="Password"/></div>
                <Button type="Auth" content="Login(Submit)"/><br/>
                <Button type="Auth" content="Login with Google "/><br/>
                </form>
            </div> 

            <div className="Register">
            <p>Create your Geetico Account</p>
            <p>Create your Geetico customer account in just a few clicks! <br/>
            You can register either using your e-mail address<br/> 
            or through your Google account.</p>
            <a href="/Register"><Button type={2} content="Register"/></a>
            <Button type={2} content="Register with Google "/>
            </div>
        </div>
    )
}
