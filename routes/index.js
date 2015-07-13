var express = require('express');
var cal = require('../app/calculations.js')
var cal_controller = require('../app/controller/calculation_controller.js')
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Amar',name: "singh" });
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
