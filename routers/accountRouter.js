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

router.post('/', (req, res) =>{
    const { body } = req;

    accountDb('accounts')
        .insert(body, 'id')
        .then(post => {
            res.status(201).json(post)
        })
        .catch(err => {
            res.status(500).json({ error: 'Error creating account' })
        })
})

router.put('/:id', (req, res) => {
    const changes = req.body;
    const { id } = req.params;

    accountDb('accounts')
        .where('id', '=', id)
        .update(changes)
        .then(acc => {
            res.status(201).json(acc)
        })
        .catch(err => {
            res.status(500).json({ error: 'Error updating account' })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    accountDb('accounts')
        .where('id', '=', id)
        .del()
        .then(acc => {
            res.status(201).json(acc)
        })
        .catch(err => {
            res.status(500).json({ error: 'Error deleting account' })
        })
})



module.exports = router;