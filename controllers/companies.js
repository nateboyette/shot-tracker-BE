const router = require("express").Router();

const Users = require("../models/companiesModel");

router.get("/", async (req, res) => {
  try {
    const companies = await Users.getAllCompanies();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
});

module.exports = router;
