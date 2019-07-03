exports.up = function(knex, Promise) {
  return knex.schema.createTable("companies", tbl => {
    tbl
      .increments("company_id")
      .notNullable()
      .primary();

    tbl.string("company_name", 255).notNullable();

    tbl.string("street_number", 255).defaultTo(null);

    tbl.string("address", 255).defaultTo(null);

    tbl.string("city", 255).defaultTo(null);

    tbl.string("state", 255).defaultTo(null);

    tbl.string("zip", 255).defaultTo(null);

    tbl.string("phone", 255).defaultTo(null);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("companies");
};
