const { sendOtp, postSignup } = require("../controler/auth");
const sendOtpemail = require('../helper/sendEmail')


const router = require("express").Router();


router.post("/signup",postSignup);

router.post("/otp",sendOtp);


router.get("/get",(req,res)=>{
    res.send({message:"get api is runnig"})
})



module.exports = router