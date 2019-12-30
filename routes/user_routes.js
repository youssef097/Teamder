const express = require("express");
const router = express.Router();
const user_controller = require("../controller/user_controller")


router.get("/router",(req,res)=>{    
})
router.post("/login",(req,res)=>{
    console.log(req.body);
})
router.get("/",(req,res)=>{
    res.render("index.ejs")    
})
router.post("/register",user_controller.register)

module.exports = router;