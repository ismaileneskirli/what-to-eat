const firebaseAdmin = require("firebase-admin");

firebaseAdmin.initializeApp();
console.log('initialized firebase')

module.exports = {
    firebaseAdmin
} 