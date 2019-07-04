const db = require("../data/dbConfig");

module.exports = {
  getShotTasks
};

function getShotTasks() {
  return db("shot_tasks");
}
