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


module.exports = router;