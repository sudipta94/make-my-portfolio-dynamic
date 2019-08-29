const path = require('path');
const express = require('express');
const home = require('../controller/home');
const error_control=require('../controller/errorController');
const router = express.Router();
router.get('/',home.getIndex);
router.post('/contact',home.postContact);
router.get('/contact',error_control.errorController);
module.exports = router;
