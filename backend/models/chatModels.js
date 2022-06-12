const mongoose = require("mongoose");

// CREATE SCHEEMA
const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    // taking it array because for group chat there will be multiple users
    users: [
      {
        // id of that particular user, as it will be saved to db
        type: mongoose.Schema.Types.ObjectId,
        //   this user has the reference of User model
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  //   everytime a new chat is added, mongoose creates a timestamp
  { timestamps: true }
);

// CREATE MODEL
const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
