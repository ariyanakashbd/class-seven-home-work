const mongoose = require('mongoose');
const {Schema} = mongoose;

let registrationSchema = new Schema({
    fullname :{
        type : String,
        required : true,
        trim : true,
    },
    email :{
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
    password :{
        type : String,
        required : true,
    },
    gender :{
        type : String,
        enum : ['male','female','others'],
        required : true,
    },
    age :{
        type : Number,
        required : true,
        min : 18,
        max : 50,
    },
    terms :{
        type : Boolean,
        required : true,
        default : false,
    }
});

module.exports = mongoose.model('User',registrationSchema);