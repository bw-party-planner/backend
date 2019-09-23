const express = require('express');
const server = express();
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const users = require('../users/user-router.js');
const partiesRouter = require('../parties/parties-router.js');
const picturesRouter = require('../pictures/pictures-router.js');
const shoppingListsRouter = require('../shoppingList/shopingLists-router.js');
const todoListsRouter = require('../todoList/todoLists-router.js');
const categoriesRouter = require('../categories/categories-router.js');

server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', users);
server.use('/api/parties', partiesRouter);
server.use('/api/pictures', picturesRouter);
server.use('/api/shoppingLists', shoppingListsRouter);
server.use('/api/todoLists', todoListsRouter);
server.use('/api/categories', categoriesRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Hello from Express</h2>`)
  });

module.exports = server;