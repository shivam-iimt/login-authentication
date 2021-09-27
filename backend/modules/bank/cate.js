var mongoose = require('mongoose');
const config = require('../../config');
mongoose.connect(config.Mongo_Base_Path,  {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
var cateSchema = new mongoose.Schema({
    cate:{
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
var cateModel = mongoose.model('cate', cateSchema); 
module.exports=cateModel;