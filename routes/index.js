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

router.get('/mobile-testing', function(req, res, next) {
  res.render('mobileTesting', {page:'Mobile Testing', menuId:'Mobile Testing'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Us', menuId:'contact'});
});

router.post('/submit', function(req, res, next) {
  var content = 'Name: '+ req.body.lastname+', '+ req.body.firstname + '\n';
  content+= 'Phone: ' + req.body.phone + '\n' + 'Email: ' + req.body.email + '\n';
  content+= 'Msg :' + req.body.text;

  var replayContent = "Dear Customer,\n\n";
  replayContent += "Thank you for reaching out to DATTA Tech Consulting support desk. We have received your email, and our support team will be in touch with you soon.\n\n";
  replayContent += " Please note that our working hours is 0900 to 1700 from Monday to Saturday. \n We regret the delay in reply over the non-working hours. \n\n";
  replayContent += "Thank you for your understanding.\n Regards,\n Support Team \n DATTA TECH CONSULTING \n Tel: +1 613 501 8777";
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dattatechconsulting@gmail.com',
      pass: 'Datta@123'
    }
  });
  var mailOptionsCompany = {
    from: 'dattatechconsulting@gmail.com',
    //  to: 'sandhu.hardilpreet@gmail.com',
     to: 'info@dattatechconsulting.com',
    subject: req.body.subject,
    text: content
  };
  var mailOptionsUser = {
    from: 'dattatechconsulting@gmail.com',
    to: req.body.email,
    subject: req.body.subject,
    text: replayContent
  };
  transporter.sendMail(mailOptionsCompany, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent to company: ' + info.response);
      transporter.sendMail(mailOptionsUser, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent to user: ' + info.response);
        }
      })
      res.render('submit', {page:'Contact Us', menuId:'contact', response:"sucess", msg: "Thanks for the message! We‘ll be in touch :)"});
    }
  });
});

router.get('/jobs', function(req, res, next) {
  res.render('jobs', {page:'Jobs ', menuId:'job', response:"sucess", msg: "THERE ARE CURRENTLY NO VACANCIES AVAILABLE :)"});
});

router.get('/login', function(re, res, next){
  res.render('login', {page:'Login', menuId:'login'});
});

router.post('/login', function(req, res, next){
 
});

module.exports = router;
