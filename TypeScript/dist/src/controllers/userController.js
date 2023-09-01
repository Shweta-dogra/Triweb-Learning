"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTypesAndInterface = exports.registerUser = void 0;
const userModel_1 = require("../models/userModel");
const registerUser = (req, res) => {
    const userName = "Shweta";
    const password = "abcd";
    const age = 25;
    const result = (0, userModel_1.addUserToDB)(userName, password, age);
    res.send(result);
};
exports.registerUser = registerUser;
const checkTypesAndInterface = (req, res) => {
    let num = { x: 1, y: 4 };
    let xstate = "locked";
    const myUser = {
        id: 1,
        uname: "ahsas",
        password: "123wer",
        age: 32,
        isActive: true,
        accountStatus: "locked"
    };
    const result = (0, userModel_1.updateUserData)(myUser);
    res.send(result);
};
exports.checkTypesAndInterface = checkTypesAndInterface;
