import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Router } from "./Routes/User.js";
import "./newrelic.cjs";

const server = express();

dotenv.config();

server.use(express.json());
server.use(cors());

import { connectdatabase } from "./database.js";
connectdatabase();

server.use("/api/v1", Router);

server.listen(process.env.Port, () => {
  console.log(`Server is Running on Port ${process.env.Port}`);
});
