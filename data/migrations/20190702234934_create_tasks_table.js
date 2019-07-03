exports.up = function(knex, Promise) {
  return knex.schema.createTable("tasks", tbl => {
    tbl
      .increments("task_id")
      .notNullable()
      .primary();

    tbl
      .string("task", 255)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("tasks");
};
