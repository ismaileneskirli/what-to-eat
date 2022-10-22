const  { fetchUser, addUserToDb, addItemToIngredientList, deleteItemFromIngredientList} = require("./user.db"); 

const getUser =  async (req,res,next) => {
  try {
    const userId = req.params.id
    const user = await fetchUser(userId)
    console.log(user);
    res.json(user)
  } catch (error) {
    next (error)
  }
}


 const setUser = async (req,res,next) => {
  try {
    console.log("çalıştı: ", req);
    const response = await addUserToDb(req.body)
    res.json(response)
  } catch (error) {
    next (error)
  }
}


const updateIngredientList = async(req,res,next) => {
  try {
    const operation = req.body.type
    const result = operation == "delete" ? deleteItemFromIngredientList(req.body) : addItemToIngredientList(req.body)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getUser,
  setUser,
  updateIngredientList
}