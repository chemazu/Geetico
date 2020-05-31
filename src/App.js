import React, { Component} from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import {auth, createUserProfile}  from "./Firebase/Firebase.utils"
import {Context} from "./Context.jsx"
import './App.scss';
import Home from './View/Home/Home';
import Header from './Custom/Header/Header';
import Login from './View/Login/Login';
import Footer from "./Custom/Footer/Footer"
import Dashboard from './View/Dashboard/Dashboard';
import Register from './View/Register/Register';
import Categories from './View/Categories/Categories';
import Shop from './View/Shop/Shop';
import DisplayCard from './View/DisplayCard/DisplayCard';
import Checkout from './View/Checkout/Checkout';


export default class App extends Component {
  static contextType = Context
  unsubscribeFromAuth = null;
  componentDidMount(){
    
    if(localStorage.getItem("cart"))
    {
      console.log(localStorage)
    }
    else{
      localStorage.setItem("cart","[]")
    }
    console.log(localStorage)
    const{user} = this.context
    this.unsubscribeFromAuth=auth.onAuthStateChanged (async userAuth => {
      createUserProfile(userAuth)
      if(userAuth){
        if(!userAuth.emailVerified){userAuth.sendEmailVerification();}
        user.set(userAuth)
      }
    })
  }
  constructor(){
    super()
    this.state={
        toggle : true,
        mobile:true
    }
}
  handleToggle = () =>{
  this.setState({toggle:!this.state.toggle})
  if (!this.state.mobile){
    this.setState({mobile:!this.state.mobile})
  }
  console.log(this.state)
} 
handleMobile = ()=>{
  this.setState({mobile:!this.state.mobile})
  if (!this.state.toggle){
    this.setState({toggle:!this.state.toggle})
  }
}
  render() {
    
    return (
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
          <Header 
          toggle = {this.state.toggle}
          handleToggle = {this.handleToggle}
          mobile={this.state.mobile}
          handleMobile = {this.handleMobile}
          />
          <div className="main">
            <Switch>
              <Route exact path ="/" component={Home}></Route>
              <Route exact path ="/login" component={Login}></Route>
              <Route exact path="/Dashboard" component={Dashboard}></Route> 
              <Route exact path ="/Register" component={Register}></Route>
              <Route  exact path ="/Categories" component={Categories}></Route>
              <Route exact path ="/Shop/:category" component={Shop}></Route>
              <Route exact path ="/Checkout" component={Checkout}></Route>
              <Route exact path ="/display" component={DisplayCard}></Route>
            </Switch>
          <Footer/>
          </div>
        </div>
        </Router>
    );
  }
}