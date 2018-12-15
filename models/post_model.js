const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title:{
    type:String
  },
  body:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  },
  author:{
    type:String,
    default:'ananymous'
  },
  upvotes:{
    type:Number,
    default:0
  },
  downvotes:{
    type:Number,
    default:0
  },
  username:{
    type:String
  }
})

const Posts = mongoose.model('posts',postSchema);

module.exports = Posts;
