const express=require("express");
const mongoose = require('mongoose');
const Blogs=require("./model/blog");
const User=require("./model/user");
const blog = require("./model/blog");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const blogRoute=require("./routes/blogsRoutes")
const userRoute=require("./routes/usersRoutes")
app.use("/api/blogs",blogRoute)
app.use("/api/users",userRoute)
app.post("/blogs",async (req, res)=>{
    let{title,body, userId}=req.body;
    let userExist= await User.findById(userId);
    if(userExist){
 let newBlog=new Blogs({
    title: title,
    body:body,
    date:Date.now(),
    userId:userId
 });
await newBlog.save();
userExist.blogs.push(newBlog._id);
await userExist.save();
res.json({
    success:true,
    data:newBlog,
    message:"blog added successfully"
})

}
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

//delete blog
app.delete("/blogs/:blogId/:userId" , async (req, res)=>{
    let {blogId, userId}=req.params;

    let blogExist=await Blogs.findById(blogId);
    if(!blogExist){
        return res.json({
            success:false,
            message:"Blog does not exist"
        })
    }
    if(blogExist.userId!=userId){
        return res.json({
            success:false,
            message:"You are not allowed to delete this blog"
        })
    }
    await Blogs.findOneAndDelete(blogId);

    let user=await User.findById(userId);
    let blogArr=user.blogs.filter((id)=> id!=blogId);
    user.blogs=blogArr;
    await user.save();
    res.json({
        success:true,
        message:"blog deleted successfully",
        data: user
    })
});

app.put("/blogs/:blogId/:userId", async (req, res)=>{

    let{blogId, userId}=req.params;
    let{title, body}=req.body;

    let blogExist=await Blogs.findById(blogId);
    if(!blogExist){
       return res.json({
            success:false,
            message:"Blog does not exist"
        })
    }
      if(blogExist.userId!=userId){
        return res.json({
            success:false,
            message:"You are not allowed to edit this blog"
        })
    }
  let updatedBlog=  await Blogs.findByIdAndUpdate(blogId, { title, body}, {new:true});
    res.json({
        success:true,
        message:"Blog edited successfully",
        data:updatedBlog
    })

})


app.post("/users",async (req, res)=>{
    let{username, email, password}=req.body;
 let newUser=new User({
    username:username,
    email:email,
    password:password,
    
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
        let allUsers=await User.find().populate("blogs");
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
    let user=await User.findOne({_id:id}).populate("blogs");   
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


