const router = require("express").Router();

const UserTypes = require("../models/userTypesModel");

router.get("/", async (req, res) => {
  try {
    const userTypes = await UserTypes.getUserTypes();

    res.status(200).json(userTypes);
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
});

module.exports = router;
