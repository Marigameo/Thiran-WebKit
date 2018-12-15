const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSurveyPage3Schema = new Schema({
  perks:{
    type:String,
    default:"not mentioned"
  },
  duration:{
    type:String,
    default:"not mentioned"
  },
  college_support:{
    type:Number,
    default:0
  },
  affect:{
    type:String,
    default:"not mentioned"
  },
  active_duration:{
    type:String,
    default:"not mentioned"
  },
    academic_support:{
    type:String,
    default:"not mentioned"
  },
  placements_related_perks:{
    type:Number,
    default:0
  },
  events_trainings:{
    type:Number,
    default:0
  },
  funds_by_college:{
    type:Number,
    default:0
  }
  
})

const studentSurveyPage3 = mongoose.model('studentSurveyPage3',studentSurveyPage3Schema);

module.exports = studentSurveyPage3;
