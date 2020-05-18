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
  constructor(){
    super()
    this.state={
        toggle : true
    }
}
  handletoggle = () =>{
  this.setState({toggle:!this.state.toggle})
  console.log(this.state.toggle)
} 
  render() {
    
    return (
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
          <Header handletoggle={this.handletoggle} toggle={this.state.toggle} Cart ={<p className="nav-links" onClick={this.handletoggle}>View Cart</p>}/>
          
            <Switch>
              <Route exact path ="/" component={Home}></Route>
              <Route exact path ="/login" component={Login}></Route>
              <Route exact path="/Dashboard" component={Dashboard}></Route> 
              <Route exact path ="/Register" component={Register}></Route>
              <Route  exact path ="/Categories" component={Categories}></Route>
              <Route exact path ="/Shop" component={Shop}></Route>
              <Route exact path ="/display" component={DisplayCard}></Route>
            </Switch>
          <Footer/>
        </div>
        </Router>
    );
  }
}