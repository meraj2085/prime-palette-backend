import httpStatus from "http-status";
import { Request, RequestHandler, Response } from "express";
import { UserService } from "./user.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";

const getUsers: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.getUsers();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Users fetched successfully",
      data: result,
    });
  }
);

const getSingleUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await UserService.getSingleUser(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User fetched successfully",
      data: result,
    });
  }
);

const updateUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const userData = req.body;
    const result = await UserService.updateUser(id, userData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User updated successfully",
      data: result,
    });
  }
);

const deleteUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await UserService.deleteUser(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User deleted successfully",
      data: result,
    });
  }
);

const getMyProfile: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const user = req.user;
    const result = await UserService.getMyProfile(user?.userId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User's information retrieved successfully",
      data: result,
    });
  }
);

const updateMyProfile: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const user = req.user;
    const data = req.body;
    const result = await UserService.updateMyProfile(user?.userId, data);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User's information updated successfully",
      data: result,
    });
  }
);

export const UserController = {
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  getMyProfile,
  updateMyProfile
};
