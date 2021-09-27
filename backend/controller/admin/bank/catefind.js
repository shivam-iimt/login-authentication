var cateModel = require('../../../modules/bank/cate');

module.exports=(req, res, next)=>{
            cateModel.find()
            .then(result=>{
                res.status(201).json({
                    msg:"SAVE",
                    result:result
                });
            })
            .catch(err=>{
                res.json({
                    msg:"ERROR",
                    err:err,
                })
            })

}