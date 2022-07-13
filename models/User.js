const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String,required:true,uppercase:true},
    age:Number,
    email:{type:String,trim:true,required:true},
    address: String
})

module.exports = User = mongoose.model('user', userSchema);