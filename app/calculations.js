function add(x,y, amar){
	var sum = x+y;
	amar(null,sum);
};

function sub(x,y, amar){
	var sub = x-y;
	amar(null,sub);
};

function multiply (x,y,amar){
    var mul = x*y;
	amar(null, mul);

};

module.exports.add = add;
module.exports.sub = sub;
module.exports.multiply = multiply;