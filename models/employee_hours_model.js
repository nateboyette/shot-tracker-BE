const db = require("../data/dbConfig");

module.exports = {
  getEmployeeHours
};

function getEmployeeHours() {
  return db("employee_hours");
}
