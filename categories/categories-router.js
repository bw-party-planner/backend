const express = require('express');
const router = express.Router();
 const db = require('./categories-model.js') 

router.get('/', (req, res) => {
  db.get()
  .then(categories => {
    res.json(categories);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get categories' });
  });
});

router.get('/:id', validateId, (req, res) => {
  const { id } = req.params;

  db.getById(id)
  .then(categories => {
   res.status(200).json(categories)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get category' });
  });
});

router.post('/', validateCategory,(req, res) => {
  const category = req.body;
  db.insert(category)
  .then(ids => {
    res.status(201).json(ids);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to create new category' });
  });
});

router.put('/:id', validateId,(req, res) => {
  const { id } = req.params;
  const changes = req.body
  db.update(id, changes)
  .then(count => {
    res.status(200).json({message: 'the party was updated.'})
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to update category' });
  });
});

router.delete('/:id', validateId,(req, res) => {
  const { id } = req.params;

  db.remove(id)
  .then(count => {
    res.status(200).json({message: 'the category was deleted.'})
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete category' });
  });
});


<<<<<<< HEAD
    if (party) {
      res.json(party);
    } else {
      res.status(404).json({ message: 'Could not find party with given id.' });
    };
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get party' });
  });
});
=======
function validateId(req, res, next) {
  const id = req.params.id;
  db.getById(Number(id))
      .then(category => {
          if(category){
              req.category = category
              next()
          } else {
              res.status(400).json({ message: 'Invalid category id' })
          }
      })
      .catch(() =>{
              res.status(500)
              .json({ errorMessage: "error" })
          })
};
>>>>>>> 287df2d0d1ec915d64b196dec269f5cceb189e57

function validateCategory(req, res, next) {
  if(!req.body) res.status(400).json({ message: "missing category data" })
  if(!req.body.category) res.status(400).json({ message: "missing required category field" })
  next()
};
module.exports = router;