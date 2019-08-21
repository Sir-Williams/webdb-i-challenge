const express = require('express')
const accountDb = require('../data/dbConfig.js')
const router = express.Router()

router.get('/', (req, res) => {
    accountDb('accounts')
        .then(account => {
            res.status(200).json(account)
        })
        .catch(err => {
            res.status(500).json({ error: 'Error getting accounts'})
        })
})

module.exports = router;