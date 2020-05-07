import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.scss';
import Home from './View/Home/Home';
import Header from './Custom/Header/Header';
import Login from './View/Login/Login';
import Footer from "./Custom/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path ="/" component={Home}></Route>
          <Route exact path ="/Login" component={Login}></Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
