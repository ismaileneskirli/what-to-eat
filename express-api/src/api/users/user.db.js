const firebaseAdmin = require('../../db/firebase').firebaseAdmin
const FieldValue = require('firebase-admin').firestore.FieldValue;

// const databaseNamingExtention = process.env.ENV == "dev" ? "-staging" : ""
// console.log("environment: " + process.env.ENV, databaseNamingExtention)

const db = firebaseAdmin.firestore();

const fetchUser = async (userId)=> {
  const result = await db.collection('users').doc(userId).get()
  return result.data();
}

const addUserToDb = async (data) => {
  console.log(data);
  const result = await db.collection('users').doc(data.user_id).set(data)
  return result.id;
}

const deleteItemFromIngredientList =  async (data) => {
  const userRef = db.collection('users').doc(data.user_id)
   const res = await userRef.update({
    ingredients_list: FieldValue.arrayRemove(data.item)
});
  return res
}

const addItemToIngredientList =  async (data) => {
  const userRef = db.collection('users').doc(data.user_id)
  const res = await userRef.update({
    ingredients_list: FieldValue.arrayUnion(data.item)
});
  return res
}

module.exports = {
  fetchUser,
  addUserToDb,
  deleteItemFromIngredientList,
  addItemToIngredientList
}

