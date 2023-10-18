"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const config_1 = __importDefault(require("../../config"));
const handleValidationError_1 = __importDefault(require("../../errors/handleValidationError"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const handleZodError_1 = __importDefault(require("../../errors/handleZodError"));
const handleCastError_1 = __importDefault(require("../../errors/handleCastError"));
const globalErrorHandler = (error, req, res, next) => {
    config_1.default.env === 'development'
        ? console.log('🚀 GlobalErrorHandler', error)
        : console.error(error);
    let statusCode = 500;
    let message = 'Something went wrong';
    let errorMessages = [];
    if (error.name === 'ValidationError') {
        const simplifiedErrors = (0, handleValidationError_1.default)(error);
        statusCode = simplifiedErrors.statusCode;
        message = simplifiedErrors.message;
        errorMessages = simplifiedErrors.errorMessages;
    }
    else if (error instanceof zod_1.ZodError) {
        const simplifiedErrors = (0, handleZodError_1.default)(error);
        statusCode = simplifiedErrors.statusCode;
        message = simplifiedErrors.message;
        errorMessages = simplifiedErrors.errorMessages;
    }
    else if (error.name === 'CastError') {
        const simplifiedErrors = (0, handleCastError_1.default)(error);
        statusCode = simplifiedErrors.statusCode;
        message = simplifiedErrors.message;
        errorMessages = simplifiedErrors.errorMessages;
    }
    else if (error instanceof ApiError_1.default) {
        statusCode = error.statusCode;
        message = error.message;
        errorMessages = (error === null || error === void 0 ? void 0 : error.message)
            ? [{ path: '', message: error === null || error === void 0 ? void 0 : error.message }]
            : [];
    }
    else if (error instanceof Error) {
        message = error.message;
        errorMessages = (error === null || error === void 0 ? void 0 : error.message)
            ? [{ path: '', message: error === null || error === void 0 ? void 0 : error.message }]
            : [];
    }
    res.status(statusCode).json({
        success: false,
        message: message,
        errorMessages: errorMessages,
        stack: config_1.default.env !== 'production' ? error.stack : undefined,
    });
    // next();
};
exports.default = globalErrorHandler;
