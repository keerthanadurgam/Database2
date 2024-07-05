"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var main_1 = require("../main");
var Books_1 = require("./Books");
var Members_1 = require("./Members");
var Loans = main_1.default.define('Loans', { id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Book_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'Books',
            key: 'id'
        },
    },
    Member_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'Members',
            key: 'id'
        },
    },
    loan_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    due_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
});
exports.default = Loans;
Books_1.default.hasMany(Loans, { as: 'Loans', foreignKey: 'Book_id' });
Loans.belongsTo(Books_1.default, { foreignKey: 'Book_id' });
Members_1.default.hasOne(Loans, { as: 'Loans', foreignKey: 'Member_id' });
Loans.belongsTo(Members_1.default, { foreignKey: 'Member_id' });
