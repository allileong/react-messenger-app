import io from "socket.io-client";

export default class Socket {
  constructor() {
    this.socket = io("http://localhost:3001");
  }

  registerMessageHandler(messageHandler) {
    this.socket.on("MESSAGE", data => {
      messageHandler(data);
    });
  }

  sendMessage(message) {
    this.socket.emit("MESSAGE", message);
  }
}
