const Attendence = require('../models/studentAttendence');

async function studentDataDelete(req, res) {
    let { id } = req.params;

    let dataDelete = await Attendence.findByIdAndDelete(id);

    if (!dataDelete) {
        return res.json({
            success: false,
            message: 'Data Not Found'
        });
    }

    return res.json({
        success: true,
        message: 'Data Deleted Successfully'
    });
}

module.exports = studentDataDelete;