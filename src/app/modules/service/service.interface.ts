/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type IService = {
  name: string;
  price: number;
  description: string;
  availability: boolean;
  image_url: string;
  rating: number;
  comments: string[];
};

export type ServiceModel = Model<IService, Record<string, unknown>>;

export type IServiceFilters = {
  searchTerm?: string;
  id?: string;
  name?: string;
  description?: string;
};
