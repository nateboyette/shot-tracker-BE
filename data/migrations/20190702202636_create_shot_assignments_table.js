exports.up = function(knex, Promise) {
  return knex.schema.createTable("shot_assignments", tbl => {
    tbl
      .increments("id")
      .primary()
      .notNullable()
      .unsigned();

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

    tbl
      .integer("employee_id")
      .notNullable()
      .unsigned();

    tbl
      .foreign("employee_id")
      .references("employee_id")
      .inTable("employees")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("shot_assignments");
};
