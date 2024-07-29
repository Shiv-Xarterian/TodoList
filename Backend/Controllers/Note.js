const { Note } = require("../Models/Note");
const { User } = require("../Models/User");

const GetAllNotes = async (req, res) => {
  try {
    const UserId = req.id;

    let Notes = [];

    const user = await User.findById(UserId).populate({
      path: "Notes",
    });

    Notes = user.Notes;

    if (user.Role == "Admin") {
      Notes = await Note.find({});
    }

    if (!user) {
      return res.status(404).json({
        Success: false,
        Error: "No User Found! Please Login",
      });
    }

    return res.status(200).json({
      Success: true,
      Message: "All Notes Loaded",
      Notes: Notes,
    });
  } catch (error) {
    return res.status(500).json({
      Success: false,
      Error: error.message,
    });
  }
};

const AddANote = async (req, res) => {
  try {
    const UserId = req.id;
    const { NoteTitle, NoteMessage } = req.body;

    if (!NoteTitle || !NoteMessage) {
      return res.status(404).json({
        Success: false,
        Error: "Note Details Missing",
      });
    }

    const user = await User.findById(UserId);
    if (!user) {
      return res.status(404).json({
        Success: false,
        Error: "No User Found! Please Login",
      });
    }

    const newNote = await Note.create({
      Title: NoteTitle,
      Message: NoteMessage,
      Owner: UserId,
    });

    user.Notes.push(newNote);
    await user.save();

    return res.status(200).json({
      Success: true,
      Message: "Note added Successfully",
      Note: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      Success: false,
      Error: error.message,
    });
  }
};

const DeleteANote = async (req, res) => {
  try {
    const UserId = req.id;
    const NoteId = req.params.id;

    const user = await User.findById(UserId);
    if (!user) {
      return res.status(404).json({
        Success: false,
        Error: "No User Found! Please Login",
      });
    }

    const note = await Note.findByIdAndDelete(NoteId);

    if (!note) {
      return res.status(404).json({
        Success: false,
        Error: "No Note Found",
      });
    }

    const idx = user.Notes.indexOf(NoteId);
    user.Notes.splice(idx, 1);

    await user.save();

    return res.status(200).json({
      Success: true,
      Message: "Note Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      Success: false,
      Error: error.message,
    });
  }
};

const UpdateANote = async (req, res) => {
  try {
    const NoteId = req.params.id;
    const { NoteTitle, NoteMessage } = req.body;

    const note = await Note.findById(NoteId);

    if (!note) {
      return res.status(404).json({
        Success: false,
        Error: "No Note Found",
      });
    }

    note.Title = NoteTitle ? NoteTitle : note.Title;
    note.Message = NoteMessage ? NoteMessage : note.Message;

    await note.save();

    return res.status(200).json({
      Success: true,
      Message: "Note Updated Successfully",
      UpdatedNote: note,
    });
  } catch (error) {
    return res.status(500).json({
      Success: false,
      Error: error.message,
    });
  }
};

module.exports = { GetAllNotes, AddANote, DeleteANote, UpdateANote };
