const express = require("express");
const { Register, Login } = require("../Controllers/User");
const { CheckAuthentication } = require("../Middleware/CheckAuth");
const {
  GetAllNotes,
  AddANote,
  DeleteANote,
  UpdateANote,
} = require("../Controllers/Note");
const { CheckValidAdmin } = require("../Middleware/CheckAdmin");

const Router = express.Router();

Router.post("/register", Register);
Router.put("/login", Login);
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

module.exports = Router;
