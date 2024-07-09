"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var main_1 = require("../main");
var Books_1 = require("./Books");
var Members_1 = require("./Members");
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
    Member_id: {
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
var InsertReservations = function () { return __awaiter(void 0, void 0, void 0, function () {
    var Reservationsdata, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Reservations.bulkCreate([
                        { id: 1, Book_id: 2, Member_id: 2, reservation_date: "2024-3-4" },
                        { id: 2, Book_id: 1, Member_id: 1, reservation_date: "2002-3-5" }
                    ])];
            case 1:
                Reservationsdata = _a.sent();
                console.log("Reservations table created successfully");
                return [2 /*return*/, Reservationsdata];
            case 2:
                err_1 = _a.sent();
                console.error("error in inserting data in reservations");
                return [2 /*return*/, null];
            case 3:
                ;
                return [2 /*return*/];
        }
    });
}); };
InsertReservations();
Books_1.default.hasMany(Reservations, { as: 'Reservations', foreignKey: 'Book_id' });
Reservations.belongsTo(Books_1.default, { foreignKey: 'Book_id' });
Members_1.default.hasMany(Reservations, { as: 'Reservations', foreignKey: 'Member_id' });
Reservations.belongsTo(Members_1.default, { foreignKey: 'Member_id' });
exports.default = Reservations;
