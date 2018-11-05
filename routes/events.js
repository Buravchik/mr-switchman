var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");
var db = admin.firestore();

/* GET home page. */
router.get('/:groupName/:eventName', function(req, res, next) {
  
  // /groups/i7hFjJHx8zXEfdY8gkUb/events/EfQVLhfxXAxOnFQK0O9Z/history
  //console.log(db.collection('groups').doc('i7hFjJHx8zXEfdY8gkUb').collection('events').doc('EfQVLhfxXAxOnFQK0O9Z').collection('history'));
  historyCollection = db.collection('groups').doc('i7hFjJHx8zXEfdY8gkUb')
                        .collection('events').doc('EfQVLhfxXAxOnFQK0O9Z')
                        .collection('history');
  historyCollection.doc('newDoc').set({"test": "test"})
  .then((snapshot) => {
      console.log("new status is "+ req.query.newStatus);
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });

  res.render('events', { group: req.params.groupName, event: req.params.eventName });
});

module.exports = router;