exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Westworld",
          description: "A show about robots taking over the world",
          client_name: "HBO",
          client_email: "email@email.com",
          client_phone: "1111111111",
          budget: 20000.0,
          start_date: "20190701",
          due_date: "20190801",
          company_id: 1
        },
        {
          project_name: "The Walking Dead",
          description: "A show about zombies taking over the world",
          client_name: "AMC",
          client_email: "email@email.com",
          client_phone: "2222222222",
          budget: 30000.0,
          start_date: "201908020",
          due_date: "20191001",
          company_id: 1
        }
      ]);
    });
};
