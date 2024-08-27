const mongoose = require('mongoose');
const DBHOST = process.env.DBHOST;
//const db="mongodb://127.0.0.1:27017/userDB";

var con= mongoose.connect(DBHOST)
        .then(()=>{
            console.log('Successfully connected to mongodb');
        })
        .catch((error)=>{
            if(error) console.log(error);
        });

module.exports = con;
console.log('db connected')