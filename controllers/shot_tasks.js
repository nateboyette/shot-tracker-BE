const router = require("express").Router();

const ShotTasks = require("../models/shot_tasks_model");

router.get("/", async (req, res) => {
  try {
    const shotTasks = await ShotTasks.getShotTasks();
    res.status(200).json(shotTasks);
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
});

module.exports = router;
