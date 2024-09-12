import mongoose from "mongoose";

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

export const Note = mongoose.model("Notes", NoteSchema);
