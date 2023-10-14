import httpStatus from 'http-status';
import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BlogService } from './blog.service';
import pick from '../../../shared/pick';
import { blogFilterableFields } from './blog.constant';
import { paginationFields } from '../../../constants/pagination';

const addBlog: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await BlogService.addBlog(data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog created successfully',
      data: result,
    });
  }
);

const getAllBlogs: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, blogFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await BlogService.getAllBlogs(filters, paginationOptions);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blogs fetched successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getSingleBlog: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await BlogService.getSingleBlog(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog fetched successfully',
      data: result,
    });
  }
);

const updateBlog: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const result = await BlogService.updateBlog(id, data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog updated successfully',
      data: result,
    });
  }
);

const deleteBlog: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await BlogService.deleteBlog(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog deleted successfully',
      data: result,
    });
  }
);

export const BlogController = {
  addBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
