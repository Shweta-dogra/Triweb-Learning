"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const quiz_1 = require("../controllers/quiz");
const isAuth_1 = require("../middlewares/isAuth");
const router = express_1.default.Router();
router.post('/', isAuth_1.isAuthenticated, [
    (0, express_validator_1.body)('name').trim().not().isEmpty()
        .isLength({ min: 10 }).withMessage("please Enter a Valid Name Minimum 10 char long"),
    (0, express_validator_1.body)('questions_list').custom((questions_list) => {
        if (questions_list.length == 0) {
            return Promise.reject("Enter atleast one Qestion");
        }
        return true;
    }),
    (0, express_validator_1.body)('answers').custom((answers) => {
        if (Object.keys(answers).length == 0) {
            return Promise.reject("Enter atleast one answer..");
        }
        return true;
    })
], quiz_1.createQuiz);
router.get('/quizId', isAuth_1.isAuthenticated, quiz_1.getQuiz);
router.put('/', isAuth_1.isAuthenticated, [
    (0, express_validator_1.body)('name').trim().not().isEmpty()
        .isLength({ min: 10 }).withMessage("please Enter a Valid Name Minimum 10 char long"),
    (0, express_validator_1.body)('questions_list').custom((questions_list) => {
        if (questions_list.length == 0) {
            return Promise.reject("Enter atleast one Qestion");
        }
        return true;
    }),
    (0, express_validator_1.body)('answers').custom((answers) => {
        if (Object.keys(answers).length == 0) {
            return Promise.reject("Enter atleast one answer..");
        }
        return true;
    })
], quiz_1.updateQuiz);
router.delete('/:quizId', isAuth_1.isAuthenticated, quiz_1.deleteQuiz);
//publish
router.patch('/:quizId', isAuth_1.isAuthenticated, quiz_1.publishQuiz);
exports.default = router;
