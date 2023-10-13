import httpStatus from 'http-status';
import { Request, RequestHandler, Response } from 'express';
import { ServiceService } from './service.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { IService } from './service.interface';
import { serviceFilterableFields } from './service.constant';
import { paginationFields } from '../../../constants/pagination';

const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, serviceFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await ServiceService.getAllServices(
    filters,
    paginationOptions
  );

  sendResponse<IService[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Services fetched successfully !',
    meta: result.meta,
    data: result.data,
  });
});

const createService: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await ServiceService.createService(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service created successfully',
      data: result,
    });
  }
);

const getSingleService: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ServiceService.getSingleService(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service fetched successfully',
      data: result,
    });
  }
);

const addComment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await ServiceService.addComment(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Comment added successfully',
      data: result,
    });
  }
);

// const updateUser: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const userData = req.body;
//     const result = await UserService.updateUser(id, userData);
//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'User updated successfully',
//       data: result,
//     });
//   }
// );

// const deleteUser: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const result = await UserService.deleteUser(id);
//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'User deleted successfully',
//       data: result,
//     });
//   }
// );

export const ServiceController = {
  getAllServices,
  getSingleService,
  createService,
  addComment,
};
