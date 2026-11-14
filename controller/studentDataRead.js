const Attendence = require('../models/studentAttendence');

async function dataRead(req,res){
   
    let dataRead = await Attendence.find({});
    return res.json({
        success : true,
        message : dataRead
    });

};
module.exports = dataRead;