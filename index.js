const dns = require('node:dns');
dns.setServers(['1.1.1.1','8.8.8.8']);
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const mongodbConnect = require('./config/mongodb');
mongodbConnect();
const registrationController = require('./controller/contrllerRegistration');
const loginController = require('./controller/controlerLogin');
const studentData =require('./controller/studentAttendence');
const dataRead = require('./controller/studentDataRead');
const security = require('./middelware/security');
const dataDelete = require('./controller/studentDataDelete');
const dataUpdate = require('./controller/studentDataUpdate');
const cors = require('cors');
app.use(cors());


app.post('/registration',registrationController);
app.post('/login',loginController);
app.post('/data-create',studentData);
app.get('/all-data',security,dataRead);
app.delete('/user/delete/:id',dataDelete);
app.post('/update/:id',dataUpdate);





// on Vercel this file runs as a serverless function, where there is no port to listen on
if (require.main === module) {
  const port = process.env.PORT || 5000
  app.listen(port, () => {
    console.log('Server Runnig');
  });
}

module.exports = app;