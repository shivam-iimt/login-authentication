var cateModel = require('../../../modules/bank/cate');

module.exports=(req, res, next)=>{
    var {cate,status}= req.body;

            var cateDeatils = new cateModel({
                cate:cate,
                status:status,
                createDate:new Date(),
              });
              cateDeatils.save()
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