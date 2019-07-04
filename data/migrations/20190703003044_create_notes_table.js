exports.up = function(knex, Promise) {
  return knex.schema.createTable("notes", tbl => {
    // if inserting with a task id
    // ===> then the note should be applied to the task
    // Otherwise use the shot id to apply a general note to the shot

    tbl
      .increments("id")
      .primary()
      .notNullable()
      .unsigned();

    tbl.integer("shot_task_id").unsigned();

    tbl
      .foreign("shot_task_id")
      .references("id")
      .inTable("shot_tasks")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("shot_id")
      .notNullable()
      .unsigned();

    tbl
      .foreign("shot_id")
      .references("shot_id")
      .inTable("shots")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.string("note", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("notes");
};
