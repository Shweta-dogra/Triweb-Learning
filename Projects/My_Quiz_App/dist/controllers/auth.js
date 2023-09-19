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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserExist = exports.loginUser = exports.registerUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const projectError_1 = __importDefault(require("../helper/projectError"));
const express_validator_1 = require("express-validator");
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        //validation
        const validationErr = (0, express_validator_1.validationResult)(req);
        if (!validationErr.isEmpty()) {
            const err = new projectError_1.default("Validation Failed");
            err.statusCode = 422;
            err.data = validationErr.array();
            throw err;
        }
        //validation-end
        const email = req.body.email;
        const name = req.body.name;
        const password = yield bcryptjs_1.default.hash(req.body.password, 12);
        // let buff = new Buffer(passwordFromReq);
        // let password = buff.toString('base64');
        const user = new user_1.default({ email, name, password });
        const result = yield user.save();
        if (!result) {
            resp = { status: "error", message: "No result found", data: {} };
            res.send(resp);
        }
        else {
            resp = { status: "success", message: "Registeration Done", data: { userId: result._id } };
            res.send(resp);
        }
    }
    catch (error) {
        // resp ={status: "error", message: "Something went wrong", data: {}}
        // res.status(500).send(resp);
        next(error);
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const email = req.body.email;
        const password = req.body.password;
        //find user with email
        const user = yield user_1.default.findOne({ email });
        if (!user) {
            const err = new projectError_1.default("No user exist");
            err.statusCode = 401;
            throw err;
            // resp ={status: "error", message: "No user exist", data: {}}
            // res.status(401).send(resp);
        }
        else {
            //verify password of the user using bcrypt 
            const status = yield bcryptjs_1.default.compare(password, user.password);
            //decide
            if (status) {
                const token = jsonwebtoken_1.default.sign({ userID: user._id }, "secretKey", { expiresIn: '1h' });
                resp = { status: "success", message: "Login Successful", data: { taken: token } };
                res.send(resp);
            }
            else {
                // resp ={status: "error",message: "Credentials mismatch, not login", data: {}}
                // res.status(401).send(resp);
                const err = new projectError_1.default("Credentials mismatch, not login");
                err.statusCode = 401;
                throw err;
            }
        }
    }
    catch (error) {
        // resp ={status: "error",message: "Something went wrong", data: {}}
        // res.status(500).send(resp); 
        next(error);
    }
});
exports.loginUser = loginUser;
const isUserExist = (email) => __awaiter(void 0, void 0, void 0, function* () {
    //find user with email
    const user = yield user_1.default.findOne({ email });
    if (!user) {
        return false;
    }
    return true;
});
exports.isUserExist = isUserExist;
