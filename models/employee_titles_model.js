const db = require("../data/dbConfig");

module.exports = {
  getEmployeeTitles
};

function getEmployeeTitles() {
  return db("employee_titles");
}
