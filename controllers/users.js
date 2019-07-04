const router = require("express").Router();

const Users = require("../models/users_model");

router.get("/", async (req, res) => {
  const users = await Users.getAllUsers();
  res.status(200).json(users);
});

module.exports = router;
