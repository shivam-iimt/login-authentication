var questionModel = require('../../../modules/bank/question');

module.exports=(req, res, next)=>{
        questionModel.find()
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