const mongoose=require("mongoose");
const Schema=mongoose.Schema;

//create schema
const friendSchema=new Schema({
    friendName:{
        type:String,
    },
    mobileno:{
        type:Number,
    },
    address:{
        type:String,
    },
});
//create another schema
const mydataSchema = new Schema({
    myName:{
        type:String,
    },
    contactNumber:{
            type:Number,
        },
    emailId:{
        type:String,
    } ,
    age:{
        type:String,
    }   
})
//create another schema
const subjectSchema= new Schema({
    subjectName:{
        type:String,
    },
    subjectCode:{
        type:Number,
    },
    subjectTeacher:{
        type:String,
    },
})

//create Book schema
const BookSchema =new Schema({
    Bookname:{
        type:String
    },
    price:{
        type:Number
    },
    Author:{
        type:String
    },
    language:{
        type:String
    },
    aboutAuthor:{

        type:String
    }

})
//CRUD op


const mydataModel=mongoose.model("mydataModel",mydataSchema);


const subjectModel=mongoose.model("subjectModel",subjectSchema)


const friendModel=mongoose.model("friendModel",friendSchema);
module.exports={friendModel,subjectModel,mydataModel};

const Bookmodel =mongoose.model("Bookmodel",BookSchema);
module.exports=Bookmodel;