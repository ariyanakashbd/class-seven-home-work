const User = require('../models/registrationModel');


async function contrillerLogin (req,res){
    let {email,password} = req.body;
    
    if(!email || !password){
     return res.json({
        success : false,
        message : 'Please Enter Your Valid Email And Password'
     });
    };

    let existUser = await User.findOne({email : email});
    if(!existUser){
       return res.json({
            success :false,
            message : 'User Not Found'
        });
    };

    if(existUser.password !== password){
      return  res.json({
            success : false,
            message : 'Incorrect Password'
        });
    };
       res.json({
        success: true,
        message: 'Login Successful',
     
    });
}

module.exports = contrillerLogin;