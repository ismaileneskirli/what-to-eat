const firebaseAdmin = require('../../db/firebase').firebaseAdmin

// const databaseNamingExtention = process.env.ENV == "dev" ? "-staging" : ""
// console.log("environment: " + process.env.ENV, databaseNamingExtention)

const db = firebaseAdmin.firestore();

// const getItems = async ({appId, itemName}) => {
//   const items = [];
//   const snapshot = await db.collection('config').doc(appId).collection(itemName).get();

//   if (!snapshot.empty) {
//     snapshot.forEach(doc => {
//       items.push({ "id": doc.id, ...doc.data() });
//     });
//   }

//   return items;
// }

const fetchUser = async (userId)=> {
  const result = await db.collection('users').doc(userId).get()
  return result.data();
}

const addUserToDb = async (data) => {
  console.log(data);
  const result = await db.collection('users').doc(data.user_id).set(data)
  return result.id;
}

// const editItem = async ({appId, itemName, id, data})=> {
//   const result = await db.collection('config').doc(appId).collection(itemName+databaseNamingExtention).doc(id).set(data);
//   return true;
// }

// const deleteItem = async ({appId, itemName, id})=> {
//   const result = await db.collection('config').doc(appId).collection(itemName+databaseNamingExtention).doc(id).delete();
//   return true;
// }

// const editActivationOfItems = async (type, isActivate, list, appId) => {
//   let limit = 0
//   while (limit < list.length) {
//     const batch = db.batch();
//     const collection = db.collection('config').doc(appId).collection(type+databaseNamingExtention)
//     for (let i=limit; i<limit+500; i++){
//       if (i == list.length){
//         break
//       }
//       batch.set(collection.doc(list[i]), {is_active: isActivate}, {merge: true});
//     }
//     await batch.commit();
//     limit += 500
//   }
// }

// const updateIslKeyActivations = async ({appId, activate, deactivate}) => {
//   if (activate && Array.isArray(activate)){
//     await editActivationOfItems('isl_keys',true, activate, appId)
//   }
//   if (deactivate && Array.isArray(deactivate)){
//     await editActivationOfItems('isl_keys',false, deactivate, appId)
//   }
// }

// const updateParameterActivations = async ({appId, activate, deactivate}) => {
//   if (activate && Array.isArray(activate)){
//     await editActivationOfItems('parameters',true, activate, appId)
//   }
//   if (deactivate && Array.isArray(deactivate)){
//     await editActivationOfItems('parameters',false, deactivate, appId)
//   }
// }

module.exports = {
  fetchUser,
  addUserToDb
}

