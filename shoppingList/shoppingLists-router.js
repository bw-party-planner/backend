const express = require('express');
const router = express.Router();
 const db = require('./shoppingLists-model');

router.get('/', (req, res) => {
  db.get()
  .then(lists => {
    res.json(lists);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get shopping list' });
  });
});


module.exports = router;
