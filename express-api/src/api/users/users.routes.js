const express = require('express');
const {getUser,setUser, updateIngredientList} = require('./users.controllers');

const router = express.Router();

router.get('/:id', getUser);

router.post('/', setUser)

router.post('/ingredient-list', updateIngredientList)

// router.post('/buy-list', updateBuyList)

module.exports = router;
