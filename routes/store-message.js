var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('store', { title: 'message' });
  
});


router.post('/', function(req, res, next) {
  res.render('store', { title: req.body.message });
  console.log(req.body.message)
});



module.exports = router;
