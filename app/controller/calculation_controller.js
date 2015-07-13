var cal = require('../calculations.js')

	
function arithmetic_logic(req, res, singh ){
	var ops = req.query.arithmetic_ops;
	var finput = parseInt(req.query.finput, 10);
	var sinput = parseInt(req.query.sinput, 10);
	var result = 0;


	if (ops == "add"){
		cal.add(finput, sinput,  function(err,data){
			if (err){
				console.log(err);
			}
			else{
				result = data;
			}
			
		})
	}
	else if (ops == "sub" )
	{
		cal.sub(finput, sinput,  function(err,data){
			if (err){
				console.log(err);
			}
			else{
				result = data;
			}
		})
	}
	else if(ops == "mul"){
		cal.multiply(finput, sinput,  function(err,data){
			if (err){
				console.log(err);
			}
			else{
				result = data;
			}
		})
	}
	console.log(result);
	singh(null, result);
}

module.exports.arithmetic_logic = arithmetic_logic
	