const express = require('express');

const postRouter = require('./routers/postRouter.js')

// const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
server.use('api/posts', postRouter);

module.exports = server;