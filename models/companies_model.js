const db = require("../data/dbConfig");

module.exports = {
  getAllCompanies
};

function getAllCompanies() {
  return db("companies");
}
