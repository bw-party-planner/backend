const express = require('express');
const router = express.Router();
const db = require('./parties-module.js')

router.get('/', (req, res) => {
    res.send(`<h2>Hello from api/parties/</h2>`)
  });

  module.exports = router;