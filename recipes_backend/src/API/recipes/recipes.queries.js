const db = require('../../db');
const tableNames = require('../../constants/tableNames');
module.exports = {
  async find() {
    // select * from recipes
    return await db(tableNames.recipes);
  },
  async findRecipeWithIngredients(ownedIngredients) {
    try {
      const results = await db(tableNames.recipes)
        .select('*')
        .whereRaw('ingredients <@ ?', [ownedIngredients]);
      const result = results[Math.floor(Math.random() * results.length)];
      return result;
    } catch (error) {
      console.log('error: ', error);
    }
  },
  async addRecipe(recipe) {
    try {
      await db(tableNames.recipes).insert(recipe);
      console.log('inserted recipe');
      return { status: 200, message: 'inserted' };
    } catch (error) {
      console.log('error inserting recipe: ', error);
      return { status: 500, message: 'error inserting' };
    }
  },
};
