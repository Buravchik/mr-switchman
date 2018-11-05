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
      console.log(doc.id, '=>', doc.data());
      console.log(userList);
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
  
  res.render('users', { users: [ { nickname: 'Комрад', authid: 'asdlkiww' }, { authid: 'sdhsdghd', nickname: 'Васян' } ] });
});

module.exports = router;
