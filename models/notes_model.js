const db = require("../data/dbConfig");

module.exports = {
  getNotes
};

function getNotes() {
  return db("notes");
}
