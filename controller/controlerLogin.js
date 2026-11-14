const page = require('../models/registrationModel');
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user:'ariyanakash01303@gmail.com',
    pass:'oqmubfaetudixwxu',
  },
});

async function loginController (req,res){
  let {name,email,password} = req.body;
  if(!email && !password){
    return res.json({
      success : false,
      message : 'Please Enter Your Email And Password'
    });
  };

  if(!email){
    return res.json({
      success : false,
      message : ' Please Enter Your Email'
    });
  };
  if(!password ){
    return res.json({
      success : false,
      message : 'Plase Enter Your Password'
    });
  };

  let userfind = await page.findOne({email : email});

  if(!userfind){
    return res.json({
      success : false,
      message : 'Account Not Found'
    });
  };

  if(userfind.password !== password){
    return res.json({
      success : false,
      message : 'Wrrong Password'
    });
  };

  try {
  const info = await transporter.sendMail({
    from: '"ami creative it thke bolchi" <ariyanakash01303@gmail.com>',
    to: "ariyanakash01303@gmail.com", 
    subject: `Hello ${name}`, 
    html: "<b>Hello world?</b>", 
  });

  console.log("Message sent: %s", info.messageId);
  // Preview URL is only available when using an Ethereal test account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
} catch (err) {
  console.error("Error while sending mail:", err);
}

  return res.json({
    success :true,
    mesage : 'Login Successfull'
  });
};

module.exports = loginController;