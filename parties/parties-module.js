const db = require('../database/dbConfig.js');

module.exports = {
    getParties,
    getPartiesById,
    addParties,
    updateParties,
    deleteParties

  };

  function getParties() {
    return db('parties')
  }

  function getPartiesById(id) {
    return db('parties').where({ id }).first();
  }

  function addParties(party) {
    return db('parties')
      .insert(party)
      .then(ids => {
        return getPartiesById(ids[0]);
      })
  }

  function updateParties(id, changes) {
    return db('parties')
      .where({ id })
      .update(changes);
  }

  function deleteParties(id) {
    return db('parties')
      .where('id', id)
      .del();
  }