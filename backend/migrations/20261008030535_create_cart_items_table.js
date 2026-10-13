exports.up = function (knex) {
  return knex.schema.createTable("cart_items", (table) => {
    table.increments("id").primary();
    table
      .integer("cart_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("carts")
      .onDelete("CASCADE");
    table
      .integer("product_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("products")
      .onDelete("CASCADE");
    table.string("size", 10);
    table.integer("quantity").defaultTo(1);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cart_items");
};
