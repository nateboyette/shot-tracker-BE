exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("shots")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("shots").insert([
        {
          shot_sequence: 001,
          shot_number: 100,
          shot_description:
            "Roto face and hands. Remove wires. Comp Background.",
          project_id: 1,
          shot_status_id: 2
        },
        {
          shot_sequence: 001,
          shot_number: 110,
          shot_description: "Roto face. Cleanup under eyes, smile lines.",
          project_id: 1,
          shot_status_id: 3
        },
        {
          shot_sequence: 001,
          shot_number: 120,
          shot_description:
            "Roto face. Cleanup under eyes, smile lines, hair line.",
          project_id: 1,
          shot_status_id: 3
        },
        {
          shot_sequence: 001,
          shot_number: 130,
          shot_description: "Comp background. Remove lights in background.",
          project_id: 1,
          shot_status_id: 8
        },
        {
          shot_sequence: 105,
          shot_number: 230,
          shot_description:
            "Comp effects. Remove greenscreen, comp background.",
          project_id: 2,
          shot_status_id: 3
        }
      ]);
    });
};
