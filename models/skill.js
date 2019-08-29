const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Skills = sequelize.define('skills',{
    sk:{
        type:Sequelize.STRING,
        allowNull: false
    },
    value:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
module.exports= Skills;