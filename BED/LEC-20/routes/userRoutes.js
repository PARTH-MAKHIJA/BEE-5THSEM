const express=require("express");
const router=express.Router();
const {m5}=require("../middleware/routerlevel");
router.use(m5);
router.post("/", (req, res)=>{
    res.json({
        sucress:true,
        messaage:"user added successfully"
    })
})

router.get("/", (req, res)=>{
    res.json({
        sucress:true,
        messaage:"all user data fetched successfully"
    })
})

router.post("/:id", (req, res)=>{
    res.json({
        sucress:true,
        messaage:"single user data fetched"
    })
})

module.exports=router;