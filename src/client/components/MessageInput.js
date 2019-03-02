import React, { Component } from "react";
import "./MessageInput.css";

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageBody: ""
    };
  }

  handleChange = evt => {
    this.setState({ messageBody: evt.target.value });
  };

  handleClick = () => {
    const body = this.state.messageBody;
    if (!this.isEmpty(body)) {
      this.sendAndClearMessage(body);
    }
  };

  handleKeyPress = evt => {
    const body = this.state.messageBody;
    if (evt.key === "Enter" && !this.isEmpty(body)) {
      this.sendAndClearMessage(body);
    }
  };

  isEmpty = body => {
    return body.trim() === "";
  };

  sendAndClearMessage = body => {
    this.props.sendMessage(body);
    this.setState({ messageBody: "" });
  };

  render() {
    return (
      <div className="MessageInput">
        <input
          className="InputField"
          type="message"
          onChange={this.handleChange}
          placeholder="Type a message..."
          onKeyDown={this.handleKeyPress}
          value={this.state.messageBody}
        />
        <button
          className="SubmitMessage"
          type="submit"
          name="Send"
          onClick={this.handleClick}
        >
          Send
        </button>
      </div>
    );
  }
}
