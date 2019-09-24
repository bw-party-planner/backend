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
  return db('categories');
}

function getById(id) {
  return db('categories')
    .where({ id })
    .first();
}

function insert(category) {
  return db('categories')
    .insert(category)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('categories')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('categories')
    .where('id', id)
    .del();
}