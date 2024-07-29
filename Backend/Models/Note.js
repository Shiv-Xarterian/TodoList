const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  Title: {
    type: String,
    require,
  },
  Message: {
    type: String,
    require,
  },
  Owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Note = mongoose.model("Notes", NoteSchema);
module.exports = { Note };
