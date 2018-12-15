const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const troubleSchema = new Schema({
  name:{
    type:String
  },
  email:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  }
})

const Trouble = mongoose.model('trouble',troubleSchema);

module.exports = Trouble;
