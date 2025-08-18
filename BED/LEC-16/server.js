const express=require("express");
const mongoose = require('mongoose');
const Blogs=require("./model/blog");
const User=require("./model/user");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post("/blogs",async (req, res)=>{
    let{title,body}=req.body;
 let newBlog=new Blogs({
    title: title,
    body:body,
    date:Date.now()
 });
await newBlog.save();
res.json({
    success:true,
    data:newBlog,
    message:"blog added successfully"
})
})

// app.get("/blogs",async (req,res)=>{
//     let allBlog= await Blogs.find();
//     res.json({
//         success:true,
//         data:allBlog
//     })
// })
app.get("/blogs", async(req, res)=>{
    try{
        let allBlog=await Blogs.find();
        res.json({
            success:true,
            data:allBlog
        })
    }catch (error){
        res.json(error);
    }
})

app.get("/blogs/:id", async(req, res)=>{
    let {id}=req.params;
    let blog=await Blogs.findOne({_id:id});   // can be found by multiple atttribute
    res.json({
        success:true,
        data:blog
    })
});


app.post("/users",async (req, res)=>{
    let{username, email, password}=req.body;
 let newUser=new User({
    username:username,
    email:email,
    password:password
 });
await newUser.save();
res.json({
    success:true,
    data:newUser,
    message:"User added successfully"
})
})
app.get("/users", async(req, res)=>{
    try{
        let allUsers=await User.find();
        res.json({
            success:true,
            data:allUsers
        })
    }catch (error){
        res.json(error);
    }
})
app.get("/users/:id", async(req, res)=>{
    let {id}=req.params;
    let user=await User.findOne({_id:id});   
    res.json({
        success:true,
        data:user
    })
});




mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
  .then(() => console.log('Connected!'));
app.listen(4444, ()=>{
    console.log("Server started");
})


