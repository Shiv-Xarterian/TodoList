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
});

export const User = mongoose.model("User", UserSchema);
