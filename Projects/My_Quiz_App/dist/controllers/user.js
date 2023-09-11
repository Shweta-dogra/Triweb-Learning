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
exports.updateUser = exports.getUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const projectError_1 = __importDefault(require("../helper/projectError"));
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    console.log(req.userId);
    const userId = req.params.userId;
    if (req.userId != req.params.userId) {
        const err = new projectError_1.default("You are not authorized");
        err.statusCode = 401;
        err.data = "Hi, it's error";
        throw err;
    }
    const user = yield user_1.default.findById(userId);
    try {
        if (!user) {
            // resp ={status: "error", message: "No user found", data: {}}
            // res.send(resp);
            const err = new projectError_1.default("No user exist");
            err.statusCode = 401;
            throw err;
        }
        else {
            resp = { status: "success", message: "User found", data: { user: user } };
            res.status(200).send(resp);
        }
    }
    catch (error) {
        // resp ={status: "error",message: "Something went wrong", data: {}}
        // res.status(500).send(resp);    
        next(error);
    }
});
exports.getUser = getUser;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        if (req.userId != req.params.userId) {
            const err = new projectError_1.default("You are not authorized");
            err.statusCode = 401;
            throw err;
        }
        const userId = req.body._id;
        let user = yield user_1.default.findById(userId);
        if (!user) {
            resp = { status: "error", message: "No user found", data: {} };
            res.send(resp);
        }
        else {
            user.name = req.body.name;
            yield user.save();
            resp = { status: "error", message: "User updated", data: { user: user } };
            res.send(resp);
        }
    }
    catch (error) {
        // resp ={status: "error",message: "Something went wrong", data: {}}
        // res.status(500).send(resp); 
        next(error);
    }
});
exports.updateUser = updateUser;
