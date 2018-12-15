const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
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
  },
  book:{
    type:String,
    required:true
  }
})

const Book = mongoose.model('book',bookSchema);

module.exports = Book;
