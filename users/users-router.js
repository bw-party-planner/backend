const express = require('express');
const router = express.Router();
const restricted = require('../auth/auth-model.js');
const Users = require('./users-model.js');
const db = require('./users-model.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.post('/', restricted, (req, res) => {
  const users = req.body;
  db.add(users)
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;