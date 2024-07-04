"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var main_1 = require("../main");
var Authors = main_1.default.define('Authors', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    birthyear: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    nationality: {
        type: sequelize_1.DataTypes.STRING(100),
    },
});
module.exports = Authors;
