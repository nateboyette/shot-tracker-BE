exports.up = function(knex, Promise) {
  return knex.schema.createTable("shots", tbl => {
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

    tbl
      .integer("shot_status_id")
      .notNullable()
      .unsigned();

    tbl
      .foreign("shot_status_id")
      .references("status_id")
      .inTable("shot_statuses")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("shots");
};
