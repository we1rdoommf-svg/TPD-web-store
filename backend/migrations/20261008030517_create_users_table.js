exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("email", 255).unique().notNullable();
    table.string("password_hash", 255).notNullable();
    table.string("name", 100);
    table.string("phone", 20);
    table.text("address");
    table.string("role", 20).defaultTo("user");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
