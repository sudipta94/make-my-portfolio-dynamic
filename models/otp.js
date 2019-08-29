const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Otp = sequelize.define('otp',{
    email:{
        type:Sequelize.STRING,
        allowNull: false
    },
    otps:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
module.exports= Otp;