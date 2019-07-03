exports.up = function(knex, Promise) {
  return knex.schema.createTable("shot_tasks", tbl => {
    tbl
      .increments("id")
      .primary()
      .notNullable()
      .unsigned();

    tbl.integer("shot_id").notNullable();

    tbl
      .foreign("shot_id")
      .references("shot_id")
      .inTable("shots")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.integer("task_id").notNullable();

    tbl
      .foreign("task_id")
      .references("task_id")
      .inTable("tasks")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.integer("task_status_id").notNullable();

    tbl
      .foreign("task_status_id")
      .references("status_id")
      .inTable("statuses")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("shot_tasks");
};
