exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        { task: "rotoscope" },
        { task: "tracking" },
        { task: "2d composition" },
        { task: "beauty" },
        { task: "3d composition" }
      ]);
    });
};
