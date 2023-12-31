import {Request, Response, NextFunction} from 'express';
import { validationResult } from "express-validator";

import Quiz from "../models/quiz";
import ProjectError from "../helper/projectError";

interface ReturnResponse{
    status: "success" | "error",
    message: String,
    data:{}|[]
}

const createQuiz= async (req:Request, res:Response, next:NextFunction)=>{
    try {
        const validationError = validationResult(req);
        if (!validationError.isEmpty()) {
            const err = new ProjectError("Validation Failed!!");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }


        const created_by = req.userId;

        const name = req.body.name;
        const questions_list = req.body.questions_list;
        const answers = req.body.answers;
        const is_publicQuiz = req.body.is_publicQuiz;
        const allowed_user = req.body.allowed_user;
        const passing_percentage = req.body.passing_percentage;

        if(is_publicQuiz === false && allowed_user.length === 0){
            const err = new ProjectError("Users not specified for private quiz!");
                err.statusCode = 404;
                throw err;
        }
        const quiz = new Quiz({ name, questions_list, answers, created_by, is_publicQuiz, allowed_user, passing_percentage });
        const result = await quiz.save();

        const resp: ReturnResponse = { status: "success", message: "Quiz created successfully", data: { quizId: result._id } };

        res.status(201).send(resp);
    }
    catch (error) {
        next(error);
    }
}

const getQuiz= async(req:Request, res:Response, next:NextFunction)=>{
    try {
        let quiz;
        const quizId = req.params.quizId;

        if (quizId) {
            quiz = await Quiz.findById(quizId);
            if (!quiz) {
                const err = new ProjectError("Quiz not found");
                err.statusCode = 404;
                throw err;
            } else if (req.userId !== quiz?.created_by.toString()) {
                const err = new ProjectError("You are not authorized");
                err.statusCode = 403;
                throw err;
            }
        }
        else{
            quiz = await Quiz.find({ created_by: req.userId });
        }
        // if (!quiz) {
        //     const err = new ProjectError("Quiz not found");
        //     err.statusCode = 404;
        //     throw err;
        // }

        const resp: ReturnResponse = { status: "success", message: "Quiz Get successfully", data: {quiz}  };

        res.status(200).send(resp);
    }

    catch (error) {
        next(error);
    }
}

const updateQuiz= async(req:Request, res:Response, next:NextFunction)=>{
     try
    {
        const validationError = validationResult(req);
        if (!validationError.isEmpty()) {
            const err = new ProjectError("Validation Failed!!");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }
        
        const quizId = req.body._id;
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            const err = new ProjectError("Quiz not found");
            err.statusCode = 404;
            throw err;
        }
        if (req.userId !== quiz.created_by.toString()) {
            const err = new ProjectError("You are not authorized to get Quiz");
            err.statusCode = 403;
            throw err;
        }

        if (quiz.is_published) {
            const err = new ProjectError("You Can not update pblished Quiz");
            err.statusCode = 405;
            throw err;
        }

        quiz.name = req.body.name;
        quiz.questions_list = req.body.questions_list;
        quiz.answers = req.body.answers;
        quiz.is_publicQuiz = req.body.is_publicQuiz;
        quiz.allowed_user = req.body.allowed_user;
        quiz.passing_percentage = req.body.passing_percentage;

        if(quiz.is_publicQuiz === false && quiz.allowed_user.length === 0){
            const err = new ProjectError("Users not specified for private quiz!");
                err.statusCode = 404;
                throw err;
        }

        const result = await quiz.save();
        const resp: ReturnResponse = { status: "success", message: "Quiz updated successfully", data: {   } };
        res.status(200).send(resp);

    }
    catch (error) {
        next(error);
    }
}

const deleteQuiz= async(req:Request, res:Response, next:NextFunction)=>{
    try {
        
        const quizId = req.params.quizId;

        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            const err = new ProjectError("Quiz not found");
            err.statusCode = 404;
            throw err;
        }
        if (req.userId !== quiz.created_by.toString()) {
            const err = new ProjectError("You are not authorized to get Quiz");
            err.statusCode = 403;
            throw err;
        }

        if (quiz.is_published) {
            const err = new ProjectError("You Can not Delete pblished Quiz");
            err.statusCode = 405;
            throw err;
        }

        await Quiz.deleteOne({_id:quizId});

        const resp: ReturnResponse = { status: "success", message: "Quiz Deleted successfully", data: {} };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
}

const publishQuiz= async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const quizId = req.body.quizId;
        const quiz = await Quiz.findById({ _id: quizId });
        if (!quiz) {
            const err = new ProjectError("Quiz not found");
            err.statusCode = 404;
            throw err;
        }
        if (quiz.is_published) {
            const err = new ProjectError("Quiz Already Published");
            err.statusCode = 405;
            throw err;
        }
        quiz.is_published = true;
        await quiz.save();
        const resp: ReturnResponse = { status: "success", message: "Quiz Published successfully", data: {} };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
}

export {createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz}