var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");
var db = admin.firestore();

/* GET users listing. */
router.get('/', function(req, res, next) {

  var userList = [];
  db.collection('users').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      userList.push(doc.data());
    });
    console.log('-----list of users---');
    console.log(userList);
    console.log('-----end of list of users---');
    res.render('users', { users: userList });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
});

module.exports = router;
