const page = require('../models/registrationModel');
const mailsender = require('../config/nodemailer')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



async function registrationContriller (req,res){
   let {name,email,phone,password,confirmPassword,gender,terms} = req.body;
   
   let errors = {};

   if(!name && !email && !phone && !password && !confirmPassword && !gender && !terms){
      return res.json({
        success : false,
        message : 'Please Fill The All Filed'
      })
   };


   if(!name){
    errors.name = 'please Enter Your Name'
   }
   if(!email){
    errors.email = 'please Enter Your Email'
   }
   if(!phone){
    errors.phone = 'please Enter Your Phone Number'
   }
   if(!password){
    errors.password = 'please Enter Your Passwprd'
   }
   if(!confirmPassword){
    errors.confirmPassword = 'please Enter Your Confirm Password'
   }else if(password !== confirmPassword){
    errors.confirmPassword = 'Dont match Confirm Password'
   };
   if(!gender){
    errors.gender = 'please Enter Your gender'
   }
   if(!terms){
    errors.terms = 'please Checked Terms And Condition'
   }
   if(Object.keys(errors).length > 0){
    return res.json({
        success : false,
        message : errors
    });
   };

   if(!emailRegex.test(email)){
    return res.json({
        success : false,
        message : 'Please Enter Your Valid Email'
    });
   }

  let existinguser = await page.findOne({email : email});

  if(existinguser){
    return res.json({
        success : false,
        message : 'User Already Exist'
    });
  };

  let userCreate = new page({
    name : name,
    email : email,
    phone : phone ,
    password : password,
    gender : gender,
    terms : terms
  });
  await mailsender(email)
  await userCreate.save();
  res.status(200).json({
    success : true,
    message : 'Registration Successfull'
  });
};

module.exports = registrationContriller;