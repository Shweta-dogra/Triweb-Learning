"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const projectError_1 = __importDefault(require("../helper/projectError"));
const isAuthenticated = (req, res, next) => {
    try {
        //header --> token
        const authHeader = req.get('Authorization');
        if (!authHeader) {
            let err = new projectError_1.default("Not Authenticated");
            err.statusCode = 401;
            throw err;
            // res.status(401).send("Not Authenticated");  
        }
        const token = authHeader.split(' ')[1];
        //jwt --> decode using sign
        let decodedToken;
        try {
            decodedToken = jsonwebtoken_1.default.verify(token, 'secretKey');
        }
        catch (error) {
            console.log(error);
            let err = new projectError_1.default("Not Authenticated");
            err.statusCode = 401;
            throw err;
        }
        if (!decodedToken) {
            let err = new projectError_1.default("Not Authenticated");
            err.statusCode = 401;
            throw err;
        }
        //get userID
        req.userId = decodedToken.userId;
        console.log(decodedToken);
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.isAuthenticated = isAuthenticated;
