
exports.up = function(knex) {
  return knex.schema
  .createTable('users', users => {
    users.increments();
    users
      .string('username', 255)
      .notNullable()
      .unique();
    users.string('password', 255).notNullable();
  })
  .createTable('categories', tbl => {
    tbl.increments();
    tbl.string('category').notNullable();
  })
  .createTable('parties', tbl => {
    tbl.increments();
    tbl.string('party_name').notNullable();
    tbl.string('guests').notNullable();
    tbl.integer('theme')
    tbl.date('date')
    tbl.string('budget')
    tbl
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('categories')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
  .createTable('pictures', tbl => {
    tbl.increments();
    tbl.string('url').notNullable();
    tbl
        .integer('party_id')
        .unsigned()
        .references('id')
        .inTable('parties')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
  .createTable('shopping_lists', tbl => {
    tbl.increments();
    tbl.string('item').notNullable();
    tbl.string('price').notNullable();
    tbl
        .integer('party_id')
        .unsigned()
        .references('id')
        .inTable('parties')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
  .createTable('todo_lists', tbl => {
    tbl.increments();
    tbl.string('task').notNullable();
    tbl
        .integer('party_id')
        .unsigned()
        .references('id')
        .inTable('parties')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('todo_lists')
    .dropTableIfExists('shopping_lists')
    .dropTableIfExists('pictures')
    .dropTableIfExists('parties')
    .dropTableIfExists('categories')
    .dropTableIfExists('users');
};
