var express = require('express');
var cal = require('../app/calculations.js')
var cal_controller = require('../app/controller/calculation_controller.js')
var router = express.Router();
var url = require('url');
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;


var app = express();
app.use(function(req, res, next){
  // the status option, or res.statusCode = 404
  // are equivalent, however with the option we
  // get the "status" local available as well
  res.render('404', { status: 404, url: req.url });
});

app.use(function(err, req, res, next){
  // we may use properties of the error object
  // here and next(err) appropriately, or if
  // we possibly recovered from the error, simply next().
  res.render('500', {
      status: err.status || 500
    , error: err
  });
});

router.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Amar',name: "singh" });
});

/* GET home page. */
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});


/* GET home page. */
router.get('/cal', function(req, res, next) {
  res.render('cal', { title: 'Enter input as integer' });
});

/* GET home page. */
router.get('/amar', function(req, res, next) {
  cal_controller.arithmetic_logic(req, res, function(err, data){
  	 res.render('amar', { result: data });
  });
	

	
	
  
});

/* GET First name */
router.get('/create', function(req, res, next) {
  res.render('create', {title: "Create Names"});
});

/* POST First name */
router.get('/list', function(req, res, next) {
	var fname = req.query.fname
	var lname = req.query.lname
  res.render('list', {title: "List Names", first_name: fname, last_name: lname});
});


module.exports = router;
