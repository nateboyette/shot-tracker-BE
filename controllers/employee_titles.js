const router = require("express").Router();

const EmployeeTitles = require("../models/employee_titles_model");

router.get("/", async (req, res) => {
  try {
    const employeeTitles = await EmployeeTitles.getEmployeeTitles();
    res.status(200).json(employeeTitles);
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
});

module.exports = router;
