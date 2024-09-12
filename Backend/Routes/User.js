import express from "express";
import { LoadUser, Login, Register } from "../Controllers/User.js";
import {
  AddANote,
  DeleteANote,
  GetAllNotes,
  UpdateANote,
} from "../Controllers/Note.js";
import { CheckAuthentication } from "../Middleware/CheckAuth.js";
import { CheckValidAdmin } from "../Middleware/CheckAdmin.js";

const Router = express.Router();

Router.post("/register", Register);
Router.put("/login", Login);
Router.get("/loaduser", CheckAuthentication, LoadUser);
Router.get("/allnotes", CheckAuthentication, GetAllNotes);
Router.post("/addnote", CheckAuthentication, AddANote);
Router.delete("/deletenote/:id", CheckAuthentication, DeleteANote);
Router.put("/updatenote/:id", CheckAuthentication, UpdateANote);
Router.get(
  "/allnotes/admin",
  CheckAuthentication,
  CheckValidAdmin,
  GetAllNotes
);
// Router.put(
//   "/updateAvatar",
//   CheckAuthentication,
//   upload.single("file"),
//   UploadFile,
//   updateAvatar
// );

export { Router };
