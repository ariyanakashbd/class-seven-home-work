const Attendence = require('../models/studentAttendence');

async function studentDataUpdate (req,res){
    let {id} = req.params;
     let dataUpdate = await Attendence.findByIdAndUpdate({_id : id},req.body);
     return res.json({
        success : true,
        message : dataUpdate
     });
};

module.exports = studentDataUpdate;