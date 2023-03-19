const sequelize = require('sequelize');
const sequelize = new sequelize({
    dialect: 'sqlite',
    Storage: './database.sqlite'
})


module.exports=sequelize;