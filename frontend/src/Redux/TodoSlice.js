import { createSlice } from "@reduxjs/toolkit";

const Note = createSlice({
  name: "Note",
  initialState: {
    Notes: [],
    Message: "",
    Error: "",
    Loading: "",
  },
  reducers: {
    NoteLoading: (state, action) => {
      state.Loading = true;
    },
    NoteUpdate: (state, action) => {
      state.Notes = action.payload.Notes;
      state.Message = action.payload.Message;
      state.Loading = false;
    },
    AddANote: (state, action) => {
      state.Notes = [...state.Notes, action.payload.Note];
      state.Message = action.payload.Message;
      state.Loading = false;
    },
    NoteError: (state, action) => {
      state.Error = action.payload;
      state.Loading = false;
    },
  },
});

export const { NoteLoading, NoteUpdate, AddANote, NoteError } = Note.actions;
export default Note.reducer;
