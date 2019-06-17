const express = require("express"),
  helmet = require("helmet"),
  cors = require("cors");

const server = express();

server.use(helmet(), express.json(), cors());

const errorHandler = require("./middleware/errorHandler");

const Users = require("./models/usersModel");

server.get("/", async (req, res) => {
  res.status(200).json({
    api: "up"
  });
});

server.use(errorHandler);

module.exports = server;
