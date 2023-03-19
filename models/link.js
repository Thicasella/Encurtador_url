const sequelize = require('sequelize');
const database = require ('../db');

const link = dataase.define('link',{
    id:{
        type: sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
},
    code:{
    type: sequelize.STRING,
    allowNull: false 
},
    url:{
    type: sequelize.STRING,
    allowNull:false
},
    hits:{
    type: sequelize.INTEGER.UNSIGNED,
    allowNull:true,
    defaultValue:0
}

})

module.exports= link;
