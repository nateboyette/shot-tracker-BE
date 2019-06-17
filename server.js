const express = require("express"),
  helmet = require("helmet"),
  cors = require("cors");

const server = express();

server.use(helmet(), express.json(), cors());

const errorHandler = require("./middleware/errorHandler");

const Users = require("./models/usersModel");

server.get("/", async (req, res) => {
  try {
    const users = await Users.getAllUsers();

    console.log("USERS", users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
  // res.send(`It's working`);
});

server.use(errorHandler);

module.exports = server;
