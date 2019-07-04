const router = require("express").Router();

const EmployeeHours = require("../models/employee_hours_model");

router.get("/", async (req, res) => {
  try {
    const employeeHours = await EmployeeHours.getEmployeeHours();
    res.status(200).json(employeeHours);
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
});

module.exports = router;
