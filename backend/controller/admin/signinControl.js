var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var authModel = require('../../modules/admin/authModel');

    if (typeof localStorage === "undefined" || localStorage === null) {
        const LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }


module.exports=(req, res, next)=>{
      const {email,password} =req.body;
      authModel.findOne({email:email})
      .exec()
      .then(result=>{
        if(result.length<1){
          res.status(201).json({
            msg:"Invalid user information",
          });
        }else{
          bcrypt.compare(password,result.emailPass,function(err, data){
            if(err){
              res.status(201).json({
                msg:"Authorization faild",
              });
            }
            if(data){
              var authtoken = jwt.sign(
                {
                  Id:result._id,
                  name:result.name,
                  email:result.email,
                  mobileNo:result.mobileNo,
                  createDate:result.createDate,
                  status:result.status
                },
                'secretboot',
                {
                  expiresIn:"12h"
                }
              );
              res.status(201).json({
                msg:"Valid Information",
                authtoken:authtoken
              });
              }else{
              res.json({
                msg:"User password wrong",
              });
            }
          })
        }
        
      })
      .catch(err=>{
        res.json({
          error:err
        })
      })
}