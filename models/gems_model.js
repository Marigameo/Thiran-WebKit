const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gemsSchema = new Schema({
  name:{
    type:String,
    default:"not mentioned"
  },
  district_name:{
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
  domain:{
    type:String,
    default:"not mentioned"
  },
    year:{
    type:String,
    default:"not mentioned"
  },
  year_of_passing:{
    type:String,
    default:"not mentioned"
  },
  edu1:{
    type:String,
    default:"not mentioned"
  },
  institution_name1:{
    type:String,
    default:"not mentioned"
  },
  district1:{
    type:String,
    default:"not mentioned"
  },
  cutoff1:{
    type:String,
    default:"not mentioned"
  },
  institution_name2:{
    type:String,
    default:"not mentioned"
  },
  district2:{
    type:String,
    default:"not mentioned"
  },
  cutoff2:{
    type:String,
    default:"not mentioned"
  },
  edu2:{
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
  accomplishments:{
    type:String,
    default:"not mentioned"
  },
  lang_prof:{
    type:String,
    default:"not mentioned"
  },
  upvotes :{
    type:Number,
    default:0
  },
  issuer:{
    type:String,
    default:"not mentioned"
  },
  date1:{
    type:Date,
    default:Date.now
  },
  duartion:{
    type:String,
    default:"not mentioned"
  },
  ongoing:{
    type:String,
    default:"not mentioned"
  },
  date2:{
    type:Date,
    default:Date.now
  },
  date3:{
    type:Date,
    default:Date.now
  },
  offer:{
    type:String,
    default:"not mentioned"
  },
  score:{
    type:String,
    default:"not mentioned"
  },
  interns:{
    type:String,
    default:"not mentioned"
  },
  intern_company:{
    type:String,
    default:"not mentioned"
  },
  intern_duration:{
    type:String,
    default:"not mentioned"
  },
  title:{
    type:String,
    default:"not mentioned"
  },
  publisher:{
    type:String,
    default:"not mentioned"
  },
  expire:{
    type:String,
    default:"not mentioned"
  },
  company_name:{
    type:String,
    default:"not mentioned"
  },
  position_at:{
    type:String,
    default:"not mentioned"
  },
  role_description:{
    type:String,
    default:"not mentioned"
  },
  mentor_name:{
    type:String,
    default:"not mentioned"
  },
  mentor_description:{
    type:String,
    default:"not mentioned"
  }
})

const gems = mongoose.model('gems',gemsSchema);

module.exports = gems;
