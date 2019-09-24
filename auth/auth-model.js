const db = require('../database/dbConfig.js');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');


module.exports = (req, res, next) => {
    // Let's rock! 
    const token = req.headers.authorization;
  
    if (token) {
      jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if(err) {
          //token expired or is invalid
          res.status(401).json({ message: 'You shall not pass'});
        } else {
          // token is good
          req.user = user
          next();
        }
      });
  } else {
    res.status(401).json({ you: 'shall not pass'});
  };
  };