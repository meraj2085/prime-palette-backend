import { IService, IServiceFilters } from './service.interface';
// import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { serviceFilterableFields } from './service.constant';
import { SortOrder } from 'mongoose';
import { Service } from './service.model';

const getAllServices = async (
  filters: IServiceFilters,
  paginationOptions: IPaginationOptions
) => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: serviceFilterableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Service.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Service.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const createService = async (data: IService): Promise<IService | null> => {
  const service = await Service.create(data);
  return service;
};

// const getSingleUser = async (id: string): Promise<IUser | null> => {
//   const users = await User.findById(id);
//   return users;
// };

// const updateUser = async (
//   id: string,
//   payload: Partial<IUser>
// ): Promise<IUser | null> => {
//   const newUSer = await User.findOneAndUpdate({ _id: id }, payload, {
//     new: true,
//   });
//   return newUSer;
// };

// const deleteUser = async (id: string): Promise<IUser | null> => {
//   const result = await User.findByIdAndDelete(id);
//   return result;
// };

export const ServiceService = {
  getAllServices,
  createService,
};
