const User = require("../models/auth");
const cryptojs = require("crypto-js")
const sendOtpemail = require('../helper/sendEmail')

function generateOTP() {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }

// var myemail = "lovely@gmail.ocm";

const sendOtp = async(req,res) => {
try{

    const {email , signup} = req.body;


// const otpsending = new User({
//     email:req.body.email
// })
let otp = generateOTP();


let sendData = {
    email :email,
    subject : 'OTP VERIFICATION',
    text : `OTP is ${otp}`,

}


try{
    await sendOtpemail(sendData);
    // res.status(200).json("otp sended")
    res.send({status : 200 ,message : 'OTP Send Successfully' , otp : otp})



}catch(e){
    console.log(e);
}



//     if(type === 'signup'){
//         //Send Otp 
//         await sendOtp(sendData)
//         res.send({status : 200 ,message : 'OTP Send Successfully' , otp : otp})
//     }else if(type === 'forgot'){
// let getUser = await User.findOne({email : email})
// if(getUser){
//     await sendOtpemail(sendData)
    
    // res.send({status : 200 ,message : 'OTP Send Successfully' , otp : otp})

// }else{
//     res.send({status : 400 ,message : 'User is not registered this email'})

// }

//     }

}catch(error){
    res.send({status: 400 , message : error.message})
}
}


const postSignup = async(req,res)=>{
    const newUser = new User({
        email:req.body.email
        ,password:cryptojs.AES.encrypt(req.body.password,"123").toString(),
        Userotp:otp
    });
    try{

        if(otp === Userotp){
            const newuser = await newUser.save();
            // res.status(200).json(newuser)
            res.send({message:"Signup done"})
    

        }




               // res.status(200).json(newUser)
       
        
    }catch(e){
        console.log({error:e});
    }
}


module.exports ={
    postSignup,
    sendOtp
}