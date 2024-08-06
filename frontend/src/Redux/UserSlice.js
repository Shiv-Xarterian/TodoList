import { createSlice } from "@reduxjs/toolkit";

const User = createSlice({
  name: "User",
  initialState: {
    Loading: false,
    Error: "",
    User: "",
    Message: "",
  },
  reducers: {
    LoadingState: (state, action) => {
      state.Loading = true;
    },
    UserUpdate: (state, action) => {
      state.User = action.payload.User;
      state.Message = action.payload.Message;
      state.Loading = false;
    },
    ErrorCatchUser: (state, action) => {
      state.Error = action.payload;
      state.Loading = false;
    },
    ClearErrorAndMessage: (state, action) => {
      state.Error = "";
      state.Message = "";
    },
  },
});

export const {
  LoadingState,
  UserUpdate,
  ErrorCatchUser,
  ClearErrorAndMessage,
} = User.actions;
export default User.reducer;
