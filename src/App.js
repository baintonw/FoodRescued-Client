import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Pages
import Home from './Pages/Home'
import FindPage from './Pages/Find'


//Containers

import Layout from './Containers/Layout'

//Components
import SignIn from './Components/SignIn'

function App() {
  return (
    
      <Router>
        <div className="App">
          <Switch>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="/find" component={FindPage}>
              <FindPage></FindPage>
            </Route>
            <Route path="/">              
                  <Home></Home>
            </Route>
          </Switch>
        </div>

      </Router>
    
  )
}

export default App;
