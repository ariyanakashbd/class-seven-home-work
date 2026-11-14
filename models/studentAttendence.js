const mongoose = require('mongoose');
const {Schema} = mongoose;

let attendenceSchema = new Schema({
    name :{
        type : String,
        required : true,
        trim : true,
    },
     studentID :{
        type : Number,
        reqiured : true,
    },
    date :{
        type : Date,
        required : true,
        default : Date.now
    },
    attendence :{
        type : String,
        enum : ['Present', 'Absent'],
        required : true,
    },
    homeWork :{
        type : Boolean,
        default : false,
        required  : true,
    },
   
});

module.exports = mongoose.model('Attendence',attendenceSchema);