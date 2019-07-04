const db = require("../data/dbConfig");

module.exports = {
  getEmployees
};

function getEmployees() {
  return db("employees");
}
