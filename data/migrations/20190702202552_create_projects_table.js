exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", tbl => {
    tbl
      .increments("project_id")
      .notNullable()
      .primary();

    tbl.string("project_name", 255).notNullable();

    tbl.string("description", 255).defaultTo(null);

    tbl
      .decimal("budget")
      .unsigned()
      .defaultTo(null);

    tbl.date("start_date").defaultTo(null);
    tbl.date("due_date").defaultTo(null);

    tbl
      .integer("company_id")
      .unsigned()
      .notNullable();

    tbl
      .foreign("company_id")
      .references("company_id")
      .inTable("companies")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
