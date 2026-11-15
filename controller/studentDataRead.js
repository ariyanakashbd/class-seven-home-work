const Data = require('../models/studentAttendence');
async function dataRead (req,res){
   let allData = await Data.find();
   return res.json({
    success : true,
    message : allData,
   });
};

module.exports = dataRead;