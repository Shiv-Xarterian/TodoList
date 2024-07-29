const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
  Owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Note = mongoose.model("Notes", NoteSchema);
module.exports = { Note };
