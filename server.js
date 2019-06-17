const express = require("express"),
  helmet = require("helmet"),
  cors = require("cors");

const server = express();

server.use(helmet(), express.json(), cors());

const errorHandler = require("./middleware/errorHandler");

// Routes
const usersRouter = require("./controllers/users");
const companiesRouter = require("./controllers/companies");
// Endpoints
server.use("/api/users", usersRouter);
server.use("api/companies", companiesRouter);

server.get("/", async (req, res) => {
  res.status(200).json({
    api: "up"
  });
});

server.use(errorHandler);

module.exports = server;
