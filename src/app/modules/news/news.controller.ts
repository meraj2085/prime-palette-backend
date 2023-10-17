import httpStatus from 'http-status';
import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { newsFilterableFields } from './news.constant';
import { paginationFields } from '../../../constants/pagination';
import { NewsService } from './news.service';

const addNews: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await NewsService.addNews(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'News created successfully',
      data: result,
    });
  }
);

const getAllNews: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, newsFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await NewsService.getAllNews(filters, paginationOptions);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'News fetched successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

export const NewsController = {
  addNews,
  getAllNews,
};
