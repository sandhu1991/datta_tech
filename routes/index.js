var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

router.use(
  bodyParser.urlencoded({
    extended: true
  })
)

router.use(bodyParser.json());

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
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dattatec_support@gmail.com',
      pass: 'xxxxxxx'
    }
  });

  var subject = 'Name: '+ req.body.lastname+', '+ req.body.firstname + '\n';
      subject+= 'Phone: ' + req.body.phone + '\n' + 'Email: ' + req.body.email + '\n';
      subject+= 'Msg :' + req.body.Message;
  
  var mailOptions = {
    from: 'dattatec_support@gmail.com',
    to: 'info@dattatechconsulting.com',
    subject: req.body.subject,
    text: subject
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.render('submit', {page:'Contact Us', menuId:'contact', response:"sucess", msg: "Thanks for the message! We‘ll be in touch :)"});
    }
  });
});

router.get('/jobs', function(req, res, next) {
  res.render('jobs', {page:'Jobs ', menuId:'job', response:"sucess", msg: "THERE ARE CURRENTLY NO VACANCIES AVAILABLE :)"});
});

module.exports = router;
