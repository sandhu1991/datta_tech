var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About Us', menuId:'about'});
});

router.get('/services', function(req, res, next) {
  res.render('services', {page:'IT Services', menuId:'services'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Us', menuId:'contact'});
});

router.post('/submit', function(req, res, next) {
  res.render('submit', {page:'Contact Us', menuId:'contact', response:"sucess", msg: "Thanks for the message! We‘ll be in touch :)"});
});

router.get('/jobs', function(req, res, next) {
  res.render('jobs', {page:'Jobs ', menuId:'job', response:"sucess", msg: "THERE ARE CURRENTLY NO VACANCIES AVAILABLE :)"});
});

module.exports = router;
