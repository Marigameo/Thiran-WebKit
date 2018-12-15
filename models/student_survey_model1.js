const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSurveyPage1Schema = new Schema({
  name:{
    type:String,
    default:"not mentioned"
  },
  dep:{
    type:String,
    default:"not mentioned"
  },
  year:{
    type:String,
    default:"not mentioned"
  },
  phoneno:{
    type:String,
    default:"not mentioned"
  },
  email:{
    type:String,
    default:"not mentioned"
  },
  date:{
    type:Date,
    default:Date.now
  }
})

const studentSurveyPage1 = mongoose.model('studentSurveyPage1',studentSurveyPage1Schema);

module.exports = studentSurveyPage1;
