  
var mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
  });

// (모델 이름, 스키마 이름, 컬렉션 이름)
module.exports = mongoose.model('book', bookSchema, 'book');

/*
 db.book.insert({"name": "MongoDB Tutorial", "author": "velopert"});
 
SchemaType은 총 8종류
    String
    Number
    Date
    Buffer
    Boolean
    Mixed
    Objectid
    Array
*/
