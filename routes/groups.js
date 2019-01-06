var express = require('express');
var router = express.Router();

var admin = require("firebase-admin");
var db = admin.firestore();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var groupList = [];
    db.collection('groups').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            groupList.push(doc.data());
        });
        console.log('-----list of groups---');
        console.log(groupList);
        console.log('-----end of list of groups---');
        res.render('groups', { groups: groupList });
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
});

router.get('/:groupName/events/', function(req, res, next) {
    var groupName = req.params.groupName;
    var eventList = [];
    db.collection('groups').doc(groupName).collection('events').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            eventList.push(doc.data());
        });
        console.log('-----list of groups---');
        console.log(eventList);
        console.log('-----end of list of groups---');
        res.render('events', { events: eventList });
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
});

router.get('/:groupName/events/:eventName', function(req, res, next) {
    var groupName = req.params.groupName;
    var eventName = req.params.eventName;
    db.collection('groups').doc(groupName).collection('events').doc(eventName).get()
    .then((doc) => {
        console.log(doc.data());
        res.render('event', { event: doc.data() })
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
});


module.exports = router;
