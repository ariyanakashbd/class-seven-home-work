const user = require('../models/registrationModel');
const mailsender = require('../config/nodemailer');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function registrationController(req,res) {
    let {name,email,number,password,gender,terms} = req.body;

    if(!name && !email && !number && !password && !gender && !terms){
        return res.json({
            success : false,
            message : 'Please fill the all filed'
        });
    };

    let errors = {};
    if(!name){
        errors.name = 'Plase Enter Your Name'
    };
    if(!email){
        errors.email = 'Plase Enter Your Email'
    };
    if(!number){
        errors.number = 'Plase Enter Your Number'
    };
    if(!password){
        errors.password = 'Plase Enter Your Password'
    };
    if(!gender){
        errors.gender = 'Plase Enter Your Gender'
    };
    if(!terms){
        errors.terms = 'Plase Checked Terms And Condition'
    };
    if(Object.keys(errors).length > 0){
        return res.json({
            Success : false,
            message : errors
        });
    };

    if(emailRegex.test(email)){
       return res.json({
        success : false,
        message : 'Please Enter Your Valid Email'
       });
    };

    let existinguser = await user.findOne({email : email});

    if(existinguser){
        return res.json({
            success : false,
            message : 'User Already Exist'
        });
    };

   await mailsender(email)

    let newUser = new user({
        name: name,
        email: email,
        number: number,
        password : password,
        gender : gender,
        terms : terms
    });
    await newUser.save()

    return res.json({
        success : true,
        message : 'Registration Successfull '
    });
};

module.exports = registrationController;