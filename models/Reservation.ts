import {DataTypes } from 'sequelize';
import sequelize from "../main";
const Reservations = sequelize.define(
    'Reservations',
    {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        },
        Book_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'Books',
                key: 'id'
            }
        },
        member_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'Members',
                key:'id'
            }
        },
        reservation_date:{
            type: DataTypes.DATE,
            allowNull: false,
        }
    }
);

module.exports =Reservations;