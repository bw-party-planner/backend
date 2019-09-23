const express = require('express');
const router = express.Router();
// const db = require('./categories-model.js') 

router.get('/', (req, res) => {
    res.send(`<h2>Hello from api/categories/</h2>`)
  });

  module.exports = router;