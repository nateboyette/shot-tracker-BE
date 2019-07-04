exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("employee_titles")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("employee_titles").insert([
        { employee_title_id: 1, employee_title: "VFX Generalist" },
        { employee_title_id: 2, employee_title: "VFX Supervisor" },
        { employee_title_id: 3, employee_title: "Roto Artist" }
      ]);
    });
};
