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
  return db('todoLists');
}

function getById(id) {
  return db('todoLists')
    .where({ id })
    .first();
}

function insert(list) {
  return db('todoLists')
    .insert(todoData)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('todoLists')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('todoLists')
    .where('id', id)
    .del();
}