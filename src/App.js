import React, { useEffect } from 'react';
import './App.css';

//Icons
import broccoli from './resources/icons/broccoli.svg'

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

  // useEffect(() => {
  //   addResponseMessage('Hello, welcome to Food Rescued! How can I help you today?');
  // }, []);

  //Message Handler for message widget
  // const handleNewUserMessage = (newMessage) => {
  //   console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    // addResponseMessage(response) <-- Comment this in after back end is linked up
  // };

  render() {
    return (
        <div className="App">
          <Switch>
            <Route 
              path="/"
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
            <Route path="/find" component={FindPage}>
              <FindPage></FindPage>
            </Route>
          </Switch>
          <Widget
            // handleNewUserMessage={handleNewUserMessage}
            profileAvatar={broccoli}
            title={"FoodRescued Chat"}
            subtitle={"Connect and trade!"}
          >
          </Widget>
        </div>
    )
  }
}

export default App;
