const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alumniSurveyPage1Schema = new Schema({
  name_a:{
    type:String,
    default:"not mentioned"
  },
  domain_of_job:{
    type:String,
    default:"not mentioned"
  },
  year_of_passout:{
    type:String,
    default:"not mentioned"
  },
  country:{
    type:String,
    default:"not mentioned"
  },
  phoneno_a:{
    type:String,
    default:"not mentioned"
  },
    email_a:{
    type:String,
    default:"not mentioned"
  },
  date:{
    type:Date,
    default:Date.now
  }
})

const alumniSurveyPage1 = mongoose.model('alumniSurveyPage1',alumniSurveyPage1Schema);

module.exports = alumniSurveyPage1;
