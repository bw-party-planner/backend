const db = require('../database/dbConfig.js');

module.exports = {
  getParties,
  getPartiesByUserId,
  getPartyById,
  addParty,
  updateParty,
  deleteParty,
  getItemById,
  addShopingList,
  addItemToShoppingList,
  getShoppingListItemsByShoppingListId,
  updateItem,
  deleteItem,
  getShoppingListItems,
  addTodoList,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};

function getParties() {
  const parties = db('parties')
  return parties
}
function getPartiesByUserId(id) {
  return db('parties').select("*").where({ user_id: id })
}

async function getPartyById(id) {
  const party = await db('parties').where({ id }).first()
  if (!party) { return false }
  const shopping_lists_id = party.shopping_lists_id
  if (shopping_lists_id) {
    const shopping_list = await db('shopping_list_items')
      .where({ shopping_list_id: shopping_lists_id }) //query 
    party['shopping_list'] = shopping_list //create new property name shopping_list 
  }
  const todo_lists_id = party.todo_lists_id
  if (todo_lists_id) {
    const todo_list = await db('todo_task')
    .where({todo_lists_id: todo_lists_id}) //query
    party['todo_list'] = todo_list
  }

  return party
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
/* -------------- shopping lists------------*/
function getItemById(id) {
  return db('shopping_list_items').where({ id }).first();
}

// create when creat party 
function addShopingList() {
  return db('shopping_lists')
    .insert({}, 'id')
}

function addItemToShoppingList(params) {
  return db('shopping_list_items')
    .insert(params, 'id')
    .then(ids => {
      return getItemById(ids[0]);
    })
}

function getShoppingListItemsByShoppingListId(id) {
  return db('shopping_list_items').select("*").where({ shopping_list_id: id })
}

function updateItem(id, changes) {
  return db('shopping_list_items')
    .where({ id })
    .update(changes);
}

function deleteItem(id) {
  return db('shopping_list_items')
    .where('id', id)
    .del();
}

//for debug
function getShoppingListItems() {
  return db('shopping_list_items').select("*")
}

/* -------------- todo lists------------*/

function addTodoList() {
  return db('todo_lists')
    .insert({}, 'id')
}

function getTaskById(id) {
  return db('todo_task').where({ id }).first();
}
function addTask(params) {
  return db('todo_task')
    .insert(params, 'id')
    .then(ids => {
      return getTaskById(ids[0]);
    })
}

function updateTask(id, changes) {
  return db('todo_task')
    .where({ id })
    .update(changes);
}

function deleteTask(id) {
  return db('todo_task')
    .where('id', id)
    .del();
}

