const express = require('express');
const queries = require('./recipes.queries');
const router = express.Router();

router.get('/', async (req, res) => {
  const recipes = await queries.find();
  res.json(recipes);
});

router.post('/recipe-with-ingredients', async (req, res) => {
  console.log(req);
  const ownedIngredients = req.body;
  const recipe = await queries.findRecipeWithIngredients(ownedIngredients);
  console.log(recipe);
  if (!recipe) {
    res.status(404).json({ message: 'No recipes found' });
  }
  res.json(recipe);
});

router.post('/add-recipe', async (req, res) => {
  const recipe = req.body;
  const response = await queries.addRecipe(recipe);
  res.status(response.status).json({ message: response.message });
});

module.exports = router;
