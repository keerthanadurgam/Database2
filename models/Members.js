"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var main_1 = require("../main");
var Members = main_1.default.define('Members', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    adress: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    phone_number: {
        type: sequelize_1.DataTypes.STRING(20),
    },
    email: {
        type: sequelize_1.DataTypes.STRING(255),
        unique: true,
    },
});
exports.default = Members;
