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
          res.status(401).json({ message: 'Invalid authorization'});
        } else {
          // token is good
          req.user = { username: decodedToken.user };
          next();
        }
      });
  } else {
    res.status(401).json({  message:'Not authenticated. Please provide a valid token in the request header. (see documentation)'});
  };
  };

