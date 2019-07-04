const router = require("express").Router();

const Tasks = require("../models/tasks_model");

router.get("/", async (req, res) => {
  try {
    const tasks = await Tasks.getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
});

module.exports = router;
