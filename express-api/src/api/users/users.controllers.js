const  { fetchUser, addUserToDb} = require("./user.db"); 

const getUser =  async (req,res,next) => {
  try {
    const userId = req.params.id
    const user = await fetchUser(userId)
    res.json(user)
  } catch (error) {
    next (error)
  }
}


 const addUser = async (req,res,next) => {
  try {
    const response = await addUserToDb(req.body)
    res.json(response)
  } catch (error) {
    next (error)
  }
}

module.exports = {
  getUser,
  addUser
}