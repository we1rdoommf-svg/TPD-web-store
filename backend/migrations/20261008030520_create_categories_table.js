exports.up = function (knex) {
  return knex.schema.createTable("categories", (table) => {
    table.increments("id").primary();
    table.string("name", 100).notNullable();
    table.string("slug", 100).unique().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("categories");
};
