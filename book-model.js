const mongoose=require("mongoose");
const Schema=mongoose.Schema;

//create schema
const bookSchema=new Schema({
   

    bookname:{
        type:String
    },
    Price:{
        type:String
    },
    author:{
        type:String
    },
    aboutAuthor:{
        type:String
    },
    language:{
        type:String
    }
});
const bookModel = mongoose.model("bookModel",bookSchema)
module.exports = {bookModel};

  