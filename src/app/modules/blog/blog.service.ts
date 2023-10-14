import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { blogFilterableFields } from './blog.constant';
import { IBlog, IBlogFilters } from './blog.interface';
import { Blog } from './blog.model';

const addBlog = async (data: IBlog): Promise<IBlog | null> => {
  const blog = await Blog.create(data);
  return blog;
};

const getAllBlogs = async (
  filters: IBlogFilters,
  paginationOptions: IPaginationOptions
) => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: blogFilterableFields.map(field => ({
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

  const result = await Blog.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Blog.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleBlog = async (id: string): Promise<IBlog | null> => {
  const blog = await Blog.findById(id);
  return blog;
};

const updateBlog = async (
  id: string,
  payload: Partial<IBlog>
): Promise<IBlog | null> => {
  const updatedBlog = await Blog.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return updatedBlog;
};

const deleteBlog = async (id: string): Promise<IBlog | null> => {
  const blog = await Blog.findByIdAndDelete(id);
  return blog;
};

export const BlogService = {
  addBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
