const express=require("express");
const router=express.Router()
const{postaddBlog,getreadBlog,deleteOneBlog}=require("../controller/blogController")
console.log(postaddBlog,getreadBlog,deleteOneBlog)
router.post("/",postaddBlog)
router.get("/",getreadBlog)
router.delete("/:blogId",deleteOneBlog)
// router.post("/",async (req, res)=>{
//     let{title,body, userId}=req.body;
//     let userExist= await User.findById(userId);
//     if(userExist){
//  let newBlog=new Blogs({
//     title: title,
//     body:body,
//     date:Date.now(),
//     userId:userId
//  });
// await newBlog.save();
// userExist.blogs.push(newBlog._id);
// await userExist.save();
// res.json({
//     success:true,
//     data:newBlog,
//     message:"blog added successfully"
// })

// }
// })

// // app.get("/blogs",async (req,res)=>{
// //     let allBlog= await Blogs.find();
// //     res.json({
// //         success:true,
// //         data:allBlog
// //     })
// // })
// router.get("/", async(req, res)=>{
//     try{
//         let allBlog=await Blogs.find();
//         res.json({
//             success:true,
//             data:allBlog
//         })
//     }catch (error){
//         res.json(error);
//     }
// })

// router.get("/:id", async(req, res)=>{
//     let {id}=req.params;
//     let blog=await Blogs.findOne({_id:id});   // can be found by multiple atttribute
//     res.json({
//         success:true,
//         data:blog
//     })
// });

// //delete blog
// router.delete("/:blogId/:userId" , async (req, res)=>{
//     let {blogId, userId}=req.params;

//     let blogExist=await Blogs.findById(blogId);
//     if(!blogExist){
//         return res.json({
//             success:false,
//             message:"Blog does not exist"
//         })
//     }
//     if(blogExist.userId!=userId){
//         return res.json({
//             success:false,
//             message:"You are not allowed to delete this blog"
//         })
//     }
//     await Blogs.findOneAndDelete(blogId);

//     let user=await User.findById(userId);
//     let blogArr=user.blogs.filter((id)=> id!=blogId);
//     user.blogs=blogArr;
//     await user.save();
//     res.json({
//         success:true,
//         message:"blog deleted successfully",
//         data: user
//     })
// });

// router.put("/:blogId/:userId", async (req, res)=>{

//     let{blogId, userId}=req.params;
//     let{title, body}=req.body;

//     let blogExist=await Blogs.findById(blogId);
//     if(!blogExist){
//        return res.json({
//             success:false,
//             message:"Blog does not exist"
//         })
//     }
//       if(blogExist.userId!=userId){
//         return res.json({
//             success:false,
//             message:"You are not allowed to edit this blog"
//         })
//     }
//   let updatedBlog=  await Blogs.findByIdAndUpdate(blogId, { title, body}, {new:true});
//     res.json({
//         success:true,
//         message:"Blog edited successfully",
//         data:updatedBlog
//     })

// })

module.exports=router;