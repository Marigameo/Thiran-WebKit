const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name:{
    type:String
  },
  dep:{
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
  yr:{
    type:String
  },
  position:{
    type:String
  },
  teamname:{
    type:String
  },
  phoneno:{
    type:String
  },
  experience:{
    type:String
  },
  event_list1:{
    type:String
  },
  events_list2:{
    type:String
  },
  event_rating:{
    type:String
  },
  platform:{
    type:String
  },
  profile_link:{
    type:String
  },
  feedback:{
    type:String
  },
})

const Projects = mongoose.model('events',eventSchema);

module.exports = Projects;
