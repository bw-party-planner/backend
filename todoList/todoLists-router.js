const express = require('express');
const router = express.Router();
// const db = require('./todoLists-model.js')

router.get('/', (req, res) => {
    res.send(`<h2>Hello from api/todoLists/</h2>`)
  });

  module.exports = router;