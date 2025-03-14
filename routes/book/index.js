var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send({message:'this is home route of book'});
  });

router.get('/add-book', function(req, res, next) {
  res.render('form/add-book' );
});

module.exports = router;
