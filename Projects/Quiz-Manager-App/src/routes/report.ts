import express from "express";

const router = express.Router();
import { getReport } from "../controllers/report";
import { isAuthenticated } from "../middlewares/isAuth";

// GET -> /report/:reportId
router.get('/:reportId?', isAuthenticated, getReport);  // optional reportId

// if not get reportId theshow all report of given user

export default router;