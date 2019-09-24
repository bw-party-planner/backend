const db = require('../database/dbConfig.js');

module.exports = {
    getParties,
    getPartyById,
    addParty,
    updateParty,
    deleteParty,
    getShopingList,
    getTodoList,
    getPictures
  };

  function getParties() {
    return db('parties')
  }

  function getPartyById(id) {
    return db('parties').where({ id }).first();
  }

  function addParty(party) {
    return db('parties')
      .insert(party)
      .then(ids => {
        return getPartyById(ids[0]);
      })
  }

  function updateParty(id, changes) {
    return db('parties')
      .where({ id })
      .update(changes);
  }

  function deleteParty(id) {
    return db('parties')
      .where('id', id)
      .del();
  }

  function getShopingList(party_id) {
    return db('parties as P')
      .join('shopping_lists as S', 'P.id', 'S.party_id')
      .select('S.item', 'S.price')
      .where('S.party_id', party_id)
  }

  function getTodoList(party_id) {
    return db('parties as P')
      .join('todo_lists as T', 'P.id', 'T.party_id')
      .select('T.task')
      .where('T.party_id', party_id)
  }

  function getPictures(party_id) {
    return db('parties as P')
    .join('pictures as PT', 'P.id', 'PT.party_id')
    .select('PT.url')
    .where('PT.party_id', party_id)
  }