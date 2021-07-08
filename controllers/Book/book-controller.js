
const {bookModel}=require("../../models/book/book-model");
//add friendcontroller
exports .addbookController = (req,res)=>{
    const data=req.body;
    const friend =new bookModel({
      bookname:data.bookname,
      Price:data.Price,
      author:data.author,
      aboutAuthor:data.aboutAuthor,
      language:data.language
    })
    friend.save()
    .then((data)=> {
      console.log("data",data)
        res.send(data);   
    })
    .catch((err)=>{
      res.send("unable to save data")
      console.log("err",err)
    })
  };

  exports.getbookController = (req,res)=>{
    const data=req.body;
    friend.find().then((data)=>{
      console.log("data",data)
      res.send(data)
    }).catch((err)=>{
      console.log("err",err)
      res.send(err)
    })
  }

  exports.getbookByIdController =(req,res)=>{
    const _id = req.params._id;
    if(_id){
      console.log("inside")
    console.log("req.params",req.params)
    const friend=bookModel.findById({_id:_id})
    .then((data)=>{
      console.log("data",data);
      if(!data){
        res.send("couldn't find user")
      }
      else{
        res.send(data); 
      } 
    })
    .catch((err)=>{
      console.log("err",err)
      res.send(err); 
    })
  }else{
    res.send("invalid _id")
  }
  };

  exports.updatebookByIdController=(req,res)=>{
    const _id= req.query._id;
    const data=req.body;
    console.log("req.query",req.query)
    console.log("data",data)
    bookmodel.findByIdAndUpdate({_id:_id},{$set:{price:data.price}},
      {new:true}
    )
      .then((data)=>{
        if(!data){
          res.send("couldnot find user")
        }
        else{
          res.status(200).send(data)
        }  
      })
      .catch((err)=>{
        res.status(500).send("something went wrong");
      })
    };

  exports.deletebookByIdController=(req,res)=>{
    const data=req.body;
    const _id=req.query._id;
    if(_id){
      console.log("come to next")
      bookModel.findByIdAndDelete({_id:_id})
      .then((data)=>{
      if(!data){
        res.send("couldnot find data")
      }else{
        res.status(200).send(data)
      }  
      })
      .catch((err)=>{
        res.status(500).send(err)
      })
    } 
  };


  