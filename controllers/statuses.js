const router = require("express").Router();

const Statuses = require("../models/statuses_model");

router.get("/", async (req, res) => {
  try {
    const statuses = await Statuses.getStatuses();
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
});

module.exports = router;
