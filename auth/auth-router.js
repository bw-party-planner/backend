const express = require('express');
const router = express.Router();
// const db = require('./auth-model.js')

router.get('/', (req, res) => {
    res.send(`<h2>Hello from api/auth/</h2>`)
  });

  module.exports = router;