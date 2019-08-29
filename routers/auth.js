const path=require('path');
const express = require('express');
const authController = require('../controller/authController');
const error_control=require('../controller/errorController');
const router = express.Router();
router.get('/',authController.login);
router.post('/authentication',authController.authenticat);
router.get('/logout',authController.logout);
router.get('/forgot_request',authController.forgetRequest);
router.post('/req_otp',authController.reqOtp);
router.post('/validate_otp',authController.validateOtp);
router.get('/validate_otp',error_control.errorController);
router.get('/req_otp',error_control.errorController);
router.get('/authentication',error_control.errorController);

module.exports=router;

