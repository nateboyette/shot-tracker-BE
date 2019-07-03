exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
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
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
