const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name:{
    type:String
  },
  email:{
    type:String,
    required:true,
    trim:true
  },
  date:{
    type:Date,
    default:Date.now
  },
  position:{
    type:String
  },
  teamname:{
    type:String
  },
  project_title:{
    type:String
  },
  project_description:{
    type:String
  },
  experience:{
    type:String
  },
  pre_yr_project:{
    type:String
  },
  pre_yr_project_des:{
    type:String
  },
  mentor:{
    type:String
  },
  dep:{
    type:String
  },
  yr:{
    type:String
  },
  feedback:{
    type:String
  },
  phoneno:{
    type:String
  },
  mentor:{
    type:String
  },
  rating:{
    type:Number
  }
})

const Projects = mongoose.model('projects',projectSchema);

module.exports = Projects;
