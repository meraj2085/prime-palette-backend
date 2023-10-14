import { IService, IServiceFilters } from './service.interface';
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

const getSingleService = async (id: string): Promise<IService | null> => {
  const service = await Service.findById(id);
  return service;
};

const addComment = async (data: any): Promise<IService | null> => {
  const { id, comment } = data;
  const service = await Service.findByIdAndUpdate(
    id,
    { $push: { comments: comment } },
    { new: true }
  );
  return service;
};

const updateService = async (
  id: string,
  payload: Partial<IService>
): Promise<IService | null> => {
  const updatedService = await Service.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return updatedService;
};

const deleteService = async (id: string): Promise<IService | null> => {
  const result = await Service.findByIdAndDelete(id);
  return result;
};

export const ServiceService = {
  getAllServices,
  getSingleService,
  createService,
  addComment,
  deleteService,
  updateService,
};
