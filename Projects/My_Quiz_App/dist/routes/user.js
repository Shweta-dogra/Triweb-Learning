"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// redirect requests to particular methods of controller
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const isAuth_1 = require("../middlewares/isAuth");
const router = express_1.default.Router();
//user should be authenticated 
//user should be authorize
//get/user/:userId
router.get('/:userId', isAuth_1.isAuthenticated, user_1.getUser);
//put
router.put('/', isAuth_1.isAuthenticated, user_1.updateUser);
exports.default = router;
