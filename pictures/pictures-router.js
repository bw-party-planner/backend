const express = require('express');
const router = express.Router();
 const db = require('./pictures-model.js')

router.get('/', (req, res) => {
  db.get()
  .then(pictures => {
    res.json(pictures);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get pictures' });
  });
});

<<<<<<< HEAD
router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('pictures').where({ id })
  .then(pictures => {
    const picture = pictures[0];

    if (picture) {
      res.json(picture);
    } else {
      res.status(404).json({ message: 'Could not find picture with given id.' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get picture' });
  });
});

router.post('/', (req, res) => {
  const pictureData = req.body;

  db('pictures').insert(pictureData)
  .then(ids => {
    res.status(201).json({ created: ids[0] });
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to create new picure' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db('pictures').where({ id }).update(changes)
  .then(count => {
    if (count) {
      res.json({ update: count });
    } else {
      res.status(404).json({ message: 'Could not find picture with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to update picture' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db('pictures').where({ id }).del()
  .then(count => {
    if (count) {
      res.json({ removed: count });
    } else {
      res.status(404).json({ message: 'Could not find picture with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete picture' });
  });
});
=======
>>>>>>> 287df2d0d1ec915d64b196dec269f5cceb189e57

module.exports = router;