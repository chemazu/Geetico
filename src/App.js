import React, { Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {auth, createUserProfile}  from "./Firebase/Firebase.utils"
import {Context} from "./Context.jsx"
import './App.scss';
import Home from './View/Home/Home';
import Header from './Custom/Header/Header';
import Login from './View/Login/Login';
import Footer from "./Custom/Footer/Footer"
import Chemazu from './View/Home/Chemazu';
import Dashboard from './View/Dashboard/Dashboard';
import Register from './View/Register/Register';
import Categories from './View/Categories/Categories';
import Shop from './View/Shop/Shop';

export default class App extends Component {
  static contextType = Context
  unsubscribeFromAuth = null;
  componentDidMount(){
    const{user} = this.context
    this.unsubscribeFromAuth=auth.onAuthStateChanged (async userAuth => {
      createUserProfile(userAuth)
      if(userAuth){
        if(!userAuth.emailVerified){userAuth.sendEmailVerification();}
        user.set(userAuth)
      } 
      
    })

  }
  render() {
    return (
        <div className="App">
          <Header/>
          <Router>
            <Switch>
              <Route exact path ="/" component={Home}></Route>
              <Route exact path="/Chemazu" component={Chemazu}></Route>
              <Route exact path ="/login" component={Login}></Route>
              <Route exact path="/Dashboard" component={Dashboard}></Route> 
              <Route exact path ="/Register" component={Register}></Route>
              <Route  exact path ="/Categories" component={Categories}></Route>
              <Route exact path ="/Shop" component={Shop}></Route>
            </Switch>
          </Router>
          <Footer/>
        </div>
    );
  }
}
