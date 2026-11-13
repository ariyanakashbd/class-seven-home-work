const page = require('../models/registrationModel');

async function loginController (req,res){
  let {email,password} = req.body;
  if(!email && !password){
   return res.json({
        success : false,
        message : 'Please Enter Your Email And Pasword'
    })
  }
  if(!email){
  return res.json({
    success : false,
    message : 'Enter Your Email'
   });
  };
  if(!password){
  return  res.json({
        success : false,
        message : 'Please Enter Your Password'
    });
  };
  let loginUser = await page.findOne({email : email});
  if(!loginUser){
    return res.json({
        success : false,
        message : 'Account Not Found'
    });
  };

  if(loginUser.password !== password){
    return res.json({
        success : false,
        message : 'Wrong Password'
    });
  };
  return res.json({
    success : true,
    message : 'Login Successfull'
  })

};

module.exports = loginController;