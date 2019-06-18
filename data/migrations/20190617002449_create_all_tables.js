exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("companies", tbl => {
      tbl
        .increments("company_id")
        .notNullable()
        .primary();

      tbl.string("company_name", 255).notNullable();

      tbl
        .string("street_number", 255)
        .notNullable()
        .defaultTo(null);

      tbl
        .string("address", 255)
        .notNullable()
        .defaultTo(null);

      tbl
        .string("city", 255)
        .notNullable()
        .defaultTo(null);

      tbl
        .string("state", 255)
        .notNullable()
        .defaultTo(null);

      tbl
        .string("zip", 255)
        .notNullable()
        .defaultTo(null);
    })
    .createTable("user_types", tbl => {
      tbl
        .increments("userType_id")
        .notNullable()
        .primary();

      tbl
        .string("user_type", 255)
        .notNullable()
        .unique();
    })
    .createTable("users", tbl => {
      tbl
        .increments("user_id")
        .notNullable()
        .primary();

      tbl
        .string("firstName", 255)
        .notNullable()
        .defaultTo(null);

      tbl
        .string("lastName", 255)
        .notNullable()
        .defaultTo(null);

      tbl
        .string("email", 255)
        .notNullable()
        .unique();

      tbl
        .integer("company_id")
        .unsigned()
        .defaultTo(null);

      tbl
        .foreign("company_id")
        .references("company_id")
        .inTable("companies")
        .onDelete("CASCADE");

      tbl
        .integer("userType_id")
        .unsigned()
        .defaultTo(null);

      tbl
        .foreign("userType_id")
        .references("userType_id")
        .inTable("user_types")
        .onDelete("CASCADE");
    })
    .createTable("employee_titles", tbl => {
      tbl
        .increments("employee_title_id")
        .primary()
        .notNullable();

      tbl.string("employee_title", 255).notNullable();
    })

    .createTable("employees", tbl => {
      tbl
        .increments("employee_id")
        .notNullable()
        .primary();

      tbl
        .integer("rate")
        .unsigned()
        .defaultTo(null);

      tbl
        .string("user_id")
        .unsigned()
        .notNullable();

      tbl
        .foreign("user_id")
        .references("user_id")
        .inTable("users");
    })
    .createTable("projects", tbl => {
      tbl
        .increments("project_id")
        .notNullable()
        .primary();

      tbl
        .string("project_name", 255)
        .notNullable()
        .defaultTo(null);

      tbl.string("description", 255).defaultTo(null);

      tbl.decimal("budget").defaultTo(null);

      tbl.date("start_date").defaultTo(null);
      tbl.date("due_date").defaultTo(null);
    })

    .createTable("shots", tbl => {
      tbl
        .increments("shot_id")
        .notNullable()
        .primary();

      tbl
        .integer("shot_sequence")
        .unsigned()
        .defaultTo(null);

      tbl
        .integer("shot_number")
        .notNullable()
        .unsigned();

      tbl.string("shot_description", 255).defaultTo(null);

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
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("users")
    .dropTable("companies")
    .dropTable("user_types")
    .dropTable("employee_titles")
    .dropTable("employees")
    .dropTable("projects")
    .dropTable("shots");
};
