const express = require('express');
const server = express();
const cors = require('cors');
const axios = require('axios');

const authRouter = require('../auth/auth-router.js');
const authenticate = require('../auth/auth-model.js');
const users = require('../users/users-router.js');
const partiesRouter = require('../parties/parties-router.js');
const picturesRouter = require('../pictures/pictures-router.js');
const shoppingListsRouter = require('../shoppingList/shoppingLists-router.js');
const todoListsRouter = require('../todoList/todoLists-router.js');
const categoriesRouter = require('../categories/categories-router.js');


server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/parties', authenticate, partiesRouter);


// for backend
server.use('/api/users', users);

// stretch goal
server.use('/api/pictures', authenticate, picturesRouter);
server.use('/api/shoppingLists', authenticate, shoppingListsRouter);
server.use('/api/todoLists', authenticate, todoListsRouter);


server.get('/', (req, res) => {
    res.send(`<h2>Check out API documentation at https://github.com/bw-party-planner/backend</h2>`)
  });

module.exports = server;