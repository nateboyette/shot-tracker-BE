exports.up = function(knex, Promise) {
  return knex.schema.createTable("employee_hours", tbl => {
    tbl
      .increments("id")
      .primary()
      .notNullable()
      .unsigned();

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

    tbl.date("day").notNullable();

    tbl
      .integer("project_id")
      .notNullable()
      .unsigned();

    tbl
      .foreign("project_id")
      .references("project_id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl
      .integer("hours_spent")
      .notNullable()
      .unsigned();

    tbl.boolean("overtime_hours");

    tbl.boolean("doubleTime_hours");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("employee_hours");
};
