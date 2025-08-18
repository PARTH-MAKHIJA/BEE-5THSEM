module.exports.postaddUser=async (req, res)=>{
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
}


module.exports.getreadUser=async(req, res)=>{
    try{
        let allUsers=await User.find().populate("blogs");
        res.json({
            success:true,
            data:allUsers
        })
    }catch (error){
        res.json(error);
    }
}
    module.exports.getOneUser=async(req, res)=>{
    let {id}=req.params;
    let user=await User.findOne({_id:id}).populate("blogs");   
    res.json({
        success:true,
        data:user
    })
}