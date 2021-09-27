var express = require('express');
var router = express.Router();
var signupControl = require("../../controller/admin/signupControl");
var signinControl = require("../../controller/admin/signinControl");
var auth = require("../middelware/auth");

/* Admin Route GET & POST. */
router.post('/signup', signupControl);
router.post('/signin', signinControl);

module.exports = router;
