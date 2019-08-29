const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Blog = sequelize.define('blog',{
    title:{
        type:Sequelize.STRING
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    imageUrl:{
        type:Sequelize.STRING
    }
});
module.exports= Blog;