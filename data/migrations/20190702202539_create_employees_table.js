exports.up = function(knex, Promise) {
  return knex.schema.createTable("employees", tbl => {
    tbl
      .increments("employee_id")
      .notNullable()
      .primary();

    tbl
      .decimal("rate")
      .unsigned()
      .defaultTo(null);

    tbl
      .string("user_id")
      .unsigned()
      .notNullable()
      .unique();

    tbl
      .foreign("user_id")
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("employee_title_id")
      .unsigned()
      .notNullable();

    tbl
      .foreign("employee_title_id")
      .references("employee_title_id")
      .inTable("employee_titles")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("employees");
};
