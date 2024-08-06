const {
  GetAllNotesAsAdmin,
  CreateANote,
  UpdateANote,
} = require("../DataBase/Note");
const { FindUser } = require("../DataBase/User");
const { NotFoundError } = require("../utils/ErrorHandling");

const GetAllNotesService = async (UserId) => {
  try {
    let Notes = [];
    const user = await FindUser({ UserId: UserId, Populate: "Notes" });
    if (!user) throw NotFoundError(`No User Found`);

    Notes = user.Notes;

    if (user.Role == "Admin") Notes = await GetAllNotesAsAdmin();

    return {
      Success: true,
      Message: "Notes Retrieved Successfully",
      Notes: Notes,
    };
  } catch (error) {
    throw error;
  }
};

const AddNoteService = async (UserId, NoteTitle, NoteMessage) => {
  try {
    const user = await FindUser({ UserId: UserId });
    if (!user) throw NotFoundError(`No User Found`);

    const newNote = await CreateANote(NoteTitle, NoteMessage, user);
    return {
      Status: true,
      Message: "Note Added Successfully",
      Note: newNote,
    };
  } catch (error) {
    throw error;
  }
};

const DeleteNoteService = async (UserId, NoteId) => {
  try {
    const user = await FindUser({ UserId: UserId });
    if (!user) throw new NotFoundError(`No User Found`);

    await DeleteNoteService(NoteId, user);
    return {
      Sucess: true,
      Message: "Note Deleted Successfully",
    };
  } catch (error) {
    throw error;
  }
};

const UpdateANoteService = async (UserId, NoteId, NoteTitle, NoteMessage) => {
  try {
    const user = await FindUser({ UserId });
    if (!user) throw new NotFoundError(`No Found Error`);

    const updatedNote = await UpdateANote(NoteId, NoteTitle, NoteMessage);
    return {
      Success: true,
      Message: "Note Updated Sucessfully",
      Note: updatedNote,
    };
  } catch (error) {
    throw error;
  }
};
module.exports = {
  GetAllNotesService,
  AddNoteService,
  DeleteNoteService,
  UpdateANoteService,
};
