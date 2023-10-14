import { Model } from 'mongoose';

export type IBlog = {
  image_url: string;
  title: string;
  description: string;
  views: string;
};

export type BlogModel = Model<IBlog, Record<string, unknown>>;

export type IBlogFilters = {
  searchTerm?: string;
  id?: string;
  title?: string;
};
