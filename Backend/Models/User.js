const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Avatar: {
    type: String,
  },
  Role: {
    type: String,
    default: "",
  },
  Notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notes",
    },
  ],
});

const User = mongoose.model("User", UserSchema);
module.exports = { User };
