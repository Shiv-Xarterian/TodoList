import axios from "axios";
import { NoteError, NoteLoading, NoteUpdate } from "../Redux/TodoSlice";

export const getAllNotes = async (dispatch) => {
  try {
    dispatch(NoteLoading());
    const { data } = await axios.get(
      `${process.env.REACT_APP_APICALL}/allnotes`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch(NoteUpdate({ Notes: data.Notes, Message: data.Message }));
  } catch (error) {
    dispatch(NoteError(error.response.data.Error));
  }
};
