const db = require("../data/dbConfig");

module.exports = {
  getShots
};

function getShots() {
  return db("shots");
}
