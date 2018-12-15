const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  username:{
    type:String
  },
  email:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  },
  body:{
    type:String,
    required:true
  }
})

const Contact = mongoose.model('contact',contactSchema);

module.exports = Contact;
