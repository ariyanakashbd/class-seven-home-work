const Data = require('../models/studentAttendence');

async function dataUpdate (req,res){
    let {id} = req.params;
    let dataUpdate = await Data.findByIdAndUpdate({_id : id},req.body);
    return res.json({
        success : false,
        message : dataUpdate
    });
};
module.exports = dataUpdate;