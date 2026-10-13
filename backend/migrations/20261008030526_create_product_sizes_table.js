exports.up = function (knex) {
  return knex.schema.createTable("product_sizes", (table) => {
    table.increments("id").primary();
    table
      .integer("product_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("products")
      .onDelete("CASCADE");
    table.string("size", 10).notNullable();
    table.integer("stock").defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("product_sizes");
};
