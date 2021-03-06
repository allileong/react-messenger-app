const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", function(socket) {
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });

  socket.on("MESSAGE", function(data) {
    io.emit("MESSAGE", data);
  });
});

http.listen(3001, function() {
  console.log("listening on *:3001");
});
