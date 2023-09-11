"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controllers/auth");
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
//post /user
router.post('/', [
    (0, express_validator_1.body)('name')
        .trim().
        not().
        isEmpty().
        isLength({ min: 4 })
        .withMessage("Please enter a valid name, with minimum 4 character long"),
    (0, express_validator_1.body)('email').trim().isEmail()
        .custom((emailId) => {
        return (0, auth_1.isUserExist)(emailId)
            .then((status) => {
            if (status) {
                // const err = new ProjectError("User already exist");
                // err.statusCode = 422;
                // throw err;
                return Promise.reject("User already exist");
            }
        })
            .catch((err) => {
            return Promise.reject(err);
        });
    })
        .normalizeEmail(),
    (0, express_validator_1.body)('password').trim().isLength({ min: 8 })
        .withMessage("Enter atleast 8 character long password"),
    (0, express_validator_1.body)('confirm_password').trim()
        .custom((value, { req }) => {
        if (value != req.body.password) {
            return Promise.reject("password mismatch");
        }
        return true;
    })
], auth_1.registerUser);
//login
router.post('/login', auth_1.loginUser);
exports.default = router;
