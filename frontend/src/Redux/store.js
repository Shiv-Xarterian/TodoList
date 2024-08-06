import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import TodoSlice from "./TodoSlice";

export const store = configureStore({
  reducer: {
    User: UserSlice,
    Note: TodoSlice,
  },
});
