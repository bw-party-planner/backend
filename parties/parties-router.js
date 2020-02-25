const express = require('express');
const router = express.Router();
const db = require('./parties-module.js')
const {
  validateParty,
  validatePartyId,
  validateShopping,
  validateItemId,
  validateTodo,
  validateTaskId,
} = require('./parties-middlewere.js')

/* -------------- /api/parties------------*/
router.get('/', (req, res) => {
  db.getParties()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: 'The party information could not be retrieved' });
    });
});

router.get('/:id', validatePartyId, (req, res) => {
  const { id } = req.params;

  db.getPartyById(id)
    .then(party => {
      res.status(200).json(party)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get party' });
    });
});

router.post('/', validateParty, async (req, res) => {
  const party = req.body;
  const shopping_lists_id = await db.addShopingList()
  const todo_lists_id = await db.addTodoList()
  party.shopping_lists_id = `${shopping_lists_id}`
  party.todo_lists_id = `${todo_lists_id}`

  db.addParty(party)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500)
      console.log(error)
        .json({ errorMessage: 'There was an error while saving the party to the database' });
    });
});
router.delete('/:id', validatePartyId, (req, res) => {
  const id = req.params.id
  db.deleteParty(id)
    .then(response => {
      res.status(200).json({ message: 'The party was deleted.' });
    })
    .catch(() => {
      res
        .status(500)
        .json({ errorMessage: 'The party could not be removed' });
    });
});

router.put('/:id', validatePartyId, (req, res) => {
  const party = req.body;
  const id = req.params.id
  db.updateParty(id, party)
    .then(respones => {
      res.status(200).json({ message: 'the party was updated.' });
    })
    .catch(error => {
      console.log(error)
      res.status(500)
        .json({ errorMessage: 'The party information could not be modified.' });
    });
});

/* -------------- /api/parties/shopping-list------------*/

router.post('/shopping-item/new', validateShopping,(req, res) => {
  const item = req.body;
  db.addItemToShoppingList(item)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500)
        .json({ errorMessage: 'There was an error while saving the item to the database' });
    });
});

router.get('/shopping-list/:id/items', (req, res) => {
  const id = req.params.id
  db.getShoppingListItemsByShoppingListId(id)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500)
        .json({ errorMessage: '???' });
    });
});

router.get('/shopping-list/:itemId', validateItemId, (req, res) => {
  const id = req.params.itemId;

  db.getItemById(id)
    .then(item => {
      res.status(200).json(item)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to get item' });
    });
});

router.put('/shopping-list/:itemId', validateItemId, (req, res) => {
  const changes = req.body;
  const id = req.params.itemId
  db.updateItem(id, changes)
    .then(respones => {
      res.status(200).json({ message: 'The item was updated.' })
    })
    .catch(error => {
      console.log(error)
      res.status(500)
        .json({ errorMessage: 'The item information could not be modified.' })
    })
})

router.delete('/shopping-list/:itemId', validateItemId, (req, res) => {
  const id = req.params.itemId

  db.deleteItem(id)
    .then(response => {
      res.status(200).json({ message: 'The item was deleted.' })
    })
    .catch(err => {
      console.log(err)
      res.status(500)
        .json({ errorMessage: 'The party could not be removed' })
    })
});


/*-----------------todo----------------------------------------*/ 

router.post('/todo-task/new', validateTodo,(req, res) => {
  const item = req.body;
  db.addTask(item)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500)
        .json({ errorMessage: 'There was an error while saving the task to the database' });
    });
});

router.get('/task/:taskId', validateTaskId, (req, res) => {
  const id = req.params.taskId;

  db.getTaskById(id)
    .then(todo => {
      res.status(200).json(todo)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to get todo list' });
    });
});


router.put('/task/:taskId', validateTaskId, (req, res) => {
  const changes = req.body;
  const id = req.params.taskId
  db.updateTask(id, changes)
    .then(respones => {
      res.status(200).json({ message: 'The task was updated.' })
    })
    .catch(error => {
      console.log(error)
      res.status(500)
        .json({ errorMessage: 'The task information could not be modified.' })
    })
})
router.delete('/task/:taskId', validateTaskId, (req, res) => {
  const id = req.params.taskId
  db.deleteTask(id)
    .then(response => {
      res.status(200).json({ message: 'The task was deleted.' })
    })
    .catch(err => {
      console.log(err)
      res.status(500)
        .json({ errorMessage: 'The party could not be removed' })
    })
});


// for debug
router.get('/shopping-list/items', (req, res) => {
  db.getShoppingListItems()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500)
        .json({ errorMessage: '???' });
    });
});

/// for debug
router.post('/shopping-list/new', (req, res) => {
  db.addShopingList()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      console.log(error);
      res.status(500)
        .json({ errorMessage: 'There was an error while saving the party to the database' });
    });
});





module.exports = router;