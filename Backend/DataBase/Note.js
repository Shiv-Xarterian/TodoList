const { Note } = require("../Models/Note");
const { NotFoundError } = require("../utils/ErrorHandling");

const GetAllNotesAsAdmin = async () => {
  try {
    const Notes = await Note.find({});
    return Notes;
  } catch (error) {
    throw error;
  }
};

const CreateANote = async (Title, Message, User) => {
  try {
    const newNote = await Note.create({
      Title,
      Message,
    });
    User.Notes.push(newNote);
    await User.save();

    return newNote;
  } catch (error) {
    throw error;
  }
};

const DeleteANote = async (NoteId, User) => {
  try {
    const DeletedNote = await Note.findByIdAndDelete(NoteId);
    const Idx = User.Notes.indexof(NoteId);
    User.Notes.splice(Idx, 1);
    await User.save();
    return;
    return;
  } catch (error) {
    throw error;
  }
};

const UpdateANote = async (NoteId, NoteTitle, NoteMessage) => {
  try {
    const note = await Note.findById(NoteId);
    if (!note) throw NotFoundError(`No Note Found`);

    if (NoteTitle) note.Title = NoteTitle;
    if (NoteMessage) note.Message = NoteMessage;

    await note.save();

    return note;
  } catch (error) {
    throw error;
  }
};

module.exports = { GetAllNotesAsAdmin, CreateANote, DeleteANote, UpdateANote };
