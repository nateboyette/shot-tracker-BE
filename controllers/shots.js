const router = require("express").Router();

const Shots = require("../models/shots_model");

router.get("/", async (req, res) => {
  try {
    const shots = await Shots.getShots();
    res.status(200).json(shots);
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
});

module.exports = router;
