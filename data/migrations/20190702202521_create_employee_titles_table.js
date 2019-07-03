exports.up = function(knex, Promise) {
  return knex.schema.createTable("employee_titles", tbl => {
    tbl
      .increments("employee_title_id")
      .primary()
      .notNullable();

    tbl.string("employee_title", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("employee_titles");
};
