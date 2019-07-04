const db = require("../data/dbConfig");

module.exports = {
  getStatuses
};

function getStatuses() {
  return db("statuses");
}
