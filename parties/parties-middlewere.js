const db = require('./parties-module.js');

module.exports = {
    validateParty,
    validatePartyId,
    validateShopping,
    validateShoppingId,
    validateItemId,
    validateTodo,
    validateTaskId,
}

function validateParty(req, res, next) {
    if(!req.body) res.status(400).json({ message: "missing party data" })
    if(!req.body.party_name) res.status(400).json({ message: "missing required party's name field" })
    if(!req.body.hasOwnProperty('guests')) res.status(400).json({ message: "missing required guests field" })
    next()
  };
  
function validatePartyId(req, res, next) {
    const id = req.params.id;
    db.getPartyById(Number(id))
        .then(party => {
            if(party){
                req.party = party
                next()
            } else {
                res.status(400).json({ message: 'Invalid party id' })
            }
        })
        .catch(() =>{
                res.status(500)
                .json({ errorMessage: "error" })
            })
  };

function validateShopping(req, res, next) {
    if(!req.body) res.status(400).json({ message: "missing shopping list data" })
    if(!req.body.item) res.status(400).json({ message: "missing required item field" })
    if(!req.body.hasOwnProperty('price')) res.status(400).json({ message: "missing required price field" })
    if(!req.body.shopping_list_id) res.status(400).json({ message: "missing required shopping list id field" })
    next()
};

function validateShoppingId(req, res, next) {
    const id = req.params.id;
    db.getShoppingById(Number(id))
        .then(party => {
            if(party){
                req.party = party
                next()
            } else {
                res.status(400).json({ message: 'Invalid party id' })
            }
        })
        .catch(() =>{
                res.status(500)
                .json({ errorMessage: "error" })
            })
  };
  function validateItemId(req, res, next) {
    const id = req.params.itemId;
    db.getItemById(Number(id))
        .then(response => {
            if(response){
                req.response = response
                next()
            } else {
                res.status(400).json({ message: 'Invalid item id' })
            }
        })
        .catch(() =>{
                res.status(500)
                .json({ errorMessage: "error" })
            })
  };
function validateTodo(req, res, next) {
    if(!req.body) res.status(400).json({ message: "missing shopping list data" })
    if(!req.body.task) res.status(400).json({ message: "missing required task field" })
    if(!req.body.todo_lists_id) res.status(400).json({ message: "missing required todo lists id field" })
    next()
};

function validateTaskId(req, res, next) {
    const id = req.params.taskId;
    db.getTaskById(Number(id))
        .then(task => {
            if(task){
                req.task = task
                next()
            } else {
                res.status(400).json({ message: 'Invalid item id' })
            }
        })
        .catch(err =>{
                res.status(500)
                .json(err)
            })
  };
