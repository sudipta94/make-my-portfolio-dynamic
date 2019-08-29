const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const User = sequelize.define('user',{
    user_id:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    }
});
module.exports= User;