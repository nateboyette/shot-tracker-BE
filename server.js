const express = require("express"),
  helmet = require("helmet"),
  cors = require("cors");

const server = express();

server.use(helmet(), express.json(), cors());

const errorHandler = require("./middleware/errorHandler");

server.get("/", (req, res) => {
  res.send(`It's working`);
});

server.use(errorHandler);

module.exports = server;
