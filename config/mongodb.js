const mongoose = require('mongoose');

function mongodbConnect (){
 
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log('Database Connected !');
        
    })
};
module.exports = mongodbConnect;