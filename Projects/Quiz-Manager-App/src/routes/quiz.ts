import express from 'express';
import { body } from 'express-validator';
import {createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz} from '../controllers/quiz';
import { isAuthenticated } from '../middlewares/isAuth';

const router = express.Router();

router.post('/', isAuthenticated, [
    body('name').trim().not().isEmpty()
                .isLength({ min: 10 }).withMessage("please Enter a Valid Name Minimum 10 char long"),
    body('questions_list').custom(questions_list => {
        if (questions_list.length == 0) {
            return Promise.reject("Enter atleast one Qestion");
        }
        return true;
    }),
    body('answers').custom(answers => {
        if (Object.keys(answers).length == 0) {
            return Promise.reject("Enter atleast one answer..");
        }
        return true;
    })
], createQuiz);

router.get('/quizId', isAuthenticated, getQuiz);

router.put('/', isAuthenticated, [
    body('name').trim().not().isEmpty()
        .isLength({ min: 10 }).withMessage("please Enter a Valid Name Minimum 10 char long"),
    body('questions_list').custom(questions_list => {
        if (questions_list.length == 0) {
            return Promise.reject("Enter atleast one Qestion");
        }
        return true;
    }),
    body('answers').custom(answers => {
        if (Object.keys(answers).length == 0) {
            return Promise.reject("Enter atleast one answer..");
        }
        return true;
    })
], updateQuiz);

router.delete('/:quizId', isAuthenticated, deleteQuiz);

//publish
router.patch('/:quizId', isAuthenticated, publishQuiz)

export default router;