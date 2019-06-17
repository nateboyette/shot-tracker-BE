const router = require("express").Router();

const Users = require("../models/usersModel");

router.get("/", async (req, res) => {
  try {
    const users = await Users.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
});

module.exports = router;
