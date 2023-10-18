import { ICategory } from './category.interface';
import { Category } from './category.model';

const addCategory = async (data: ICategory): Promise<ICategory | null> => {
  const category = await Category.create(data);
  return category;
};

const getAllCategory = async (): Promise<ICategory[] | null> => {
  const category = await Category.find();
  return category;
};

const updateCategory = async (
  id: string,
  payload: Partial<ICategory>
): Promise<ICategory | null> => {
  const updatedCategory = await Category.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  );
  return updatedCategory;
};

export const CategoryService = {
  addCategory,
  getAllCategory,
  updateCategory,
};
