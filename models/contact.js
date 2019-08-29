const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Contact = sequelize.define('contact',{
    name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    message:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    read_status:{
        type:Sequelize.INTEGER,
        allowNull: false
    }
});
module.exports= Contact;