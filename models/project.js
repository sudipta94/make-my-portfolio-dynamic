const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Project = sequelize.define('project',{
    project_pic:{
        type:Sequelize.STRING,
        allowNull: false
    },
    project_link:{
        type: Sequelize.STRING,
        allowNull: false
    },
    project_name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    project_details:{
        type: Sequelize.STRING,
        allowNull: false
    }
});
module.exports= Project;