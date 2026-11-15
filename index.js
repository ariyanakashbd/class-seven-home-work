require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const mongodbConnect = require('./config/mongodb');
mongodbConnect();
const registrationController = require('./controller/contrllerRegistration');

app.post('/registration',registrationController)





let port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log('Server Runnig');
    
});