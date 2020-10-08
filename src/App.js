import React, { useEffect } from 'react';
import './App.css';

//React Router
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//React Chat Widget
import { Widget, addResponseMessage } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';

//Pages
import Home from './Pages/Home'
import FindPage from './Pages/Find'


//Containers

import Layout from './Containers/Layout'

//Components
import SignIn from './Components/SignIn'

//Icons
import broccoli from './resources/icons/broccoli.svg'

function App() {
  useEffect(() => {
    addResponseMessage('Hello, welcome to Food Rescued! How can I help you today?');
  }, []);
  //Message Handler for message widget
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage('Hey back!')
    // addResponseMessage(response) <-- Comment this in after back end is linked up
  };
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
          <Widget
            handleNewUserMessage={handleNewUserMessage}
            profileAvatar={broccoli}
            title={"FoodRescued Chat"}
            subtitle={"Connect and trade!"}
          >
          </Widget>
        </div>
      </Router>
    
  )
}

export default App;
