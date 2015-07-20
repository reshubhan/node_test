var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
     id: String,
	 username: String,
	 password: String,
	 email: String,
	 firstName: String,
	 lastName: String,
	 type: String,
	 facebook_id: String
});
mongoose.model('User', User);
mongoose.connect('mongodb://localhost:27017/test');