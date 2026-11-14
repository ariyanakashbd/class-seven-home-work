require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const mongodbConnect = require('./config/mongodb');
mongodbConnect();
const registrationContriller = require('./controller/contrllerAll');
const loginController = require('./controller/controlerLogin');

app.post('/registration',registrationContriller);
app.post ('/login',loginController);


let port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('Server Runnig');
    
});