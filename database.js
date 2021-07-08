const mongoose = require('mongoose');

// connecting to mongodb
const db= 
mongoose
.connect("mongodb+srv://sneha:$ssdn98272@cluster0.lmwik.mongodb.net/myfirstdatabase?retryWrites=true&w=majority",  
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })

  module.exports=db;


  