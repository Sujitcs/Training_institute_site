const mongoose = require("mongoose");

const userCollectionSchema = mongoose.Schema({
     firstname: {
        type: String,
        required: true,
     },
     lastname: {
        type: String,
        required: true,
     },
     email: {
        type: String,
        required: true,
        unique: true
     },
     password: {
        type: String,
        required: true 
     },
     role: {
        type: String,
        enum: ['admin', 'student'],
        default: 'student'
     }
},{versionKey:false});

module.exports = mongoose.model('userModel', userCollectionSchema, 'users');
console.log("User Model is Ready to Use");
