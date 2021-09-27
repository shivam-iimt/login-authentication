var mongoose = require('mongoose');
const config = require('../../config');
mongoose.connect(config.Mongo_Base_Path,  {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
var queSchema = new mongoose.Schema({
   cateId:{
        type:String,
        required:true,
     },
     que:{
        type:String,
        required:true,
     },
     op1:{
        type:String,
        required:true,
     },
     op2:{
        type:String,
        required:true,
     },
     op3:{
        type:String,
        required:true,
     },
     op4:{
        type:String,
        required:true,
     },
     cor:{
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
var question = mongoose.model('question', queSchema); 
module.exports=question;