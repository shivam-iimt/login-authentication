var mongoose = require('mongoose');
const config = require('../../config');
mongoose.connect(config.Mongo_Base_Path,  {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
     },
    email:{
        type:String,
        required:true,
        index:{
         unique:true,
        }
     },
    emailPass:{
        type:String,
        required:true,
     },
    mobileNo:Number,
    roll:{
        type:String,
        required:true,
     },
    createDate:{
    type:Date,
    required:true,
    },
    status:{
        type:Number,
        required:true,
    },
})
var authModel = mongoose.model('user', userSchema); 
module.exports=authModel;