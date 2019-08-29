const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const About = sequelize.define('about',{
    objective:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    skill_note:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    profile_pic:{
        type: Sequelize.STRING,
        allowNull: false
    }
});
module.exports= About;