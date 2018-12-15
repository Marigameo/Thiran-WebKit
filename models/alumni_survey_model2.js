const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alumniSurveyPage2Schema = new Schema({
  involvement_a:{
    type:String,
    default:"not mentioned"
  },
  major_support:{
    type:String,
    default:"not mentioned"
  },
  interact_a:{
    type:String,
    default:"not mentioned"
  },
  invites:{
    type:String,
    default:"not mentioned"
  },
   mentor_relationship_a:{
    type:String,
    default:"not mentioned"
  },
  ogc_relationship_a:{
    type:Number,
    default:0
  },
   updates_a:{
    type:String,
    default:"not mentioned"
  },
  focus:{
    type:String,
    default:"not mentioned"
  },
  admin_flexible:{
    type:Number,
    default:0
  },
  domain_a:{
    type:String,
    default:"not mentioned"
  },
  activities_a:{
    type:String,
    default:"not mentioned"
  },
  support_a:{
    type:Number,
    default:0
  },
  barrier_a:{
    type:String,
    default:"not mentioned"
  },
  ogc_focus:{
    type:String,
    default:"not mentioned"
  },
  towards_placement:{
    type:Number,
    default:0
  }
  
})

const alumniSurveyPage2 = mongoose.model('alumniSurveyPage2',alumniSurveyPage2Schema);

module.exports = alumniSurveyPage2;
