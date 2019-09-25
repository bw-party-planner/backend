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
  validatePicture,
  validatePicId
 } = require('./parties-middlewere.js')

/* -------------- /api/parties------------*/
router.get('/', (req, res) => {
  db.getParties()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({errorMessage: 'The party information could not be retrieved'});
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

  router.post('/', validateParty, (req, res) => {
    const party = req.body;
    db.addParty(party)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(error => {
            console.log(error);
            res.status(500)
            .json({errorMessage: 'There was an error while saving the party to the database'});
        });
});

router.delete('/:id', validatePartyId, (req, res) => {
  const id = req.params.id
  db.deleteParty(id)
  .then(response => {
      res.status(200).json({message: 'the party was deleted.'});
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
      db.updateParty(id,  party)
      .then(respones => {
          res.status(200).json({message: 'the party was updated.'});
      })
      .catch(error => {
          console.log(error)
          res.status(500)
          .json({errorMessage: 'The party information could not be modified.' });
      });
});


/* -------------- /api/parties/:id/shoppingList------------*/
 
router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params;
  db.getShopingList(id)
  .then(response => {
    if (response.length) {
      res.json(response);
    } else {
      res.status(404).json({ message: 'Could not find ID' });
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Failed to get shopping list' });
  });
});

router.get('/:id/shoppingList/:itemId', validateItemId,(req, res) => {
  const  id  = req.params.itemId;

  db.getItemById(id)
  .then(item => {
   res.status(200).json(item)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Failed to get item' });
  });
});


router.post('/:id/shoppingList',  validateShopping,(req, res) => {
  
  db.addShopingList(req.body) 
      .then(response => {
          res.status(201).json({ message: 'Shopping list was created' })
      })
      .catch(error => {
          console.log(error)
          res.status(500)
          .json(error.message)
      })
});
router.put('/:id/shoppingList/:itemId', validateItemId, (req, res) => {
  const changes = req.body;
  const id = req.params.itemId
      db.updateItem(id,  changes)
      .then(respones => {
          res.status(200).json({message: 'the item was updated.'})
      })
      .catch(error => {
          console.log(error)
          res.status(500)
          .json({errorMessage: 'The item information could not be modified.' })
      })
})
router.delete('/:id/shoppingList/:itemId', validateItemId,(req, res) => {
  const id = req.params.itemId

  db.deleteItem(id)
  .then(response => {
      res.status(200).json({message: 'the item was deleted.'})
  })
  .catch(err => {
      console.log(err)
      res.status(500)
      .json({ errorMessage: 'The party could not be removed' })
  })
});


/* -------------- /api/parties/:id/todoList------------*/


router.get('/:id/todoList', (req, res) => {
  const { id } = req.params;
  db.getTodoList(id)
  .then(response => {
    if (response.length) {
      res.json(response);
    } else {
      res.status(404).json({ message: 'Could not find ID' });
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Failed to get todo list' });
  });
});


router.get('/:id/todoList/:taskId',  validateTaskId,(req, res) => {
  const  id  = req.params.taskId;

  db.getTaskById(id)
  .then(todo => {
   res.status(200).json(todo)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Failed to get todo list' });
  });
});


router.post('/:id/todoList',  validateTodo,(req, res) => {
  
  db.addTodoList(req.body) 
      .then(response => {
          res.status(201).json({ message: 'Task was created' })
      })
      .catch(error => {
          console.log(error)
          res.status(500)
          .json(error.message)
      })
   
});
router.put('/:id/todoList/:taskId', validateTaskId, (req, res) => {
  const changes = req.body;
  const id = req.params.taskId
      db.updateTask(id,  changes)
      .then(respones => {
          res.status(200).json({message: 'the task was updated.'})
      })
      .catch(error => {
          console.log(error)
          res.status(500)
          .json({errorMessage: 'The task information could not be modified.' })
      })
})
router.delete('/:id/todoList/:taskId', validateTaskId,(req, res) => {
  const id = req.params.taskId
  db.deleteTask(id)
  .then(response => {
      res.status(200).json({message: 'the task was deleted.'})
  })
  .catch(err => {
      console.log(err)
      res.status(500)
      .json({ errorMessage: 'The party could not be removed' })
  })
});

/* -------------- /api/parties/:id/pictures------------*/


router.get('/:id/pictures', (req, res) => {
  const { id } = req.params;
  db.getPictures(id)
  .then(response => {
    if (response.length) {
      res.json(response);
    } else {
      res.status(404).json({ message: 'Could not find ID' });
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Failed to get todo list' });
  });
});
router.get('/:id/pictures/:picId',  validatePicId,(req, res) => {
  const  id  = req.params.picId;

  db.getPicById(id)
  .then(response => {
   res.status(200).json(response)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Failed to get pictures' });
  });
});


router.post('/:id/pictures/',  validatePicture,(req, res) => {
  
  db.addPicture(req.body) 
      .then(response => {
          res.status(201).json({ message: 'Picture was created' })
      })
      .catch(error => {
          console.log(error)
          res.status(500)
          .json(error.message)
      })
   
});

router.delete('/:id/pictures/:picId', validatePicId,(req, res) => {
  const id = req.params.picId
  db.deletePicture(id)
  .then(response => {
      res.status(200).json({message: 'the task was deleted.'})
  })
  .catch(err => {
      console.log(err)
      res.status(500)
      .json({ errorMessage: 'The party could not be removed' })
  })
});
  module.exports = router;