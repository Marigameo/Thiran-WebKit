const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const googleUserSchema = new Schema({
	username:String,
	googleId:String,
	thumbnail:String
});

const googleUser = mongoose.model('googleuser',googleUserSchema,'users');

module.exports = googleUser;
