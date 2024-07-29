const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
    require,
  },
  Email: {
    type: String,
    require,
  },
  Password: {
    type: String,
    require,
  },
  Avatar: {
    type: String,
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
