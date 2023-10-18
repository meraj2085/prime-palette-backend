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

const getServicesByCategory = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, serviceFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);
    const id = req.params.id;

    const result = await ServiceService.getServicesByCategory(
      filters,
      paginationOptions,
      id
    );

    sendResponse<IService[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Services by category fetched successfully !',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getAllUpcomingServices = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, serviceFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await ServiceService.getAllUpcomingServices(
      filters,
      paginationOptions
    );

    sendResponse<IService[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Upcoming Services fetched successfully !',
      meta: result.meta,
      data: result.data,
    });
  }
);

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

const updateService: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const serviceData = req.body;
    const result = await ServiceService.updateService(id, serviceData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service updated successfully',
      data: result,
    });
  }
);

const deleteService: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ServiceService.deleteService(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service deleted successfully',
      data: result,
    });
  }
);

export const ServiceController = {
  getAllServices,
  getServicesByCategory,
  getAllUpcomingServices,
  getSingleService,
  createService,
  deleteService,
  updateService,
};
