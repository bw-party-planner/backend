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
  return db('shoppingLists');
}

function getById(id) {
  return db('shoppingLists')
    .where({ id })
    .first();
}

function insert(list) {
  return db('shoppingLists')
    .insert(listData)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('shoppingLists')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('shoppingLists')
    .where('id', id)
    .del();
}