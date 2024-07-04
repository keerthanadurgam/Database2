import {DataTypes } from 'sequelize';
import sequelize from "../main";
const Members=sequelize.define(
    'Members',
    {
     id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        },
        name:{
            type:DataTypes.STRING(255),
            allowNull: false,
        },
        adress:{
            type:DataTypes.STRING(255),
        },
        phone_number:{
            type:DataTypes.STRING(20),
        },
        email:{
            type:DataTypes.STRING(255),
            unique: true,
        },

    }
);
module.exports=Members;