
const router = express.Router();
const restricted = require('../auth/restricted-middleware.js');

const Users = require('./users-model.js');

router.post('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;