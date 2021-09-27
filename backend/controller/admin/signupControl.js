var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var authModel = require('../../modules/admin/authModel');

module.exports=(req, res, next)=>{
    var {name,email,password,mobileNo,roll}= req.body;
    bcrypt.hash(password, 10, function(err, hash){
        if(err){
             return res.json({
                msg :"Somthing Wrong, Try Later !",
                err:err
             })
        }else{
            var authDeatils = new authModel({
                name:name,
                email:email,
                emailPass:hash,
                mobileNo:mobileNo,
                roll:roll,
                createDate:new Date(),
                status:1
              });
              authDeatils.save()
            .then(result=>{
                res.status(201).json({
                    msg:"SUCCESS",
                    result:result
                });
            })
            .catch(err=>{
                res.json({
                    msg:"FAIL",
                    err:err,
                })
            })
        }
    })

}