exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("notes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("notes").insert([
        {
          shot_task_id: 3,
          shot_id: 1,
          note: `Something is weird with your qt aspect ratio. Also, the squirt of blood added is in the handles. Have it happen sooner and color correct the blood, it’s too bright red. It should be darker`
        },
        {
          shot_task_id: 6,
          shot_id: 2,
          note: `can we get some droplets added to the non cut fingers also please?`
        },
        {
          shot_task_id: 9,
          shot_id: 3,
          note: `v001 preferred please move forward with this look.
If there’s no further work to be done, please rename and redeliver to submit for QT approval.`
        }
      ]);
    });
};
