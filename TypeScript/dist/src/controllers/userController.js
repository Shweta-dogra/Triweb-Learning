"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const userModel_1 = require("../models/userModel");
const registerUser = (req, res) => {
    const userName = "Shweta";
    const password = "abcd";
    const result = (0, userModel_1.addUserToDB)(userName, password);
    res.send(result);
};
exports.registerUser = registerUser;
