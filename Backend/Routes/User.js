const express = require("express");
const {
  Register,
  Login,
  updateAvatar,
  LoadUser,
} = require("../Controllers/User");
const { CheckAuthentication } = require("../Middleware/CheckAuth");
const {
  GetAllNotes,
  AddANote,
  DeleteANote,
  UpdateANote,
} = require("../Controllers/Note");
const { CheckValidAdmin } = require("../Middleware/CheckAdmin");
const { upload } = require("../Middleware/Multer");
const { UploadFile } = require("../utils/CloudUpload");

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
Router.put(
  "/updateAvatar",
  CheckAuthentication,
  upload.single("file"),
  UploadFile,
  updateAvatar
);

module.exports = Router;
