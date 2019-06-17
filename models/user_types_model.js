const db = require("../data/dbConfig");

module.exports = {
  getUserTypes
};

function getUserTypes() {
  return db("user_types");
}
