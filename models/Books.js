"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var main_1 = require("../main");
var Authors_1 = require("./Authors");
var Books = main_1.default.define('Books', { id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    authorId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'Authors',
            key: 'id'
        },
    },
    genre: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    isbn: {
        type: sequelize_1.DataTypes.STRING(13),
        unique: true,
    },
    publication_year: {
        type: sequelize_1.DataTypes.INTEGER,
    }
});
exports.default = Books;
Authors_1.default.hasMany(Books, { as: 'Books', foreignKey: 'authorId' });
Books.belongsTo(Authors_1.default, { foreignKey: 'authorId' });
