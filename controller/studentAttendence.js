
const Attendence = require('../models/studentAttendence');

async function studentData(req, res) {

    let { name, studentID, date, attendence, homeWork } = req.body;

    let errors = {};

    if (!name) {
        errors.name = 'Enter Student Name'
    };

    if (!studentID) {
        errors.studentID = 'Enter Student ID'
    };

    if (!date) {
        errors.date = 'Enter Date'
    };

    if (!attendence) {
        errors.attendence = 'Confirm Attendence'
    };

    if (typeof homeWork !== 'boolean') {
        errors.homeWork = 'Confirm Home Work'
    };

    if (Object.keys(errors).length > 0) {
        return res.json({
            success: false,
            message: errors
        });
    };

    let existingStudent = await Attendence.findOne({
        studentID: studentID
    });

    if (existingStudent) {
        return res.json({
            success: false,
            message: 'ID Already Taken'
        });
    };

    let dataCreate = new Attendence({
        name: name,
        studentID: studentID,
        date: date,
        attendence: attendence,
        homeWork: homeWork
    });

    await dataCreate.save();

    return res.json({
        success: true,
        message: 'Data Create Done'
    });

};

module.exports = studentData;
