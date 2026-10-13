exports.up = function (knex) {
  return knex.schema.createTable("product_images", (table) => {
    table.increments("id").primary();
    table
      .integer("product_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("products")
      .onDelete("CASCADE");
    table.text("url").notNullable();
    table.integer("sort_order").defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("product_images");
};
