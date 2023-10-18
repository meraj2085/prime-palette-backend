import { Model } from 'mongoose';

export type ICategory = {
  name: string;
  key: string;
};

export type CategoryModel = Model<ICategory, Record<string, unknown>>;
