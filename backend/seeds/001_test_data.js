exports.seed = async function (knex) {
  await knex("order_items").del();
  await knex("orders").del();
  await knex("cart_items").del();
  await knex("carts").del();
  await knex("product_images").del();
  await knex("product_sizes").del();
  await knex("products").del();
  await knex("categories").del();
  await knex("password_resets").del();
  await knex("users").del();

  await knex("users").insert([
    {
      email: "admin@shop.ru",
      password_hash: "admin_hash",
      name: "Администратор",
      role: "admin",
    },
    {
      email: "user@shop.ru",
      password_hash: "user_hash",
      name: "Иван Иванов",
      phone: "+79990000000",
      address: "Москва, ул. Ленина, 1",
      role: "user",
    },
  ]);

  await knex("categories").insert([
    { name: "Футболки", slug: "t-shirts" },
    { name: "Джинсы", slug: "jeans" },
    { name: "Куртки", slug: "jackets" },
  ]);

  await knex("products").insert([
    {
      name: "Футболка белая",
      description: "Хлопок 100%",
      price: 1500,
      category_id: 1,
    },
    {
      name: "Футболка чёрная",
      description: "Хлопок 100%",
      price: 1500,
      category_id: 1,
    },
    {
      name: "Джинсы синие",
      description: "Классические",
      price: 3500,
      category_id: 2,
    },
    {
      name: "Куртка зимняя",
      description: "Тёплая",
      price: 7000,
      category_id: 3,
    },
  ]);

  await knex("product_sizes").insert([
    { product_id: 1, size: "S", stock: 5 },
    { product_id: 1, size: "M", stock: 10 },
    { product_id: 1, size: "L", stock: 3 },
    { product_id: 2, size: "M", stock: 7 },
    { product_id: 2, size: "L", stock: 2 },
    { product_id: 3, size: "30", stock: 4 },
    { product_id: 3, size: "32", stock: 6 },
    { product_id: 4, size: "M", stock: 2 },
    { product_id: 4, size: "L", stock: 1 },
  ]);

  await knex("product_images").insert([
    { product_id: 1, url: "/uploads/tshirt-white-1.jpg", sort_order: 0 },
    { product_id: 1, url: "/uploads/tshirt-white-2.jpg", sort_order: 1 },
    { product_id: 2, url: "/uploads/tshirt-black-1.jpg", sort_order: 0 },
    { product_id: 3, url: "/uploads/jeans-blue-1.jpg", sort_order: 0 },
    { product_id: 4, url: "/uploads/jacket-1.jpg", sort_order: 0 },
  ]);

  console.log("Тестовые данные добавлены");
};
