import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./RegistrationForm.css";

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleChange = inputFieldKey => {
    return evt => {
      if (inputFieldKey === "FIRST_NAME") {
        this.setState({ firstName: evt.target.value });
      }

      if (inputFieldKey === "LAST_NAME") {
        this.setState({ lastName: evt.target.value });
      }
    };
  };

  handleClick = () => {
    const currentUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      id: Date.now()
    };
    this.props.setCurrentUser(currentUser);
  };

  render() {
    return (
      <div className="RegistrationFormContainer">
        <div className="RegistrationForm">
          <h1 className="Title">Welcome to the Chat Room!</h1>
          <div className="ChatIcon" />
          <div className="Inputs">
            <input
              className="NameInput"
              onChange={this.handleChange("FIRST_NAME")}
              placeholder="First Name"
            />
            <input
              className="NameInput"
              onChange={this.handleChange("LAST_NAME")}
              placeholder="Last Name"
            />
            <Link to="/chat">
              <button
                className="Register"
                onClick={this.handleClick}
                type="button"
              >
                Take me to the chat room
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
