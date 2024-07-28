const express = require("express");
const { Register } = require("../Controllers/User");

const Router = express.Router();

Router.post("/register", Register);

module.exports = Router;
