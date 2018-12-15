const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  
  tweetbody:{
    type:String,
    required:true
  }
})

const Tweets = mongoose.model('tweets',tweetSchema);

module.exports = Tweets;
