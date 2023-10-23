
import { Schema } from "express-validator";
import mongoose from "mongoose";

const schema = mongoose.Schema;

// Schema
const quizSchema = new schema(
    {
        name: {
            type: String,
            required: true,
            unique:true
        },
        questions_list: [
            {
                question_number: {
                    type: Number,
                    required:true
                },
                question: String,
                options: {
                    
                }
            }
        ],
        answers: {},
        created_by: {
            type: mongoose.Types.ObjectId,
            required:true
        },
        is_published: {
            type: Boolean,
            default:false
        },
        passing_percentage:{
            type: Number,
            required: true
        },
        is_publicQuiz: {
            type: Boolean,
            required: true
        },
        allowed_user:{
            type: [],
            default: []
        }
    },
    {
        timestamps: true
    }

);



const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;