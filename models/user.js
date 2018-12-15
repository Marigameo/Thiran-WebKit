//require mongoose module
const mongoose = require('mongoose');

//Define User Schema
const UserSchema = mongoose.Schema({
  username:{
    type: String,
      unique:true,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique:true,
    trim:true
  },
  password:{
    type: String,
    required: true
  },
  role:{
    type:String,
    required:true
  }
});


//User model and export it
const localUser = module.exports = mongoose.model('localuser', UserSchema,'users');
