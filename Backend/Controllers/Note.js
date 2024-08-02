const { Note } = require("../Models/Note");
const { User } = require("../Models/User");
const {
  GetAllNotesService,
  AddNoteService,
  DeleteNoteService,
  UpdateANoteService,
} = require("../Services/Note");
const { NotFoundError } = require("../utils/ErrorHandling");

const GetAllNotes = async (req, res) => {
  try {
    const UserId = req.id;
    if (!UserId) throw new NotFoundError(`No User Found`);
    const GetAllNotesResponse = await GetAllNotesService(UserId);
    return res.status(200).json(GetAllNotesResponse);
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

    if (!NoteTitle || !NoteMessage)
      throw new NotFoundError(`Notes Detail Missing`);

    const AddNoteResponse = await AddNoteService(
      UserId,
      NoteTitle,
      NoteMessage
    );
    return res.status(200).json(AddNoteResponse);
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
    if (!NoteId) throw new NotFoundError(`Not A Valid NoteId`);
    const DeleteANoteResponse = await DeleteNoteService(UserId, NoteId);
    return res.status(200).json(DeleteANoteResponse);
  } catch (error) {
    return res.status(error.status || 500).json({
      Success: false,
      Error: error.message,
    });
  }
};

const UpdateANote = async (req, res) => {
  try {
    const NoteId = req.params.id;
    const { NoteTitle, NoteMessage } = req.body;

    if (!NoteId) throw NotFoundError(`Invalid Note`);

    const UpdateNoteResponse = await UpdateANoteService(
      req.id,
      NoteId,
      NoteTitle,
      NoteMessage
    );

    return res.status(200).json(UpdateNoteResponse);
  } catch (error) {
    return res.status(500).json({
      Success: false,
      Error: error.message,
    });
  }
};

module.exports = { GetAllNotes, AddANote, DeleteANote, UpdateANote };
