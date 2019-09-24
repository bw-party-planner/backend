const express = require('express');
const router = express.Router();
 const db = require('./todoLists-model.js');

router.get('/', (req, res) => {
  db.get()
  .then(todo => {
    res.json(todo);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get to do list' });
  });
});

module.exports = router;