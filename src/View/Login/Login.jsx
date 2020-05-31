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
        {/* <div className="loginContainer"> */}
           <div className="login">
           <div className="first"><h2>Login</h2></div>
           <div className="second">
                <form onSubmit={handleSubmit}>
                    <input type='email' placeholder="Enter your Email" onChange={handleEmail}/>
                    <br/>
                    <input type='password' placeholder="Password" onChange={handlePassword}/>
                </form>
           </div>
           <div className="third">
                <div className="loginAuth">
                <Button Buttontype="auth" type="submit" content="Login"/>
                <div className="loginAuthSpacer"></div>
                <Button Buttontype="auth" content="Login with Google " onClick={()=>{signInWithGoogle()}}/><br/>
                </div>
                <Button  Buttontype="auth" content="Register" onClick = {()=>history.push("/Register")}/>
           </div>    
            </div>
        {/* </div> */}
        </div>
    )
}
