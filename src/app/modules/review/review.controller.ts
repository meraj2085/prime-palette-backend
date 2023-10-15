import httpStatus from 'http-status';
import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ReviewService } from './review.service';

const addReview: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await ReviewService.addReview(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review added successfully',
      data: result,
    });
  }
);

const getReview: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await ReviewService.getReview(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Reviews fetched successfully',
      data: result,
    });
  }
);

export const ReviewController = {
  addReview,
  getReview,
};
