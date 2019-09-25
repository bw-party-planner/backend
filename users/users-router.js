
const router = express.Router();
const restricted = require('../auth/restricted-middleware.js');
const db = require('./users-model.js');


router.post("/", restricted, async (req, res) => {
  try {
    const user = await db_users.insert(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({
      message: `User already exists`
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await db.get();
    users.length > 0
      ? res.status(200).json(users)
      : res.status(400).json({ message: `Sorry, user was not found.` });
  } catch (err) {
    res.status(500).json({
      error: `Invalid credentials`
    });
  }
});

router.get("/:id", restricted, async (req, res) => {
  try {
    const user = await db.getById(req.params.id);
    user
      ? res.status(200).json(user)
      : res.status(404).json({
          message: `Sorry, user was not found`
        });
  } catch (err) {
    res.status(500).json({ error: `Invalid credentials` });
  }
});

router.put("/:id", restricted, async (req, res) => {
  try {
    (await db.update(req.params.id, req.body))
      ? res.status(200).json({ id: req.params.id, ...req.body })
      : res.status(404).json({ message: `User not found.` });
  } catch (err) {
    res.status(500).json({ error: `Unexpected error retrieving the user.` });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    (await db.remove(req.params.id))
      ? res.status(200).json({ message: `User was removed.` })
      : res.status(404).json({
          message: `User not found.`
        });
  } catch (err) {
    res
      .status(500)
      .json({ error: `Error occurred while attempting to remove the user.` });
  }
});

module.exports = router;