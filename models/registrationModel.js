const mongoose = require('mongoose');
const {Schema} = mongoose;


let registrationSchema = new Schema({
    name :{
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
    phone :{
        type : Number,
        required : true,
        unique : true,
    },
    password :{
        type : String,
        required : true,
        minlength : 6,
    },
    gender :{
        type : String,
        required : true,
        enum : ['male','female','others'],
    },
    terms :{
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model('page',registrationSchema);