import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Pages
import Home from './Pages/Home'

//Containers

import Layout from './Containers/Layout'

//Components
import SignIn from './Components/SignIn'

function App() {
  return (
    
      <Router>
        <div className="App">
          <Switch>
              <Route path="/home">              
                  <Home></Home>
              </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
          </Switch>
        </div>
      </Router>
    
  )
}

export default App;
