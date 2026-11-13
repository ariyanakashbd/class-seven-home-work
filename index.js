require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const mongodbConnect = require('./config/mongodb');
mongodbConnect();
const registrationContriller = require('./controller/contrllerAll');

app.post('/registration',registrationContriller)


let port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('Server Runnig');
    
});