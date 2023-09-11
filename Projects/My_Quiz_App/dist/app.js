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
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const auth_1 = __importDefault(require("./routes/auth"));
const quiz_1 = __importDefault(require("./routes/quiz"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
mongoose_1.default.set("strictQuery", false);
const connectionString = process.env.CONNECTION_STRING || "";
const port = process.env.PORT;
app.use(express_1.default.json());
//redirect /user to user routes
app.use('/user', user_1.default);
//redirect /auth to auth routes
app.use('/auth', auth_1.default);
app.use('/quiz', quiz_1.default);
app.use((err, req, res, next) => {
    let message;
    let statusCode;
    if (!!err.statusCode && err.statusCode < 500) {
        message = err.message;
        statusCode = err.statusCode;
    }
    else {
        message = "Something went wrong . Please try again after some time";
        statusCode = 500;
    }
    let resp = { status: "error", message, data: {} };
    if (!!err.data) {
        resp.data = err.data;
    }
    //logger for error
    console.log(err.statusCode, err.message);
    res.status(statusCode).send(resp);
});
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // console.log("Connecting...", connectionString);
            yield mongoose_1.default.connect(connectionString);
            app.listen(port, () => {
                console.log("Server Connected");
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
startServer();
