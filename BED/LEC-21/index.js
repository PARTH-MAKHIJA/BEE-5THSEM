const express=require("express");
const app=express();
const mongoose=require("mongoose")
const User=require("./model/users")
app.use (express.json())
app.use(express.urlencoded({extended:true}))
console.log(User)
app.get("/health",(req,res)=>{
    res.json({
        status:"ok",
        message:"server running fine"
    })
})
//end point for signing up--adding new user in database
app.post("/api/users/signup",async(req,res)=>{
    try{
        let {name,email,password}=req.body;
    let userExist=await User.findOne({email:email})
    if(userExist){
        return res.json({
            success:false,
            message:"user already exist with this email please login"
        })
    }
    let newUser=new User({
        name:name,
        email:email,
        password:password
    })
    await newUser.save()
    res.json({
        success:true,
        message:"user Registerreed successfully"
    })
    }
catch (error){
    console.log(error.message);
    res.json({
        error:{
            message:error.message
        }
    })
}
})
app.post("/api/auth/login",async(req,res)=>{
    const{email,password}=req.body;
    let userExist=await User.findOne({email:email});
    if(!userExist){
        return res.json({
            success:false,
            message:"YOU ARE NOT REGISTERED"
        })
    }
    if(password!=userExist.password){
        return  res.json({
            success:false,
            message:"INVALID PASSWORD"
        })
    }
     if(password==userExist.password){
        return  res.json({
            success:true,
            message:"LOGGED IN"
        })
    }
})
mongoose.connect('mongodb://127.0.0.1:27017/g26_db')
.then(()=>{console.log("connected")})
.catch((err)=>{
    console.log(err.message)
})
app.listen(5775,()=>{
    console.log("SERVER CREATED")
})