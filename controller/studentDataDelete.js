const Data = require('../models/studentAttendence');

async function dataDelete(req,res){
    let{id} = req.params;
    let userDelete = await Data.findByIdAndDelete(id);
    return res.json({
        success : true,
        message : 'User Delete'
    });
};
module.exports = dataDelete;