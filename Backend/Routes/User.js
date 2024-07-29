const express = require("express");
const { Register, Login } = require("../Controllers/User");
const { CheckAuthentication } = require("../Middleware/CheckAuth");
const {
  GetAllNotes,
  AddANote,
  DeleteANote,
  UpdateANote,
} = require("../Controllers/Note");

const Router = express.Router();

Router.post("/register", Register);
Router.put("/login", Login);
Router.get("/allnotes", CheckAuthentication, GetAllNotes);
Router.post("/addnote", CheckAuthentication, AddANote);
Router.delete("/deletenote/:id", CheckAuthentication, DeleteANote);
Router.put("/updatenote/:id", CheckAuthentication, UpdateANote);
module.exports = Router;
