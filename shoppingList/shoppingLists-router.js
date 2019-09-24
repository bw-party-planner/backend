const express = require('express');
const router = express.Router();
// const db = require('./shoppingLists-model')

router.get('/', (req, res) => {
    res.send(`<h2>Hello from api/shoppingLists/</h2>`)
  });

  module.exports = router;

router.get('/', (req, res) => {
  db('shoppingLists')
  .then(lists => {
    res.json(lists);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get shopping list' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('shoppingLists').where({ id })
  .then(lists => {
    const list = lists[0];

    if (list) {
      res.json(list);
    } else {
      res.status(404).json({ message: 'Could not find shopping list with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get user' });
  });
});

router.post('/', (req, res) => {
  const listData = req.body;

  db('shoppingLists').insert(listData)
  .then(ids => {
    res.status(201).json({ created: ids[0] });
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to create new shopping list' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db('shoppingLists').where({ id }).update(changes)
  .then(count => {
    if (count) {
      res.json({ update: count });
    } else {
      res.status(404).json({ message: 'Could not find shopping list with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to update shopping list' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db('shoppingList').where({ id }).del()
  .then(count => {
    if (count) {
      res.json({ removed: count });
    } else {
      res.status(404).json({ message: 'Could not find shopping list with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete shopping list' });
  });
});

module.exports = router;
