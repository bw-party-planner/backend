const express = require('express');
const router = express.Router();
 const db = require('./categories-model.js') 

router.get('/', (req, res) => {
  db('categories')
  .then(categories => {
    res.json(categories);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get categories' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('categories').where({ id })
  .then(categories => {
    const category = categories[0];

    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ message: 'Could not find category with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get category' });
  });
});

router.post('/', (req, res) => {
  const categoryData = req.body;

  db('categories').insert(categoryData)
  .then(ids => {
    res.status(201).json({ created: ids[0] });
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to create new category' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db('categories').where({ id }).update(changes)
  .then(count => {
    if (count) {
      res.json({ update: count });
    } else {
      res.status(404).json({ message: 'Could not find category with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to update category' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db('categories').where({ id }).del()
  .then(count => {
    if (count) {
      res.json({ removed: count });
    } else {
      res.status(404).json({ message: 'Could not find categories with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete category' });
  });
});

router.get('/:id/parties', (req, res) => {
  const { id } = req.params;

  db('parties').where({ id })
  .then(parties => {
    const party = parties[0];

    if (party) {
      res.json(party);
    } else {
      res.status(404).json({ message: 'Could not find party with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get party' });
  });
});

module.exports = router;