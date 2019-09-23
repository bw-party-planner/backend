const express = require('express');
const router = express.Router();
// const db = require('./shoppingLists-model')

router.get('/', (req, res) => {
    res.send(`<h2>Hello from api/shoppingLists/</h2>`)
  });

  module.exports = router;