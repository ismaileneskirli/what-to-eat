const express = require('express');

const emojis = require('./emojis');
const user = require('./users/users.routes');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/user', user)
router.use('/emojis', emojis);

module.exports = router;
