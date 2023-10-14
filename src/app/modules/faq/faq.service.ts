import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IFaq, IFaqFilters } from './faq.interface';
import { faqFilterableFields } from './faq.constant';
import { Faq } from './faq.model';

const addFaq = async (data: IFaq): Promise<IFaq | null> => {
  const faq = await Faq.create(data);
  return faq;
};

const getAllFaq = async (
  filters: IFaqFilters,
  paginationOptions: IPaginationOptions
) => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: faqFilterableFields.map(field => ({
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

  const result = await Faq.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Faq.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleFaq = async (id: string): Promise<IFaq | null> => {
  const faq = await Faq.findById(id);
  return faq;
};

const updateFaq = async (
  id: string,
  payload: Partial<IFaq>
): Promise<IFaq | null> => {
  const updatedFaq = await Faq.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return updatedFaq;
};

const deleteFaq = async (id: string): Promise<IFaq | null> => {
  const faq = await Faq.findByIdAndDelete(id);
  return faq;
};

export const FaqService = {
  addFaq,
  getAllFaq,
  getSingleFaq,
  updateFaq,
  deleteFaq,
};
