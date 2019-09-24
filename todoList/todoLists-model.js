const db = require('../database/dbConfig.js');

module.exports = {
  // Let's rock!

  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('todo_lists');
}

function getById(id) {
  return db('todo_lists')
    .where({ id })
    .first();
}

function insert(list) {
  return db('todo_lists')
    .insert(todoData)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('todo_lists')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('todo_lists')
    .where('id', id)
    .del();
}