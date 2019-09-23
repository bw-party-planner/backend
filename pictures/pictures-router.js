const express = require('express');
const router = express.Router();
// const db = require('./pictures-model.js')

router.get('/', (req, res) => {
    res.send(`<h2>Hello from api/pictures/</h2>`)
  });

  module.exports = router;