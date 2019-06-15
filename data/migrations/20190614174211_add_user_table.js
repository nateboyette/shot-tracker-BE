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

    // tbl
    //   .foreign("company_id")
    //   .references("company_id")
    //   .inTable("companies")
    //   .onDelete("CASCADE");

    // tbl
    //   .foreign("user_type_id")
    //   .references("user_type_id")
    //   .inTable("user_types");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
