require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const {registrationController} = require('./controller/contrllerAll')
const mongodbConnect =require('./config/mongodb');
const contrillerLogin =require('./controller/controlerLogin');

mongodbConnect();

app.post('/registration',registrationController);

app.post('/login', contrillerLogin)

app.get("/", (req,res) =>{
    res.send('Hello Developer')
});

let port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log('Server Runnig');
    
});