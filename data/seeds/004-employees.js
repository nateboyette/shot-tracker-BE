exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("employees")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("employees").insert([
        { rate: 22.5, user_id: 1, employee_title_id: 1 },
        { rate: 22.5, user_id: 2, employee_title_id: 1 },
        { rate: 20.0, user_id: 3, employee_title_id: 3 },
        { rate: 35.0, user_id: 4, employee_title_id: 2 }
      ]);
    });
};
