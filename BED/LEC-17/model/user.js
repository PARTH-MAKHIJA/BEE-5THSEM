const mongoose=require("mongoose");
const Blog = require("./blog");
const Schema=mongoose.Schema;

const userSchema=new Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    blogs:[{
        type:mongoose.Types.ObjectId,
        ref:"Blog"
    }]
})
module.exports=mongoose.model("User", userSchema);