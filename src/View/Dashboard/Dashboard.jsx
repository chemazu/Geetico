import React, {useContext}from 'react'
import {Context} from "../../Context"

export default function Dashboard() {
     const {user} = useContext(Context)
     console.log(user.get)
    return (
        <div>
            {user.get.emailVerified?<h1>Hi {user.get.email}Welcome to Geetico</h1>:<p>Please Verify your email</p>}
        </div>
    )
}
// firebase.auth().onAuthStateChanged(function(user) { 
//     if (user.emailVerified) {
//       console.log('Email is verified');
//     }
//     else {
//       console.log('Email is not verified');
//     }
//   });