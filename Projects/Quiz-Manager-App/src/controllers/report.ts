import Report from "../models/report";
// import { Request, Response, NextFunction } from "express";
import { RequestHandler } from "express";
import ProjectError from "../helper/projectError";

interface ReturnResponse {
    status: "success" | "error",
    message: String,
    data: {} | []
}

const getReport:RequestHandler = async (req, res, next) => {
    
    try {
        let report;
        if (!!req.params.reportId) {
            const reportId = (req.params.reportId);
            report = await Report.findById( reportId );

            if (!report) {
                const err = new ProjectError("Report Not Found  Given reortId");
                err.statusCode = 404;
                throw err;
            }

            if (report.userId.toString() !== req.userId) {
                const err = new ProjectError("You are Not Allowed to see Report");
                err.statusCode = 405;
                throw err;
            }
        }
        else {
            report = await Report.find({ userId: req.userId });
        }        

        if (!report) {
            const err = new ProjectError("Report Not Found");
            err.statusCode = 404;
            throw err;
        }
        let resp: ReturnResponse = { status: "success", message: "Result Get Successsfully", data: report };

        res.status(200).send(resp);

    }
    catch (error) {
        next(error);
    }
}  

export { getReport };