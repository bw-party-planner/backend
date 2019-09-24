const express = require('express');
const router = express.Router();
const db = require('./parties-module.js')

router.get('/', (req, res) => {
  db.getParties()
    .then(response => {
      res.status(200).json(response)
    })
    .catch(error => {
      res.status(500).json(error)
    })
    
  });

  module.exports = router;