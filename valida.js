const express= require ('express')
const mongoose=require ('mongoose');
const {validate,ValidationError,Joi}=require('express-validation')
const bodyParser= require('body-parser')

const loginValidation= {
    body:Joi.object({
        email:Joi.string()
        .email()
        .required(),
        password:Joi.string()
        .regex(/[a-zA_Z0-9]{2,15}/)
        .required(),
    })
}
const app=express();
app.use(bodyParser.json());
app.post('/login', validate(loginValidation,{},{}),
 (req,res)=> {
            res.json(200)
 })
 app.use(function (err,req,res,next){
     if(err instanceof ValidationError){
         return res.status(err.statusCode).json(err)
     }
         return res .status(500).json(err)
     
    })
//assigning port 
    app.listen(8080,()=>{
        console.log("server is up on port 8080")
      });
            






    



        