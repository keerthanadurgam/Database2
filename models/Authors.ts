import {DataTypes } from 'sequelize';
import sequelize from "../main";
const Authors = sequelize.define('Authors',
{
    id:{
        type : DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    name:{
        type : DataTypes.STRING(255),
        allowNull: false,
    },
    birthyear:{
        type : DataTypes.INTEGER,
    },
    nationality:{
        type:DataTypes.STRING(100),
    },
}
);
export default Authors;