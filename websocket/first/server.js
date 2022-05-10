const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.get("/", (req, res) => {
  // res.send('<h1>Hello World</h1>');
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connented");

  socket.on("chat message", (msg) => {
    io.emit('chat message', msg);
    console.log("message: " + msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/app", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

server.listen(9090, () => {
  console.log("listening on *:9090");
});
