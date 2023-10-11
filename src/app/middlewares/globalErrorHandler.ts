/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */

import { ZodError } from 'zod';
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import config from '../../config';
import { IGenericErrorMessage } from '../../interfaces/error';
import handleValidationError from '../../errors/handleValidationError';
import ApiError from '../../errors/ApiError';
import handleZodError from '../../errors/handleZodError';
import handleCastError from '../../errors/handleCastError';

const globalErrorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  config.env === 'development'
    ? console.log('🚀 GlobalErrorHandler', error)
    : console.error(error);

  let statusCode = 500;
  let message = 'Something went wrong';
  let errorMessages: IGenericErrorMessage[] = [];

  if (error.name === 'ValidationError') {
    const simplifiedErrors = handleValidationError(error);
    statusCode = simplifiedErrors.statusCode;
    message = simplifiedErrors.message;
    errorMessages = simplifiedErrors.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifiedErrors = handleZodError(error);
    statusCode = simplifiedErrors.statusCode;
    message = simplifiedErrors.message;
    errorMessages = simplifiedErrors.errorMessages;
  } else if (error.name === 'CastError') {
    const simplifiedErrors = handleCastError(error);
    statusCode = simplifiedErrors.statusCode;
    message = simplifiedErrors.message;
    errorMessages = simplifiedErrors.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [{ path: '', message: error?.message }]
      : [];
  } else if (error instanceof Error) {
    message = error.message;
    errorMessages = error?.message
      ? [{ path: '', message: error?.message }]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    errorMessages: errorMessages,
    stack: config.env !== 'production' ? error.stack : undefined,
  });
  // next();
};

export default globalErrorHandler;
