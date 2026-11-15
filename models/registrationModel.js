const mongoose = require('mongoose');
const {Schema} = mongoose;

let registrationSchema = new Schema({
    name :{
        type : String,
        required : true,
        trim : true
    },
    email :{
        type : String,
        required : true,
        trim : true,
        lowarcase : true,
    },
    number :{
        type : Number,
        required : true,

    },
    password :{
        type : String,
        required : true,
    },
    gender : {
        type : String,
        required : true,
        enum : ['male','female','others'],
    },
    terms :{
        type : Boolean,
        required : true,
    }
});

module.exports = mongoose.model('user',registrationSchema);