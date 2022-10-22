const express = require('express');
const recipes = require('./recipes/recipes.routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Recipes API v1 🍔🍕🌭🍽🍳',
  });
});

router.use('/recipes', recipes);

module.exports = router;
