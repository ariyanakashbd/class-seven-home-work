const user = require('../models/registrationModel');
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user:"ariyanakash01303@gmail.com",
    pass: "nfus lwgq rdgy fwli",
  },
});

 async function loginController(req,res) {
    let {email,password} = req.body;

    if(!email && !password){
        return res.json({
            success : false,
            message : 'Please Enater Your Email And Password'
        });

    };

    if(!email){
        return res.json({
            success : false,
            message : 'Please Enter Your Email'
        });
    };
    if(!password){
        return res.json({
            success : false,
            message : 'Please Enter Your Password'
        });
    };

    let userfind = await user.findOne({email : email});
    if(!userfind){
        return res.json({
            success : false,
            message : 'User Not Found'
        });
    };

    if(userfind.password !== password){
        return res.json({
            success : false,
            message : 'Wrong password '
        });
    };

    try {
  const info = await transporter.sendMail({
    from: '"Loge Achi" <ariyanakash01303@gmail.com>', 
    to:email, 
    subject: "Hello", 
    html: "<b> hello </b>",
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
} catch (err) {
  console.error("Error while sending mail:", err);
}
    return res.json({
        success : true,
        message : 'Login Successfull'
    });
    
 };

 module.exports = loginController;