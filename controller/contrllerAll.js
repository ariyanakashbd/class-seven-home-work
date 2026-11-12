const User = require('../models/registrationModel');
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user:'ariyanakash01303@gmail.com',
    pass: 'lkidqwoteirdyaed',
  },
});

let emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


async function registrationController  (req,res) {
    let {fullname,email,password,confirmPassword,gender,age,terms} = req.body;

    if(!fullname && !email && !password && !confirmPassword && !gender && !age && !terms){
        return res.json({
            success : false,
            message : 'Please Fill The All Filed'
        });
    };
    let errors = {};
   
    if(!fullname){
        errors.name = 'please Enter Your Name'
    };
    if(!email){
        errors.email = 'please Enter Your Email'
    };
    
    if(!password){
        errors.password = 'please Enter Your Password'
    };
    if(!confirmPassword){
    errors.confirmPassword = 'Please Confirm Your Password'
    } else if(password !== confirmPassword){
        errors.confirmPassword = 'Dont match Confirm Password'
    };
    if(!gender){
        errors.gender = 'please Select Your Gender'
    };
    if(age < 18 || age > 50){
    errors.age = 'Age must be between 18 and 50';
    };
    
    if(!terms){
        errors.terms = 'please Checked Terms And Condition'
    };

    if(Object.keys(errors).length > 0){
      return res.status(400).json({
            success : false,
            message : errors
        });
    };

    if(!emailValid.test(email)){
    return res.json({
    success : false,
    message : 'Please Enter Your Valid Email'
   });
   };

   let existuser = await User.findOne({email : email});
   if(existuser){
    return res.json({
        success : false,
        message : 'User Already exist'
    });
   };
   
   
    let userdata = new User({
        fullname : fullname,
        email : email,
        password : password,
        gender : gender,
        age : age,
        terms : terms
    });
    await userdata.save();
     
    try {
  const info = await transporter.sendMail({
    from: '"Example Team" <ariyanakash01303@gmail.com>', // sender address
    to:email, // list of recipients
    subject: "Hello", // subject line
    html: `<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif"><div style="max-width:550px;margin:40px auto;background:#fff;border-radius:12px;overflow:hidden"><div style="background:#2563eb;padding:35px 20px;text-align:center;color:#fff"><h1 style="margin:0">Welcome Aboard!</h1><p style="margin:10px 0 0">Account Verification</p></div><div style="padding:30px"><h2 style="color:#0f172a">Hello ${fullname}!</h2><p style="color:#475569;line-height:1.7">Thank you for creating an account with us. We're excited to have you on board!</p><p style="color:#475569;line-height:1.7">Please verify your email address by clicking the button below.</p><div style="text-align:center;margin:30px 0"><a href="" style="background:#2563eb;color:#fff;text-decoration:none;padding:14px 30px;border-radius:7px;display:inline-block;font-weight:700">Verify My Email</a></div><p style="color:#64748b;font-size:13px">This verification link will expire in 15 minutes.</p><p style="color:#64748b;font-size:13px">If you didn't create an account, you can safely ignore this email.</p></div><div style="background:#f8fafc;padding:20px;text-align:center"><p style="color:#64748b;font-size:12px;margin:0">© 2026 My Website. All rights reserved.</p></div></div></body>`, // HTML body
  });

    console.log("Message sent: %s", info.messageId);
    // Preview URL is only available when using an Ethereal test account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (err) {
    console.error("Error while sending mail:", err);
    }

    res.status(200).json({
        success : true,
        message : 'Registration Done'
    });
};

module.exports = {registrationController};