exports.up = function(knex, Promise) {
  return knex.schema.createTable("companies", tbl => {
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
  });
};

exports.down = function(knex, Promise) {};
