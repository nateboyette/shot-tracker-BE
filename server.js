const express = require("express"),
  helmet = require("helmet"),
  cors = require("cors");

const server = express();

server.use(helmet(), express.json(), cors());

const errorHandler = require("./middleware/errorHandler");

// Routes
const usersRouter = require("./controllers/users");
const companiesRouter = require("./controllers/companies");
const userTypesRouter = require("./controllers/user_type");
const employeeTitlesRouter = require("./controllers/employee_titles");
const employeesRouter = require("./controllers/employees");
const projectsRouter = require("./controllers/projects");
const statusesRouter = require("./controllers/statuses");
const shotsRouter = require("./controllers/shots");
const tasksRouter = require("./controllers/tasks");
const shotTasksRouter = require("./controllers/shot_tasks");
const notesRouter = require("./controllers/notes");
const employeeHoursRouter = require("./controllers/employee_hours");

// Endpoints
server.use("/api/users", usersRouter);
server.use("/api/companies", companiesRouter);
server.use("/api/user-types", userTypesRouter);
server.use("/api/employee-titles", employeeTitlesRouter);
server.use("/api/employees", employeesRouter);
server.use("/api/projects", projectsRouter);
server.use("/api/statuses", statusesRouter);
server.use("/api/shots", shotsRouter);
server.use("/api/tasks", tasksRouter);
server.use("/api/shot-tasks", shotTasksRouter);
server.use("/api/notes", notesRouter);
server.use("/api/employee-hours", employeeHoursRouter);

server.get("/", async (req, res) => {
  res.status(200).json({
    api: "up"
  });
});

server.use(errorHandler);

module.exports = server;
