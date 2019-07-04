exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("shot_tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("shot_tasks").insert([
        { shot_id: 1, task_id: 1, task_status_id: 2, employee_id: 1 },
        { shot_id: 1, task_id: 2, task_status_id: 1, employee_id: 1 },
        { shot_id: 1, task_id: 3, task_status_id: 1, employee_id: 2 },
        { shot_id: 2, task_id: 1, task_status_id: 2, employee_id: 3 },
        { shot_id: 2, task_id: 2, task_status_id: 3, employee_id: 3 },
        { shot_id: 2, task_id: 3, task_status_id: 1, employee_id: 4 },
        { shot_id: 3, task_id: 1, task_status_id: 2, employee_id: 2 },
        { shot_id: 3, task_id: 2, task_status_id: 1, employee_id: 3 },
        { shot_id: 3, task_id: 3, task_status_id: 1, employee_id: 3 },
        { shot_id: 4, task_id: 1, task_status_id: 2, employee_id: 1 },
        { shot_id: 4, task_id: 2, task_status_id: 1, employee_id: 1 },
        { shot_id: 4, task_id: 3, task_status_id: 1, employee_id: 2 },
        { shot_id: 5, task_id: 1, task_status_id: 2, employee_id: 4 },
        { shot_id: 5, task_id: 2, task_status_id: 1, employee_id: 3 },
        { shot_id: 5, task_id: 3, task_status_id: 1, employee_id: 1 }
      ]);
    });
};
