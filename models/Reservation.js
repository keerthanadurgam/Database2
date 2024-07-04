"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var main_1 = require("../main");
var Reservations = main_1.default.define('Reservations', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    Book_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'Books',
            key: 'id'
        }
    },
    member_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'Members',
            key: 'id'
        }
    },
    reservation_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    }
});
module.exports = Reservations;
