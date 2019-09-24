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
  return db('pictures');
}

function getById(id) {
  return db('pictures')
    .where({ id })
    .first();
}

function insert(picture) {
  return db('pictures')
    .insert(pictureData)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('picures')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('pictures')
    .where('id', id)
    .del();
}