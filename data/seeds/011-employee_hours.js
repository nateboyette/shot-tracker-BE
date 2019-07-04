exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("employee_hours")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("employee_hours").insert([
        {
          employee_id: 1,
          day: "20190702",
          project_id: 1,
          hours_spent: 8,
          overtime_hours: false,
          doubleTime_hours: false
        },
        {
          employee_id: 2,
          day: "20190702",
          project_id: 1,
          hours_spent: 8,
          overtime_hours: false,
          doubleTime_hours: false
        },
        {
          employee_id: 3,
          day: "20190702",
          project_id: 1,
          hours_spent: 8,
          overtime_hours: false,
          doubleTime_hours: false
        },
        {
          employee_id: 4,
          day: "20190702",
          project_id: 1,
          hours_spent: 8,
          overtime_hours: false,
          doubleTime_hours: false
        }
      ]);
    });
};
