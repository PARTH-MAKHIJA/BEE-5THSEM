const express=require("express");
const app=express();
const mongoose=require("mongoose")
const User=require("./model/users")
const jwt=require("jsonwebtoken")
app.use (express.json())
app.use(express.urlencoded({extended:true}))
console.log(User)
function isLogin(req,res,next){
    if(!req.headers.authorization){
        return res.send({
            success:false,
            message:"No auth key provided"
        })
    }
    let token=req.headers.authorization
    console.log(token);
    if(!token){
        return res.json({
            success:false,
            message:"please login"
        })
    }
    let decode=jwt.verify(token,"okkkkk");
    console.log(decode)

    if(!decode){
        return res.json({success:false,
            message:"Invalid token"
        })
    }
    req.user=decode.user;
    next()
}
app.get("/health",(req,res)=>{
    res.json({
        status:"ok",
        message:"server running fine"
    })
})
app.get("/home",isLogin,(req,res)=>{
    console.log("user---->",req.user.name)
        let username = req.user.name;
    res.json({
        success:true,
        message:"welcome"+""+username
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
        let token=jwt.sign({"user":userExist},"okkkkk")
        return  res.json({
            success:true,
            message:"LOGGED IN",
            token:token
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
// REGISTERED ONLOCAL HOST TO TEST
// {
//   "email":"123@GMAIL.COM",
//   "password":"12345"
// }

//AFTER THIS COPY THE TOKEN ID THAT IS eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4YTU5YTRmNDlhMzQwYzhjZThmNmQzNiIsIm5hbWUiOiJQQVJUSCIsImVtYWlsIjoiMTIzQEdNQUlMLkNPTSIsInBhc3N3b3JkIjoiMTIzNDUiLCJibG9nX2NvdW50IjowLCJibG9ncyI6W10sImNyZWF0ZWRfQXQiOiIyMDI1LTA4LTIwVDA5OjUwOjA3LjM1M1oiLCJfX3YiOjB9LCJpYXQiOjE3NTYxMTI3NTN9.1EbIz-cANR1x5BLoqA81htga-TsClJwf02BAdycevx4 
//ND THEN PASTE TOKEN ON jwt.io further jwt decoder itwill decode the token nd tell info in it 