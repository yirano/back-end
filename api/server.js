const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/restricted-middleware.js');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const storiesRouter = require('../stories/stories-router.js');
const picturesRouter = require('../pictures/pictures-router.js');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
// server.use('/api/auth', authRouter);
// server.use('/api/users', authenticate, usersRouter);
// server.use('/api/stories', authenticate, storiesRouter);
// server.use('/api/pictures', authenticate, picturesRouter);

module.exports = server;
