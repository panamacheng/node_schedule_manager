var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home');
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('pages/auth/signup');
});

/* GET signin page. */
router.get('/signin', function(req, res, next) {
  res.render('pages/auth/signin');
});


module.exports = router;
