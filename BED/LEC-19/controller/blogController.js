module.exports.postaddBlog=async (req, res)=>{
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
}

module.exports.getreadBlog=async(req, res)=>{
        let allBlog=await Blogs.find();
        res.json({
            success:true,
            data:allBlog
        })
    }
    module.exports.deleteOneBlog=async (req, res)=>{
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
}