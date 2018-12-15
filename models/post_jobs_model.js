const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const post_jobs_schema = new Schema({
  job_title:{
    type:String,
    default:"not mentioned"
  },
  company_name:{
    type:String,
    default:"not mentioned"
  },
  location:{
    type:String,
    default:"not mentioned"
  },
  domain:{
    type:String,
    default:"not mentioned"
  },
  job_description:{
    type:String,
    default:"not mentioned"
  },
  job_function:{
    type:String,
    default:"not mentioned"
  },
    edu1:{
    type:String,
    default:"not mentioned"
  },
  emp_type:{
    type:String,
    default:"not mentioned"
  },
  application:{
    type:String,
    default:"not mentioned"
  },
  email:{
    type:String,
    default:"not mentioned"
  },
  phoneno:{
    type:String,
    default:"not mentioned"
  },
  url:{
    type:String,
    default:"not mentioned"
  },
  postal_address:{
    type:String,
    default:"not mentioned"
  },
  job_duration:{
    type:String,
    default:"not mentioned"
  },
  salary:{
    type:String,
    default:"not mentioned"
  },
  arrears:{
    type:String,
    default:"not mentioned"
  },
  upvotes:{
    type:Number,
    default:0
  },
  cgpa:{
    type:String,
    default:"not mentioned"
  },
  min_cgpa:{
    type:String,
    default:"not mentioned"
  },
  software_skills:{
    type:String,
    default:"not mentioned"
  },
  other_skills:{
    type:String,
    default:"not mentioned"
  },
  freshers:{
    type:String,
    default:"not mentioned"
  },
  seniority:{
    type:String,
    default:"not mentioned"
  }
})

const post_jobs = mongoose.model('post_jobs',post_jobs_schema);

module.exports = post_jobs;
