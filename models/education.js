const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Education = sequelize.define('education',{
    clg_name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    degree:{
        type: Sequelize.STRING,
        allowNull: false
    }
});
module.exports= Education;