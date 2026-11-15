const user = require('../models/registrationModel');

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
    return res.json({
        success : true,
        message : 'Login Successfull'
    });
    
 };

 module.exports = loginController;