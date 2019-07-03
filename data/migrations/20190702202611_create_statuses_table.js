exports.up = function(knex, Promise) {
  return knex.schema.createTable("statuses", tbl => {
    tbl
      .increments("status_id")
      .primary()
      .notNullable();

    tbl
      .string("shot_status", 255)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("statuses");
};
