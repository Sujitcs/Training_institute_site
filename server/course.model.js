const mongoose=require('mongoose')

const courseSchema = mongoose.Schema({
    
    'name' : {
        type: String,
        required : true
    },
    'desc' : {
        type: String,
        required : true
    },
    'amount' : {
        type: String,
        required : true
    },
    'duration' : {
        type: String,
        required : true
    },
},{versionKey: false})

module.exports = mongoose.model("course",courseSchema);
console.log("course Model is Ready to Use");