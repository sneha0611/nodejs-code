// var hello=require("./hello")
// hello();

// var cal=require("./friend.modal.js")
// cal();

// var sayhello=require("./hello")
// sayhello()

// var add=require("./hello")
// add()

//create express server
const express=require("express");
const mongoose=require("mongoose");
const nodemailer=require("nodemailer")
const app=express();
const {friendModel }= require("./friend.modal.js")
const {mydataModel} = require("./friend.modal.js")
const{subjectModel}  = require("./friend.modal.js");
const Bookmodel=require("./friend.modal.js")

//filename
const dummyData= [
  {
    _id:"1",
 name:"shgjjjj",
 contact:9087665644
},
{
 _id:"2",
  name:"dsaa",
  contact:9000678543
},
];
// connecting to mongodb
mongoose
.connect("mongodb+srv://sneha:$ssdn98272@cluster0.lmwik.mongodb.net/myfirstdatabase?retryWrites=true&w=majority",  
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then((data)=>console.log("connected to database"))
  .catch((error)=>console.log("something went wrong"));
 
//parsing body
app.use(express.json());
//CRUD op
//saving data to db
//mydata moodel
//get documents
// app.get("/get/documents",(req,res)=>{
//   mydataModel.find().then((data)=>{
//     console.log("data",data);
//     res.status(200).send(data)
//   }).catch((err)=>{
//     console.log("err",err)
//   })
// });
//get doc by id
// app.get("/get/documentById",(req,res)=>{
//   const _id=req.query._id;
//   const mydata = mydataModel.findById({_id:_id})
//   .then((data)=>{
//     console.log("data",data)
//     res.send("get the document")
//   }).catch((err)=>{
//     res.send("error occured")
//   })
// });
//add a doc 
app.post("/add/me",(req,res)=>{
  const data=req.body;
  const mydata =new mydataModel({
    myName:data.myName,
    contactNumber:data.contactNumber,
    emailId:data.emailId,
    age:data.age
  });
  mydata.save()
  .then((data)=>{
    res.status(200).send(data);
    console.log("data",data)
  }).catch((error)=>{
    console.log("error",error);
    res.status(500).send(err);
  });
});

// update a doc with its id
app.put("/update/documentById",(req,res)=>{
  const _id=req.query._id;
  const data = req.body;
  console.log("data",data)
  mydataModel.findByIdAndUpdate({_id:_id},
    {$set:{myName:data.myName}},
    {$set:{contactNumber:data.contactNumber}},
   {new:true},
  {new:true}
    )
    .then((data)=>{
    res.status(200).send(data)
  }).catch((err)=>{
    console.log("err",data)
    res.status(200).send("error occured")
  })
});
//delete a doc with its id
app.delete("/delete/documentById",(req,res)=>{
  const _id=req.query._id;
  mydataModel.findByIdAndDelete({_id:_id}).then((data)=>{
  console.log("data",data)
  res.status(200).send(data);
})
.catch((err)=>{
  res.status(500).send(err)
})
})
// subject model
// add a doc to the collection
app.post("/add/subjectdata",(req,res)=>{
const data=req.body;
const subjectdata = new subjectModel({
  subjectName:data.subjectName,
  subjectCode:data.subjectCode,
  subjectTeacher:data.subjectTeacher
});
const subjectdata1 = new subjectModel({
  subjectName:data.subjectName,
  subjectCode:data.subjectCode,
  subjectTeacher:data.subjectTeacher
});
subjectdata.save().then((data)=>{
  console.log("data",data)
  res.status(200).send(data)
}).catch((err)=>{
  console.log("err",err)
  res.status(500).send(err)
})
subjectdata1.save().then((data)=>{
  console.log("data",data)
  res.status(200).send(data)
}).catch((err)=>{
  console.log("err",err)
  res.status(500).send(err)
});
});
//get doc by its id
// app.get("/get/documentById",(req,res)=>{
//   const _id=req.query._id;
//   const subject = subjectModel.findById({_id:_id})
//   .then((data)=>{
//     console.log("data",data)
//     res.send("get the document")
//   }).catch((err)=>{
//     res.send("error occured")
//   })
// });
//delete a doc by its id
// app.delete("/delete/subjectdataById",(req,res)=>{
//   const _id=req.query._id;
//   const data=req.body;
//   subjectModel.findByIdAndDelete({_id:_id}).then((data)=>{
//   res.status(200).send("deleted")
//   console.log("data",data)
// }).catch((err)=>{
//   res.status(500).send("cannot delete")
//   console.log("err",err)
// })
// })
//update a doc by its id
app.put("/update/subjectdata1ById",(req,res)=>{
  const data=req.body;
  const _id=req.query._id;
  console.log("data",data);
  subjectModel.findByIdAndUpdate({_id:_id},{$set:{subjectTeacher:data.subjectTeacher}},
    {new:true}
    ).then((data)=>{
    console.log
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  }) 
});
//friend api
//get
app.get("/get/friend",(req,res)=>{
  const data=req.body;
  friendModel.find().then((data)=>{
    console.log("data",data)
    res.send(data)
  }).catch((err)=>{
    console.log("err",err)
    res.send(err)
  })
})
//post api
app.post("/add/friend2", (req, res)=> {
  const data=req.body;
  console.log("data",data)
  const friend =new friendModel({
    friendName:data.friendName,
    mobileno:data.mobileno,
    address:data.address,
  })
  const friend2 =new friendModel({
    friend2Name:data.friend2Name,
    mobileno:data.mobileno,
    address:data.address
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
  friend2.save()
  .then((data)=>{
    console.log("data",data)
      res.send(data);  
  })
  .catch((err)=>{
    res.send("unable to save data")
    console.log("err",err)
  })
});
//get document
app.get("/get/document",(req,res)=>{
  friendModel.find()
  .then((data)=>{
    if(data==null){
      res.send("data is not available")
    }else{
      res.send(data)
    }
  })
  .catch((err)=>{
    res.send("something went wrong")  
  })
})
//get a doc by its id
app.get("/get/friendById/:_id",(req,res)=>{
  const _id = req.params._id;
  if(_id){
    console.log("inside")
  console.log("req.params",req.params)
  const friend=friendModel.findById({_id:_id})
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
})
//update a doc
app.put("/update/friendById",(req,res)=>{
  const data=req.body;
  const _id=req.query._id;
  if(_id){
  console.log("inside the document");
  friendModel.findByIdAndUpdate({_id:_id},{$set:{address:data.address}},
    {new:true}
    ).then((data)=>{
      if(!data){
        res.send("couldn't find user")
      }else{
        res.send(data)
      } 
    }).catch((err)=>{
      res.send(err)
    })
  }else{
    res.send("invalid id")
  }
})
//delete a document by its _id
app.delete("/delete/friendById",(req,res)=>{
  const data=req.body;
  const _id=req.query._id;
  if(_id){
    console.log("come to next")
    friendModel.findByIdAndDelete({_id:_id})
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

})
//Book model
app.post("/add/Book",(req,res) => {
  const data=req.body;
  console.log("data",data)
  const Book = new Bookmodel({
    Bookname:data.Bookname,
    price:data. price,
    Author:data.Author,
    language:data.language,
    aboutAuthor:data.aboutAuthor,
  });
  Book.save()
  .then((data)=>{
    console.log("data",data)
    res.send(data)
  })
  .catch((err)=>{
    res.send(err)
  })
})
  app.put("/update/BookById",(req,res)=>{
    const _id= req.query._id;
    const data=req.body;
    console.log("req.query",req.query)
    console.log("data",data)
    Bookmodel.findByIdAndUpdate({_id:_id},{$set:{price:data.price}},
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
    })
    app.get("/get/BookbyId",(req,res)=>{
      const _id=req.query._id;
      console.log("req.query",req.query)
      if(_id){
        console.log("inside")
        Bookmodel.findById({_id:_id})
      .then((data)=>{
        if(!data){
          res.send("couldnot find user")
        }else{
          res.send(data)
        }
      })
      .catch((err)=>{
        res.send("err",err)
      })
    }
   });
    

      //assign port
app.listen(8080,function(){
  console.log("server is up on port 8080")
});





 




//CRUD operations
// app.get("/:msg/:car",function(request,response){
// console.log("request",request)
//  console.log("params",request.params)
// console.log("query",request.query)
//    response.send(hellofriends)    
// })
// app.get("/get/friends",(request,response)=>{
//   console.log("body",request.body)   
// })
// //data will be in JSON object 
// app.post("/add/friends",(req,res)=>{
//   console.log("body",req.body)  
//   dummyData.push (req.body)
//   res.send(dummyData) 
// });

