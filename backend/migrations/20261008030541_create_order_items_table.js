exports.up = function (knex) {
  return knex.schema.createTable("order_items", (table) => {
    table.increments("id").primary();
    table
      .integer("order_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("orders")
      .onDelete("CASCADE");
    table
      .integer("product_id")
      .unsigned()
      .references("id")
      .inTable("products")
      .onDelete("SET NULL");
    table.string("size", 10);
    table.integer("quantity");
    table.decimal("price", 10, 2);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("order_items");
};
