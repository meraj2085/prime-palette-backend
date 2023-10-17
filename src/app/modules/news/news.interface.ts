import { Model } from 'mongoose';

export type INews = {
  image_url: string;
  title: string;
  description: string;
  views: string;
};

export type NewsModel = Model<INews, Record<string, unknown>>;

export type INewsFilters = {
  searchTerm?: string;
  id?: string;
  title?: string;
};
