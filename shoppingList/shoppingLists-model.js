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
  return db('shopping_lists');
}

function getById(id) {
  return db('shopping_lists')
    .where({ id })
    .first();
}

function insert(list) {
  return db('shopping_lists')
    .insert(listData)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('shopping_lists')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('shopping_lists')
    .where('id', id)
    .del();
}