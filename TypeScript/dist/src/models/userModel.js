"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = exports.addUserToDB = void 0;
const addUserToDB = (userName, password, age) => {
    console.log(userName, password, age);
    return "USer TRegistration Done";
};
exports.addUserToDB = addUserToDB;
const updateUserData = (objectUser) => {
    console.log(objectUser.uname);
    return "Update Done";
};
exports.updateUserData = updateUserData;
