
exports.up = function(knex) {
  return knex.schema
  .createTable("users", users => {
    users.increments();
    users
      .string("username", 255)
      .notNullable()
      .unique();
    users.string("password", 255).notNullable();
  })
  .createTable("shopping_lists", tbl => {
    tbl.increments();
  })
  .createTable("todo_lists", tbl => {
    tbl.increments();
  })
  .createTable("parties", tbl => {
    tbl.increments();
    tbl.string("party_name").notNullable();
    tbl.string("guests").notNullable();
    tbl.string("theme")
    tbl.string("date")
    tbl.integer("budget")
    tbl
      .integer("shopping_lists_id")
      .unsigned()
      .references("id")
      .inTable("shopping_lists")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    tbl
      .integer("todo_lists_id")
      .unsigned()
      .references("id")
      .inTable("todo_lists")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      tbl
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
  })
  .createTable("shopping_list_items", tbl => {
    tbl.increments();
    tbl.string("item").notNullable();
    tbl.integer("price").notNullable();
    tbl.boolean("purchased").defaultTo(false)
    tbl
      .integer("shopping_list_id")
      .unsigned()
      .references("id")
      .inTable("shopping_lists")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
  .createTable("todo_task", tbl => {
    tbl.increments();
    tbl.string("task").notNullable()
    tbl.boolean("completed").defaultTo(false)
    tbl
      .integer("todo_lists_id")
      .unsigned()
      .references("id")
      .inTable("todo_lists")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("todo_task")
    .dropTableIfExists("shopping_list_items")
    .dropTableIfExists("parties")
    .dropTableIfExists("todo_lists")
    .dropTableIfExists("shopping_lists")
    .dropTableIfExists("users");
};
