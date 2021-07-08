//create express server
const express=require("express");
const router = express.Router();
const {bookModel}=require("../../models/book/book-model");
//import Bookcontroller
const bookController = require("../../controllers/Book/book-controller.js");
//parsing
 router.use(express.json());

router.post("/add/book", bookController .addbookController)
    
  //get friend
   router.get("/get/book",bookController .getbookController);

  //get a doc by its id
router.get("/get/bookById/:_id",bookController.getbookByIdController);

  //update a doc
router.put("/update/bookById",bookController.updatebookByIdController);
  //delete a document by its id
router.delete("/delete/bookById",bookController.deletebookByIdController);

  //export 
  module.exports=router;
