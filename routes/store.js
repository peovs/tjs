var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('store', { title: 'store' });
});



router.route('/message')
  .post(function(req, res, next) {
    console.log(req.body.message);
    res.send('message :' + req.body.message );
   
  });


module.exports = router;
