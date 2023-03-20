const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());

const { authRouter, userRouter } = require('./routes');

server.use('/api/', authRouter);
server.use('/api/users', userRouter);

module.exports = server;
