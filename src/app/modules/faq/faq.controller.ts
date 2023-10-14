import httpStatus from 'http-status';
import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { FaqService } from './faq.service';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { faqFilterableFields } from './faq.constant';

const addFaq: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await FaqService.addFaq(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq created successfully',
      data: result,
    });
  }
);

const getAllFaq: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, faqFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await FaqService.getAllFaq(filters, paginationOptions);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq fetched successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getSingleFaq: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await FaqService.getSingleFaq(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single Faq fetched successfully',
      data: result,
    });
  }
);

const updateFaq: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const result = await FaqService.updateFaq(id, data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq updated successfully',
      data: result,
    });
  }
);

const deleteFaq: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await FaqService.deleteFaq(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Faq deleted successfully',
      data: result,
    });
  }
);

export const FaqController = {
  addFaq,
  getAllFaq,
  getSingleFaq,
  updateFaq,
  deleteFaq,
};
