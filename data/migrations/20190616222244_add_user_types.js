exports.up = function(knex, Promise) {
  return knex.schema.createTable("user_types", tbl => {
    tbl
      .increments("userType_id")
      .notNullable()
      .primary();

    tbl
      .string("user_type", 255)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {};
