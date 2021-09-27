var questionModel = require('../../../modules/bank/question');

module.exports=(req, res, next)=>{
    var {cateId,que,op1,op2,op3,op4,cor}= req.body;

            var quesDeatils = new questionModel({
                cateId:cateId,
                que:que,
                op1:op1,
                op2:op2,
                op3:op3,
                op4:op4,
                cor:cor,
                status:1,
                createDate:new Date()
              });
              quesDeatils.save().then(result=>{
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