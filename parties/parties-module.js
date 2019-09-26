const db = require('../database/dbConfig.js');

module.exports = {
    getParties,
    getPartyById,
    addParty,
    updateParty,
    deleteParty,
    getShopingList,
    getItemById,
    getShopingListById,
    addShopingList,
    updateItem,
    deleteItem,
    getTodoList,
    getTaskById,
    updateTask,
    deleteTask,
    getTodoListById,
    addTodoList,
    getPictures,
    getPicById,
    updatePic,
    addPicture,
    deletePicture,
  };

  function getParties() {
    return db('parties')
  }

  function getPartyById(id) {
    return db('parties').where({ id }).first();
  }

  function addParty(party) {
    return db('parties')
      .insert(party, 'id')
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
      .select('S.id','S.item', 'S.price')
      .where('S.party_id', party_id)
  }

  function getItemById(id) {
    return db('shopping_lists').where({ id }).first();
  }

  function getShopingListById(id) {
    return db('shopping_lists as S')
      .join('parties as P', 'S.id', 'P.id' )
      .select('S.id','S.item', 'S.price' )
      .where({'P.id': id}).first();
  }

  function addShopingList(list) {
    return db('shopping_lists')
      .insert(list)
      .then(ids => {
        return getShopingListById(ids[0]);
      })
  }
  function updateItem(id, changes) {
    return db('shopping_lists')
      .where({ id })
      .update(changes);
  }

  function deleteItem(id) {
    return db('shopping_lists')
      .where('id', id)
      .del();
  }
 

  function getTodoListById(id) {
    return db('todo_lists as T')
      .join('parties as P', 'T.id', 'P.id' )
      .select('T.id','T.task')
      .where({'T.id': id}).first();
  }
  function getTaskById(id) {
    return db('todo_lists').where({ id }).first();
  }
  function updateTask(id, changes) {
    return db('todo_lists')
      .where({ id })
      .update(changes);
  }

  function deleteTask(id) {
    return db('todo_lists')
      .where('id', id)
      .del();
  }
  function addTodoList(list) {
    return db('todo_lists')
      .insert(list)
      .then(ids => {
        return getTodoListById(ids[0]);
      })
  }

  function getTodoList(party_id) {
    return db('parties as P')
      .join('todo_lists as T', 'P.id', 'T.party_id')
      .select('T.id','T.task')
      .where('T.party_id', party_id)
  }

  function getPictures(party_id) {
    return db('parties as P')
    .join('pictures as PT', 'P.id', 'PT.party_id')
    .select('PT.id','PT.url')
    .where('PT.party_id', party_id)
  }


  function getPicById(id) {
    return db('pictures').where({ id }).first();
  }
  function updatePic(id, changes) {
    return db('pictures')
      .where({ id })
      .update(changes);
  }
  function getPicturestById(id) {
    return db('pictures as PT')
      .join('parties as P', 'PT.id', 'P.id' )
      .select('PT.id','PT.url')
      .where({'PT.id': id}).first();
  }
  function addPicture(list) {
    return db('pictures')
      .insert(list)
      .then(ids => {
        return getPicturestById(ids[0]);
      })
  }

  function deletePicture(id) {
    return db('pictures')
      .where('id', id)
      .del();
  }