const express=require("express");
const router=express.Router()
const{postaddUser,getreadUser,getOneUser}=require("../controller/userController")
router.post("/",postaddUser)
router.get("/",getreadUser)
router.get("/:id",getOneUser)
router.post("/",async (req, res)=>{
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
router.get("/", async(req, res)=>{
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
router.get("/:id", async(req, res)=>{
    let {id}=req.params;
    let user=await User.findOne({_id:id}).populate("blogs");   
    res.json({
        success:true,
        data:user
    })
});


module.exports=router;
