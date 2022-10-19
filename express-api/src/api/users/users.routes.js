const express = require('express');
const {getUser, addUser} = require('./users.controllers');

const router = express.Router();

router.get('/:id', getUser);

router.post('/', addUser)

module.exports = router;
