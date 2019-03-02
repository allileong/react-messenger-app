import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Chatroom from "./Chatroom";
import { Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    };
  }

  setCurrentUser = currentUser => {
    this.setState({ currentUser });
  };

  render() {
    return (
      <div className="Router">
        <Router>
          <div className="Route">
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} setCurrentUser={this.setCurrentUser} />
              )}
            />
            <Route
              path="/chat"
              render={props => (
                <Chatroom {...props} currentUser={this.state.currentUser} />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
