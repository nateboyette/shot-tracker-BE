const db = require("../data/dbConfig");

module.exports = {
  getAllUsers
};

function getAllUsers() {
  return db("users").select();
}
