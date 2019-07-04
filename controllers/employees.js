const router = require("express").Router();

const Employees = require("../models/employees_model");

router.get("/", async (req, res) => {
  try {
    const employees = await Employees.getEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
});

module.exports = router;
