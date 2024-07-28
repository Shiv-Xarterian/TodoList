const express = require("express");
const dotenv = require("dotenv");

const server = express();
dotenv.config({
  path: ".env",
});

server.use(express.json());
require("./database");

server.use("/api/v1", require("./Routes/User"));

server.listen(process.env.Port, () => {
  console.log(`Server is Running on Port ${process.env.Port}`);
});
