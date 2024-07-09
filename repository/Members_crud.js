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
var Members_1 = require("../models/Members");
var createMember = function (name, address, phone_number, email) { return __awaiter(void 0, void 0, void 0, function () {
    var newMember, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Members_1.default.create({
                        name: name,
                        address: address,
                        phone_number: phone_number,
                        email: email
                    })];
            case 1:
                newMember = _a.sent();
                console.log('Member created successfully');
                return [2 /*return*/, newMember];
            case 2:
                err_1 = _a.sent();
                console.error('Error creating member:', err_1);
                return [2 /*return*/, null];
            case 3: return [2 /*return*/];
        }
    });
}); };
createMember('John Doe', '123 Main St', '123-456-7890', 'john.doe@example.com');
var getAllMembers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var members, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Members_1.default.findAll()];
            case 1:
                members = _a.sent();
                return [2 /*return*/, members];
            case 2:
                err_2 = _a.sent();
                console.error('Error retrieving members:', err_2);
                return [2 /*return*/, null];
            case 3: return [2 /*return*/];
        }
    });
}); };
getAllMembers().then(function (members) { return console.log(members); });
var getMemberById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var member, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Members_1.default.findByPk(id)];
            case 1:
                member = _a.sent();
                return [2 /*return*/, member];
            case 2:
                err_3 = _a.sent();
                console.error("Error retrieving member with ID ".concat(id, ":"), err_3);
                return [2 /*return*/, null];
            case 3: return [2 /*return*/];
        }
    });
}); };
getMemberById(1).then(function (member) { return console.log(member); });
var updateMember = function (id, newData) { return __awaiter(void 0, void 0, void 0, function () {
    var member, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, Members_1.default.findByPk(id)];
            case 1:
                member = _a.sent();
                if (!member) {
                    throw new Error('Member not found');
                }
                return [4 /*yield*/, member.update(newData)];
            case 2:
                _a.sent();
                console.log("Member with ID ".concat(id, " updated successfully"));
                return [2 /*return*/, member];
            case 3:
                err_4 = _a.sent();
                console.error('Error updating member:', err_4);
                return [2 /*return*/, null];
            case 4: return [2 /*return*/];
        }
    });
}); };
updateMember(1, { address: '456 Elm St', phone_number: '987-654-3210' });
var deleteMember = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var member, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, Members_1.default.findByPk(id)];
            case 1:
                member = _a.sent();
                if (!member) {
                    throw new Error('Member not found');
                }
                return [4 /*yield*/, member.destroy()];
            case 2:
                _a.sent();
                console.log("Member with ID ".concat(id, " deleted successfully"));
                return [2 /*return*/, true];
            case 3:
                err_5 = _a.sent();
                console.error('Error deleting member:', err_5);
                return [2 /*return*/, false];
            case 4: return [2 /*return*/];
        }
    });
}); };
deleteMember(1);
