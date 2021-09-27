const dotenv = require('dotenv').config();

const {BASE_URL,MONGO_BASE_PATH} = process.env

module.exports={
    Mongo_Base_Path:MONGO_BASE_PATH,
    Base_Url:BASE_URL,
    
}
