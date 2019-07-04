exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user_types")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("user_types").insert([
        {
          user_type: "Admin"
        },
        {
          user_type: "Employee"
        },
        {
          user_type: "Client"
        }
      ]);
    });
};
