import { Schema, model } from 'mongoose';
import { NewsModel, INews } from './news.interface';

const newsSchema = new Schema<INews>(
  {
    image_url: { type: String, default: '' },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    views: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const News = model<INews, NewsModel>('News', newsSchema);
