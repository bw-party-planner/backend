const express = require('express');
const router = express.Router();
// const db = require('./user-model.js')

router.get('/', (req, res) => {
    res.send(`<h2>Hello from api/user/</h2>`)
  });

  module.exports = router;