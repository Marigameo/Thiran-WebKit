const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSurveyPage2Schema = new Schema({
  involvement:{
    type:String,
    default:"not mentioned"
  },
  know:{
    type:String,
    default:"not mentioned"
  },
  website_visit:{
    type:String,
    default:"not mentioned"
  },
  mentor_relationship:{
    type:String,
    default:"not mentioned"
  },
  ogc_relationship:{
    type:Number,
    default:0
  },
    updates:{
    type:String,
    default:"not mentioned"
  },
  fund:{
    type:String,
    default:"not mentioned"
  },
  placement:{
    type:Number,
    default:0
  },
  domain_of_job:{
    type:String,
    default:"not mentioned"
  },
  activities:{
    type:String,
    default:"not mentioned"
  },
  support:{
    type:Number,
    default:0
  },
  barrier:{
    type:String,
    default:"not mentioned"
  },
  direct:{
    type:String,
    default:"not mentioned"
  },
  help_placements:{
    type:String,
    default:"not mentioned"
  },
  
})

const studentSurveyPage2 = mongoose.model('studentSurveyPage2',studentSurveyPage2Schema);

module.exports = studentSurveyPage2;
