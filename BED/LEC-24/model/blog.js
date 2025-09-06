const mongoose=require("mongoose");
const User=require("./user");
const Schema=mongoose.Schema;
const BlogPost = new Schema({
  title: String,
  body: String,
  date: Date,
  userId:{
    type:mongoose.Types.ObjectId,
    ref:"User"
  }
});

module.exports=mongoose.model('Blog', BlogPost);    //model is a class

