import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Pages
import Home from './Pages/Home'

//Containers

import Layout from './Containers/Layout'

//Components
import SignIn from './Components/SignIn'

class App extends React.Component {

  state = {
    currentUser: null
  }

  setUser = (user) => {
    this.setState({
      currentUser: user
    }, () => {
      localStorage.authentication_token = user.user.authentication_token
    })
  }

  clearUser = () => {
    this.setState({
      currentUser: null
    }), () => {
      localStorage.clear()
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/">
              <Home></Home>
            </Route>
            <Route path="/signin">
              <SignIn setUser={this.setUser}></SignIn>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
