var express = require('express');
var router = express.Router();
var mongoDbUsername = process.env.mongoDbUsername;
var mongoDbpwd = process.env.mongoDbPwd;

var url = 'mongodb://'+ mongoDbUsername +':'+ mongoDbpwd +'@ds040898.mongolab.com:40898/messages';

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');



router.get('/', function(req, res, next) {
  res.render('store', { title: 'store' });
});


router.route('/message')
  .post(function(req, res, next) {
  var txtMessage = (req.body.message || 'empty message');
    storeMessageToDB(txtMessage);
    
    console.log(req.body.message);
    res.send('message :' + req.body.message );
   
  });
  


function storeMessageToDB(message){

      MongoClient.connect(url, function(err, db) {
        
            db.collection('messages').insert({'message': message}, {w: 1 }, function (err, item) {
if (err) {
console.log('Error storing message in database: ' + err);
db.close();
return 400;
} else {
db.close();
console.log('Message stored ok in database: ' + message);
return 200;
}})})};


  

module.exports = router;
