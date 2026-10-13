exports.up = function (knex) {
  return knex.schema.createTable("password_resets", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.string("token", 255).notNullable();
    table.timestamp("expires_at").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("password_resets");
};
