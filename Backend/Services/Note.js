import {
  CreateANote,
  DeleteANote,
  GetAllNotesAsAdmin,
  UpdateANote,
} from "../DataBase/Note.js";
import { FindUser } from "../DataBase/User.js";
import { NotFoundError } from "../utils/ErrorHandling.js";

export const GetAllNotesService = async (UserId) => {
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

export const AddNoteService = async (UserId, NoteTitle, NoteMessage) => {
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

export const DeleteNoteService = async (UserId, NoteId) => {
  try {
    const user = await FindUser({ UserId: UserId });
    if (!user) throw new NotFoundError(`No User Found`);

    await DeleteANote(NoteId, user);
    return {
      Sucess: true,
      Message: "Note Deleted Successfully",
    };
  } catch (error) {
    throw error;
  }
};

export const UpdateANoteService = async (
  UserId,
  NoteId,
  NoteTitle,
  NoteMessage
) => {
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
