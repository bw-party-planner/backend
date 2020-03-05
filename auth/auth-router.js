 const express = require('express');
 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');
 const Users = require('../users/users-model.js');
 const secrets = require('../config/secrets.js');
 const router = express.Router();
 
 router.post('/register', (req, res) => {
   // implement registration
 
  const user = req.body;
   const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
 
   Users.add(user)
     .then(saved => {
       res.status(201).json(saved);
     })
     .catch(error => {
       res.status(500).json({ message: 'This username is already taken' });
     });
 });
 
 router.post('/login', (req, res) => {
   const { username, password } = req.body;
 
   Users.findBy({ username })
     .first()
     .then(user => {
       if (user && bcrypt.compareSync(password, user.password)) {
         const token = generateToken(user);
         res.status(200).json({
           message: `Welcome ${user.username}`,
            token,
            user_id: user.id
          });
       } else {
         res.status(401).json({ message: 'Invalid Credentials' });
       }
     })
     .catch(error => {
       res.status(500).json(error);
     });
 });
 
  function generateToken(user) {
   const payload = {
     username: user.username
   };
 
   const options = {
     expiresIn: '1d',
   };
 
   return jwt.sign(payload, secrets.jwtSecret, options);
 }
 
 module.exports = router;
 