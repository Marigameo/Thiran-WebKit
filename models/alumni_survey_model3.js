const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alumniSurveyPage3Schema = new Schema({
  perks_a:{
    type:String,
    default:"not mentioned"
  },
  duration_a:{
    type:String,
    default:"not mentioned"
  },
  fellow_support:{
    type:Number,
    default:0
  },
  affect_a:{
    type:String,
    default:"not mentioned"
  },
  active_duration_a:{
    type:String,
    default:"not mentioned"
  },
    academic_support_a:{
    type:String,
    default:"not mentioned"
  },
  cooperation_stu:{
    type:Number,
    default:0
  },
  ogc_rate:{
    type:Number,
    default:0
  },
  college_rate:{
    type:Number,
    default:0
  }
  
})

const alumniSurveyPage3 = mongoose.model('alumniSurveyPage3',alumniSurveyPage3Schema);

module.exports = alumniSurveyPage3;
