var express = require('express');
var router = express.Router();
var cateControl = require("../../controller/admin/bank/cateControl");
var questionControl = require("../../controller/admin/bank/questionControl");
var catefind = require("../../controller/admin/bank/catefind");
var questionfind = require("../../controller/admin/bank/questionfind");
var auth = require("../middelware/auth");

/* Admin Route GET & POST. */
router.post('/cate',  cateControl);
router.post('/questionadd', questionControl);
router.get('/questionfind',questionfind );
router.get('/find', catefind);

module.exports = router;
