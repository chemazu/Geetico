
import React, { Component } from 'react'
import "./Register.scss"
import { auth , createUserProfile , storage} from "../../Firebase/Firebase.utils"
import Button from '../../Custom/Button/Button'

export class Register extends Component {

    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',
            url:'',
        }
    }

    handleChange = (e)=>{
        const {name, value} = e.target
        this.setState({[name]:value}) //very important part

    }

    handleSubmit= async (e)=>{
        e.preventDefault()
        const { displayName, email, password, confirmPassword,url } = this.state;
        if(!(password===confirmPassword)){
            alert('Password Mismatch')
            return
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email ,password)
            user.updateProfile({displayName:displayName}) 
            console.log(user)
        }
        catch(err){
            console.log('the error in profile doc creation is',err)
        }
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="signUpWrapper">
            <div className ="signUp">
              <form onSubmit={this.handleSubmit}>
                  <input type="text"
                  name='displayName'
                  placeholder="Name"
                  value= {displayName}
                  onChange ={this.handleChange}
                  />
                  <input type="email"
                  placeholder="Email"
                  name='email'
                  value= {email}
                  onChange ={this.handleChange}
                  />
                  <input type="password"
                  placeholder="Password"
                  name='password'
                  value= {password}
                  onChange ={this.handleChange}
                  />
                  <input type="password"
                  name='confirmPassword'
                  placeholder="Confirm Password"
                  value= {confirmPassword}
                  onChange ={this.handleChange}
                  />
                  <Button Buttontype="auth" type="submit" content="Sign Up"/>
              </form> 
              </div>
            </div>
        )
    }
}

export default Register
