const express = require('express');
const router = express.Router();
const db = require('./parties-module.js')

router.get('/', (req, res) => {
  db.getParties()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({errorMessage: 'The party information could not be retrieved'});
    });
  });

  router.post('/', validateParty, (req, res) => {
    const party = req.body;
    db.addParty(party)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(error => {
            console.log(error);
            res.status(500)
            .json({errorMessage: 'There was an error while saving the party to the database'});
        });
});

router.delete('/:id', validatePartyId, (req, res) => {
  const id = req.params.id
  db.deleteParty(id)
  .then(response => {
      res.status(200).json({message: 'the party was deleted.'});
  })
  .catch(() => {
      res
      .status(500)
      .json({ errorMessage: 'The party could not be removed' });
  });
});

router.put('/:id', validatePartyId, (req, res) => {
  const party = req.body;
  const id = req.params.id
      db.updateParty(id,  party)
      .then(respones => {
          res.status(200).json({message: 'the party was updated.'});
      })
      .catch(error => {
          console.log(error)
          res.status(500)
          .json({errorMessage: 'The party information could not be modified.' });
      });
});

router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params;
  db.getShopingList(id)
  .then(response => {
    if (response.length) {
      res.json(response);
    } else {
      res.status(404).json({ message: 'Could not find ID' });
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Failed to get shopping list' });
  });
});

router.get('/:id/todoList', (req, res) => {
  const { id } = req.params;
  db.getTodoList(id)
  .then(response => {
    if (response.length) {
      res.json(response);
    } else {
      res.status(404).json({ message: 'Could not find ID' });
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Failed to get todo list' });
  });
});

router.get('/:id/pictures', (req, res) => {
  const { id } = req.params;
  db.getPictures(id)
  .then(response => {
    if (response.length) {
      res.json(response);
    } else {
      res.status(404).json({ message: 'Could not find ID' });
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Failed to get todo list' });
  });
});
function validateParty(req, res, next) {
  if(!req.body) res.status(400).json({ message: "missing party data" });
  if(!req.body.party_name) res.status(400).json({ message: "missing required party's name field" });
  if(!req.body.guests) res.status(400).json({ message: "missing required guests field" });
  next();
};

function validatePartyId(req, res, next) {
  const id = req.params.id;
  db.getPartyById(Number(id))
      .then(party => {
          if(party){
              req.party = party;
              next();
          } else {
              res.status(400).json({ message: 'Invalid party id' });
          }
      })
      .catch(() =>{
              res.status(500)
              .json({ errorMessage: "error" });
          });
};
  module.exports = router;