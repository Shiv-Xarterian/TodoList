const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const server = express();

dotenv.config({
  path: ".env",
});

server.use(express.json());
server.use(cors());

require("./database");
require("./Cloudinary");

server.use("/api/v1", require("./Routes/User"));

server.listen(process.env.Port, () => {
  console.log(`Server is Running on Port ${process.env.Port}`);
});
