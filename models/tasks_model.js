const db = require("../data/dbConfig");

module.exports = {
  getTasks
};

function getTasks() {
  return db("tasks");
}
