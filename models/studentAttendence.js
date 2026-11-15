const mongoose = require('mongoose');
const {Schema} = mongoose;

let attendence = new Schema({
    name :{
        type : String,
        required : true,
    },
    studentId :{
        type : Number,
        required : true
    },
    homeWork :{
       type : Boolean,
       required : true,
       default : false,
    },
    attendence :{
        type : String,
        required : true,
        enum : ['Present','Absent'],
    },
    date :{
        type : Date,
        default : Date.now,
        required : true
    },
});

module.exports = mongoose.model('Data',attendence);