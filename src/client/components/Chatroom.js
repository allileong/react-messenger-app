import React, { Component } from "react";
import ChatroomTitle from "./ChatroomTitle";
import CurrentUserMessageCard from "./CurrentUserMessageCard";
import OtherUserMessageCard from "./OtherUserMessageCard";
import MessageInput from "./MessageInput";
import Socket from "../socket";
import "./Chatroom.css";

class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.socket = new Socket();
    this.socket.registerMessageHandler(this.handleReceive);
  }

  /**
   * Handles messages from the server
   */
  handleReceive = message => {
    this.setState({ messages: [...this.state.messages, message] });
  };

  /**
   * Sends a message to the server
   */
  sendMessage = messageBody => {
    const message = { body: messageBody, sender: this.props.currentUser };
    return this.socket.sendMessage(message);
  };

  /**
   * Gets message list to be rendered in the chat room
   */
  getMessageCards = messages =>
    messages.map((message, i) =>
      this.isCurrentUser(message.sender) ? (
        <CurrentUserMessageCard key={i} message={message} />
      ) : (
        <OtherUserMessageCard key={i} message={message} />
      )
    );

  isCurrentUser(messageSender) {
    return messageSender.id === this.props.currentUser.id;
  }

  render() {
    return (
      <div className="Chatroom">
        <div className="ChatroomWindowContainer">
          <div className="ChatroomWindow">
            <ChatroomTitle />
            <div className="Messages">
              {this.getMessageCards(this.state.messages)}
            </div>
            <MessageInput sendMessage={this.sendMessage} />
          </div>
        </div>
      </div>
    );
  }
}

export default Chatroom;
