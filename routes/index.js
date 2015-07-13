var express = require('express');
var cal = require('../app/calculations.js')
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
	var ops = req.query.arithmetic_ops;
	var finput = parseInt(req.query.finput, 10);
	var sinput = parseInt(req.query.sinput, 10);
	var result = 0;
	if (ops == "add"){
		cal.add(finput, sinput,  function(err,data){
			result = data;
		})
	}
	else if (ops == "sub" )
	{
		cal.sub(finput, sinput,  function(err,data){
			result = data;
		})
	}
	else if(ops == "mul"){
		cal.multiply(finput, sinput,  function(err,data){
			result = data;
		})
	}
  res.render('amar', { result: result });
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
