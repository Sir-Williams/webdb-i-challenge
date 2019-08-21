const express = require('express');
const accountDb = require('../data/dbConfig.js');
const router = express.Router();

router.get('/', (req, res) => {
    accountDb('accounts')
        .then(acc => {
            res.status(200).json(acc)
        })
        .catch(err => {
            res.status(500).json({ error: 'Error getting accounts' })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    accountDb('accounts')
        .where({ id })
        .then(acc => {
            res.status(200).json(acc)
        })
        .catch(err => {
            res.status(500).json({ error: 'Error finding account' })
        })
  })



module.exports = router;