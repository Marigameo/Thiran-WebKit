const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  name:{
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
  feedback_body:{
    type:String,
    required:true
  }
})

const Feedback = mongoose.model('feedback',feedbackSchema);

module.exports = Feedback;
