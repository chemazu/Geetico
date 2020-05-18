import React, {useState,useContext,}from 'react'
import { useHistory } from "react-router-dom";
import Button from '../../Custom/Button/Button'
import "./Login.scss"
import {Context} from "../../Context"
import {signInWithGoogle} from "../../Firebase/Firebase.utils"
import {auth} from 'firebase'


export default function Login() {
    const {user} = useContext(Context)
    const history = useHistory();

    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit =async (e)=>{
        e.preventDefault()
        await auth().signInWithEmailAndPassword(email, password);
        if(user.get){
            history.push("/Dashboard"); 
        }
    }
    
    return (
        <div>
            {/* <Header/> */}
        <div className="loginContainer">
            
           <div className="login">
            <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                <div>
                <input type='email' placeholder="Enter your Email" onChange={handleEmail}/></div>
                <div>
                <input type='password' placeholder="Password" onChange={handlePassword}/></div>
                <Button Buttontype="auth" type="submit" content="Login"/>
                </form>
                <br/>
                <Button Buttontype="auth" content="Login with Google " onClick={()=>{signInWithGoogle()}}/><br/>
                
                
            </div> 

            <div className="register">
            <h2>Create your Geetico Account</h2>
            <p>Create your Geetico customer account in just a few clicks! <br/>
            You can register either using your e-mail address<br/> 
            or through your Google account.</p>
            <div>
            <Button  Buttontype="auth" content="Register" onClick = {()=>history.push("/Register")}/>
            <Button Buttontype="auth" content="Register with Google "/>
            </div>
            </div>
        </div>
        </div>
    )
}
