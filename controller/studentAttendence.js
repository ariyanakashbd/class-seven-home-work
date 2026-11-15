const Data = require('../models/studentAttendence');

async function studentData (req,res){
  let {name,studentId,homeWork,attendence,date} = req.body;
  let errors = {};
  if(!name){
    errors.name = 'Please Enter Student Name'
  };
  if(!studentId){
    errors.studentId = 'Please Enter Student ID'
  };
 
  if(!attendence){
    errors.attendece = 'Please Enter Attendece'
  };
 

  if(Object.keys(errors).length > 0){
    return res.json({
        success : false,
        message : errors
    });
  };

  let existing = await Data.findOne({studentId : studentId});
  if(existing){
    return res.json({
        success : false,
        message : 'ID Has Been Taken'
    });
  };

  let newData = new Data({
    name : name,
    studentId : studentId,
    homeWork : homeWork,
    attendence : attendence,
    date : date
  });
  await newData.save();

  return res.json({
    success : true,
    message : 'Data Create Done'
  });
};
module.exports = studentData;