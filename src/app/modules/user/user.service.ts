import bcrypt from 'bcrypt';
import { IUser, IUserFilters, UserRoles } from './user.interface';
import { User } from './user.model';
import config from '../../../config';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { userFilterableFields } from './user.constant';
import { SortOrder } from 'mongoose';

const getUsers = async (
  filters: IUserFilters,
  paginationOptions: IPaginationOptions
) => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: userFilterableFields.map(field => ({
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

  andConditions.push({ role: UserRoles.USER });

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await User.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await User.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const users = await User.findById(id);
  return users;
};

const updateUser = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const newUSer = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return newUSer;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

const getMyProfile = async (id: string): Promise<Partial<IUser> | null> => {
  const user = await User.findById(id).select({
    name: 1,
    email: 1,
    mobileNumber: 1,
  });

  return user;
};

const updateMyProfile = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  if (payload.password) {
    const hashedPassword = await bcrypt.hash(
      payload.password,
      Number(config.bcrypt_salt_rounds)
    );
    payload.password = hashedPassword;
  }
  const newUSer = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  }).select({
    name: 1,
    email: 1,
    mobileNumber: 1,
  });
  return newUSer;
};

export const UserService = {
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  getMyProfile,
  updateMyProfile,
};
