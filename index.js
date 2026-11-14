require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const mongodbConnect = require('./config/mongodb');
mongodbConnect();
const registrationContriller = require('./controller/contrllerRegistration');
const loginController = require('./controller/controlerLogin');
const studentData = require('./controller/studentAttendence');
const dataRead = require('./controller/studentDataRead');
const studentDataDelete = require('./controller/studentDataDelete');
const studentDataUpdate =require('./controller/studentDataUpdate');

app.post('/registration',registrationContriller);
app.post ('/login',loginController);
app.post('/data/create',studentData);
app.get('/All/data', dataRead);
app.delete('/delete/data/:id',studentDataDelete);
app.post('/data/update/:id',studentDataUpdate);

let port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('Server Runnig');
    
});