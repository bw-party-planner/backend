const express = require('express');
const router = express.Router();
 const db = require('./todoLists-model.js')

router.get('/', (req, res) => {
  db('todoLists')
  .then(todo => {
    res.json(todo);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get to do list' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('todoLists').where({ id })
  .then(todo => {
    const todos = todos[0];

    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: 'Could not find to do list with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get to do list' });
  });
});

router.post('/', (req, res) => {
  const todoData = req.body;

  db('todoLists').insert(todoData)
  .then(ids => {
    res.status(201).json({ created: ids[0] });
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to create new to do list' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db('todoLists').where({ id }).update(changes)
  .then(count => {
    if (count) {
      res.json({ update: count });
    } else {
      res.status(404).json({ message: 'Could not find to do list with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to update to do list' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db('todoLists').where({ id }).del()
  .then(count => {
    if (count) {
      res.json({ removed: count });
    } else {
      res.status(404).json({ message: 'Could not find to do list with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete to do list' });
  });
});

module.exports = router;