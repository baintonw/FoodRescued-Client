import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

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
      localStorage.authentication_token = this.state.currentUser.user.authentication_token
    })
  }

  clearUser = () => {
    this.setState({
      currentUser: null
    }, () => {
      localStorage.clear()
    })
  }

  render() {
    return (
        <div className="App">
          <Switch>
            <Route 
              path="/home"
              render={() =>
                <Home 
                  currentUser={this.state.currentUser} 
                  clearUser={this.clearUser}
                />
              }
            />
            <Route 
              path="/signin"
              render={()=>
                <SignIn setUser={this.setUser} />
              }
            />
          </Switch>
        </div>
    )
  }
}

export default App;
