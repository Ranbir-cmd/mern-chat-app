const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// creating api using express
app.get("/", (req, res) => {
  //   console.log(req.params);
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //   console.log(req.params.id);
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singleChat);
});

// creating server
const PORT = process.env.PORT;

app.listen(5000, console.log(`server started at port ${PORT}`));
